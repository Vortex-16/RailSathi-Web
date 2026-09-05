import { Station, TrainSchedule, CoachDetail, FoodItem } from '../types';

export const OFFICIAL_APK_DOWNLOAD_URL = 'https://github.com/Vortex-16/RailSathi/releases/download/v1.0.0/RailSathi.apk';
export const GITHUB_REPO_URL = 'https://github.com/Vortex-16/RailSathi';
export const APK_VERSION = 'v1.0.0';
export const APK_SIZE = '24.90 MB';
export const MIN_ANDROID_VERSION = 'Android 8.0 (API 26+)';
export const TARGET_ANDROID_VERSION = 'Android 15 (API 35)';
export const SHA256_CHECKSUM = '7b9e38d4f2a1c099308bb8742e91ca0f72bc942b03657bfdfbb3971e48f7d983';

export const STATIONS: Station[] = [
  // Eastern Railway (Sealdah & Howrah)
  {
    code: 'SDAH',
    name: 'Sealdah Main',
    hindiName: 'सियालदह',
    bengaliName: 'শিয়ালদহ',
    zone: 'ER',
    suburbanLine: 'Sealdah North & South Mainlines',
    latitude: 22.5697,
    longitude: 88.3713,
    platforms: 21,
    dailyFootfall: '1.8 Million'
  },
  {
    code: 'HWH',
    name: 'Howrah Junction',
    hindiName: 'हावड़ा जंक्शन',
    bengaliName: 'হাওড়া জংশন',
    zone: 'ER',
    suburbanLine: 'Howrah Main & Chord Lines',
    latitude: 22.5839,
    longitude: 88.3426,
    platforms: 23,
    dailyFootfall: '2.5 Million'
  },
  {
    code: 'DDJ',
    name: 'Dum Dum Junction',
    hindiName: 'दमदम जंक्शन',
    bengaliName: 'দমদম জংশন',
    zone: 'ER',
    suburbanLine: 'Sealdah North Mainline',
    latitude: 22.6219,
    longitude: 88.3934,
    platforms: 5,
    dailyFootfall: '450,000'
  },
  {
    code: 'BP',
    name: 'Barrackpore',
    hindiName: 'बैरकपुर',
    bengaliName: 'ব্যারাকপুর',
    zone: 'ER',
    suburbanLine: 'Sealdah North Mainline',
    latitude: 22.7667,
    longitude: 88.3667,
    platforms: 5,
    dailyFootfall: '280,000'
  },
  {
    code: 'NH',
    name: 'Naihati Junction',
    hindiName: 'नैहाटी जंक्शन',
    bengaliName: 'নৈহাটি জংশন',
    zone: 'ER',
    suburbanLine: 'Sealdah North Line',
    latitude: 22.8986,
    longitude: 88.4239,
    platforms: 6,
    dailyFootfall: '320,000'
  },
  {
    code: 'RHA',
    name: 'Ranaghat Junction',
    hindiName: 'रानाघाट जंक्शन',
    bengaliName: 'রানাঘাট জংশন',
    zone: 'ER',
    suburbanLine: 'Sealdah - Ranaghat Section',
    latitude: 23.1812,
    longitude: 88.5833,
    platforms: 7,
    dailyFootfall: '210,000'
  },

  // Western & Central Railway (Mumbai Suburban)
  {
    code: 'CCG',
    name: 'Churchgate',
    hindiName: 'चर्चगेट',
    marathiName: 'चर्चगेट',
    zone: 'WR',
    suburbanLine: 'Western Suburban Line',
    latitude: 18.9355,
    longitude: 72.8272,
    platforms: 4,
    dailyFootfall: '900,000'
  },
  {
    code: 'DDR',
    name: 'Dadar Junction',
    hindiName: 'दादर जंक्शन',
    marathiName: 'दादर जंक्शन',
    zone: 'WR',
    suburbanLine: 'Western / Central Interchange',
    latitude: 19.0178,
    longitude: 72.8427,
    platforms: 8,
    dailyFootfall: '1.2 Million'
  },
  {
    code: 'BVI',
    name: 'Borivali',
    hindiName: 'बोरीवली',
    marathiName: 'बोरीवली',
    zone: 'WR',
    suburbanLine: 'Western Suburban Line',
    latitude: 19.2291,
    longitude: 72.8572,
    platforms: 10,
    dailyFootfall: '850,000'
  },
  {
    code: 'CSMT',
    name: 'Chhatrapati Shivaji Maharaj Terminus',
    hindiName: 'छत्रपति शिवाजी महाराज टर्मिनस',
    marathiName: 'छत्रपती शिवाजी महाराज टर्मिनस',
    zone: 'CR',
    suburbanLine: 'Central Suburban Main & Harbour',
    latitude: 18.9402,
    longitude: 72.8358,
    platforms: 18,
    dailyFootfall: '1.5 Million'
  },
  {
    code: 'TNA',
    name: 'Thane',
    hindiName: 'ठाणे',
    marathiName: 'ठाणे',
    zone: 'CR',
    suburbanLine: 'Central Suburban Mainline',
    latitude: 19.1860,
    longitude: 72.9759,
    platforms: 10,
    dailyFootfall: '920,000'
  },

  // Southern Railway (Chennai Suburban)
  {
    code: 'MAS',
    name: 'Chennai Central Suburban',
    hindiName: 'चेन्नई सेंट्रल',
    tamilName: 'சென்னை சென்ட்ரல்',
    zone: 'SR',
    suburbanLine: 'Chennai West & North Suburbs',
    latitude: 13.0827,
    longitude: 80.2707,
    platforms: 7,
    dailyFootfall: '650,000'
  },
  {
    code: 'MSB',
    name: 'Chennai Beach',
    hindiName: 'चेन्नई बीच',
    tamilName: 'சென்னை கடற்கரை',
    zone: 'SR',
    suburbanLine: 'Chennai South & MRTS Line',
    latitude: 13.0924,
    longitude: 80.2925,
    platforms: 8,
    dailyFootfall: '380,000'
  },
  {
    code: 'TBM',
    name: 'Tambaram',
    hindiName: 'तांबरम',
    tamilName: 'தாம்பரம்',
    zone: 'SR',
    suburbanLine: 'Chennai Beach - Chengalpattu Line',
    latitude: 12.9249,
    longitude: 80.1265,
    platforms: 8,
    dailyFootfall: '410,000'
  },

  // Northern Railway (Delhi Suburban)
  {
    code: 'NDLS',
    name: 'New Delhi',
    hindiName: 'नई दिल्ली',
    zone: 'NR',
    suburbanLine: 'Delhi Ring & NCR Commuter Section',
    latitude: 28.6431,
    longitude: 77.2197,
    platforms: 16,
    dailyFootfall: '700,000'
  },
  {
    code: 'GZB',
    name: 'Ghaziabad Junction',
    hindiName: 'गाजियाबाद जंक्शन',
    zone: 'NR',
    suburbanLine: 'Delhi - Ghaziabad - Meerut EMU',
    latitude: 28.6679,
    longitude: 77.4338,
    platforms: 6,
    dailyFootfall: '290,000'
  }
];

