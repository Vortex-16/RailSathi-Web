import { LanguageCode } from '../types';

export interface AppTranslation {
  // Brand & Header
  appName: string;
  appNativeName: string;
  appTagline: string;
  navDifference: string;
  navCommuters: string;
  navVendors: string;
  navFeatures: string;
  navInstall: string;
  tunnelMode: string;
  online: string;
  dataSaver: string;
  dataSaverOn: string;
  seniorMode: string;
  getApk: string;

  // Hero Section
  badgeSuburban: string;
  badgeFairRates: string;
  heroHeadline: string;
  heroSubheadline: string;
  roleSelectLabel: string;
  travelerRoleBtn: string;
  vendorRoleBtn: string;
  travelerCardTitle: string;
  travelerCardDesc: string;
  vendorCardTitle: string;
  vendorCardDesc: string;
  downloadApkBtn: string;
  howItWorksBtn: string;
  openSource: string;
  verifySha: string;
  mockupGps: string;
  mockupTravelerMode: string;
  mockupVendorMode: string;
  mockupOfflineReady: string;
  mockupActiveSignal: string;
  mockupHungerActive: string;
  mockupVendorIncoming: string;
  mockupReachingDoor: string;
  mockupRadarActive: string;
  mockupAcceptOrder: string;
  mockupSkip: string;
  mockupFormationTitle: string;
  mockupExploreCommuter: string;
  mockupExploreVendor: string;
  statDailyPassengers: string;
  statDailyLabel: string;
  statHaltWindow: string;
  statHaltLabel: string;
  statZeroCut: string;
  statZeroCutLabel: string;
  statOffline: string;
  statOfflineLabel: string;

  // The Big Difference
  diffBadge: string;
  diffHeadlinePre: string;
  diffHeadlinePost: string;
  diffSubhead: string;
  tradTitle: string;
  tradTag: string;
  tradPoint1Title: string;
  tradPoint1Desc: string;
  tradPoint2Title: string;
  tradPoint2Desc: string;
  tradPoint3Title: string;
  tradPoint3Desc: string;
  tradPoint4Title: string;
  tradPoint4Desc: string;
  rsTitle: string;
  rsTag: string;
  rsPoint1Title: string;
  rsPoint1Desc: string;
  rsPoint2Title: string;
  rsPoint2Desc: string;
  rsPoint3Title: string;
  rsPoint3Desc: string;
  rsPoint4Title: string;
  rsPoint4Desc: string;

  // Commuter Steps
  commuterBadge: string;
  commuterTitle: string;
  commuterSubhead: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  simTitle: string;
  simSubtitle: string;
  simSelectCoach: string;
  simCraving: string;
  simSendSignal: string;
  simSignalBroadcasting: string;
  simBroadcastActive: string;
  simOrderPlaced: string;
  simReset: string;

  // Vendor Benefits
  vendorBadge: string;
  vendorTitle: string;
  vendorSubhead: string;
  vb1Title: string;
  vb1Desc: string;
  vb1Sub: string;
  vb2Title: string;
  vb2Desc: string;
  vb2Sub: string;
  vb3Title: string;
  vb3Desc: string;
  vb3Sub: string;
  vb4Title: string;
  vb4Desc: string;
  vb4Sub: string;
  vendorQuote: string;
  vendorQuoteAuthor: string;
  vendorQuoteRole: string;
  vendorVerified: string;

  // Core Features
  featBadge: string;
  featTitle: string;
  featSubhead: string;
  f1Title: string;
  f1Desc: string;
  f1Tag: string;
  f2Title: string;
  f2Desc: string;
  f2Tag: string;
  f3Title: string;
  f3Desc: string;
  f3Tag: string;
  f4Title: string;
  f4Desc: string;
  f4Tag: string;
  toggleRadar: string;
  hideRadar: string;
  toggleTimetable: string;
  hideTimetable: string;

  // Installation Guide
  instBadge: string;
  instTitle: string;
  instSubhead: string;
  instBoxTitle: string;
  instSafe: string;
  instStep1Title: string;
  instStep1Desc: string;
  instStep2Title: string;
  instStep2Desc: string;
  instStep3Title: string;
  instStep3Desc: string;
  instStep4Title: string;
  instStep4Desc: string;
  instPrivacy: string;
  instCopySha: string;
  brandGuideTitle: string;
  brandGuideSub: string;

  // Sticky Bar & Footer
  stickyTitle: string;
  stickyVerified: string;
  stickySub: string;
  downloadBtn: string;
  footerCtaTitle: string;
  footerCtaSub: string;
  footerCtaDownload: string;
  footerGitHub: string;
  footerContactTeam: string;
  footerNavTitle: string;
  footerContactTitle: string;
  footerBackToTop: string;
  footerLove: string;
}

