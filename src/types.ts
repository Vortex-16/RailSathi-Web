export type LanguageCode = 'en' | 'hi' | 'mr' | 'ta' | 'te' | 'bn';

export type UserRole = 'TRAVELER' | 'VENDOR' | 'STATION_STAFF';

export type TravelStatus = 'STATIONARY' | 'ACTIVE_TRAVEL';

export interface Station {
  code: string;
  name: string;
  hindiName: string;
  bengaliName?: string;
  marathiName?: string;
  tamilName?: string;
  teluguName?: string;
  zone: 'ER' | 'WR' | 'CR' | 'SR' | 'NR';
  suburbanLine: string;
  latitude: number;
  longitude: number;
  platforms: number;
  dailyFootfall: string;
}

export interface TrainSchedule {
  trainNumber: string;
  trainName: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  coaches: number;
  type: 'SLOW LOCAL' | 'FAST LOCAL' | 'LADIES SPECIAL' | 'AC LOCAL';
  zone: string;
  halts: string[];
}

export interface CoachDetail {
  position: number;
  code: string;
  type: 'MOTOR_DIVYANG' | 'GENERAL' | 'LADIES' | 'VENDOR' | 'GUARD_DIVYANG';
  name: string;
  description: string;
  capacity: number;
  hasWheelchairAccess: boolean;
  isVendorDedicated: boolean;
  currentCrowdLevel: 'Low' | 'Moderate' | 'Crowded' | 'Dense Rush';
}

export interface FoodItem {
  id: number;
  name: string;
  hindiName: string;
  bengaliName: string;
  category: 'BEVERAGE' | 'SNACK' | 'SWEET' | 'WATER';
  unitPrice: number; // ₹5, ₹10, ₹15, ₹20, etc.
  isVegetarian: boolean;
  isAvailable: boolean;
  prepTimeMinutes: number;
  servingPortion: string;
}

export interface FoodOrderRequest {
  requestId: string;
  travelerId: string;
  travelerName: string;
  trainNumber: string;
  coach: string;
  seatLocation: string;
  foodItemId: number;
  foodItemName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  status: 'PENDING' | 'ACCEPTED' | 'DELIVERED' | 'CANCELLED';
  vendorId?: string;
  vendorName?: string;
  timestamp: number;
  estimatedArrivalMin?: number;
}

export interface LocationEngineState {
  isForeground: boolean;
  userTravelStatus: TravelStatus;
  hasPermission: boolean;
  servicesEnabled: boolean;
  isGpsActive: boolean;
  batteryDrainPerHour: string;
  statusMessage: string;
}
