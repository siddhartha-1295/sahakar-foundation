import { getCollection } from 'astro:content';
import { istDay } from '../i18n';

export const getUpdates = async () =>
  (await getCollection('updates')).sort((a, b) => +b.data.date - +a.data.date);

export const getAlbums = async () =>
  (await getCollection('albums')).sort((a, b) => +b.data.date - +a.data.date);

export async function splitEvents() {
  const all = await getCollection('events');
  const today = istDay(new Date());
  const upcoming = all.filter((e) => istDay(e.data.date) >= today).sort((a, b) => +a.data.date - +b.data.date);
  const past = all.filter((e) => istDay(e.data.date) < today).sort((a, b) => +b.data.date - +a.data.date);
  return { upcoming, past };
}

/** Album + activity photos, newest first, no duplicates. */
export async function getAllPhotos() {
  const items: { src: string; date: Date; caption: string }[] = [];
  for (const a of await getAlbums()) for (const p of a.data.photos) items.push({ src: p, date: a.data.date, caption: a.data.title });
  for (const u of await getUpdates()) for (const p of u.data.photos) items.push({ src: p, date: u.data.date, caption: u.data.title });
  items.sort((a, b) => +b.date - +a.date);
  const seen = new Set<string>();
  return items.filter((i) => (seen.has(i.src) ? false : (seen.add(i.src), true)));
}