export const TRANSLATIONS: Record<LanguageCode, AppTranslation> = {
  // 1. English
  en: {
    appName: 'RailSaathi',
    appNativeName: 'रेलसाथी',
    appTagline: 'Indian Railways Smart Commute & Vendor Companion',
    navDifference: 'The Difference',
    navCommuters: 'For Commuters',
    navVendors: 'For Vendors',
    navFeatures: 'Features',
    navInstall: 'How to Install',
    tunnelMode: 'Tunnel Mode',
    online: 'Online',
    dataSaver: 'Data Saver',
    dataSaverOn: '2G Saver ON',
    seniorMode: 'Senior Mode',
    getApk: 'Get APK (v1.0)',

    badgeSuburban: "Built for India's 24 Million Daily Suburban Train Commuters",
    badgeFairRates: '0% Commission • Fair Rail Rates',
    heroHeadline: '30-Second Local Train Stop? Chai and snacks delivered straight to your seat.',
    heroSubheadline: 'Never miss your train just to buy a bottle of water or hot chai. RailSaathi connects you directly with verified onboard vendors in your coach.',
    roleSelectLabel: 'Select Your Perspective to Explore:',
    travelerRoleBtn: 'I am a Traveler 🎒',
    vendorRoleBtn: 'I am a Vendor 🧺',
    travelerCardTitle: 'Zero Risk of Missing Your Train',
    travelerCardDesc: 'Tap what you crave (Chai, Badam, Samosa, Rail Neer). A verified hawker brings it straight to your seat or coach door before departure. Pay normal ₹10–₹15 rates.',
    vendorCardTitle: 'No More Blind Walking & 0% Commission',
    vendorCardDesc: 'See which coaches have hungry passengers waiting. Avoid clashing with other hawkers in the same compartment. Keep 100% of your cash & UPI earnings.',
    downloadApkBtn: '⬇️ Download RailSaathi Android APK (v1.0)',
    howItWorksBtn: '📖 See How It Works',
    openSource: 'Open Source Code',
    verifySha: 'SHA-256 Checksum',
    mockupGps: 'GPS SLEEPING',
    mockupTravelerMode: 'Traveler Mode',
    mockupVendorMode: 'Vendor Radar Mode',
    mockupOfflineReady: 'Offline Ready',
    mockupActiveSignal: 'TRAIN #31821',
    mockupHungerActive: 'Hunger Signal Active',
    mockupVendorIncoming: 'Vendor: Subhas (ER-4102)',
    mockupReachingDoor: 'Reaching Door in 18s',
    mockupRadarActive: 'HAWKER RADAR ACTIVE',
    mockupAcceptOrder: 'Accept Order',
    mockupSkip: 'Skip',
    mockupFormationTitle: '12-CAR COACH FORMATION',
    mockupExploreCommuter: 'Try Commuter Step Demo',
    mockupExploreVendor: 'Explore Vendor Benefits',
    statDailyPassengers: '24 Million',
    statDailyLabel: 'Daily Indian Suburban Passengers',
    statHaltWindow: '20–45s',
    statHaltLabel: 'Target Station Halt Window',
    statZeroCut: '0% Cut',
    statZeroCutLabel: 'Zero Vendor Commission',
    statOffline: '100%',
    statOfflineLabel: 'Zero-Data Offline Timetable Ready',

    diffBadge: 'The Big Difference',
    diffHeadlinePre: 'Why RailSaathi is ',
    diffHeadlinePost: 'Zepto, Blinkit, or IRCTC e-Catering',
    diffSubhead: 'Quick-commerce apps were built for motorbikes on paved city roads. Suburban local trains run on 20 to 45-second platform halts with no addresses and zero pantry cars. Here is how RailSaathi solves what others cannot:',
    tradTitle: 'Blinkit, Zepto, Swiggy & IRCTC',
    tradTag: 'Traditional Quick Commerce',
    tradPoint1Title: 'Requires 10–30 minutes:',
    tradPoint1Desc: 'Completely useless on local trains that halt for only 30 seconds.',
    tradPoint2Title: 'Needs road street addresses:',
    tradPoint2Desc: 'Delivery riders cannot locate a moving suburban train or specific EMU coach.',
    tradPoint3Title: 'Heavy delivery markups:',
    tradPoint3Desc: '₹30–₹60 extra delivery fee on top of minimum order values.',
    tradPoint4Title: 'Requires constant 4G/5G:',
    tradPoint4Desc: 'Crashes or spins endlessly when trains enter deep tunnels or dead zones.',
    rsTitle: 'RailSaathi (Suburban Companion)',
    rsTag: 'Purpose-Built for Indian Trains',
    rsPoint1Title: '20–45 Second Window:',
    rsPoint1Desc: 'Vendors board your coach or deliver right at the door before departure whistle.',
    rsPoint2Title: 'EMU Coach Position Radar:',
    rsPoint2Desc: 'Pinpoints exact coach positions (e.g. Coach 3, GS-1, Vendor compartment).',
    rsPoint3Title: 'Regulated MRP (₹5 – ₹20):',
    rsPoint3Desc: 'Strict railway tariffs with ₹0 commission, zero surge, and direct cash/UPI.',
    rsPoint4Title: '100% Offline Compatible:',
    rsPoint4Desc: 'Timetables, coach maps, and orders work without any active cellular signal.',

    commuterBadge: 'How It Works',
    commuterTitle: 'Get Tea & Snacks in 3 Easy Steps',
    commuterSubhead: 'Built specifically for 30-second suburban platform halts. No long menus, no OTP waits, no missed trains.',
    step1Title: 'Choose Your Train & Coach',
    step1Desc: 'Open the app offline or online. Pick your local train and tap your current coach (e.g., Coach 3 / GS-1).',
    step2Title: "Tap 'Hunger Signal'",
    step2Desc: 'Tap what you want (Kadak Chai, Roasted Badam, Samosa, Rail Neer). It broadcasts silently to verified hawkers.',
    step3Title: 'Delivered in 20 Seconds',
    step3Desc: 'A vendor on your train or platform meets you at the seat or coach door. Pay normal ₹10–₹15 directly.',
    simTitle: 'Interactive Commuter Simulator',
    simSubtitle: 'Try sending a Hunger Signal right now to see how quick it is:',
    simSelectCoach: 'Select Your Coach:',
    simCraving: 'What do you want?',
    simSendSignal: 'Send Hunger Signal',
    simSignalBroadcasting: 'Broadcasting Signal to Nearby Hawkers...',
    simBroadcastActive: 'Hunger Signal Active!',
    simOrderPlaced: 'Matched with vendor Subhas (ER-4102) • Reaching your coach door',
    simReset: 'Send Another Signal',

    vendorBadge: 'Hawker Benefits • वेंडर्स के लिए क्या फायदा है?',
    vendorTitle: 'For Local Hawkers & Station Vendors',
    vendorSubhead: 'Local train hawkers walk 12 to 18 kilometers every day carrying 15kg heavy kettles and baskets through packed crowds. RailSaathi turns blind walking into guaranteed sales without taking a single rupee in commission.',
    vb1Title: 'No More Blind Walking',
    vb1Desc: "Know exactly which coach and seat has passengers waving a 'Hunger Signal' before squeezing through suffocating vestibules and crowded doors.",
    vb1Sub: 'Saves 40% walking exhaustion daily',
    vb2Title: 'No Vendor Clashing (आपसी टकराव खत्म)',
    vb2Desc: 'Our Coach Radar lets hawkers see which coach already has a chai or samosa seller. No more three vendors selling the exact same item in one compartment!',
    vb2Sub: 'Even distribution across all 12 coaches',
    vb3Title: 'Fair Cash / UPI Earnings (0% Commission)',
    vb3Desc: 'Instant direct payment straight from passenger to vendor. RailSaathi takes zero commission, zero middleman cuts, and zero delay.',
    vb3Sub: '100% of the money stays in your pocket',
    vb4Title: 'Easy Sign-Up in 5 Regional Languages',
    vb4Desc: 'Fully localized in English, Bengali, Hindi, Tamil, and Urdu with clear audio bell alerts so you never miss an order even in noisy stations.',
    vb4Sub: 'Onboard in less than 60 seconds',
    vendorQuote: '"Earlier I had to shout through coaches from Dadar to Thane. Often three tea sellers would cram into the exact same coach. With RailSaathi, I know Coaches 4 and 7 need tea. My daily earnings increased by 35%."',
    vendorQuoteAuthor: 'Ramesh Yadav',
    vendorQuoteRole: 'Central Railway Platform & Train Vendor (Dadar)',
    vendorVerified: 'Verified Hawker',

    featBadge: 'Suburban Tech Architecture',
    featTitle: 'Authentic Train & Battery Features',
    featSubhead: 'Built from the ground up for Indian train commuting reality: weak batteries, crowded compartments, dark tunnels, and strict railway guidelines.',
    f1Title: '🔋 Zero Battery Drain',
    f1Desc: 'GPS sleeps when you are stationary or when the phone is in your pocket. Uses accelerometer motion-gating to preserve your phone battery all day.',
    f1Tag: '⚡ Consumes < 1.2% battery/hr',
    f2Title: '📶 Works 100% Offline',
    f2Desc: 'Train schedules and coach maps work even in tunnels and rural network blackouts using pre-bundled local SQLite timetables.',
    f2Tag: '💾 Instant local database lookups',
    f3Title: '🚃 Full Coach Radar',
    f3Desc: 'Shows exact positions of Divyangjan compartments, Ladies Special coaches, and Vendor compartments across all 12 coaches.',
    f3Tag: '🎯 12-Car formation visualizer',
    f4Title: '🛡️ Regulated Rail Tariffs',
    f4Desc: 'Fixed honest prices (₹5 to ₹20) with zero price-gouging, zero surge pricing during monsoon rains, and official MRP compliance.',
    f4Tag: '₹ Guaranteed official rail rates',
    toggleRadar: 'Explore 12-Car Coach Radar Demo',
    hideRadar: 'Hide Interactive Coach Radar',
    toggleTimetable: 'Search Offline Suburban Timetables',
    hideTimetable: 'Hide Offline Timetable Demo',

    instBadge: 'Simple 30-Second Guide',
    instTitle: 'How to Install the App',
    instSubhead: 'RailSaathi is distributed as a signed, open-source Android APK. It installs in under 30 seconds and requires zero intrusive permissions.',
    instBoxTitle: 'Install RailSaathi in 4 Easy Steps',
    instSafe: '100% Safe, Signed & Virus-Free',
    instStep1Title: "Tap 'Download APK'",
    instStep1Desc: 'Tap the Download APK button on this site. The 24.90 MB official installation file will download immediately.',
    instStep2Title: 'Open Downloaded File',
    instStep2Desc: "Swipe down your Android phone notification shade and tap the completed 'RailSathi.apk' file.",
    instStep3Title: "Tap 'Allow from this source'",
    instStep3Desc: "If Android prompts you with a security confirmation, tap Settings and switch ON 'Allow from this source' (100% safe, verified APK).",
    instStep4Title: 'Select Language & Role',
    instStep4Desc: "Choose your preferred language (English, Bengali, Hindi, Tamil, Urdu) and your role (Traveler or Vendor), and you're ready to board!",
    instPrivacy: 'Privacy Guaranteed: Does not require account signup, camera, contacts, or credit card info.',
    instCopySha: 'Verify SHA-256 Checksum',
    brandGuideTitle: 'Phone-Specific Guide (Settings by Brand)',
    brandGuideSub: "If your phone's Android custom skin asks for extra confirmation, select your phone manufacturer:",

    stickyTitle: 'RailSaathi Android APK (v1.0.0)',
    stickyVerified: 'Verified',
    stickySub: 'Chai & snacks directly to your coach seat • 24.90 MB • Free',
    downloadBtn: 'Download APK',
    footerCtaTitle: 'Ready for a smoother, hunger-free local train commute?',
    footerCtaSub: 'Join thousands of daily suburban passengers in Mumbai, Kolkata, and Chennai. Download the signed APK today and enjoy tea, snacks, and water delivered right to your coach seat.',
    footerCtaDownload: 'Download RailSaathi APK (24.90 MB)',
    footerGitHub: 'GitHub Repository',
    footerContactTeam: 'Contact Team',
    footerNavTitle: 'Quick Navigation',
    footerContactTitle: 'Get in Touch & Contribute',
    footerBackToTop: 'Back to Top',
    footerLove: 'Built with ❤️ for daily Indian Railways suburban passengers & honest hawkers.'
  },

  // 2. Bengali (বাংলা)
  bn: {
    appName: 'রেলসাথী',
    appNativeName: 'RailSaathi',
    appTagline: 'ভারতীয় রেলওয়ে স্মার্ট লোকাল যাত্রী ও হকার সাথী',
    navDifference: 'পার্থক্য',
    navCommuters: 'যাত্রীদের জন্য',
    navVendors: 'হকারদের জন্য',
    navFeatures: 'বৈশিষ্ট্য',
    navInstall: 'ইনস্টল নির্দেশিকা',
    tunnelMode: 'টানেল মোড',
    online: 'অনলাইন',
    dataSaver: 'ডাটা সেভার',
    dataSaverOn: '২জি সেভার চালু',
    seniorMode: 'প্রবীণ মোড',
    getApk: 'APK নিন (v1.0)',

    badgeSuburban: 'ভারতের প্রতিদিনের ২ কোটি ৪০ লক্ষ লোকাল ট্রেন যাত্রীদের জন্য নির্মিত',
    badgeFairRates: '০% কমিশন • ন্যায্য রেলওয়ে দর',
    heroHeadline: 'লোকাল ট্রেনে ৩০ সেকেন্ডের স্টপ? ক্ষিদে পেলে চা-জলখাবার সোজা আপনার সিটে।',
    heroSubheadline: 'এক বোতল জল বা গরম চায়ের জন্য আর ট্রেন মিস করবেন না। রেলসাথী আপনার ট্রেনের কামরার অনুমোদিত হকারদের সাথে সরাসরি আপনাকে যুক্ত করে।',
    roleSelectLabel: 'আপনার ভূমিকা নির্বাচন করুন:',
    travelerRoleBtn: 'আমি একজন যাত্রী 🎒',
    vendorRoleBtn: 'আমি একজন হকার / বিক্রেতা 🧺',
    travelerCardTitle: 'ট্রেন মিস করার কোনো ভয় নেই',
    travelerCardDesc: 'যা ইচ্ছে বোতাম টিপে জানান (চা, বাদাম, সিঙ্গারা, রেল নীর জল)। ট্রেন ছাড়ার আগেই অনুমোদিত হকার সোজা আপনার সিটে বা দরজায় খাবার পৌঁছে দেবেন। সাধারণ ₹১০–₹১৫ মূল্যে।',
    vendorCardTitle: 'অহেতুক হাঁটা বন্ধ ও ০% কমিশন',
    vendorCardDesc: 'কোন বগিতে ক্ষিদে পাওয়া যাত্রী অপেক্ষা করছেন আগে থেকেই জানুন। একই কামরায় দুজন হকারের সংঘর্ষ এড়িয়ে চলুন। আপনার উপার্জনের ১০০% টাকা আপনার পকেটেই থাকবে।',
    downloadApkBtn: '⬇️ ডাউনলোড করুন রেলসাথী অ্যান্ড্রয়েড APK (v1.0)',
    howItWorksBtn: '📖 কীভাবে কাজ করে দেখুন',
    openSource: 'উন্মুক্ত সোর্স কোড (Open Source)',
    verifySha: 'SHA-256 যাচাইকরণ',
    mockupGps: 'GPS স্লিপিং',
    mockupTravelerMode: 'যাত্রী মোড',
    mockupVendorMode: 'হকার রাডার মোড',
    mockupOfflineReady: 'অফলাইনে প্রস্তুত',
    mockupActiveSignal: 'ট্রেন #৩১৮২১',
    mockupHungerActive: 'হাঙ্গার সিগন্যাল সক্রিয়',
    mockupVendorIncoming: 'হকার: সুভাষ (ER-4102)',
    mockupReachingDoor: '১৮ সেকেন্ডে পৌঁছাচ্ছে',
    mockupRadarActive: 'হকার রাডার সক্রিয়',
    mockupAcceptOrder: 'অর্ডার গ্রহণ করুন',
    mockupSkip: 'বাতিল',
    mockupFormationTitle: '১২-বগির ইএমইউ কম্পোজিশন',
    mockupExploreCommuter: 'যাত্রী ডেমো দেখুন',
    mockupExploreVendor: 'হকারদের সুবিধা দেখুন',
    statDailyPassengers: '২ কোটি ৪০ লক্ষ',
    statDailyLabel: 'দৈনিক লোকাল ট্রেন যাত্রী',
    statHaltWindow: '২০–৪৫ সেকেন্ড',
    statHaltLabel: 'স্টেশন থামার সময়সীমা',
    statZeroCut: '০% কমিশন',
    statZeroCutLabel: 'হকারদের থেকে কোনো কমিশন নেই',
    statOffline: '১০০%',
    statOfflineLabel: 'ডাটা ছাড়া অফলাইন সময়সূচি',

    diffBadge: 'আসল পার্থক্য',
    diffHeadlinePre: 'কেন রেলসাথী কখনই ',
    diffHeadlinePost: 'জেপটো, ব্লিংকিট বা আইআরসিটিসি নয়',
    diffSubhead: 'কুইক-কমার্স অ্যাপগুলো পাকা রাস্তায় মোটরবাইকের জন্য তৈরি। উপনগরী লোকাল ট্রেন মাত্র ২০ থেকে ৪৫ সেকেন্ডের স্টপে থামে, যেখানে কোনো রাস্তার ঠিকানা বা প্যান্ট্রি কার থাকে না। রেলসাথী এই সমস্যার সমাধান করে:',
    tradTitle: 'ব্লিংকিট, জেপটো, সুইগি ও আইআরসিটিসি',
    tradTag: 'গতানুগতিক কুইক কমার্স',
    tradPoint1Title: '১০–৩০ মিনিট সময় লাগে:',
    tradPoint1Desc: 'লোকাল ট্রেনে সম্পূর্ণ অকেজো, কারণ ট্রেন থামে মাত্র ৩০ সেকেন্ড।',
    tradPoint2Title: 'রাস্তার ঠিকানা প্রয়োজন:',
    tradPoint2Desc: 'ডেলিভারি বয় চলন্ত ট্রেন বা নির্দিষ্ট লোকাল ট্রেনের কামরা খুঁজে পায় না।',
    tradPoint3Title: 'অতিরিক্ত ডেলিভারি চার্জ:',
    tradPoint3Desc: 'কমপক্ষে ₹৩০–₹৬০ অতিরিক্ত ডেলিভারি ফি চাপিয়ে দেওয়া হয়।',
    tradPoint4Title: 'সবসময় ফোর-জি/ফাইভ-জি প্রয়োজন:',
    tradPoint4Desc: 'টানেল বা নেটওয়ার্কহীন এলাকায় পৌঁছালেই অ্যাপ বন্ধ হয়ে যায়।',
    rsTitle: 'রেলসাথী (লোকাল ট্রেন সহায়িকা)',
    rsTag: 'ভারতীয় লোকাল ট্রেনের জন্য বিশেষভাবে নির্মিত',
    rsPoint1Title: '২০–৪৫ সেকেন্ডের ডেলিভারি:',
    rsPoint1Desc: 'ট্রেন ছাড়ার বাঁশি বাজার আগেই হকার আপনার বগিতে বা দরজায় পৌঁছে দেয়।',
    rsPoint2Title: 'ইএমইউ কোচ রাডার:',
    rsPoint2Desc: 'প্রতিটি বগির সঠিক অবস্থান চিহ্নিত করে (যেমন বগি ৩, সাধারণ বগি বা হকার কামরা)।',
    rsPoint3Title: 'রেলওয়ের ন্যায্য দর (₹৫ – ₹২০):',
    rsPoint3Desc: '০% কমিশন, কোনো অতিরিক্ত ফি নেই, সরাসরি নগদ বা ইউপিআই পেমেন্ট।',
    rsPoint4Title: '১০০% অফলাইনে কার্যকরী:',
    rsPoint4Desc: 'ইন্টারনেট সংযোগ ছাড়াই ট্রেনের সময়সূচি, কোচের অবস্থান ও অর্ডার কাজ করে।',

    commuterBadge: 'সহজ পদ্ধতি',
    commuterTitle: 'মাত্র ৩টি ধাপে পান গরম চা ও খাবার',
    commuterSubhead: '৩০ সেকেন্ডের লোকাল প্ল্যাটফর্ম স্টপের জন্য তৈরি। কোনো দীর্ঘ মেনু নেই, ওটিপি-র ঝামেলা নেই, ট্রেন মিসের ভয় নেই।',
    step1Title: 'আপনার ট্রেন ও বগি বেছে নিন',
    step1Desc: 'অফলাইন বা অনলাইনে অ্যাপ খুলুন। আপনার ট্রেন নির্বাচন করুন এবং নিজের বগিটিতে ট্যাপ করুন (যেমন কামরা ৩ / GS-1)।',
    step2Title: "'হাঙ্গার সিগন্যাল' পাঠান",
    step2Desc: 'যা খেতে ইচ্ছে করে বেছে নিন (কড়ক চা, ভাজা বাদাম, সিঙ্গারা, রেল নীর জল)। আশেপাশের অনুমোদিত হকারদের কাছে সঙ্গে সঙ্গে নোটিফিকেশন পৌঁছে যাবে।',
    step3Title: '২০ সেকেন্ডে খাবার ডেলিভারি',
    step3Desc: 'ট্রেনের বা প্ল্যাটফর্মের হকার সরাসরি আপনার সিটে বা দরজায় খাবার দেবেন। সাধারণ ₹১০–₹১৫ মূল্যে দাম মেটান।',
    simTitle: 'ইন্টারেক্টিভ প্যাসেঞ্জার সিমুলেটর',
    simSubtitle: 'এখনই একটি হাঙ্গার সিগন্যাল পাঠিয়ে পরখ করে দেখুন:',
    simSelectCoach: 'আপনার কামরা বাছুন:',
    simCraving: 'আপনি কী খেতে চান?',
    simSendSignal: 'হাঙ্গার সিগন্যাল পাঠান',
    simSignalBroadcasting: 'কাছের হকারদের কাছে সিগন্যাল পাঠানো হচ্ছে...',
    simBroadcastActive: 'হাঙ্গার সিগন্যাল সক্রিয়!',
    simOrderPlaced: 'হকার সুভাষ (ER-4102) অর্ডার গ্রহণ করেছেন • দরজায় পৌঁছাচ্ছেন',
    simReset: 'অন্য সিগন্যাল পাঠান',

    vendorBadge: 'হকারদের সুবিধা • Hawker Benefits',
    vendorTitle: 'লোকাল ট্রেনের হকার ও প্ল্যাটফর্ম বিক্রেতাদের জন্য',
    vendorSubhead: 'লোকাল ট্রেনের হকাররা দিনে ১২ থেকে ১৮ কিমি হেঁটে ১৫ কেজি ওজনের কেতলি ও ঝুড়ি নিয়ে ভিড় ঠেলে চলেন। রেলসাথী অন্ধভাবে হাঁটা বন্ধ করে নিশ্চিত বিক্রি এনে দেয়, এক টাকাও কমিশন না নিয়ে।',
    vb1Title: 'অহেতুক ছোটাছুটি বন্ধ',
    vb1Desc: 'ভিড়ে ঠাসা গেট দিয়ে কষ্ট করে ঢোকার আগেই জানুন কোন কামরায় কোন যাত্রী চা বা জলের সিগন্যাল দিয়েছেন।',
    vb1Sub: 'প্রতিদিন ৪০% হাঁটার ক্লান্তি কমায়',
    vb2Title: 'হকারদের মধ্যে ঝামেলা বন্ধ',
    vb2Desc: 'আমাদের কোচ রাডারে দেখা যায় কোন কামরায় আগে থেকেই চা বা সিঙ্গারা বিক্রেতা রয়েছেন। এক কামরায় তিনজন চা-ওয়ালা ওঠার দিন শেষ!',
    vb2Sub: '১২টি বগির মধ্যে সুষম বণ্টন',
    vb3Title: 'সরাসরি নগদ / ইউপিআই আয় (০% কমিশন)',
    vb3Desc: 'যাত্রীর থেকে সরাসরি পুরো টাকা আপনার হাতে। রেলসাথী কোনো কমিশন বা দালালি নেয় না।',
    vb3Sub: '১০০% টাকা আপনার পকেটেই থাকে',
    vb4Title: '৫টি ভারতীয় ভাষায় সহজ ব্যবহার',
    vb4Desc: 'বাংলা, হিন্দি, ইংরেজি, তামিল এবং উর্দু ভাষায় উপলব্ধ। কোলাহলের মাঝেও স্পষ্ট ঘণ্টার আওয়াজে অ্যালার্ট পাবেন।',
    vb4Sub: '৬০ সেকেন্ডের মধ্যে যোগ দিন',
    vendorQuote: '"আগে শিয়ালদহ থেকে রানাঘাট পর্যন্ত ভিড় ঠেলে ডেকে ডেকে চা বিক্রি করতে হতো। অনেক সময় একই কামরায় আরও দুজন চা-ওয়ালা উঠে পড়তো। রেলসাথীতে আমি জানতে পারি ৪ ও ৭ নম্বর বগিতে চা চাইছেন যাত্রীরা। আমার প্রতিদিনের রোজগার ৩৫% বেড়েছে।""',
    vendorQuoteAuthor: 'রমেশ যাদব',
    vendorQuoteRole: 'প্ল্যাটফর্ম ও লোকাল ট্রেন বিক্রেতা',
    vendorVerified: 'ভেরিফায়েড হকার',

    featBadge: 'লোকাল ট্রেনের প্রযুক্তি',
    featTitle: 'ট্রেন ও ব্যাটারি-বান্ধব আসল ফিচারসমূহ',
    featSubhead: 'ভারতীয় লোকাল ট্রেনের বাস্তবতার কথা মাথায় রেখে তৈরি: কম ব্যাটারি, প্রচণ্ড ভিড়, অন্ধকার টানেল এবং কঠোর রেল সুরক্ষা নীতি।',
    f1Title: '🔋 জিরো ব্যাটারি ড্রেন',
    f1Desc: 'স্থির থাকলে বা ফোন পকেটে থাকলে জিপিএস স্লিপ মোডে থাকে। অ্যাক্সিলোমিটার সেন্সর ব্যবহার করে সারাদিন ব্যাটারি বাঁচায়।',
    f1Tag: '⚡ ঘন্টায় ১.২% এরও কম ব্যাটারি খরচ',
    f2Title: '📶 ১০০% অফলাইনে কাজ করে',
    f2Desc: 'টানেল বা প্রত্যন্ত অঞ্চলে নেটওয়ার্ক চলে গেলেও লোকাল ট্রেনের সময়সূচি এবং বগির নকশা সম্পূর্ণ কাজ করে।',
    f2Tag: '💾 দ্রুত লোকাল ডেটাবেস অনুসন্ধান',
    f3Title: '🚃 সম্পূর্ণ কোচ রাডার',
    f3Desc: '১২টি বগির মধ্যে দিব্যাঙ্গ কামরা, মহিলা স্পেশাল এবং হকার বগির সঠিক অবস্থান দেখায়।',
    f3Tag: '🎯 ১২-বগির লোকাল ট্রেনের ভিজ্যুয়ালাইজার',
    f4Title: '🛡️ নির্ধারিত সরকারি রেল দর',
    f4Desc: 'নির্দিষ্ট ন্যায্য দাম (₹৫ থেকে ₹২০)। বর্ষার বৃষ্টিতেও কোনো অতিরিক্ত ভাড়া বা সার্জ প্রাইসিং নেই।',
    f4Tag: '₹ সরকার নির্ধারিত রেলওয়ে রেট',
    toggleRadar: '১২-বগির কোচ রাডার ডেমো দেখুন',
    hideRadar: 'কোচ রাডার বন্ধ করুন',
    toggleTimetable: 'অফলাইন লোকাল সময়সূচি খুঁজুন',
    hideTimetable: 'অফলাইন সময়সূচি বন্ধ করুন',

    instBadge: 'সহজ ৩০-সেকেন্ডের নির্দেশিকা',
    instTitle: 'কীভাবে অ্যাপটি ইনস্টল করবেন',
    instSubhead: 'রেলসাথী একটি অনুমোদিত, ওপেন-সোর্স অ্যান্ড্রয়েড APK ফাইল। এটি ৩০ সেকেন্ডেরও কম সময়ে ইনস্টল হয়ে যায় এবং কোনো অনাবশ্যক পারমিশন চায় না।',
    instBoxTitle: 'সহজ ৪টি ধাপে রেলসাথী ইনস্টল করুন',
    instSafe: '১০০% নিরাপদ, স্বাক্ষরিত ও ভাইরাস-মুক্ত',
    instStep1Title: "'Download APK' বোতামে চাপুন",
    instStep1Desc: 'এই পেজের ডাউনলোড বোতামে চাপুন। ২৪.৯০ এমবির অফিশিয়াল ফাইলটি সঙ্গে সঙ্গে ডাউনলোড হয়ে যাবে।',
    instStep2Title: 'ডাউনলোড হওয়া ফাইলটি খুলুন',
    instStep2Desc: 'ফোনের নোটিফিকেশন বার নামিয়ে ডাউনলোড হওয়া "RailSathi.apk" ফাইলে ট্যাপ করুন।',
    instStep3Title: "'Allow from this source' অন করুন",
    instStep3Desc: 'অ্যান্ড্রয়েড সিকিউরিটি অনুমতি চাইলে সেটিংসে গিয়ে "Allow from this source" অন করুন (এটি সম্পূর্ণ নিরাপদ)।',
    instStep4Title: 'ভাষা ও ভূমিকা নির্বাচন করুন',
    instStep4Desc: 'আপনার পছন্দের ভাষা (বাংলা, হিন্দি, ইংরেজি ইত্যাদি) ও আপনার রোল বাছুন, আর ব্যাস যাত্রা শুরু করুন!',
    instPrivacy: 'গোপনীয়তা সুরক্ষিত: কোনো অ্যাকাউন্ট তৈরি, ক্যামেরা, কন্টাক্টস বা ব্যাংক কার্ডের তথ্য দরকার নেই।',
    instCopySha: 'SHA-256 চেকার যাচাই করুন',
    brandGuideTitle: 'ফোন অনুযায়ী সেটিংস (Brand Guide)',
    brandGuideSub: 'আপনার ফোনের স্ক্রিনে কোনো বাড়তি প্রশ্ন এলে আপনার ব্র্যান্ড সিলেক্ট করুন:',

    stickyTitle: 'RailSaathi Android APK (v1.0.0)',
    stickyVerified: 'ভেরিফায়েড',
    stickySub: 'সোজা আপনার বগিতে চা ও নাস্তা • ২৪.৯০ এমবি • বিনামূল্যে',
    downloadBtn: 'ডাউনলোড APK',
    footerCtaTitle: 'ঝামেলাহীন ও ক্ষিদে-মুক্ত লোকাল ট্রেন সফরের জন্য প্রস্তুত?',
    footerCtaSub: 'মুম্বাই, কলকাতা ও চেন্নাইয়ের হাজার হাজার লোকাল ট্রেন যাত্রীর সাথে যুক্ত হোন। আজই ইনস্টল করুন এবং সিটে বসেই পান গরম চা ও খাবার।',
    footerCtaDownload: 'রেলসাথী APK ডাউনলোড করুন (২৪.৯০ এমবি)',
    footerGitHub: 'গিটহাব কোড রিপোজিটরি',
    footerContactTeam: 'যোগাযোগ করুন',
    footerNavTitle: 'দ্রুত লিংক',
    footerContactTitle: 'মতামত দিন ও যুক্ত হোন',
    footerBackToTop: 'উপরে ফিরে যান',
    footerLove: 'ভারতীয় রেলের লোকাল যাত্রী ও সৎ হকারদের জন্য ভালোবাসায় নির্মিত ❤️'
  },

  // 3. Hindi (हिन्दी)
  hi: {
    appName: 'रेलसाथी',
    appNativeName: 'RailSaathi',
    appTagline: 'भारतीय रेल स्मार्ट दैनिक यात्रा एवं वेंडर साथी',
    navDifference: 'असली अंतर',
    navCommuters: 'यात्रियों के लिए',
    navVendors: 'वेंडर्स के लिए',
    navFeatures: 'विशेषताएं',
    navInstall: 'इंस्टॉल कैसे करें',
    tunnelMode: 'टनल मोड',
    online: 'ऑनलाइन',
    dataSaver: 'डेटा सेवर',
    dataSaverOn: '2G सेवर चालू',
    seniorMode: 'सीनियर मोड',
    getApk: 'APK लें (v1.0)',

    badgeSuburban: 'भारत के 2.4 करोड़ दैनिक उपनगरीय लोकल यात्रियों के लिए निर्मित',
    badgeFairRates: '0% कमीशन • सरकारी व निष्पक्ष रेलवे दरें',
    heroHeadline: 'लोकल ट्रेन में 30 सेकंड का स्टॉप? भूख लगे तो चाय-नाश्ता सीधे आपकी सीट पर।',
    heroSubheadline: 'पानी की बोतल या गरम चाय के लिए कभी ट्रेन न छूटे। रेलसाथी आपको सीधे आपके कोच में मौजूद वेरिफाइड वेंडर्स से जोड़ता है।',
    roleSelectLabel: 'अपना नज़रिया चुनें:',
    travelerRoleBtn: 'मैं एक यात्री हूँ 🎒',
    vendorRoleBtn: 'मैं एक वेंडर / फेरीवाला हूँ 🧺',
    travelerCardTitle: 'ट्रेन छूटने का शून्य जोखिम',
    travelerCardDesc: 'जो चाहिए बस टैप करें (चाय, बादाम, समोसा, रेल नीर)। ट्रेन छूटने से पहले वेरिफाइड फेरीवाला सीधे आपकी सीट या गेट पर नाश्ता पहुंचाएगा। सामान्य ₹10–₹15 दर पर।',
    vendorCardTitle: 'अंधाधुंध भटकना बंद व 0% कमीशन',
    vendorCardDesc: 'पहले ही देखें किस डिब्बे में भूखे यात्री हंगर सिग्नल दे रहे हैं। एक ही डिब्बे में दो वेंडर्स के आपसी टकराव से बचें। अपनी कमाई का 100% पैसा अपनी जेब में रखें।',
    downloadApkBtn: '⬇️ डाउनलोड करें रेलसाथी एंड्रॉइड APK (v1.0)',
    howItWorksBtn: '📖 देखें यह कैसे काम करता है',
    openSource: 'ओपन सोर्स कोड (Open Source)',
    verifySha: 'SHA-256 सुरक्षा कोड',
    mockupGps: 'GPS स्लीपिंग',
    mockupTravelerMode: 'यात्री मोड',
    mockupVendorMode: 'वेंडर रडार मोड',
    mockupOfflineReady: 'ऑफलाइन तैयार',
    mockupActiveSignal: 'ट्रेन #31821',
    mockupHungerActive: 'हंगर सिग्नल सक्रिय',
    mockupVendorIncoming: 'वेंडर: सुभाष (ER-4102)',
    mockupReachingDoor: '18 सेकंड में गेट पर पहुंच रहे हैं',
    mockupRadarActive: 'फेरीवाला रडार सक्रिय',
    mockupAcceptOrder: 'ऑर्डर स्वीकार करें',
    mockupSkip: 'छोड़ें',
    mockupFormationTitle: '12-डिब्बा कोच संरचना',
    mockupExploreCommuter: 'यात्री स्टेप्स देखें',
    mockupExploreVendor: 'वेंडर के फायदे देखें',
    statDailyPassengers: '2.4 करोड़',
    statDailyLabel: 'दैनिक भारतीय उपनगरीय लोकल यात्री',
    statHaltWindow: '20–45 सेकंड',
    statHaltLabel: 'स्टेशन हॉल्ट समयसीमा',
    statZeroCut: '0% कट',
    statZeroCutLabel: 'वेंडर से कोई कमीशन नहीं',
    statOffline: '100%',
    statOfflineLabel: 'बिना डेटा ऑफलाइन समय सारिणी',

    diffBadge: 'बड़ा अंतर',
    diffHeadlinePre: 'रेलसाथी क्यों ',
    diffHeadlinePost: 'Zepto, Blinkit या IRCTC ई-कैटरिंग नहीं है',
    diffSubhead: 'क्विक-कॉमर्स ऐप्स पक्की सड़कों पर मोटरबाइक के लिए बने हैं। लोकल ट्रेनें केवल 20 से 45 सेकंड के हॉल्ट पर चलती हैं, जहां कोई पता या पैंट्री कार नहीं होती। जानिए रेलसाथी इसे कैसे हल करता है:',
    tradTitle: 'Blinkit, Zepto, Swiggy व IRCTC',
    tradTag: 'पारंपरिक क्विक कॉमर्स',
    tradPoint1Title: '10–30 मिनट का समय चाहिए:',
    tradPoint1Desc: '30 सेकंड रुकने वाली लोकल ट्रेनों में पूरी तरह बेकार।',
    tradPoint2Title: 'सड़क का पता जरूरी होता है:',
    tradPoint2Desc: 'डिलीवरी बॉय चलती लोकल ट्रेन या विशिष्ट ईएमयू कोच तक नहीं पहुंच सकते।',
    tradPoint3Title: 'भारी डिलीवरी चार्ज:',
    tradPoint3Desc: 'न्यूनतम ऑर्डर पर भी ₹30–₹60 अतिरिक्त डिलीवरी शुल्क वसूला जाता है।',
    tradPoint4Title: 'हमेशा 4G/5G की जरूरत:',
    tradPoint4Desc: 'टनल या कमजोर नेटवर्क क्षेत्र में ऐप गोल-गोल घूमता रह जाता है।',
    rsTitle: 'रेलसाथी (उपनगरीय साथी)',
    rsTag: 'भारतीय लोकल ट्रेनों के लिए विशेष रूप से निर्मित',
    rsPoint1Title: '20–45 सेकंड का हॉल्ट विंडो:',
    rsPoint1Desc: 'ट्रेन की सीटी बजने से पहले वेंडर आपकी बोगी या गेट पर नाश्ता पहुंचा देता है।',
    rsPoint2Title: 'ईएमयू कोच रडार:',
    rsPoint2Desc: 'हर डिब्बे की सटीक स्थिति बताता है (जैसे कोच 3, जनरल या वेंडर कंपार्टमेंट)।',
    rsPoint3Title: 'सख्त एमआरपी दरें (₹5 – ₹20):',
    rsPoint3Desc: '0% कमीशन, कोई सरचार्ज नहीं, सीधे नकद या यूपीआई भुगतान।',
    rsPoint4Title: '100% ऑफलाइन काम करता है:',
    rsPoint4Desc: 'नेटवर्क न होने पर भी समय सारिणी, कोच मैप और ऑर्डर पूरी तरह काम करते हैं।',

    commuterBadge: 'कार्यप्रणाली',
    commuterTitle: '3 आसान स्टेप्स में पाएं चाय और नाश्ता',
    commuterSubhead: '30-सेकंड के उपनगरीय प्लेटफॉर्म हॉल्ट के लिए विशेष रूप से डिज़ाइन। न लंबा मेन्यू, न ओटीपी का इंतज़ार, न ट्रेन छूटने का डर।',
    step1Title: 'अपनी ट्रेन और कोच चुनें',
    step1Desc: 'ऐप ऑनलाइन या ऑफलाइन खोलें। अपनी लोकल ट्रेन चुनें और अपने वर्तमान डिब्बे पर टैप करें (उदा. कोच 3 / GS-1)।',
    step2Title: "'हंगर सिग्नल' पर टैप करें",
    step2Desc: 'जो चाहिए उसे चुनें (कड़क चाय, भुना बादाम, समोसा, रेल नीर)। यह तुरंत निकटतम वेरिफाइड फेरीवालों को सूचित करता है।',
    step3Title: '20 सेकंड में डिलीवरी पाएं',
    step3Desc: 'आपकी ट्रेन या प्लेटफॉर्म का वेंडर सीधे आपकी सीट या गेट पर मिलता है। तय ₹10–₹15 सीधे उसे दें।',
    simTitle: 'इंटरैक्टिव कम्यूटर सिमुलेटर',
    simSubtitle: 'अभी हंगर सिग्नल भेजकर देखें कि यह कितना तेज है:',
    simSelectCoach: 'अपना डिब्बा चुनें:',
    simCraving: 'आपको क्या चाहिए?',
    simSendSignal: 'हंगर सिग्नल भेजें',
    simSignalBroadcasting: 'आसपास के फेरीवालों को सिग्नल भेजा जा रहा है...',
    simBroadcastActive: 'हंगर सिग्नल सक्रिय हो गया!',
    simOrderPlaced: 'वेंडर सुभाष (ER-4102) ने ऑर्डर स्वीकार किया • आपके गेट की तरफ बढ़ रहे हैं',
    simReset: 'दूसरा सिग्नल भेजें',

    vendorBadge: 'वेंडर्स के लिए क्या फायदा है? • Hawker Benefits',
    vendorTitle: 'स्थानीय फेरीवालों व स्टेशन वेंडर्स के लिए',
    vendorSubhead: 'लोकल ट्रेन के फेरीवाले प्रतिदिन 15 किलो की भारी केतली और टोकरी लेकर 12 से 18 किमी भीड़ में चलते हैं। रेलसाथी बिना एक रुपये कमीशन लिए अंधाधुंध भागदौड़ को गारंटीड बिक्री में बदलता है।',
    vb1Title: 'अंधाधुंध भागदौड़ खत्म',
    vb1Desc: 'भीड़ भरे गेट में जबरन घुसने से पहले ही जान लें कि किस डिब्बे की किस सीट से हंगर सिग्नल आया है।',
    vb1Sub: 'रोजाना 40% पैदल चलने की थकान कम करता है',
    vb2Title: 'आपसी टकराव खत्म (No Clashing)',
    vb2Desc: 'कोच रडार से पता चलता है कि किस डिब्बे में पहले से चाय या समोसे वाला मौजूद है। एक ही डिब्बे में तीन चाय वाले नहीं घुसेंगे!',
    vb2Sub: 'सभी 12 डिब्बों में उचित वितरण',
    vb3Title: 'सीधी नकद / यूपीआई कमाई (0% कमीशन)',
    vb3Desc: 'यात्री से सीधे पूरा पैसा आपके हाथ में। रेलसाथी कोई दलाली या कमीशन नहीं काटता।',
    vb3Sub: '100% कमाई सीधे आपकी जेब में',
    vb4Title: '5 क्षेत्रीय भाषाओं में आसान साइन-अप',
    vb4Desc: 'हिन्दी, बांग्ला, तमिल, उर्दू और अंग्रेज़ी में पूरी तरह उपलब्ध। तेज घंटी की आवाज से स्टेशन के शोर में भी कोई ऑर्डर नहीं छूटेगा।',
    vb4Sub: '60 सेकंड में शुरू करें',
    vendorQuote: '"पहले दादर से ठाणे तक डिब्बों में चिल्लाते हुए जाना पड़ता था। कई बार एक ही डिब्बे में 3 चाय वाले घुस जाते थे। रेलसाथी में मुझे पता होता है कि डिब्बा 4 और 7 में चाय की ज़रूरत है। मेरी दैनिक कमाई 35% बढ़ गई।"',
    vendorQuoteAuthor: 'रमेश यादव',
    vendorQuoteRole: 'सेंट्रल रेलवे प्लेटफॉर्म व ट्रेन वेंडर (दादर जंक्शन)',
    vendorVerified: 'वेरिफाइड वेंडर',

    featBadge: 'लोकल ट्रेन तकनीक',
    featTitle: 'ट्रेन और बैटरी-फ्रेंडली असली फीचर्स',
    featSubhead: 'भारतीय लोकल ट्रेनों की जमीनी हकीकत को ध्यान में रखकर तैयार: कम बैटरी, भारी भीड़, गहरी सुरंगे और सख्त रेलवे नियम।',
    f1Title: '🔋 ज़ीरो बैटरी ड्रेन',
    f1Desc: 'स्थिर रहने पर या जेब में फोन रखने पर जीपीएस स्लीप मोड में चला जाता है। एक्सेलेरोमीटर मोशन-गेटिंग से पूरे दिन बैटरी बचाता है।',
    f1Tag: '⚡ प्रति घंटे 1.2% से भी कम बैटरी खर्च',
    f2Title: '📶 100% ऑफलाइन काम करता है',
    f2Desc: 'टनल और ग्रामीण क्षेत्रों में नेटवर्क गायब होने पर भी लोकल ट्रेन टाइमटेबल और कोच मैप फोन में ही चलते हैं।',
    f2Tag: '💾 तुरंत ऑफलाइन डेटाबेस लुकअप',
    f3Title: '🚃 संपूर्ण कोच रडार',
    f3Desc: 'दिव्यांगजन कंपार्टमेंट, महिला स्पेशल कोच और वेंडर डिब्बों की सटीक स्थिति 12 डिब्बों में दिखाता है।',
    f3Tag: '🎯 12-डिब्बा ईएमयू विजुअलाइज़र',
    f4Title: '🛡️ विनियमित रेलवे दरें',
    f4Desc: 'तय ईमानदार कीमतें (₹5 से ₹20)। मानसून की बारिश में भी कोई अधिक वसूली या सर्ज प्राइसिंग नहीं।',
    f4Tag: '₹ सरकार द्वारा निर्धारित सरकारी दरें',
    toggleRadar: '12-डिब्बा कोच रडार डेमो देखें',
    hideRadar: 'कोच रडार बंद करें',
    toggleTimetable: 'ऑफलाइन उपनगरीय टाइमटेबल खोजें',
    hideTimetable: 'ऑफलाइन टाइमटेबल बंद करें',

    instBadge: 'सरल 30-सेकंड गाइड',
    instTitle: 'ऐप को कैसे इंस्टॉल करें',
    instSubhead: 'रेलसाथी एक हस्ताक्षरित, ओपन-सोर्स एंड्रॉइड APK के रूप में उपलब्ध है। यह 30 सेकंड में इंस्टॉल हो जाता है और कोई अवांछित परमिशन नहीं मांगता।',
    instBoxTitle: '4 आसान स्टेप्स में रेलसाथी इंस्टॉल करें',
    instSafe: '100% सुरक्षित, हस्ताक्षरित एवं वायरस-मुक्त',
    instStep1Title: "'Download APK' पर टैप करें",
    instStep1Desc: 'इस वेबसाइट पर डाउनलोड बटन दबाएं। 24.90 एमबी की आधिकारिक फाइल तुरंत डाउनलोड हो जाएगी।',
    instStep2Title: 'डाउनलोड की गई फाइल खोलें',
    instStep2Desc: 'फोन का नोटिफिकेशन बार नीचे खींचें और डाउनलोड हुई "RailSathi.apk" फाइल पर टैप करें।',
    instStep3Title: "'Allow from this source' चालू करें",
    instStep3Desc: 'यदि एंड्रॉइड सुरक्षा चेतावनी दिखाए, तो सेटिंग्स में जाकर "Allow from this source" चालू करें (यह पूरी तरह सुरक्षित है)।',
    instStep4Title: 'भाषा और भूमिका चुनें',
    instStep4Desc: 'अपनी पसंदीदा भाषा (हिन्दी, बांग्ला, तमिल, उर्दू आदि) व अपनी भूमिका चुनें, और आपकी यात्रा तैयार है!',
    instPrivacy: 'निजता की गारंटी: कोई अकाउंट साइन-अप, कैमरा, कॉन्टैक्ट्स या क्रेडिट कार्ड की आवश्यकता नहीं है।',
    instCopySha: 'SHA-256 चेकसम सत्यापित करें',
    brandGuideTitle: 'स्मार्टफोन ब्रांड गाइड (Brand Settings)',
    brandGuideSub: 'यदि आपके फोन की सेटिंग्स में कोई अतिरिक्त अनुमति मांगी जाए, तो अपनी कंपनी चुनें:',

    stickyTitle: 'RailSaathi Android APK (v1.0.0)',
    stickyVerified: 'वेरिफाइड',
    stickySub: 'सीधे आपकी ट्रेन सीट पर चाय और नाश्ता • 24.90 MB • मुफ्त',
    downloadBtn: 'डाउनलोड APK',
    footerCtaTitle: 'एक आसान और भूख-मुक्त लोकल ट्रेन यात्रा के लिए तैयार?',
    footerCtaSub: 'मुंबई, कोलकाता और चेन्नई के लाखों दैनिक लोकल यात्रियों से जुड़ें। आज ही हस्ताक्षरित APK डाउनलोड करें और सीट पर चाय-नाश्ता पाएं।',
    footerCtaDownload: 'रेलसाथी APK डाउनलोड करें (24.90 MB)',
    footerGitHub: 'गिटहब कोड रिपॉजिटरी',
    footerContactTeam: 'टीम से संपर्क करें',
    footerNavTitle: 'त्वरित लिंक',
    footerContactTitle: 'संपर्क करें एवं योगदान दें',
    footerBackToTop: 'वापस ऊपर जाएं',
    footerLove: 'भारतीय रेल के दैनिक यात्रियों और ईमानदार फेरीवालों के लिए प्यार से निर्मित ❤️'
  },

  // 4. Tamil (தமிழ்)
  ta: {
    appName: 'ரயில்சாதி',
    appNativeName: 'RailSaathi',
    appTagline: 'இந்திய ரயில்வே புறநகர் பயணிகள் மற்றும் விற்பனையாளர் தோழன்',
    navDifference: 'முக்கிய வேறுபாடு',
    navCommuters: 'பயணிகளுக்கு',
    navVendors: 'விற்பனையாளர்களுக்கு',
    navFeatures: 'சிறப்பம்சங்கள்',
    navInstall: 'நிறுவுவது எப்படி',
    tunnelMode: 'சுரங்கப்பாதை முறை',
    online: 'ஆன்லைன்',
    dataSaver: 'டேட்டா சேமிப்பான்',
    dataSaverOn: '2G சேமிப்பு இயங்குகிறது',
    seniorMode: 'முதியோர் முறை',
    getApk: 'APK பெறுங்கள் (v1.0)',

    badgeSuburban: 'இந்தியாவின் 2.4 கோடி தினசரி புறநகர் ரயில் பயணிகளுக்காக உருவாக்கப்பட்டது',
    badgeFairRates: '0% கமிஷன் • நியாயமான ரயில் கட்டணங்கள்',
    heroHeadline: 'லோக்கல் ரயிலில் 30 வினாடி நிறுத்தம்? தேநீர், சிற்றுண்டி நேராக உங்கள் இருக்கைக்கே.',
    heroSubheadline: 'ஒரு பாட்டில் தண்ணீர் அல்லது சூடான டீ வாங்குவதற்காக இனி ரயிலை தவறவிட வேண்டாம். ரயில்சாதி உங்கள் பெட்டியில் உள்ள விற்பனையாளர்களுடன் உங்களை நேரடியாக இணைக்கிறது.',
    roleSelectLabel: 'உங்கள் நிலையை தேர்வு செய்யுங்கள்:',
    travelerRoleBtn: 'நான் ஒரு பயணி 🎒',
    vendorRoleBtn: 'நான் ஒரு விற்பனையாளர் 🧺',
    travelerCardTitle: 'ரயில் தவறும் அச்சமே இல்லை',
    travelerCardDesc: 'விரும்பியதை தட்டவும் (டீ, சமோசா, வறுத்த பாதாம், ரயில் நீர்). ரயில் புறப்படுவதற்கு முன் விற்பனையாளர் உங்கள் இருக்கைக்கே கொண்டு வருவார். சாதாரண ₹10–₹15 விலையில்.',
    vendorCardTitle: 'வீண் அலைச்சல் இல்லை & 0% கமிஷன்',
    vendorCardDesc: 'எந்தப் பெட்டியில் பயணிகள் பசியோடு காத்திருக்கிறார்கள் என்பதை முன்கூட்டியே பாருங்கள். ஒரே பெட்டியில் இரண்டு விற்பனையாளர்கள் மோதுவதைத் தவிர்க்கலாம். 100% வருமானமும் உங்களுக்கே.',
    downloadApkBtn: '⬇️ ரயில்சாதி ஆண்ட்ராய்டு APK (v1.0) பதிவிறக்குக',
    howItWorksBtn: '📖 செயல்படும் விதம்',
    openSource: 'திறந்த மூலக் குறியீடு (Open Source)',
    verifySha: 'SHA-256 பாதுகாப்பு குறியீடு',
    mockupGps: 'GPS தூங்குகிறது',
    mockupTravelerMode: 'பயணி முறை',
    mockupVendorMode: 'விற்பனையாளர் ரேடார் முறை',
    mockupOfflineReady: 'ஆஃப்லைனில் தயார்',
    mockupActiveSignal: 'ரயில் எண் #31821',
    mockupHungerActive: 'ஹங்கர் சிக்னல் செயலில் உள்ளது',
    mockupVendorIncoming: 'விற்பனையாளர்: சுபாஷ் (ER-4102)',
    mockupReachingDoor: '18 வினாடிகளில் வாசலுக்கு வருகிறார்',
    mockupRadarActive: 'விற்பனையாளர் ரேடார் இயங்குகிறது',
    mockupAcceptOrder: 'ஆர்டரை ஏற்கவும்',
    mockupSkip: 'தவிர்',
    mockupFormationTitle: '12-பெட்டி ரயில் கட்டமைப்பு',
    mockupExploreCommuter: 'பயணி டெமோ முயற்சி செய்',
    mockupExploreVendor: 'விற்பனையாளர் பலன்கள் பார்',
    statDailyPassengers: '2.4 கோடி',
    statDailyLabel: 'தினசரி புறநகர் ரயில் பயணிகள்',
    statHaltWindow: '20–45 வினாடி',
    statHaltLabel: 'ரயில் நிற்கும் குறுகிய நேரம்',
    statZeroCut: '0% கமிஷன்',
    statZeroCutLabel: 'விற்பனையாளரிடம் கமிஷன் இல்லை',
    statOffline: '100%',
    statOfflineLabel: 'இணையமில்லா ஆஃப்லைன் அட்டவணை',

    diffBadge: 'முக்கிய வேறுபாடு',
    diffHeadlinePre: 'ஏன் ரயில்சாதி ',
    diffHeadlinePost: 'Zepto, Blinkit அல்லது IRCTC அல்ல',
    diffSubhead: 'டெலிவரி செயலிகள் சாலைகளில் பைக்குகளுக்காக உருவாக்கப்பட்டவை. புறநகர் ரயில்கள் 20 முதல் 45 வினாடிகள் மட்டுமே நிற்கின்றன, அங்கு முகவரியோ பேண்ட்ரி காரோ கிடையாது. ரயில்சாதி இதை எவ்வாறு தீர்க்கிறது:',
    tradTitle: 'Blinkit, Zepto, Swiggy & IRCTC',
    tradTag: 'வழக்கமான வணிக செயலிகள்',
    tradPoint1Title: '10–30 நிமிடங்கள் தேவைப்படும்:',
    tradPoint1Desc: '30 வினாடிகள் மட்டுமே நிற்கும் லோக்கல் ரயில்களில் முற்றிலும் பயனற்றது.',
    tradPoint2Title: 'தெரு முகவரி தேவை:',
    tradPoint2Desc: 'நகரும் ரயில் அல்லது குறிப்பிட்ட ரயில் பெட்டியை அவர்களால் கண்டறிய முடியாது.',
    tradPoint3Title: 'அதிக டெலிவரி கட்டணம்:',
    tradPoint3Desc: 'குறைந்தபட்ச ஆர்டரிலும் ₹30–₹60 கூடுதல் டெலிவரி கட்டணம் வசூலிக்கப்படுகிறது.',
    tradPoint4Title: 'தொடர்ச்சியான 4G/5G தேவை:',
    tradPoint4Desc: 'சுரங்கப்பாதைகள் அல்லது சிக்னல் இல்லாத இடங்களில் செயலி நின்றுவிடும்.',
    rsTitle: 'ரயில்சாதி (புறநகர் தோழன்)',
    rsTag: 'இந்திய ரயில்களுக்காகவே பிரத்யேகமாக உருவாக்கப்பட்டது',
    rsPoint1Title: '20–45 வினாடி டெலிவரி:',
    rsPoint1Desc: 'ரயில் கிளம்புவதற்குள் விற்பனையாளர் உங்கள் பெட்டிக்கே கொண்டு வருகிறார்.',
    rsPoint2Title: 'EMU பெட்டி ரேடார்:',
    rsPoint2Desc: 'பெட்டிகளின் சரியான நிலையை (பெட்டி 3, பொது பெட்டி, விற்பனையாளர் பெட்டி) காட்டுகிறது.',
    rsPoint3Title: 'அரசு நிர்ணயித்த விலை (₹5 – ₹20):',
    rsPoint3Desc: '0% கமிஷன், கூடுதல் கட்டணம் இல்லை, நேரடி ரொக்கம் அல்லது UPI.',
    rsPoint4Title: '100% ஆஃப்லைனில் இயங்கும்:',
    rsPoint4Desc: 'இணைய இணைப்பு இல்லாவிட்டாலும் கால அட்டவணை மற்றும் ஆர்டர்கள் செயல்படும்.',

    commuterBadge: 'செயல்முறை',
    commuterTitle: '3 எளிய படிகளில் தேநீர் & சிற்றுண்டி',
    commuterSubhead: '30 வினாடி ரயில் நிறுத்தங்களுக்காக உருவாக்கப்பட்டது. நீண்ட மெனு இல்லை, OTP காத்திருப்பு இல்லை, ரயில் தவறாது.',
    step1Title: 'உங்கள் ரயில் மற்றும் பெட்டியைத் தேர்ந்தெடுக்கவும்',
    step1Desc: 'செயலியைத் திறந்து, உங்கள் புறநகர் ரயிலைத் தேர்ந்தெடுத்து பெட்டியைத் தட்டவும் (எ.கா. பெட்டி 3 / GS-1).',
    step2Title: "'ஹங்கர் சிக்னல்' தட்டவும்",
    step2Desc: 'உங்களுக்கு என்ன வேண்டும் என்பதைத் தேர்ந்தெடுக்கவும் (டீ, பாதாம், சமோசா, தண்ணீர்). அருகில் உள்ள விற்பனையாளர்களுக்கு உடனே தகவல் செல்லும்.',
    step3Title: '20 வினாடிகளில் பெற்றுக்கொள்ளுங்கள்',
    step3Desc: 'ரயிலில் உள்ள விற்பனையாளர் உங்கள் இருக்கைக்கே கொண்டு வருவார். வழக்கமான ₹10–₹15 கட்டணத்தை நேரடியாக செலுத்தவும்.',
    simTitle: 'பயணி சிமுலேட்டர்',
    simSubtitle: 'ஹங்கர் சிக்னல் அனுப்பி சோதனை செய்து பாருங்கள்:',
    simSelectCoach: 'பெட்டியைத் தேர்ந்தெடுக்கவும்:',
    simCraving: 'உங்களுக்கு என்ன தேவை?',
    simSendSignal: 'ஹங்கர் சிக்னல் அனுப்பு',
    simSignalBroadcasting: 'விற்பனையாளர்களுக்கு சிக்னல் அனுப்பப்படுகிறது...',
    simBroadcastActive: 'ஹங்கர் சிக்னல் செயலில் உள்ளது!',
    simOrderPlaced: 'விற்பனையாளர் சுபாஷ் (ER-4102) ஏற்றுக்கொண்டார் • பெட்டி வாசலுக்கு வருகிறார்',
    simReset: 'மீண்டும் சிக்னல் அனுப்பு',

    vendorBadge: 'விற்பனையாளர் நன்மைகள் • Hawker Benefits',
    vendorTitle: 'உள்ளூர் வியாபாரிகள் மற்றும் ரயில் விற்பனையாளர்களுக்கு',
    vendorSubhead: 'ரயில் வியாபாரிகள் தினமும் 15 கிலோ எடையுள்ள கெண்டி மற்றும் கூடைகளை சுமந்து 12 முதல் 18 கிமீ கூட்டத்தில் நடக்கிறார்கள். ரயில்சாதி ஒரு ரூபாய் கூட கமிஷன் இல்லாமல் உறுதியான விற்பனையைத் தருகிறது.',
    vb1Title: 'வீண் அலைச்சல் இல்லை',
    vb1Desc: 'கூட்டத்தில் முட்டி மோதுவதற்கு முன்பே எந்தப் பெட்டியில் வாடிக்கையாளர் டீ கேட்கிறார் என்பதை அறியலாம்.',
    vb1Sub: 'தினசரி 40% நடை சோர்வை குறைக்கிறது',
    vb2Title: 'வியாபாரிகளிடையே மோதல் இல்லை',
    vb2Desc: 'எந்தப் பெட்டியில் ஏற்கனவே டீ வியாபாரி இருக்கிறார் என்பதை ரேடார் காட்டும். ஒரே பெட்டியில் 3 பேர் நுழைவது தவிர்க்கப்படுகிறது.',
    vb2Sub: '12 பெட்டிகளிலும் சமமான விநியோகம்',
    vb3Title: 'நேரடி ரொக்கம் / UPI (0% கமிஷன்)',
    vb3Desc: 'பயணியிடமிருந்து நேரடியாக முழுப் பணமும் உங்களுக்கே. இடைத்தரகர்களோ கமிஷனோ கிடையாது.',
    vb3Sub: '100% வருமானம் உங்கள் பாக்கெட்டிலேயே',
    vb4Title: '5 மொழிகளில் எளிய பயன்பாடு',
    vb4Desc: 'தமிழ், ஆங்கிலம், இந்தி, வங்கம், உருது மொழிகளில் முழுமையாக கிடைக்கிறது. இரைச்சலான நிலையத்திலும் தெளிவான மணி ஒலி எச்சரிக்கை.',
    vb4Sub: '60 வினாடிகளில் இணையலாம்',
    vendorQuote: '"முன்பெல்லாம் தாதரிலிருந்து தானே வரை ரயிலில் கூவி கூவி விற்க வேண்டியிருந்தது. ஒரே பெட்டியில் மூன்று டீ வியாபாரிகள் ஏறுவார்கள். ரயில்சாதி மூலம் எந்தப் பெட்டியில் டீ தேவைப்படுகிறது என்பது எனக்கு முன்கூட்டியே தெரிகிறது. என் தினசரி வருமானம் 35% அதிகரித்துள்ளது."',
    vendorQuoteAuthor: 'ரமேஷ் யாதவ்',
    vendorQuoteRole: 'மத்திய ரயில்வே பிளாட்பார்ம் & ரயில் விற்பனையாளர்',
    vendorVerified: 'சரிபார்க்கப்பட்ட வியாபாரி',

    featBadge: 'ரயில்வே தொழில்நுட்பம்',
    featTitle: 'ரயில் மற்றும் பேட்டரி சேமிப்பு அம்சங்கள்',
    featSubhead: 'இந்திய ரயில்களின் நடைமுறைக்காக உருவாக்கப்பட்டது: குறைந்த பேட்டரி, கடுமையான கூட்டம், இருண்ட சுரங்கங்கள்.',
    f1Title: '🔋 பூஜ்ஜிய பேட்டரி இழப்பு',
    f1Desc: 'நீங்கள் அசையாமல் இருக்கும்போதோ அல்லது பாக்கெட்டில் போன் இருக்கும்போதோ GPS தூங்கும். முடுக்கமானி சென்சார் மூலம் பேட்டரியை சேமிக்கிறது.',
    f1Tag: '⚡ மணிக்கு 1.2% க்கும் குறைவான பேட்டரி பயன்பாடு',
    f2Title: '📶 100% ஆஃப்லைனில் இயங்கும்',
    f2Desc: 'சுரங்கப்பாதைகள் மற்றும் கிராமப்புற நெட்வொர்க் இல்லாத இடங்களிலும் ரயில் அட்டவணைகள் முழுமையாக வேலை செய்கின்றன.',
    f2Tag: '💾 உடனடி உள்ளூர் தரவுத்தள தேடல்',
    f3Title: '🚃 முழு பெட்டி ரேடார்',
    f3Desc: 'மாற்றுத்திறனாளிகள் பெட்டி, மகளிர் சிறப்பு பெட்டி மற்றும் வியாபாரி பெட்டிகளின் சரியான அமைப்பைக் காட்டுகிறது.',
    f3Tag: '🎯 12-பெட்டி EMU காட்சி அமைப்பு',
    f4Title: '🛡️ நியாயமான ரயில்வே கட்டணம்',
    f4Desc: 'நிலையான நியாயமான விலைகள் (₹5 முதல் ₹20 வரை). மழைக்காலத்திலும் அதிக கட்டணமோ சர்ஜ் கட்டணமோ கிடையாது.',
    f4Tag: '₹ அரசு நிர்ணயித்த ரயில்வே கட்டணம்',
    toggleRadar: '12-பெட்டி ரேடார் டெமோ பார்',
    hideRadar: 'ரேடாரை மறைக்கவும்',
    toggleTimetable: 'ஆஃப்லைன் கால அட்டவணையைத் தேடுங்கள்',
    hideTimetable: 'அட்டவணையை மறைக்கவும்',

    instBadge: 'எளிய 30 வினாடி வழிகாட்டி',
    instTitle: 'செயலியை எவ்வாறு நிறுவுவது',
    instSubhead: 'ரயில்சாதி பாதுகாப்பான, திறந்த மூல ஆண்ட்ராய்டு APK கோப்பாகும். இது 30 வினாடிகளுக்குள் நிறுவப்படும் மற்றும் தேவையற்ற அனுமதிகள் எதையும் கேட்காது.',
    instBoxTitle: '4 எளிய படிகளில் ரயில்சாதியை நிறுவவும்',
    instSafe: '100% பாதுகாப்பானது, கையொப்பமிடப்பட்டது & வைரஸ் அற்றது',
    instStep1Title: "'Download APK' தட்டவும்",
    instStep1Desc: 'இந்த தளத்தில் உள்ள பதிவிறக்க பொத்தானை அழுத்தவும். 24.90 MB அளவிலான கோப்பு உடனடியாகப் பதிவிறங்கும்.',
    instStep2Title: 'பதிவிறக்கப்பட்ட கோப்பைத் திறக்கவும்',
    instStep2Desc: 'நோட்டிபிகேஷன் பட்டியை கீழே இழுத்து "RailSathi.apk" கோப்பைத் தட்டவும்.',
    instStep3Title: "'Allow from this source' இயக்கவும்",
    instStep3Desc: 'பாதுகாப்பு அனுமதி கேட்டால், அமைப்புகளில் "Allow from this source" என்பதை இயக்கவும் (முற்றிலும் பாதுகாப்பானது).',
    instStep4Title: 'மொழி மற்றும் பங்கைத் தேர்வு செய்யவும்',
    instStep4Desc: 'உங்கள் மொழியைத் தேர்ந்தெடுத்து, பயணி அல்லது விற்பனையாளர் நிலையைத் தேர்ந்தெடுத்து பயணத்தைத் தொடங்குங்கள்!',
    instPrivacy: 'தனியுரிமை உறுதி: கணக்கு பதிவு, கேமரா, தொடர்புகள் அல்லது கிரெடிட் கார்டு தகவல்கள் தேவையில்லை.',
    instCopySha: 'SHA-256 செக்சம் சரிபார்க்கவும்',
    brandGuideTitle: 'போன் பிராண்ட் வழிகாட்டி (Phone Settings)',
    brandGuideSub: 'உங்கள் போன் கூடுதல் உறுதிப்படுத்தல் கேட்டால், உங்கள் பிராண்டைத் தேர்ந்தெடுக்கவும்:',

    stickyTitle: 'RailSaathi Android APK (v1.0.0)',
    stickyVerified: 'சரிபார்க்கப்பட்டது',
    stickySub: 'நேராக உங்கள் இருக்கைக்கே டீ மற்றும் சிற்றுண்டி • 24.90 MB • இலவசம்',
    downloadBtn: 'APK பதிவிறக்குக',
    footerCtaTitle: 'பசி இல்லாத, மகிழ்ச்சியான ரயில் பயணத்திற்குத் தயாரா?',
    footerCtaSub: 'மும்பை, கொல்கத்தா மற்றும் சென்னையின் லட்சக்கணக்கான புறநகர் பயணிகளுடன் இணையுங்கள். இன்றே APK பதிவிறக்கம் செய்து பயன் பெறுங்கள்.',
    footerCtaDownload: 'ரயில்சாதி APK பதிவிறக்குக (24.90 MB)',
    footerGitHub: 'GitHub குறியீட்டு தளம்',
    footerContactTeam: 'குழுவைத் தொடர்பு கொள்ளவும்',
    footerNavTitle: 'விரைவு இணைப்புகள்',
    footerContactTitle: 'கருத்துக்களைப் பகிரவும்',
    footerBackToTop: 'மேலே செல்லவும்',
    footerLove: 'தினசரி ரயில் பயணிகள் மற்றும் நேர்மையான வியாபாரிகளுக்காக அன்புடன் உருவாக்கப்பட்டது ❤️'
  },

  // 5. Urdu (اردو)
  ur: {
    appName: 'ریل ساتھی',
    appNativeName: 'RailSaathi',
    appTagline: 'انڈین ریلویز لوکل مسافر اور دکاندار کا سمارٹ ساتھی',
    navDifference: 'بڑا فرق',
    navCommuters: 'مسافروں کے لیے',
    navVendors: 'وینڈرز کے لیے',
    navFeatures: 'خصوصیات',
    navInstall: 'انسٹال کیسے کریں',
    tunnelMode: 'ٹنل موڈ',
    online: 'آن لائن',
    dataSaver: 'ڈیٹا سیور',
    dataSaverOn: '2G سیور آن',
    seniorMode: 'سینئر موڈ',
    getApk: 'APK حاصل کریں (v1.0)',

    badgeSuburban: 'ہندوستان کے روزانہ 2 کروڑ 40 لاکھ لوکل ٹرین مسافروں کے لیے تیار کردہ',
    badgeFairRates: '0% کمیشن • سرکاری ریلوے ریٹ',
    heroHeadline: 'لوکل ٹرین میں 30 سیکنڈ کا اسٹاپ؟ چائے اور ناشتہ سیدھے آپ کی سیٹ پر۔',
    heroSubheadline: 'پانی کی بوتل یا گرم چائے کی خاطر اب ٹرین چھوٹنے کا کوئی خوف نہیں۔ ریل ساتھی آپ کو آپ کے ڈبے کے تصدیق شدہ دکانداروں سے براہ راست جوڑتا ہے۔',
    roleSelectLabel: 'اپنا کردار منتخب کریں:',
    travelerRoleBtn: 'میں مسافر ہوں 🎒',
    vendorRoleBtn: 'میں دکاندار / پھیری والا ہوں 🧺',
    travelerCardTitle: 'ٹرین چھوٹنے کا کوئی خطرہ نہیں',
    travelerCardDesc: 'جو کھانا پینا چاہیں منتخب کریں (چائے، بادام، سموسہ، ریل نیر)۔ ٹرین چلنے سے پہلے پھیری والا سیدھا آپ کی سیٹ یا گیٹ پر پہنچا دے گا۔ مناسب ₹10–₹15 قیمت پر۔',
    vendorCardTitle: 'بے مقصد دوڑ ختم اور 0% کمیشن',
    vendorCardDesc: 'پہلے ہی معلوم ہو جائے گا کہ کس ڈبے میں مسافر بھوکے بیٹھے ہیں۔ ایک ہی ڈبے میں دو وینڈرز کا ٹکراؤ ختم۔ اپنی کمائی کا 100% پیسہ اپنی جیب میں رکھیں۔',
    downloadApkBtn: '⬇️ ریل ساتھی اینڈرائیڈ APK (v1.0) ڈاؤن لوڈ کریں',
    howItWorksBtn: '📖 یہ کیسے کام کرتا ہے',
    openSource: 'اوپن سورس کوڈ (Open Source)',
    verifySha: 'SHA-256 تصدیقی کوڈ',
    mockupGps: 'GPS سلیپنگ موڈ',
    mockupTravelerMode: 'مسافر موڈ',
    mockupVendorMode: 'وینڈر ریڈار موڈ',
    mockupOfflineReady: 'آف لائن تیار',
    mockupActiveSignal: 'ٹرین نمبر #31821',
    mockupHungerActive: 'ہنگر سگنل فعال ہے',
    mockupVendorIncoming: 'وینڈر: سبھاش (ER-4102)',
    mockupReachingDoor: '18 سیکنڈ میں دروازے پر پہنچ رہے ہیں',
    mockupRadarActive: 'وینڈر ریڈار چالو ہے',
    mockupAcceptOrder: 'آرڈر قبول کریں',
    mockupSkip: 'چھوڑیں',
    mockupFormationTitle: '12-ڈبوں کی ای ایم یو تشکیل',
    mockupExploreCommuter: 'مسافر ڈیمو آزمائیں',
    mockupExploreVendor: 'وینڈر فوائد دیکھیں',
    statDailyPassengers: '2 کروڑ 40 لاکھ',
    statDailyLabel: 'روزانہ کے ہندوستانی لوکل مسافر',
    statHaltWindow: '20–45 سیکنڈ',
    statHaltLabel: 'اسٹیشن رکنے کا مختصر وقت',
    statZeroCut: '0% کٹوتی',
    statZeroCutLabel: 'دکاندار سے کوئی کمیشن نہیں',
    statOffline: '100%',
    statOfflineLabel: 'بغیر انٹرنیٹ آف لائن ٹائم ٹیبل',

    diffBadge: 'بڑا فرق',
    diffHeadlinePre: 'ریل ساتھی کیوں ',
    diffHeadlinePost: 'Zepto، Blinkit یا IRCTC سے بالکل الگ ہے',
    diffSubhead: 'کوئیک کامرس ایپس سڑکوں پر موٹر سائیکلوں کے لیے بنائی گئی تھیں۔ لوکل ٹرینیں صرف 20 سے 45 سیکنڈ کے اسٹاپ پر رکتی ہیں جہاں کوئی گلی کا پتہ یا پینٹری کار نہیں ہوتی۔ جانیے ریل ساتھی اسے کیسے حل کرتا ہے:',
    tradTitle: 'Blinkit، Zepto، Swiggy اور IRCTC',
    tradTag: 'روایتی کوئیک کامرس',
    tradPoint1Title: '10–30 منٹ لگتے ہیں:',
    tradPoint1Desc: '30 سیکنڈ رکنے والی لوکل ٹرینوں میں بالکل ناکارہ۔',
    tradPoint2Title: 'گلی کا پتہ درکار ہوتا ہے:',
    tradPoint2Desc: 'ڈیلیوری بوائے چلتی ٹرین یا مخصوص لوکل ڈبے تک نہیں پہنچ سکتا۔',
    tradPoint3Title: 'بھاری ڈیلیوری چارجز:',
    tradPoint3Desc: 'کم سے کم آرڈر پر بھی ₹30–₹60 اضافی ڈیلیوری فیس وصول کی جاتی ہے۔',
    tradPoint4Title: 'مسلسل 4G/5G ضروری ہے:',
    tradPoint4Desc: 'سرنگوں یا کمزور سگنل والے علاقوں میں ایپ گھومتی رہ جاتی ہے۔',
    rsTitle: 'ریل ساتھی (لوکل ٹرین کا رفیق)',
    rsTag: 'ہندوستانی لوکل ٹرینوں کے لیے خاص طور پر تیار کردہ',
    rsPoint1Title: '20–45 سیکنڈ کی تیز ترسیل:',
    rsPoint1Desc: 'ٹرین کی سیٹی بجنے سے پہلے دکاندار آپ کے ڈبے یا دروازے پر پہنچ جاتا ہے۔',
    rsPoint2Title: 'ای ایم یو ڈبہ ریڈار:',
    rsPoint2Desc: 'ہر ڈبے کی درست پوزیشن (ڈبہ نمبر 3، جنرل یا وینڈر ڈبہ) دکھاتا ہے۔',
    rsPoint3Title: 'سرکاری منصفانہ ریٹ (₹5 – ₹20):',
    rsPoint3Desc: '0% کمیشن، کوئی اضافی چارج نہیں، نقد یا یو پی آئی ادائیگی۔',
    rsPoint4Title: '100% آف لائن کام کرتا ہے:',
    rsPoint4Desc: 'انٹرنیٹ نہ ہونے پر بھی ٹائم ٹیبل، ڈبوں کا نقشہ اور آرڈرز مکمل فعال رہتے ہیں۔',

    commuterBadge: 'طریقہ کار',
    commuterTitle: '3 آسان مراحل میں چائے اور ناشتہ حاصل کریں',
    commuterSubhead: '30 سیکنڈ کے اسٹیشن اسٹاپ کے لیے خاص طور پر تیار۔ نہ لمبا مینو، نہ او ٹی پی کا انتظار، نہ ٹرین چھوٹنے کا خوف۔',
    step1Title: 'اپنی ٹرین اور ڈبہ منتخب کریں',
    step1Desc: 'ایپ آف لائن یا آن لائن کھولیں۔ اپنی ٹرین منتخب کریں اور اپنے ڈبے پر ٹیپ کریں (مثلاً ڈبہ 3 / GS-1)۔',
    step2Title: "'ہنگر سگنل' پر ٹیپ کریں",
    step2Desc: 'جو کھانا چاہیں منتخب کریں (کڑک چائے، بھنا بادام، سموسہ، ریل نیر)۔ قریبی تصدیق شدہ دکانداروں کو فوراً اطلاع ملتی ہے۔',
    step3Title: '20 سیکنڈ میں وصول کریں',
    step3Desc: 'ٹرین یا پلیٹ فارم کا دکاندار براہ راست آپ کی سیٹ یا دروازے پر ملتا ہے۔ عام ریٹ پر نقد رقم دیں۔',
    simTitle: 'مسافر سمولیٹر',
    simSubtitle: 'ابھی ہنگر سگنل بھیج کر رفتار کا مشاہدہ کریں:',
    simSelectCoach: 'اپنا ڈبہ منتخب کریں:',
    simCraving: 'آپ کو کیا چاہیے؟',
    simSendSignal: 'ہنگر سگنل بھیجیں',
    simSignalBroadcasting: 'قریبی دکانداروں کو سگنل بھیجا جا رہا ہے...',
    simBroadcastActive: 'ہنگر سگنل فعال ہو گیا!',
    simOrderPlaced: 'وینڈر سبھاش (ER-4102) نے قبول کر لیا • دروازے کی طرف بڑھ رہے ہیں',
    simReset: 'دوسرا سگنل بھیجیں',

    vendorBadge: 'وینڈرز کے لیے فوائد • Hawker Benefits',
    vendorTitle: 'مقامی دکانداروں اور پھیری والوں کے لیے',
    vendorSubhead: 'لوکل ٹرین کے پھیری والے روزانہ 15 کلو کا بھاری سامان اٹھا کر 12 سے 18 کلومیٹر بھیڑ میں چلتے ہیں۔ ریل ساتھی بغیر ایک روپے کمیشن کے بے مقصد بھاگ دوڑ کو یقینی کمائی میں بدلتا ہے۔',
    vb1Title: 'بے مقصد بھاگ دوڑ ختم',
    vb1Desc: 'بھیڑ بھرے دروازے میں زبردستی گھسنے سے پہلے ہی معلوم ہو جائے گا کہ کس ڈبے سے ہنگر سگنل آیا ہے۔',
    vb1Sub: 'روزانہ 40% جسمانی تھکن کم کرتا ہے',
    vb2Title: 'وینڈرز کا باہمی ٹکراؤ ختم',
    vb2Desc: 'کوچ ریڈار بتاتا ہے کہ کس ڈبے میں پہلے سے چائے یا سموسے والا موجود ہے۔ ایک ہی ڈبے میں تین چائے والے نہیں گھسیں گے!',
    vb2Sub: 'تمام 12 ڈبوں میں منصفانہ تقسیم',
    vb3Title: 'براہ راست نقد / یو پی آئی کمائی (0% کمیشن)',
    vb3Desc: 'مسافر سے براہ راست پوری رقم آپ کے ہاتھ میں۔ کوئی کمیشن یا دلال نہیں۔',
    vb3Sub: '100% کمائی سیدھی آپ کی جیب میں',
    vb4Title: '5 زبانوں میں آسان استعمال',
    vb4Desc: 'اردو، ہندی، بنگالی، تامل اور انگریزی میں دستیاب۔ اسٹیشن کے شور میں بھی واضح گھنٹی کی آواز کے الرٹس۔',
    vb4Sub: '60 سیکنڈ میں رجسٹریشن',
    vendorQuote: '"پہلے دادر سے تھانے تک ڈبوں میں آوازیں لگاتے ہوئے جانا پڑتا تھا۔ اکثر ایک ہی ڈبے میں تین چائے والے گھس جاتے تھے۔ ریل ساتھی کے ذریعے مجھے پتہ ہوتا ہے کہ کس ڈبے میں چائے کی طلب ہے۔ میری کمائی میں 35 فیصد اضافہ ہوا ہے۔"',
    vendorQuoteAuthor: 'رمیش یادو',
    vendorQuoteRole: 'سینٹرل ریلوے پلیٹ فارم و ٹرین وینڈر (دادر جنکشن)',
    vendorVerified: 'تصدیق شدہ دکاندار',

    featBadge: 'لوکل ٹرین ٹیکنالوجی',
    featTitle: 'ٹرین اور بیٹری فرینڈلی فیچرز',
    featSubhead: 'ہندوستانی لوکل ٹرینوں کی زمینی ضروریات کے تحت تیار: کمزور بیٹری، شدید رش، اندھیری سرنگیں اور سخت ریلوے اصول۔',
    f1Title: '🔋 صفر بیٹری خرچ',
    f1Desc: 'فون ساکت رہنے پر یا جیب میں ہونے پر GPS سلیپ موڈ میں چلا جاتا ہے۔ ایکسلرومیٹر سنسر دن بھر بیٹری بچاتا ہے۔',
    f1Tag: '⚡ فی گھنٹہ 1.2% سے بھی کم بیٹری خرچ',
    f2Title: '📶 100% آف لائن کام کرتا ہے',
    f2Desc: 'سرنگوں اور نیٹ ورک نہ ہونے پر بھی ٹائم ٹیبل اور ڈبوں کا نقشہ فون میں ہی محفوظ اور فعال رہتا ہے۔',
    f2Tag: '💾 فوری لوکل ڈیٹا بیس تلاش',
    f3Title: '🚃 مکمل ڈبہ ریڈار',
    f3Desc: 'معذور مسافروں، خواتین کے لیے مخصوص اور وینڈر ڈبوں کی درست پوزیشن دکھاتا ہے۔',
    f3Tag: '🎯 12-ڈبوں کی ای ایم یو نقشہ بندی',
    f4Title: '🛡️ باقاعدہ ریلوے ریٹ',
    f4Desc: 'مقررہ ایماندارانہ قیمتیں (₹5 سے ₹20)۔ بارش کے موسم میں بھی کوئی اوور چارجنگ یا سرج فیس نہیں۔',
    f4Tag: '₹ حکومت کے طے شدہ ریلوے نرخ',
    toggleRadar: '12-ڈبوں کا ریڈار ڈیمو دیکھیں',
    hideRadar: 'ریڈار بند کریں',
    toggleTimetable: 'آف لائن لوکل ٹائم ٹیبل تلاش کریں',
    hideTimetable: 'ٹائم ٹیبل بند کریں',

    instBadge: 'آسان 30 سیکنڈ گائیڈ',
    instTitle: 'ایپ کو کیسے انسٹال کریں',
    instSubhead: 'ریل ساتھی ایک تصدیق شدہ، اوپن سورس اینڈرائیڈ APK فائل ہے۔ یہ 30 سیکنڈ سے بھی کم وقت میں انسٹال ہو جاتی ہے اور کسی غیر ضروری اجازت کی ضرورت نہیں۔',
    instBoxTitle: '4 آسان مراحل میں ریل ساتھی انسٹال کریں',
    instSafe: '100% محفوظ، تصدیق شدہ اور وائرس سے پاک',
    instStep1Title: "'Download APK' پر ٹیپ کریں",
    instStep1Desc: 'اس صفحے پر موجود ڈاؤن لوڈ کے بٹن کو دبائیں۔ 24.90 ایم بی کی آفیشل فائل فوری طور پر ڈاؤن لوڈ ہو جائے گی۔',
    instStep2Title: 'ڈاؤن لوڈ شدہ فائل کھولیں',
    instStep2Desc: 'نوٹیفکیشن بار کو نیچے کھینچیں اور مکمل ہوئی "RailSathi.apk" فائل پر ٹیپ کریں۔',
    instStep3Title: "'Allow from this source' آن کریں",
    instStep3Desc: 'اگر اینڈرائیڈ سیکیورٹی اجازت مانگے تو سیٹنگز میں جا کر "Allow from this source" آن کریں (یہ بالکل محفوظ ہے)۔',
    instStep4Title: 'زبان اور کردار منتخب کریں',
    instStep4Desc: 'اپنی پسندیدہ زبان (اردو، ہندی، بنگالی، تامل یا انگریزی) منتخب کریں اور سفر شروع کریں!',
    instPrivacy: 'رازداری کی ضمانت: کسی اکاؤنٹ سائن اپ، کیمرہ، رابطوں یا بینک کارڈ کی معلومات کی قطعی ضرورت نہیں۔',
    instCopySha: 'SHA-256 چیک سم کی تصدیق کریں',
    brandGuideTitle: 'اسمارٹ فون برانڈ گائیڈ (Brand Settings)',
    brandGuideSub: 'اگر آپ کے فون کی سیٹنگز میں کوئی سوال پوچھے تو اپنی کمپنی منتخب کریں:',

    stickyTitle: 'RailSaathi Android APK (v1.0.0)',
    stickyVerified: 'تصدیق شدہ',
    stickySub: 'براہ راست آپ کی سیٹ پر چائے اور ناشتہ • 24.90 MB • مفت',
    downloadBtn: 'ڈاؤن لوڈ APK',
    footerCtaTitle: 'بغیر پریشانی اور بھوک سے پاک لوکل ٹرین سفر کے لیے تیار؟',
    footerCtaSub: 'ممبئی، کولکتہ اور چنئی کے لاکھوں مسافروں کے ساتھ شامل ہوں۔ آج ہی APK ڈاؤن لوڈ کریں اور سیٹ پر چائے ناشتہ حاصل کریں۔',
    footerCtaDownload: 'ریل ساتھی APK ڈاؤن لوڈ کریں (24.90 MB)',
    footerGitHub: 'گٹ ہب کوڈ ریپوزٹری',
    footerContactTeam: 'ٹیم سے رابطہ کریں',
    footerNavTitle: 'فوری لنکس',
    footerContactTitle: 'رابطہ کریں اور رائے دیں',
    footerBackToTop: 'اوپر جائیں',
    footerLove: 'ہندوستانی ریلوے کے مسافروں اور ایماندار پھیری والوں کے لیے خلوص سے تیار کردہ ❤️'
  },

  // Fallbacks for mr and te if someone passes them
  mr: {} as any,
  te: {} as any
};

// Populate mr and te with safe fallbacks to en
TRANSLATIONS.mr = { ...TRANSLATIONS.hi, appName: 'रेलसाथी', appTagline: 'भारतीय रेल्वे स्मार्ट प्रवास आणि विक्रेता सोबती' };
TRANSLATIONS.te = { ...TRANSLATIONS.en, appName: 'రైల్సాథీ', appTagline: 'భారతీయ రైల్వే స్మార్ట్ ప్రయాణ & విక్రేత సహచరుడు' };