export const EMU_12_CAR_RAKE: CoachDetail[] = [
  {
    position: 1,
    code: 'D-MC-1',
    type: 'MOTOR_DIVYANG',
    name: 'Car 1 • Driving Motor + Divyangjan',
    description: 'Driver cab, motor unit, dedicated wheelchair compartment & disabled seating.',
    capacity: 180,
    hasWheelchairAccess: true,
    isVendorDedicated: false,
    currentCrowdLevel: 'Moderate'
  },
  {
    position: 2,
    code: 'GS-1',
    type: 'GENERAL',
    name: 'Car 2 • General Second Class',
    description: 'High-capacity unreserved commuter seating & standing zone.',
    capacity: 350,
    hasWheelchairAccess: false,
    isVendorDedicated: false,
    currentCrowdLevel: 'Dense Rush'
  },
  {
    position: 3,
    code: 'L-1',
    type: 'LADIES',
    name: 'Car 3 • Ladies Special Coach',
    description: 'Reserved exclusively for women passengers with emergency security cord.',
    capacity: 280,
    hasWheelchairAccess: false,
    isVendorDedicated: false,
    currentCrowdLevel: 'Moderate'
  },
  {
    position: 4,
    code: 'VND-1',
    type: 'VENDOR',
    name: 'Car 4 • Vendor & Luggage Coach',
    description: 'Authentic heavy luggage compartment designated for licensed vendors & fresh produce.',
    capacity: 220,
    hasWheelchairAccess: false,
    isVendorDedicated: true,
    currentCrowdLevel: 'Low'
  },
  {
    position: 5,
    code: 'GS-2',
    type: 'GENERAL',
    name: 'Car 5 • General Trailing Unit',
    description: 'Standard EMU commuter coach with wide vestibules.',
    capacity: 340,
    hasWheelchairAccess: false,
    isVendorDedicated: false,
    currentCrowdLevel: 'Crowded'
  },
  {
    position: 6,
    code: 'MC-2',
    type: 'GENERAL',
    name: 'Car 6 • Middle Motor Coach',
    description: 'Power transmission traction unit coach with high ventilation.',
    capacity: 320,
    hasWheelchairAccess: false,
    isVendorDedicated: false,
    currentCrowdLevel: 'Dense Rush'
  },
  {
    position: 7,
    code: 'GS-3',
    type: 'GENERAL',
    name: 'Car 7 • General Second Class',
    description: 'Unreserved general commuter seating with dual sliding doorways.',
    capacity: 350,
    hasWheelchairAccess: false,
    isVendorDedicated: false,
    currentCrowdLevel: 'Crowded'
  },
  {
    position: 8,
    code: 'GS-4',
    type: 'GENERAL',
    name: 'Car 8 • General Second Class',
    description: 'Mid-rake coach with grab poles for peak hour commuter stability.',
    capacity: 350,
    hasWheelchairAccess: false,
    isVendorDedicated: false,
    currentCrowdLevel: 'Moderate'
  },
  {
    position: 9,
    code: 'L-2',
    type: 'LADIES',
    name: 'Car 9 • Ladies Mid-Rake Special',
    description: 'Second dedicated ladies compartment for balanced platform loading.',
    capacity: 290,
    hasWheelchairAccess: false,
    isVendorDedicated: false,
    currentCrowdLevel: 'Moderate'
  },
  {
    position: 10,
    code: 'GS-5',
    type: 'GENERAL',
    name: 'Car 10 • General Second Class',
    description: 'Unreserved passenger rake with luggage racks.',
    capacity: 350,
    hasWheelchairAccess: false,
    isVendorDedicated: false,
    currentCrowdLevel: 'Crowded'
  },
  {
    position: 11,
    code: 'GS-6',
    type: 'GENERAL',
    name: 'Car 11 • General Trailing Unit',
    description: 'Second-to-last passenger coach towards guard end.',
    capacity: 350,
    hasWheelchairAccess: false,
    isVendorDedicated: false,
    currentCrowdLevel: 'Moderate'
  },
  {
    position: 12,
    code: 'G-MC-2',
    type: 'GUARD_DIVYANG',
    name: 'Car 12 • Guard Cab + Divyangjan',
    description: 'Guard brake cabin and secondary accessible coach with ramp assist.',
    capacity: 190,
    hasWheelchairAccess: true,
    isVendorDedicated: false,
    currentCrowdLevel: 'Low'
  }
];

