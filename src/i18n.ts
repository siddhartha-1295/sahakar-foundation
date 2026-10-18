export type Lang = 'en' | 'te';

const en = {
  nav: { home: 'Home', about: 'About Us', work: 'Our Work', updates: 'Activities', gallery: 'Gallery', events: 'Events', contact: 'Contact' },
  volunteer: 'Volunteer', donate: 'Donate', menu: 'Menu', switchLabel: 'తెలుగు', whatsapp: 'Chat on WhatsApp',
  quickLinks: 'Quick links', contactUs: 'Contact', followUs: 'Follow us', policies: 'Policies',
  privacy: 'Privacy Policy', terms: 'Terms of Use', refund: 'Refund Policy', rights: 'All rights reserved.',
  viewAll: 'View all', back: '← Back', all: 'All', empty: 'Nothing to show yet.',
  latest: 'Latest activities', nextEvents: 'Upcoming events', impact: 'Our impact', areas: 'Our six areas of work',
  areasIntro: 'Every programme starts from a real need in the community.', ctaWork: 'Our Work',
  volBannerT: 'Give your time', volBannerP: 'Join our volunteers and serve your community.',
  donBannerT: 'Support our work', donBannerP: 'Your contribution helps families who need it most.',
  mission: 'Our Mission', vision: 'Our Vision', story: 'Our Story', team: 'Our Team', seeTransparency: 'See our transparency',
  workIntro: 'Six areas, one goal: dignity and opportunity for everyone.',
  updatesIntro: 'What we have been doing on the ground.', galleryIntro: 'Moments from our work.',
  eventsIntro: 'Join us at our next event.', contactIntro: 'We would love to hear from you.',
  place: 'Place', video: 'Video', photosT: 'Photos', albumsT: 'Albums', allPhotos: 'All photos', photoCount: 'photos',
  upcoming: 'Upcoming events', past: 'Past events', noUpcoming: 'No upcoming events right now. Please check back soon.',
  noPast: 'No past events yet.', register: 'Register', at: 'Time',
  formIntro: 'Tell us a little about yourself and we will get in touch on WhatsApp.',
  name: 'Full name', phone: 'Phone / WhatsApp', email: 'Email (optional)', area: 'Preferred area', anyArea: 'Any area',
  interests: 'Interests', availability: 'Availability', availabilityHint: 'e.g. Sundays, evenings', message: 'Message (optional)',
  consent: 'I agree that Sahakar Foundation may contact me about volunteering and store my details for this purpose.',
  privacyNote: 'We never share your details. Read our', submitVol: 'Send my details',
  donateIntro: 'Every contribution counts. Pay by UPI, bank transfer or card.', suggested: 'Suggested amounts',
  scan: 'Scan to pay with any UPI app', sample: 'Sample QR – not payable', payUpi: 'Pay with a UPI app', payWith: 'Open in',
  razorpay: 'Pay by card / net banking', bank: 'Bank transfer', accName: 'Account name', accNo: 'Account number', ifsc: 'IFSC', bankName: 'Bank', branch: 'Branch',
  receiptT: 'Need a receipt?', receiptP: 'After paying, fill this form and we will email your receipt.', amount: 'Amount paid (₹)', utr: 'UPI / transaction reference',
  paidOn: 'Date of payment', pan: 'PAN (for 80G receipt)', panHint: 'Used only to prepare your 80G receipt. We never send PAN by email.', submitRec: 'Request receipt',
  regDetails: 'Registration details', fundUse: 'How funds are used', commitments: 'Our commitments', certs: 'Certificates',
  soon: 'Certificates will be uploaded soon.', download: 'View PDF',
  address: 'Address', openWa: 'Message us on WhatsApp', openMap: 'Open in Google Maps',
  thanksVolT: 'Welcome to the family!', thanksVolP: 'Thank you for offering your time. Our team will contact you soon.',
  next: 'What happens next', step1: 'We review your details.', step2: 'A coordinator calls or messages you on WhatsApp.', step3: 'You join your first activity.',
  joinGroup: 'Join our WhatsApp group', thanksDonT: 'Thank you for your support', thanksDonP: 'Your generosity makes our work possible.',
  receiptSoon: 'You will receive your receipt within 7 days.', seeActivities: 'See our activities',
  updated: 'Last updated', draft: 'Draft – pending lawyer review', notFound: 'Page not found', home: 'Back to Home',
};

