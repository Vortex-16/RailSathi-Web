import { LanguageCode } from '../types';

export interface AppTranslation {
  appName: string;
  appTagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  downloadApk: string;
  viewCodebase: string;
  exploreFeatures: string;
  installGuide: string;
  quickStart: string;
  commuterMode: string;
  vendorMode: string;
  seniorMode: string;
  batterySavings: string;
  offlineFirst: string;
  hungerSignal: string;
  coachRadar: string;
  selectLanguage: string;
  lowDataMode: string;
  onlineStatus: string;
  offlineStatus: string;
  simulateOffline: string;
  stationFinder: string;
  sendSignal: string;
  acceptOrder: string;
  delivered: string;
  regulatedTariff: string;
  noOvercharging: string;
}

export const TRANSLATIONS: Record<LanguageCode, AppTranslation> = {
  en: {
    appName: 'RailSaathi',
    appTagline: 'Indian Railways Smart Commute & Vendor Companion',
    heroHeadline: 'The Digital Lifeline for 24 Million Daily Indian Commuters',
    heroSubheadline: 'Direct-to-seat station snacks, authentic EMU coach radar, and 100% offline timetables built with battery-smart foreground tracking.',
    downloadApk: 'Download Android APK (v1.0.0)',
    viewCodebase: 'View GitHub Repository',
    exploreFeatures: 'Try Live Companion Simulator',
    installGuide: 'Installation Guide',
    quickStart: 'Quick-Start Walkthrough',
    commuterMode: 'Passenger / Commuter',
    vendorMode: 'Platform Vendor / Hawker',
    seniorMode: 'Senior Citizen Mode',
    batterySavings: '85% Battery Saved',
    offlineFirst: '100% Offline Timetables',
    hungerSignal: 'Hunger Signal Ordering',
    coachRadar: '12-Car EMU Coach Radar',
    selectLanguage: 'Language',
    lowDataMode: '2G/3G Data Saver',
    onlineStatus: 'Online',
    offlineStatus: 'Offline Mode Active',
    simulateOffline: 'Test Tunnel / Offline Mode',
    stationFinder: 'Suburban Station Directory',
    sendSignal: 'Send Hunger Signal',
    acceptOrder: 'Accept & Lock Order',
    delivered: 'Mark Delivered',
    regulatedTariff: 'Strict Railway Tariff (No Overcharging)',
    noOvercharging: 'Zero predatory markups. Standard IRCTC & Zonal pricing.'
  },
  hi: {
    appName: 'रेलसाथी',
    appTagline: 'भारतीय रेल स्मार्ट दैनिक यात्रा एवं वेंडर साथी',
    heroHeadline: 'दैनिक 2.4 करोड़ रेल यात्रियों की डिजिटल जीवनरेखा',
    heroSubheadline: 'सीट तक जलपान डिलीवरी, वास्तविक ईएमयू कोच रडार, और 100% ऑफलाइन समय सारिणी जो बैटरी बचाती है।',
    downloadApk: 'एंड्रॉइड एपीके डाउनलोड करें (v1.0.0)',
    viewCodebase: 'गिटहब कोड देखें',
    exploreFeatures: 'लाइव सिमुलेटर चलाएं',
    installGuide: 'इंस्टॉलेशन गाइड',
    quickStart: 'त्वरित शुरुआत गाइड',
    commuterMode: 'यात्री / कम्यूटर',
    vendorMode: 'प्लेटफॉर्म वेंडर / फेरीवाला',
    seniorMode: 'वरिष्ठ नागरिक मोड',
    batterySavings: '85% बैटरी की बचत',
    offlineFirst: '100% ऑफलाइन समय-सारणी',
    hungerSignal: 'भूख संकेत (हंगर सिग्नल)',
    coachRadar: '12-डिब्बा ईएमयू कोच रडार',
    selectLanguage: 'भाषा',
    lowDataMode: '2जी/3जी डेटा सेवर',
    onlineStatus: 'ऑनलाइन',
    offlineStatus: 'ऑफलाइन मोड सक्रिय',
    simulateOffline: 'टनल / ऑफलाइन टेस्ट करें',
    stationFinder: 'उपनगरीय स्टेशन खोजें',
    sendSignal: 'हंगर सिग्नल भेजें',
    acceptOrder: 'ऑर्डर स्वीकार एवं लॉक करें',
    delivered: 'डिलीवरी पूर्ण',
    regulatedTariff: 'सख्त रेलवे दर सूची (कोई अधिक शुल्क नहीं)',
    noOvercharging: 'मानक रेलवे दरें लागू। अधिक वसूली पूरी तरह प्रतिबंधित।'
  },
  mr: {
    appName: 'रेलसाथी',
    appTagline: 'भारतीय रेल्वे स्मार्ट प्रवास आणि विक्रेता सोबती',
    heroHeadline: 'दररोजच्या 2.4 कोटी लोकल प्रवाशांसाठी डिजिटल साथी',
    heroSubheadline: 'थेट सीटवर चहा-नाश्ता, अचूक ईएमयू डबा रडार आणि 100% ऑफलाइन वेळापत्रक.',
    downloadApk: 'अँड्रॉइड एपीके डाउनलोड करा (v1.0.0)',
    viewCodebase: 'गिटहब कोडबॅस पहा',
    exploreFeatures: 'लाइव्ह सिम्युलेटर वापरा',
    installGuide: 'इन्स्टॉलेशन मार्गदर्शक',
    quickStart: 'सुलभ ऑनबोर्डिंग',
    commuterMode: 'लोकल प्रवासी',
    vendorMode: 'अधिकृत फेरीवाला / विक्रेता',
    seniorMode: 'ज्येष्ठ नागरिक मोड',
    batterySavings: '85% बॅटरी बचत',
    offlineFirst: '100% ऑफलाइन लोकल वेळापत्रक',
    hungerSignal: 'हंगर सिग्नल मागवा',
    coachRadar: '12-डब्यांची लोकल रचना',
    selectLanguage: 'भाषा',
    lowDataMode: 'डेटा सेव्हर मोड',
    onlineStatus: 'ऑनलाइन',
    offlineStatus: 'ऑफलाइन मोड सुरू',
    simulateOffline: 'बोगदा / ऑफलाइन चाचणी',
    stationFinder: 'उपनगरीय स्थानक शोधा',
    sendSignal: 'नाश्ता मागवा',
    acceptOrder: 'ऑर्डर स्वीकारा',
    delivered: 'वितरित झाले',
    regulatedTariff: 'रेल्वेचे अधिकृत दर',
    noOvercharging: 'अवाजवी दर आकारणीस प्रतिबंध.'
  },
  ta: {
    appName: 'ரயில்சாதி',
    appTagline: 'இந்திய ரயில்வே பயணிகள் மற்றும் விற்பனையாளர் தோழன்',
    heroHeadline: 'தினசரி 2.4 கோடி ரயில் பயணிகளுக்கான டிஜிட்டல் தோழன்',
    heroSubheadline: 'இருக்கைக்கே உணவு, EMU பெட்டி ரேடார் மற்றும் பேட்டரி மிச்சப்படுத்தும் ஆஃப்லைன் கால அட்டவணை.',
    downloadApk: 'APK பதிவிறக்குக (v1.0.0)',
    viewCodebase: 'GitHub குறியீடு',
    exploreFeatures: 'நேரலை மாதிரி முயற்சி',
    installGuide: 'நிறுவல் கையேடு',
    quickStart: 'விரைவு தொடக்கம்',
    commuterMode: 'பயணி',
    vendorMode: 'விற்பனையாளர்',
    seniorMode: 'மூத்த குடிமக்கள் முறை',
    batterySavings: '85% பேட்டரி சேமிப்பு',
    offlineFirst: '100% ஆஃப்லைன் கால அட்டவணை',
    hungerSignal: 'உணவு சிக்னல் அனுப்பு',
    coachRadar: 'EMU பெட்டி ரேடார்',
    selectLanguage: 'மொழி',
    lowDataMode: 'டேட்டா சேமிப்பு',
    onlineStatus: 'ஆன்லைன்',
    offlineStatus: 'ஆஃப்லைன் முறை',
    simulateOffline: 'சுரங்கப்பாதை சோதனை',
    stationFinder: 'ரயில் நிலையங்கள்',
    sendSignal: 'உணவு சிக்னல்',
    acceptOrder: 'ஆர்டரை ஏற்றுக்கொள்',
    delivered: 'வழங்கப்பட்டது',
    regulatedTariff: 'ரயில்வே அரசு கட்டணங்கள்',
    noOvercharging: 'அதிக கட்டணம் வசூலிக்கப்படாது.'
  },
  te: {
    appName: 'రైల్సాథీ',
    appTagline: 'భారతీయ రైల్వే స్మార్ట్ ప్రయాణ & విక్రేత సహచరుడు',
    heroHeadline: 'రోజువారీ 2.4 కోట్ల రైలు ప్రయాణికుల డిజిటల్ తోడు',
    heroSubheadline: 'సీటు వద్దకే చిరుతిళ్లు, ఖచ్చితమైన EMU కోచ్ రాడార్ మరియు ఆఫ్‌లైన్ రైలు వేళలు.',
    downloadApk: 'ఆండ్రాయిడ్ APK డౌన్‌లోడ్ (v1.0.0)',
    viewCodebase: 'GitHub కోడ్‌బేస్',
    exploreFeatures: 'లైవ్ సిమ్యులేటర్ ప్రారంభించండి',
    installGuide: 'ఇన్‌స్టాలేషన్ గైడ్',
    quickStart: 'శీఘ్ర ప్రారంభం',
    commuterMode: 'ప్రయాణికుడు',
    vendorMode: 'ప్లాట్‌ఫారమ్ విక్రేత',
    seniorMode: 'సీనియర్ సిటిజెన్ మోడ్',
    batterySavings: '85% బ్యాటరీ ఆదా',
    offlineFirst: '100% ఆఫ్‌లైన్ టైమ్‌టేబుల్',
    hungerSignal: 'ఆకలి సిగ్నల్ ఆర్డర్',
    coachRadar: 'EMU కోచ్ రాడార్',
    selectLanguage: 'భాష',
    lowDataMode: 'డేటా సేవర్',
    onlineStatus: 'ఆన్‌లైన్',
    offlineStatus: 'ఆఫ్‌లైన్ మోడ్',
    simulateOffline: 'సొరంగం / ఆఫ్‌లైన్ పరీక్ష',
    stationFinder: 'సబర్బన్ స్టేషన్లు',
    sendSignal: 'సిగ్నల్ పంపు',
    acceptOrder: 'ఆర్డర్ లాక్ చేయి',
    delivered: 'చేరవేయబడింది',
    regulatedTariff: 'నియంత్రిత రైల్వే ధరలు',
    noOvercharging: 'అదనపు ఛార్జీలు లేవు.'
  },
  bn: {
    appName: 'রেলসাথী',
    appTagline: 'ভারতীয় রেলওয়ে স্মার্ট লোকাল যাত্রী ও হকার সাথী',
    heroHeadline: 'প্রতিদিনের ২ কোটি ৪০ লক্ষ ট্রেন যাত্রীর নির্ভরযোগ্য ডিজিটাল সাথী',
    heroSubheadline: 'সিটে বসেই গরম চা-সিঙ্গারা-ঝালমুড়ি, ইএমইউ কামরা রাডার এবং ব্যাটারি-বান্ধব ১০০% অফলাইন সময়সূচি।',
    downloadApk: 'অ্যান্ড্রয়েড APK ডাউনলোড করুন (v1.0.0)',
    viewCodebase: 'গিটহাব কোড দেখুন',
    exploreFeatures: 'লাইভ কম্প্যানিয়ন ডেমো চালান',
    installGuide: 'ইনস্টলেশন গাইড',
    quickStart: 'সহজ অনবোর্ডিং গাইড',
    commuterMode: 'দৈনিক লোকাল যাত্রী',
    vendorMode: 'অনুমোদিত হকার / বিক্রেতা',
    seniorMode: 'প্রবীণ নাগরিক মোড (সহজ ইন্টারফেস)',
    batterySavings: '৮৫% ব্যাটারি সাশ্রয়',
    offlineFirst: '১০০% অফলাইন সময়সূচি',
    hungerSignal: 'হাঙ্গার সিগন্যাল (খাবারের অর্ডার)',
    coachRadar: '১২-বগির ইএমইউ কম্পোজিশন',
    selectLanguage: 'ভাষা নির্বাচন',
    lowDataMode: '২জি/৩জি লো-ডাটা সেভার',
    onlineStatus: 'অনলাইন সংযুক্ত',
    offlineStatus: 'অফলাইন মোড সক্রিয়',
    simulateOffline: 'টানেল / অফলাইন পরীক্ষা',
    stationFinder: 'শিয়ালদহ ও হাওড়া স্টেশন ডিরেক্টরি',
    sendSignal: 'হাঙ্গার সিগন্যাল পাঠান',
    acceptOrder: 'অর্ডার গ্রহণ ও লক করুন',
    delivered: 'ডেলিভারি সম্পন্ন',
    regulatedTariff: 'নিয়ন্ত্রিত রেলওয়ে শুল্ক (কোনো অতিরিক্ত মূল্য নয়)',
    noOvercharging: 'রেলওয়ের নির্ধারিত সর্বোচ্চ মূল্য তালিকা।'
  }
};