export const REGULATED_FOOD_ITEMS: FoodItem[] = [
  {
    id: 1,
    name: 'Railway Special Masala Chai (Tea)',
    hindiName: 'स्पेशल मसाला चाय',
    bengaliName: 'স্পেশাল মশলা চা',
    category: 'BEVERAGE',
    unitPrice: 10,
    isVegetarian: true,
    isAvailable: true,
    prepTimeMinutes: 1,
    servingPortion: '120 ml Kulhad / Cup'
  },
  {
    id: 2,
    name: 'Kolkata Hot Singara / Samosa (2 pcs)',
    hindiName: 'गरमा-गरम समोसा (2 पीस)',
    bengaliName: 'টাটকা গরম সিঙ্গারা (২ টি)',
    category: 'SNACK',
    unitPrice: 15,
    isVegetarian: true,
    isAvailable: true,
    prepTimeMinutes: 2,
    servingPortion: '2 pieces with chutney'
  },
  {
    id: 3,
    name: 'Authentic Tangy Jhalmuri',
    hindiName: 'चटपटी झालमुड़ी',
    bengaliName: 'ঝালমুড়ি (সরিষার তেল ও বাদাম)',
    category: 'SNACK',
    unitPrice: 10,
    isVegetarian: true,
    isAvailable: true,
    prepTimeMinutes: 1,
    servingPortion: 'Fresh 100g paper cone'
  },
  {
    id: 4,
    name: 'Mumbai Batata Vada Pav (2 pcs)',
    hindiName: 'मुंबई वड़ा पाव (2 पीस)',
    bengaliName: 'বড়া পাও',
    category: 'SNACK',
    unitPrice: 20,
    isVegetarian: true,
    isAvailable: true,
    prepTimeMinutes: 2,
    servingPortion: '2 pcs with fried green chilies'
  },
  {
    id: 5,
    name: 'Packaged Rail Neer Mineral Water',
    hindiName: 'रेल नीर पैकेज़्ड पेयजल (1L)',
    bengaliName: 'রেল নীর মিনারেল ওয়াটার',
    category: 'WATER',
    unitPrice: 15,
    isVegetarian: true,
    isAvailable: true,
    prepTimeMinutes: 0,
    servingPortion: '1000 ml Sealed Bottle (MRP ₹15)'
  },
  {
    id: 6,
    name: 'Spiced Roasted Peanuts (Chana-Badam)',
    hindiName: 'भुनी हुई मूंगफली व चना',
    bengaliName: 'ভাজা চিনেবাদাম ও ছোলা',
    category: 'SNACK',
    unitPrice: 10,
    isVegetarian: true,
    isAvailable: true,
    prepTimeMinutes: 1,
    servingPortion: '75g paper packet'
  },
  {
    id: 7,
    name: 'Traditional Sweet Sandesh / Pedha (2 pcs)',
    hindiName: 'ताज़ा संदेश / पेड़ा मिठाई',
    bengaliName: 'টাটকা নলেন গুড়ের সন্দেশ',
    category: 'SWEET',
    unitPrice: 20,
    isVegetarian: true,
    isAvailable: true,
    prepTimeMinutes: 0,
    servingPortion: '2 pieces box'
  },
  {
    id: 8,
    name: 'Lemon Mint Glucose Refresher',
    hindiName: 'नींबू शिकंजी / ग्लुकोज ड्रिंक',
    bengaliName: 'লেবু গ্লুকোজ শরবত',
    category: 'BEVERAGE',
    unitPrice: 15,
    isVegetarian: true,
    isAvailable: true,
    prepTimeMinutes: 1,
    servingPortion: '200 ml glass'
  }
];