const te: typeof en = {
  nav: { home: 'హోమ్', about: 'మా గురించి', work: 'మా కార్యక్రమాలు', updates: 'కార్యకలాపాలు', gallery: 'గ్యాలరీ', events: 'ఈవెంట్లు', contact: 'సంప్రదించండి' },
  volunteer: 'స్వచ్ఛంద సేవ', donate: 'విరాళం', menu: 'మెనూ', switchLabel: 'English', whatsapp: 'వాట్సాప్‌లో చాట్ చేయండి',
  quickLinks: 'త్వరిత లింకులు', contactUs: 'సంప్రదింపు', followUs: 'మమ్మల్ని అనుసరించండి', policies: 'విధానాలు',
  privacy: 'గోప్యతా విధానం', terms: 'ఉపయోగ నిబంధనలు', refund: 'రీఫండ్ విధానం', rights: 'అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.',
  viewAll: 'అన్నీ చూడండి', back: '← వెనుకకు', all: 'అన్నీ', empty: 'ప్రస్తుతం ఏమీ లేదు.',
  latest: 'తాజా కార్యకలాపాలు', nextEvents: 'రాబోయే ఈవెంట్లు', impact: 'మా ప్రభావం', areas: 'మా ఆరు సేవా రంగాలు',
  areasIntro: 'ప్రతి కార్యక్రమం సమాజంలోని నిజమైన అవసరం నుంచే మొదలవుతుంది.', ctaWork: 'మా కార్యక్రమాలు',
  volBannerT: 'మీ సమయాన్ని ఇవ్వండి', volBannerP: 'మా స్వచ్ఛంద సేవకులతో చేరి సమాజానికి సేవ చేయండి.',
  donBannerT: 'మా సేవకు తోడ్పడండి', donBannerP: 'మీ సహాయం అవసరంలో ఉన్న కుటుంబాలకు ఉపయోగపడుతుంది.',
  mission: 'మా లక్ష్యం', vision: 'మా దృష్టి', story: 'మా కథ', team: 'మా బృందం', seeTransparency: 'మా పారదర్శకతను చూడండి',
  workIntro: 'ఆరు రంగాలు, ఒకే లక్ష్యం: అందరికీ గౌరవం, అవకాశం.',
  updatesIntro: 'క్షేత్రస్థాయిలో మేము చేస్తున్న పనులు.', galleryIntro: 'మా సేవలోని క్షణాలు.',
  eventsIntro: 'మా తదుపరి ఈవెంట్‌లో మాతో చేరండి.', contactIntro: 'మీ నుంచి వినడానికి మేము ఎదురుచూస్తున్నాం.',
  place: 'ప్రదేశం', video: 'వీడియో', photosT: 'ఫోటోలు', albumsT: 'ఆల్బమ్‌లు', allPhotos: 'అన్ని ఫోటోలు', photoCount: 'ఫోటోలు',
  upcoming: 'రాబోయే ఈవెంట్లు', past: 'గత ఈవెంట్లు', noUpcoming: 'ప్రస్తుతం రాబోయే ఈవెంట్లు లేవు. త్వరలో మళ్లీ చూడండి.',
  noPast: 'గత ఈవెంట్లు ఇంకా లేవు.', register: 'నమోదు చేసుకోండి', at: 'సమయం',
  formIntro: 'మీ గురించి కొంచెం చెప్పండి, వాట్సాప్‌లో మిమ్మల్ని సంప్రదిస్తాం.',
  name: 'పూర్తి పేరు', phone: 'ఫోన్ / వాట్సాప్', email: 'ఇమెయిల్ (ఐచ్ఛికం)', area: 'ఇష్టమైన రంగం', anyArea: 'ఏ రంగమైనా',
  interests: 'ఆసక్తులు', availability: 'అందుబాటు సమయం', availabilityHint: 'ఉదా. ఆదివారాలు, సాయంత్రాలు', message: 'సందేశం (ఐచ్ఛికం)',
  consent: 'స్వచ్ఛంద సేవ గురించి సహకార్ ఫౌండేషన్ నన్ను సంప్రదించడానికి, నా వివరాలను ఈ ఉద్దేశ్యంతో నిల్వ చేయడానికి నేను అంగీకరిస్తున్నాను.',
  privacyNote: 'మీ వివరాలను మేము ఎవరితోనూ పంచుకోము. చదవండి:', submitVol: 'నా వివరాలు పంపండి',
  donateIntro: 'ప్రతి విరాళం ముఖ్యమే. UPI, బ్యాంక్ బదిలీ లేదా కార్డ్ ద్వారా చెల్లించండి.', suggested: 'సూచించిన మొత్తాలు',
  scan: 'ఏదైనా UPI యాప్‌తో స్కాన్ చేసి చెల్లించండి', sample: 'నమూనా QR – చెల్లింపునకు కాదు', payUpi: 'UPI యాప్‌తో చెల్లించండి', payWith: 'తెరవండి:',
  razorpay: 'కార్డ్ / నెట్ బ్యాంకింగ్‌తో చెల్లించండి', bank: 'బ్యాంక్ బదిలీ', accName: 'ఖాతా పేరు', accNo: 'ఖాతా సంఖ్య', ifsc: 'IFSC', bankName: 'బ్యాంక్', branch: 'శాఖ',
  receiptT: 'రసీదు కావాలా?', receiptP: 'చెల్లించిన తర్వాత ఈ ఫారం నింపండి, మీ రసీదును ఇమెయిల్ చేస్తాం.', amount: 'చెల్లించిన మొత్తం (₹)', utr: 'UPI / లావాదేవీ రిఫరెన్స్',
  paidOn: 'చెల్లించిన తేదీ', pan: 'PAN (80G రసీదు కోసం)', panHint: '80G రసీదు తయారీకి మాత్రమే ఉపయోగిస్తాం. PANను ఇమెయిల్ ద్వారా ఎప్పుడూ పంపము.', submitRec: 'రసీదు కోరండి',
  regDetails: 'నమోదు వివరాలు', fundUse: 'నిధుల వినియోగం', commitments: 'మా హామీలు', certs: 'సర్టిఫికెట్లు',
  soon: 'సర్టిఫికెట్లు త్వరలో అప్‌లోడ్ చేస్తాం.', download: 'PDF చూడండి',
  address: 'చిరునామా', openWa: 'వాట్సాప్‌లో సందేశం పంపండి', openMap: 'గూగుల్ మ్యాప్స్‌లో తెరవండి',
  thanksVolT: 'కుటుంబంలోకి స్వాగతం!', thanksVolP: 'మీ సమయాన్ని ఇచ్చినందుకు ధన్యవాదాలు. మా బృందం త్వరలో మిమ్మల్ని సంప్రదిస్తుంది.',
  next: 'తదుపరి ఏమి జరుగుతుంది', step1: 'మేము మీ వివరాలను పరిశీలిస్తాం.', step2: 'ఒక సమన్వయకర్త మీకు ఫోన్ చేస్తారు లేదా వాట్సాప్‌లో సందేశం పంపుతారు.', step3: 'మీరు మీ మొదటి కార్యక్రమంలో పాల్గొంటారు.',
  joinGroup: 'మా వాట్సాప్ గ్రూప్‌లో చేరండి', thanksDonT: 'మీ సహాయానికి ధన్యవాదాలు', thanksDonP: 'మీ ఉదారత వల్లే మా సేవ సాధ్యమవుతోంది.',
  receiptSoon: 'మీ రసీదు 7 రోజుల్లో అందుతుంది.', seeActivities: 'మా కార్యకలాపాలను చూడండి',
  updated: 'చివరి నవీకరణ', draft: 'ముసాయిదా – న్యాయవాది సమీక్ష పెండింగ్', notFound: 'పేజీ కనబడలేదు', home: 'హోమ్‌కు వెళ్లండి',
};