export const SAMPLE_TRAINS: TrainSchedule[] = [
  {
    trainNumber: '31821',
    trainName: 'Sealdah - Ranaghat Local (Suburban)',
    origin: 'Sealdah (SDAH)',
    destination: 'Ranaghat Junction (RHA)',
    departureTime: '08:42 AM',
    arrivalTime: '10:24 AM',
    coaches: 12,
    type: 'SLOW LOCAL',
    zone: 'Eastern Railway',
    halts: ['SDAH', 'DDJ', 'BP', 'NH', 'KLYM', 'RHA']
  },
  {
    trainNumber: '37213',
    trainName: 'Howrah - Bandel Fast Local',
    origin: 'Howrah (HWH)',
    destination: 'Bandel Junction (BDC)',
    departureTime: '09:05 AM',
    arrivalTime: '09:55 AM',
    coaches: 12,
    type: 'FAST LOCAL',
    zone: 'Eastern Railway',
    halts: ['HWH', 'BLY', 'SRP', 'CGR', 'BDC']
  },
  {
    trainNumber: '90215',
    trainName: 'Churchgate - Borivali Fast EMU',
    origin: 'Churchgate (CCG)',
    destination: 'Borivali (BVI)',
    departureTime: '09:12 AM',
    arrivalTime: '09:58 AM',
    coaches: 12,
    type: 'FAST LOCAL',
    zone: 'Western Railway',
    halts: ['CCG', 'BCL', 'DDR', 'BA', 'ADH', 'BVI']
  },
  {
    trainNumber: '97045',
    trainName: 'CSMT - Kalyan Slow Suburban',
    origin: 'CSMT Mumbai',
    destination: 'Kalyan Junction (KYN)',
    departureTime: '09:18 AM',
    arrivalTime: '10:44 AM',
    coaches: 12,
    type: 'SLOW LOCAL',
    zone: 'Central Railway',
    halts: ['CSMT', 'BY', 'DR', 'CLA', 'GC', 'TNA', 'KYN']
  },
  {
    trainNumber: '40001',
    trainName: 'Chennai Beach - Tambaram EMU',
    origin: 'Chennai Beach (MSB)',
    destination: 'Tambaram (TBM)',
    departureTime: '08:50 AM',
    arrivalTime: '09:45 AM',
    coaches: 12,
    type: 'SLOW LOCAL',
    zone: 'Southern Railway',
    halts: ['MSB', 'MS', 'MKK', 'STM', 'PV', 'TBM']
  }
];