export const ui = { en, te };

export const pillars = [
  { key: 'education', icon: '📚', en: 'Education', te: 'విద్య', desc_en: 'Books, tuition support and scholarships for children who need a chance.', desc_te: 'అవకాశం కోసం ఎదురుచూసే పిల్లలకు పుస్తకాలు, ట్యూషన్ సహాయం, స్కాలర్‌షిప్‌లు.' },
  { key: 'necessities', icon: '🍚', en: 'Basic Necessities', te: 'నిత్యావసరాలు', desc_en: 'Food, clothing and essentials for families in need.', desc_te: 'అవసరంలో ఉన్న కుటుంబాలకు ఆహారం, దుస్తులు, ఇతర అవసరాలు.' },
  { key: 'cleanliness', icon: '🧹', en: 'Cleanliness', te: 'పరిశుభ్రత', desc_en: 'Clean-up drives and hygiene awareness in our neighbourhoods.', desc_te: 'మన ప్రాంతాల్లో శుభ్రత కార్యక్రమాలు, పరిశుభ్రతపై అవగాహన.' },
  { key: 'medicine', icon: '🩺', en: 'Health & Medicine', te: 'ఆరోగ్యం & వైద్యం', desc_en: 'Health camps, check-ups and medicines for those who cannot afford them.', desc_te: 'ఖర్చు భరించలేని వారికి ఆరోగ్య శిబిరాలు, పరీక్షలు, మందులు.' },
  { key: 'awareness', icon: '📢', en: 'Social Awareness', te: 'సామాజిక అవగాహన', desc_en: 'Workshops and campaigns on rights, schemes and social issues.', desc_te: 'హక్కులు, పథకాలు, సామాజిక అంశాలపై వర్క్‌షాపులు, ప్రచారాలు.' },
  { key: 'dharma', icon: '🪔', en: 'Dharma', te: 'ధర్మం', desc_en: 'Preserving values, culture and service as a way of life.', desc_te: 'విలువలు, సంస్కృతి, సేవను జీవన విధానంగా కాపాడడం.' },
] as const;

/** '/about' -> '/te/about' for Telugu. '/' -> '/te/'. */
export const href = (lang: Lang, path: string = '/'): string =>
  lang === 'te' ? '/te' + (path === '/' ? '/' : path) : path;

/** Takes the CURRENT lang and returns the same page in the OTHER language. */
export function switchLangPath(pathname: string, lang: Lang): string {
  if (lang === 'te') return pathname.replace(/^\/te(?=\/|$)/, '') || '/';
  return '/te' + (pathname === '/' ? '/' : pathname);
}

export const pick = (lang: Lang, en: string, te?: string | null): string =>
  lang === 'te' && te ? te : en;

export const pillarName = (lang: Lang, key: string): string => {
  const p = pillars.find((x) => x.key === key);
  return p ? p[lang] : key;
};

export const formatDate = (lang: Lang, date: Date): string =>
  new Intl.DateTimeFormat(lang === 'te' ? 'te-IN' : 'en-IN', {
    day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Kolkata',
  }).format(date);

/** 'YYYY-MM-DD' in India time. Used to decide upcoming vs past. */
export const istDay = (date: Date): string =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(date);

export function youtubeId(url?: string | null): string | null {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}
