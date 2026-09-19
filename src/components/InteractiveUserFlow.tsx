import React, { useState } from 'react';
import { 
  User, 
  Store, 
  BatteryCharging, 
  Eye, 
  Train, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Coffee, 
  Sparkles, 
  Lock, 
  Volume2, 
  RefreshCw,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Smartphone
} from 'lucide-react';
import { LanguageCode, Station, TrainSchedule, FoodItem, FoodOrderRequest, LocationEngineState } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { STATIONS, SAMPLE_TRAINS, REGULATED_FOOD_ITEMS } from '../data/railwayData';

interface InteractiveUserFlowProps {
  currentLang: LanguageCode;
  seniorMode: boolean;
}

export const InteractiveUserFlow: React.FC<InteractiveUserFlowProps> = ({ currentLang, seniorMode }) => {
  const t = TRANSLATIONS[currentLang];
  const [activeTab, setActiveTab] = useState<'TRAVELER' | 'VENDOR' | 'BATTERY' | 'SENIOR'>('TRAVELER');

  // Flow 1 (Traveler) State
  const [selectedStation, setSelectedStation] = useState<Station>(STATIONS[0]);
  const [selectedTrain, setSelectedTrain] = useState<TrainSchedule>(SAMPLE_TRAINS[0]);
  const [selectedCoach, setSelectedCoach] = useState<string>('GS-1');
  const [seatLocation, setSeatLocation] = useState<string>('Middle Bay Door #2');
  const [cartItems, setCartItems] = useState<{ item: FoodItem; count: number }[]>([
    { item: REGULATED_FOOD_ITEMS[0], count: 1 }, // 1 Chai
    { item: REGULATED_FOOD_ITEMS[1], count: 1 }, // 1 Singara/Samosa
  ]);
  const [orderStage, setOrderStage] = useState<'SELECT' | 'PENDING' | 'ACCEPTED' | 'DELIVERED'>('SELECT');
  const [assignedVendor, setAssignedVendor] = useState<{ name: string; id: string; rating: number } | null>(null);

  // Flow 2 (Vendor) State
  const [vendorZone, setVendorZone] = useState<'ONBOARD' | 'PLATFORM'>('ONBOARD');
  const [mockIncomingRequests, setMockIncomingRequests] = useState<FoodOrderRequest[]>([
    {
      requestId: 'ORD-9021',
      travelerId: 'USR-782',
      travelerName: 'Amitava Banerjee',
      trainNumber: '31821 (Sealdah Local)',
      coach: 'GS-1',
      seatLocation: 'Door 2, Right Row',
      foodItemId: 1,
      foodItemName: '2x Masala Chai + 1x Jhalmuri',
      quantity: 3,
      unitPrice: 10,
      totalPrice: 30,
      status: 'PENDING',
      timestamp: Date.now() - 45000,
      estimatedArrivalMin: 2
    },
    {
      requestId: 'ORD-9022',
      travelerId: 'USR-891',
      travelerName: 'Priya Sharma',
      trainNumber: '31821 (Sealdah Local)',
      coach: 'L-1 (Ladies Coach)',
      seatLocation: 'Window Seat 14',
      foodItemId: 5,
      foodItemName: '1x Rail Neer Water (1L)',
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
      status: 'PENDING',
      timestamp: Date.now() - 20000,
      estimatedArrivalMin: 3
    }
  ]);
  const [vendorEarnings, setVendorEarnings] = useState({ totalOrders: 14, totalRevenue: 340, rating: 4.9 });

  // Flow 3 (Battery GPS State Machine)
  const [engineState, setEngineState] = useState<LocationEngineState>({
    isForeground: true,
    userTravelStatus: 'ACTIVE_TRAVEL',
    hasPermission: true,
    servicesEnabled: true,
    isGpsActive: true,
    batteryDrainPerHour: '2.1% / hr (Ultra Low)',
    statusMessage: 'GPS Active • Live Active Travel tracking station proximity'
  });

  // Calculate GPS state according to mathematical formula
  const computeGpsStatus = (
    fg: boolean,
    status: 'STATIONARY' | 'ACTIVE_TRAVEL',
    perm: boolean,
    svc: boolean
  ): { isGpsActive: boolean; drain: string; msg: string } => {
    if (!perm) {
      return { isGpsActive: false, drain: '0.4% / hr', msg: 'GPS Paused: Location permission not granted' };
    }
    if (!svc) {
      return { isGpsActive: false, drain: '0.4% / hr', msg: 'GPS Paused: System location services manually disabled' };
    }
    if (!fg) {
      return { isGpsActive: false, drain: '0.5% / hr', msg: 'GPS Paused: App is minimized to background (Battery Saved)' };
    }
    if (status === 'STATIONARY') {
      return { isGpsActive: false, drain: '0.6% / hr', msg: 'GPS Paused: Commuter is stationary at home / office' };
    }
    return { isGpsActive: true, drain: '2.1% / hr (Ultra Low)', msg: 'GPS Active • Live Active Travel in progress' };
  };

  const updateEngine = (updates: Partial<LocationEngineState>) => {
    const next = { ...engineState, ...updates };
    const { isGpsActive, drain, msg } = computeGpsStatus(
      next.isForeground,
      next.userTravelStatus,
      next.hasPermission,
      next.servicesEnabled
    );
    setEngineState({
      ...next,
      isGpsActive,
      batteryDrainPerHour: drain,
      statusMessage: msg
    });
  };

  // Cart Handlers
  const handleAddToCart = (item: FoodItem) => {
    setCartItems(prev => {
      const existing = prev.find(p => p.item.id === item.id);
      if (existing) {
        return prev.map(p => p.item.id === item.id ? { ...p, count: p.count + 1 } : p);
      }
      return [...prev, { item, count: 1 }];
    });
  };

  const handleRemoveFromCart = (itemId: number) => {
    setCartItems(prev => {
      const existing = prev.find(p => p.item.id === itemId);
      if (!existing) return prev;
      if (existing.count > 1) {
        return prev.map(p => p.item.id === itemId ? { ...p, count: p.count - 1 } : p);
      }
      return prev.filter(p => p.item.id !== itemId);
    });
  };

  const cartTotal = cartItems.reduce((sum, ci) => sum + (ci.item.unitPrice * ci.count), 0);

  // Send Hunger Signal (Flow 1)
  const handleSendHungerSignal = () => {
    setOrderStage('PENDING');
    setTimeout(() => {
      setAssignedVendor({
        name: 'Subhas Chandra Mondal',
        id: 'ER-VND-4102',
        rating: 4.95
      });
      setOrderStage('ACCEPTED');
    }, 1800);
  };

  // Vendor Lock & Deliver (Flow 2)
  const handleLockOrder = (reqId: string) => {
    setMockIncomingRequests(prev => prev.map(req => {
      if (req.requestId === reqId) {
        return { ...req, status: 'ACCEPTED', vendorId: 'ER-VND-4102', vendorName: 'You (Subhas)' };
      }
      return req;
    }));
  };

  const handleDeliverOrder = (reqId: string, amount: number) => {
    setMockIncomingRequests(prev => prev.filter(req => req.requestId !== reqId));
    setVendorEarnings(prev => ({
      totalOrders: prev.totalOrders + 1,
      totalRevenue: prev.totalRevenue + amount,
      rating: prev.rating
    }));
  };

  return (
    <section id="user-flows" className="py-14 sm:py-20 bg-[#f2ee98] border-b-2 border-[#10380b] text-[#10380b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#fce519] text-[#10380b] border border-[#10380b] mb-3 shadow-[2px_2px_0px_0px_#10380b]">
            <Sparkles className="w-3.5 h-3.5 text-[#10380b]" />
            // Interactive Core User Journeys (CUJs) //
          </div>
          <h2 className={`font-display font-bold text-[#10380b] tracking-tight ${seniorMode ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl lg:text-5xl'}`}>
            Experience How RailSathi Works
          </h2>
          <p className="mt-2 text-[#10380b]/80 text-sm sm:text-base font-medium">
            Switch between the commuter, verified hawker, battery state engine, and senior accessibility modes to see authentic Indian Railways workflows in action.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8">
          <button
            id="tab-flow-traveler"
            onClick={() => setActiveTab('TRAVELER')}
            className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 p-3 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition text-center sm:text-left cursor-pointer border-2 border-[#10380b] ${
              activeTab === 'TRAVELER'
                ? 'bg-[#10380b] text-[#fefde6] shadow-[3px_3px_0px_0px_#10380b]'
                : 'bg-[#fefde6] text-[#10380b] hover:bg-[#fce519]'
            }`}
          >
            <User className="w-4 h-4 text-[#fce519] shrink-0" />
            <span>1. Commuter Flow</span>
          </button>

          <button
            id="tab-flow-vendor"
            onClick={() => setActiveTab('VENDOR')}
            className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 p-3 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition text-center sm:text-left cursor-pointer border-2 border-[#10380b] ${
              activeTab === 'VENDOR'
                ? 'bg-[#10380b] text-[#fefde6] shadow-[3px_3px_0px_0px_#10380b]'
                : 'bg-[#fefde6] text-[#10380b] hover:bg-[#fce519]'
            }`}
          >
            <Store className="w-4 h-4 text-[#fce519] shrink-0" />
            <span>2. Vendor Radar</span>
          </button>

          <button
            id="tab-flow-battery"
            onClick={() => setActiveTab('BATTERY')}
            className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 p-3 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition text-center sm:text-left cursor-pointer border-2 border-[#10380b] ${
              activeTab === 'BATTERY'
                ? 'bg-[#10380b] text-[#fefde6] shadow-[3px_3px_0px_0px_#10380b]'
                : 'bg-[#fefde6] text-[#10380b] hover:bg-[#fce519]'
            }`}
          >
            <BatteryCharging className="w-4 h-4 text-[#fce519] shrink-0" />
            <span>3. Battery Engine</span>
          </button>

          <button
            id="tab-flow-senior"
            onClick={() => setActiveTab('SENIOR')}
            className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 p-3 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition text-center sm:text-left cursor-pointer border-2 border-[#10380b] ${
              activeTab === 'SENIOR'
                ? 'bg-[#10380b] text-[#fefde6] shadow-[3px_3px_0px_0px_#10380b]'
                : 'bg-[#fefde6] text-[#10380b] hover:bg-[#fce519]'
            }`}
          >
            <Eye className="w-4 h-4 text-[#fce519] shrink-0" />
            <span>4. Senior Mode</span>
          </button>
        </div>

        {/* Tab 1: Commuter & Hunger Signal Flow */}
        {activeTab === 'TRAVELER' && (
          <div className="bg-[#fefde6] rounded-[36px] p-6 sm:p-8 border-2 border-[#10380b] shadow-[8px_8px_0px_0px_#10380b] animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#10380b]/20">
              <div>
                <span className="text-xs font-mono font-bold text-[#10380b] uppercase tracking-wider">CUJ Flow 1</span>
                <h3 className="text-2xl font-display font-bold text-[#10380b]">
                  Daily Commuter Journey & Direct-to-Seat Ordering
                </h3>
                <p className="text-xs text-[#10380b]/80 mt-0.5 font-medium">
                  Order tea and snacks delivered right to your compartment door during 30s station halts.
                </p>
              </div>

              {orderStage !== 'SELECT' && (
                <button
                  onClick={() => {
                    setOrderStage('SELECT');
                    setAssignedVendor(null);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10380b] bg-[#fce519] px-3.5 py-1.5 rounded-full border border-[#10380b] hover:bg-[#f2ee98] transition cursor-pointer shadow-[1px_1px_0px_0px_#10380b]"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset Simulation</span>
                </button>
              )}
            </div>

            {orderStage === 'SELECT' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
                {/* Left: Journey Setup */}
                <div className="lg:col-span-5 space-y-4">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#10380b]/70">
                    Step 1: Your Active Commute Setup
                  </h4>

                  {/* Nearest Station */}
                  <div>
                    <label className="block text-xs font-bold text-[#10380b] mb-1">Boarding / Approaching Station</label>
                    <select
                      value={selectedStation.code}
                      onChange={(e) => {
                        const s = STATIONS.find(st => st.code === e.target.value);
                        if (s) setSelectedStation(s);
                      }}
                      className="w-full text-sm font-semibold p-2.5 rounded-2xl border-2 border-[#10380b] bg-[#f2ee98] text-[#10380b] focus:outline-hidden focus:bg-[#fce519]"
                    >
                      {STATIONS.map(s => (
                        <option key={s.code} value={s.code}>
                          {s.name} ({s.code}) • {s.zone}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Train */}
                  <div>
                    <label className="block text-xs font-bold text-[#10380b] mb-1">Suburban Train</label>
                    <select
                      value={selectedTrain.trainNumber}
                      onChange={(e) => {
                        const tr = SAMPLE_TRAINS.find(t => t.trainNumber === e.target.value);
                        if (tr) setSelectedTrain(tr);
                      }}
                      className="w-full text-sm font-semibold p-2.5 rounded-2xl border-2 border-[#10380b] bg-[#f2ee98] text-[#10380b] focus:outline-hidden focus:bg-[#fce519]"
                    >
                      {SAMPLE_TRAINS.map(tr => (
                        <option key={tr.trainNumber} value={tr.trainNumber}>
                          #{tr.trainNumber} {tr.trainName} ({tr.departureTime})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Coach Selection */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#10380b] mb-1">Your Coach</label>
                      <select
                        value={selectedCoach}
                        onChange={(e) => setSelectedCoach(e.target.value)}
                        className="w-full text-sm font-semibold p-2.5 rounded-2xl border-2 border-[#10380b] bg-[#f2ee98] text-[#10380b]"
                      >
                        <option value="GS-1">GS-1 (General)</option>
                        <option value="GS-2">GS-2 (General)</option>
                        <option value="L-1">L-1 (Ladies Special)</option>
                        <option value="VND-1">VND-1 (Vendor Compartment)</option>
                        <option value="D-MC-1">D-MC (Divyangjan ♿)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#10380b] mb-1">Seat / Door Marker</label>
                      <input
                        type="text"
                        value={seatLocation}
                        onChange={(e) => setSeatLocation(e.target.value)}
                        className="w-full text-sm font-semibold p-2.5 rounded-2xl border-2 border-[#10380b] bg-[#f2ee98] text-[#10380b] placeholder:text-[#10380b]/50"
                        placeholder="e.g., Door 2 Left"
                      />
                    </div>
                  </div>

                  {/* Summary Callout */}
                  <div className="p-4 rounded-2xl bg-[#dbe8ac] border-2 border-[#10380b] flex items-start gap-3 shadow-[2px_2px_0px_0px_#10380b]">
                    <MapPin className="w-5 h-5 text-[#10380b] shrink-0 mt-0.5" />
                    <div className="text-xs text-[#10380b] font-medium">
                      <strong className="text-[#10380b]">Next Station Halt:</strong> {selectedStation.name} • Train #{selectedTrain.trainNumber} arriving at Platform 2.
                    </div>
                  </div>
                </div>

                {/* Right: Regulated Tariff Catalog */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#10380b]/70">
                        Step 2: Choose Official Railway Tariff Items
                      </h4>
                      <p className="text-xs text-[#10380b]/80 font-medium">Regulated fixed tariffs enforced to prevent hawker overcharging.</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#10380b] bg-[#fce519] px-2.5 py-1 rounded-full border border-[#10380b] shadow-[1px_1px_0px_0px_#10380b]">
                      Official Tariff
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[260px] overflow-y-auto pr-1">
                    {REGULATED_FOOD_ITEMS.map((item) => {
                      const inCart = cartItems.find(c => c.item.id === item.id);
                      return (
                        <div
                          key={item.id}
                          className="p-3.5 rounded-2xl border-2 border-[#10380b] bg-[#f2ee98] hover:bg-[#dbe8ac] flex items-center justify-between transition"
                        >
                          <div className="pr-2">
                            <div className="text-xs font-bold text-[#10380b] leading-snug">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-[#10380b]/75 font-medium mt-0.5">
                              {item.servingPortion} • <strong className="text-[#10380b] font-mono">₹{item.unitPrice}</strong>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            {inCart ? (
                              <div className="flex items-center gap-1 bg-[#fefde6] border-1.5 border-[#10380b] rounded-full p-1 shadow-[1px_1px_0px_0px_#10380b]">
                                <button
                                  onClick={() => handleRemoveFromCart(item.id)}
                                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-[#10380b] hover:bg-[#fce519] cursor-pointer"
                                >
                                  -
                                </button>
                                <span className="w-5 text-center text-xs font-bold font-mono text-[#10380b]">{inCart.count}</span>
                                <button
                                  onClick={() => handleAddToCart(item)}
                                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-[#10380b] hover:bg-[#fce519] cursor-pointer"
                                >
                                  +
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => handleAddToCart(item)}
                                className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#10380b] hover:bg-[#10380b]/90 text-[#fefde6] transition cursor-pointer shadow-[1px_1px_0px_0px_#10380b]"
                              >
                                + Add
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Cart Action Bar */}
                  <div className="mt-4 p-5 rounded-[28px] bg-[#10380b] text-[#fefde6] flex flex-wrap items-center justify-between gap-4 border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#fce519]">
                    <div>
                      <div className="text-xs text-[#fefde6]/80 font-medium">Total Regulated Tariff:</div>
                      <div className="text-2xl font-black text-[#fce519] font-mono">₹{cartTotal}</div>
                      <div className="text-[10px] text-[#fefde6]/70 font-mono">
                        {cartItems.reduce((acc, c) => acc + c.count, 0)} item(s) selected for {selectedCoach}
                      </div>
                    </div>

                    <button
                      id="btn-fire-hunger-signal"
                      disabled={cartItems.length === 0}
                      onClick={handleSendHungerSignal}
                      className="inline-flex items-center gap-2 bg-[#fce519] text-[#10380b] hover:bg-[#fffce1] disabled:opacity-50 font-bold px-6 py-3 rounded-full border-2 border-[#10380b] shadow-[2px_2px_0px_0px_#10380b] transition cursor-pointer text-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Broadcast Hunger Signal</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Order State Confirmation */
              <div className="py-8 max-w-lg mx-auto text-center space-y-5 animate-in zoom-in-95 duration-200">
                {orderStage === 'PENDING' && (
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#fce519] text-[#10380b] border-2 border-[#10380b] flex items-center justify-center mx-auto shadow-[3px_3px_0px_0px_#10380b]">
                      <RefreshCw className="w-8 h-8 animate-spin" />
                    </div>
                    <h4 className="text-2xl font-display font-bold text-[#10380b]">Broadcasting Hunger Signal to Approaching Platform...</h4>
                    <p className="text-xs text-[#10380b]/80 font-medium">
                      Searching verified vendors stationed at <strong className="text-[#10380b]">{selectedStation.name}</strong> and inside <strong className="text-[#10380b]">Car {selectedCoach}</strong>.
                    </p>
                    <div className="p-3 bg-[#f2ee98] rounded-2xl text-xs font-mono font-bold text-[#10380b] border border-[#10380b]">
                      Payload: {cartItems.map(c => `${c.count}x ${c.item.name}`).join(', ')} • Total ₹{cartTotal}
                    </div>
                  </div>
                )}

                {orderStage === 'ACCEPTED' && (
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#dbe8ac] text-[#10380b] border-2 border-[#10380b] flex items-center justify-center mx-auto shadow-[3px_3px_0px_0px_#10380b]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#10380b] bg-[#fce519] px-3 py-1 rounded-full border border-[#10380b]">
                      Vendor Paired & Locked!
                    </span>
                    <h4 className="text-2xl font-display font-bold text-[#10380b]">
                      {assignedVendor?.name} is arriving at Coach {selectedCoach}
                    </h4>
                    <div className="p-5 rounded-2xl bg-[#f2ee98] border-2 border-[#10380b] text-left space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#10380b]/80">Verified Vendor ID:</span>
                        <span className="font-mono font-bold text-[#10380b]">{assignedVendor?.id}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#10380b]/80">Vendor Rating:</span>
                        <span className="font-bold text-[#10380b]">★ {assignedVendor?.rating} / 5.0</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#10380b]/80">Target Delivery Point:</span>
                        <span className="font-bold text-[#10380b]">Coach {selectedCoach} • {seatLocation}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs border-t border-[#10380b]/20 pt-2">
                        <span className="text-[#10380b] font-bold">Exact Cash to Handover:</span>
                        <span className="text-base font-black text-[#10380b] font-mono">₹{cartTotal}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setOrderStage('DELIVERED')}
                      className="w-full py-3.5 bg-[#10380b] hover:bg-[#10380b]/90 text-[#fefde6] font-bold rounded-full transition text-sm cursor-pointer border-2 border-[#10380b] shadow-[4px_4px_0px_0px_#fce519]"
                    >
                      Confirm Item Received & Payment Complete
                    </button>
                  </div>
                )}

                {orderStage === 'DELIVERED' && (
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#fce519] text-[#10380b] border-2 border-[#10380b] flex items-center justify-center mx-auto shadow-[3px_3px_0px_0px_#10380b]">
                      <Coffee className="w-8 h-8 text-[#10380b]" />
                    </div>
                    <h4 className="text-2xl font-display font-bold text-[#10380b]">Fulfillment Complete in 22 Seconds!</h4>
                    <p className="text-xs text-[#10380b]/80 font-medium">
                      Snack received within the 30-second halt window. Transaction recorded in your local offline Room database.
                    </p>
                    <button
                      onClick={() => {
                        setOrderStage('SELECT');
                        setAssignedVendor(null);
                      }}
                      className="px-6 py-2.5 bg-[#10380b] text-[#fefde6] text-xs font-bold rounded-full hover:bg-[#10380b]/90 transition cursor-pointer border border-[#10380b]"
                    >
                      Create Another Test Order
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Verified Vendor Radar Flow */}
        {activeTab === 'VENDOR' && (
          <div className="bg-[#fefde6] rounded-[36px] p-6 sm:p-8 border-2 border-[#10380b] shadow-[8px_8px_0px_0px_#10380b] animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#10380b]/20">
              <div>
                <span className="text-xs font-mono font-bold text-[#10380b] uppercase tracking-wider">CUJ Flow 2</span>
                <h3 className="text-2xl font-display font-bold text-[#10380b]">
                  Verified Hawker Demand Radar & Atomic Order Locking
                </h3>
                <p className="text-xs text-[#10380b]/80 mt-0.5 font-medium">
                  Eliminating blind hawking: vendors see exactly which coach has waiting buyers, with atomic locks to prevent disputes.
                </p>
              </div>

              {/* Vendor Zone Switcher */}
              <div className="flex items-center gap-1 bg-[#f2ee98] p-1 rounded-full border-1.5 border-[#10380b]">
                <button
                  onClick={() => setVendorZone('ONBOARD')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                    vendorZone === 'ONBOARD' ? 'bg-[#10380b] text-[#fefde6]' : 'text-[#10380b]'
                  }`}
                >
                  Onboard Train #31821
                </button>
                <button
                  onClick={() => setVendorZone('PLATFORM')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                    vendorZone === 'PLATFORM' ? 'bg-[#10380b] text-[#fefde6]' : 'text-[#10380b]'
                  }`}
                >
                  Platform 2 Stationed
                </button>
              </div>
            </div>

            {/* Vendor Live Radar View */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
              {/* Left: Incoming Hunger Signals */}
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#10380b]/70">
                    Live Signals Within 200m Rake Zone ({mockIncomingRequests.length})
                  </h4>
                  <span className="text-[11px] font-mono font-bold text-[#10380b] flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10380b] animate-ping" />
                    Radar Active
                  </span>
                </div>

                {mockIncomingRequests.length === 0 ? (
                  <div className="p-8 text-center bg-[#f2ee98] rounded-2xl border border-[#10380b]">
                    <CheckCircle2 className="w-8 h-8 text-[#10380b] mx-auto mb-2" />
                    <div className="font-bold text-[#10380b] text-sm">All Signals Handled!</div>
                    <p className="text-xs text-[#10380b]/80 mt-1">Waiting for upcoming passengers to broadcast hunger signals.</p>
                  </div>
                ) : (
                  mockIncomingRequests.map(req => (
                    <div
                      key={req.requestId}
                      className="p-4 rounded-2xl border-2 border-[#10380b] bg-[#f2ee98] hover:bg-[#dbe8ac] transition space-y-3 shadow-[2px_2px_0px_0px_#10380b]"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#fce519] text-[#10380b] border border-[#10380b]">
                            {req.requestId}
                          </span>
                          <span className="text-xs font-bold text-[#10380b]">
                            {req.foodItemName}
                          </span>
                        </div>
                        <span className="text-sm font-bold text-[#10380b] font-mono bg-[#fefde6] px-2.5 py-0.5 rounded-full border border-[#10380b]">
                          ₹{req.totalPrice}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs bg-[#fefde6] p-3 rounded-xl border border-[#10380b]/30">
                        <div>
                          <span className="text-[#10380b]/60 text-[10px] font-mono block">TARGET COACH</span>
                          <strong className="text-[#10380b] font-bold">{req.coach}</strong>
                        </div>
                        <div>
                          <span className="text-[#10380b]/60 text-[10px] font-mono block">PASSENGER SEAT</span>
                          <span className="text-[#10380b] font-medium">{req.seatLocation}</span>
                        </div>
                        <div>
                          <span className="text-[#10380b]/60 text-[10px] font-mono block">PASSENGER</span>
                          <span className="text-[#10380b] font-medium">{req.travelerName}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <div className="text-[11px] text-[#10380b]/80 flex items-center gap-1 font-mono font-medium">
                          <Clock className="w-3.5 h-3.5 text-[#10380b]" />
                          <span>Arrives in ~{req.estimatedArrivalMin} mins</span>
                        </div>

                        {req.status === 'PENDING' ? (
                          <button
                            onClick={() => handleLockOrder(req.requestId)}
                            className="inline-flex items-center gap-1.5 bg-[#10380b] hover:bg-[#10380b]/90 text-[#fefde6] font-bold text-xs px-4 py-2 rounded-full transition cursor-pointer shadow-[2px_2px_0px_0px_#fce519]"
                          >
                            <Lock className="w-3.5 h-3.5 text-[#fce519]" />
                            <span>Accept & Lock Request</span>
                          </button>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-[#10380b] bg-[#fce519] px-2.5 py-1 rounded-full border border-[#10380b]">
                              ✓ Locked by You
                            </span>
                            <button
                              onClick={() => handleDeliverOrder(req.requestId, req.totalPrice)}
                              className="bg-[#10380b] text-[#fefde6] text-xs font-bold px-3 py-1.5 rounded-full transition cursor-pointer"
                            >
                              Mark Delivered
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Right: Vendor Earnings Ledger & Shift Analytics */}
              <div className="lg:col-span-4 space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#10380b]/70">
                  Daily Shift Earnings Ledger
                </h4>

                <div className="p-5 rounded-[28px] bg-[#dbe8ac] text-[#10380b] space-y-4 border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b]">
                  <div>
                    <div className="text-xs text-[#10380b]/70 font-bold uppercase font-mono">Shift Revenue Logged</div>
                    <div className="text-3xl font-display font-bold text-[#10380b] mt-1">₹{vendorEarnings.totalRevenue}</div>
                    <div className="text-xs text-[#10380b]/80 mt-1 font-medium">
                      {vendorEarnings.totalOrders} successful deliveries today
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#10380b]/20 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-[#10380b]">
                      <span>Vendor Rating:</span>
                      <strong className="text-[#10380b] font-mono font-bold">★ {vendorEarnings.rating} / 5.0</strong>
                    </div>
                    <div className="flex items-center justify-between text-[#10380b]">
                      <span>Zonal ID:</span>
                      <strong className="font-mono text-[#10380b] font-bold">ER-VND-4102</strong>
                    </div>
                    <div className="flex items-center justify-between text-[#10380b]">
                      <span>Halt Handover Avg:</span>
                      <strong className="text-[#10380b] font-mono font-bold">18.4 seconds</strong>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#fce519] border-1.5 border-[#10380b] text-xs text-[#10380b] shadow-[2px_2px_0px_0px_#10380b]">
                  <ShieldCheck className="w-4 h-4 text-[#10380b] mb-1" />
                  <strong>Fair Income Assurance:</strong> Zero commission deducted from vendor tariffs. Direct cash or UPI at the coach door.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Battery-Smart Location Engine & State Machine */}
        {activeTab === 'BATTERY' && (
          <div className="bg-[#fefde6] rounded-[36px] p-6 sm:p-8 border-2 border-[#10380b] shadow-[8px_8px_0px_0px_#10380b] animate-in fade-in duration-200">
            <div className="pb-6 border-b border-[#10380b]/20">
              <span className="text-xs font-mono font-bold text-[#10380b] uppercase tracking-wider">CUJ Flow 3</span>
              <h3 className="text-2xl font-display font-bold text-[#10380b]">
                Battery-Smart Location State Machine
              </h3>
              <p className="text-xs text-[#10380b]/80 mt-0.5 font-medium">
                Continuous GPS drains phone batteries on 2-hour suburban commutes. RailSathi pauses hardware GPS unless all active travel criteria are met.
              </p>
            </div>

            {/* Exact Mathematical Formula Banner */}
            <div className="my-6 p-4 rounded-2xl bg-[#10380b] text-[#fefde6] font-mono text-xs sm:text-sm overflow-x-auto shadow-[4px_4px_0px_0px_#fce519]">
              <span className="text-[#fce519] block text-[10px] mb-1 uppercase font-bold tracking-wider">
                Location Policy Engine Boolean Formula:
              </span>
              <div className="text-[#fefde6] font-bold break-words sm:whitespace-nowrap">
                Tracking Active ⇔ (isForeground == true) ∧ (userTravelStatus == ACTIVE_TRAVEL) ∧ (hasPermission == true) ∧ (servicesEnabled == true)
              </div>
            </div>

            {/* Interactive Control Toggles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-[#f2ee98] border-1.5 border-[#10380b] space-y-2">
                <div className="text-xs font-bold text-[#10380b]">1. App Foreground Status</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => updateEngine({ isForeground: true })}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-xl border transition cursor-pointer ${
                      engineState.isForeground ? 'bg-[#10380b] text-[#fefde6] border-[#10380b]' : 'bg-[#fefde6] text-[#10380b] border-[#10380b]'
                    }`}
                  >
                    Foreground
                  </button>
                  <button
                    onClick={() => updateEngine({ isForeground: false })}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-xl border transition cursor-pointer ${
                      !engineState.isForeground ? 'bg-[#10380b] text-[#fefde6] border-[#10380b]' : 'bg-[#fefde6] text-[#10380b] border-[#10380b]'
                    }`}
                  >
                    Minimized
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#f2ee98] border-1.5 border-[#10380b] space-y-2">
                <div className="text-xs font-bold text-[#10380b]">2. Commuter Movement State</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => updateEngine({ userTravelStatus: 'ACTIVE_TRAVEL' })}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-xl border transition cursor-pointer ${
                      engineState.userTravelStatus === 'ACTIVE_TRAVEL' ? 'bg-[#10380b] text-[#fefde6] border-[#10380b]' : 'bg-[#fefde6] text-[#10380b] border-[#10380b]'
                    }`}
                  >
                    Riding Train
                  </button>
                  <button
                    onClick={() => updateEngine({ userTravelStatus: 'STATIONARY' })}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-xl border transition cursor-pointer ${
                      engineState.userTravelStatus === 'STATIONARY' ? 'bg-[#10380b] text-[#fefde6] border-[#10380b]' : 'bg-[#fefde6] text-[#10380b] border-[#10380b]'
                    }`}
                  >
                    Stationary
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#f2ee98] border-1.5 border-[#10380b] space-y-2">
                <div className="text-xs font-bold text-[#10380b]">3. Android Permission</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => updateEngine({ hasPermission: true })}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-xl border transition cursor-pointer ${
                      engineState.hasPermission ? 'bg-[#10380b] text-[#fefde6] border-[#10380b]' : 'bg-[#fefde6] text-[#10380b] border-[#10380b]'
                    }`}
                  >
                    Granted
                  </button>
                  <button
                    onClick={() => updateEngine({ hasPermission: false })}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-xl border transition cursor-pointer ${
                      !engineState.hasPermission ? 'bg-[#d64028] text-white border-[#d64028]' : 'bg-[#fefde6] text-[#10380b] border-[#10380b]'
                    }`}
                  >
                    Denied
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#f2ee98] border-1.5 border-[#10380b] space-y-2">
                <div className="text-xs font-bold text-[#10380b]">4. Master Location Toggle</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => updateEngine({ servicesEnabled: true })}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-xl border transition cursor-pointer ${
                      engineState.servicesEnabled ? 'bg-[#10380b] text-[#fefde6] border-[#10380b]' : 'bg-[#fefde6] text-[#10380b] border-[#10380b]'
                    }`}
                  >
                    Enabled
                  </button>
                  <button
                    onClick={() => updateEngine({ servicesEnabled: false })}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-xl border transition cursor-pointer ${
                      !engineState.servicesEnabled ? 'bg-[#d64028] text-white border-[#d64028]' : 'bg-[#fefde6] text-[#10380b] border-[#10380b]'
                    }`}
                  >
                    Disabled
                  </button>
                </div>
              </div>
            </div>

            {/* Resulting Hardware State Card */}
            <div className={`mt-6 p-6 rounded-2xl border-2 transition-all ${
              engineState.isGpsActive 
                ? 'bg-[#dbe8ac] border-[#10380b] text-[#10380b] shadow-[4px_4px_0px_0px_#10380b]'
                : 'bg-[#fce519] border-[#10380b] text-[#10380b] shadow-[4px_4px_0px_0px_#10380b]'
            }`}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-[#fefde6] shadow-sm border border-[#10380b] ${
                    engineState.isGpsActive ? 'bg-[#10380b]' : 'bg-[#10380b]'
                  }`}>
                    <BatteryCharging className="w-6 h-6 text-[#fce519]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#10380b]">HARDWARE GPS STATE:</span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border border-[#10380b] bg-[#fefde6] text-[#10380b]">
                        {engineState.isGpsActive ? '🟢 ACTIVE' : '🛑 PAUSED / SAFE'}
                      </span>
                    </div>
                    <div className="text-sm font-semibold mt-0.5 text-[#10380b]">{engineState.statusMessage}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-medium text-[#10380b]/80">Calculated Battery Consumption</div>
                  <div className="text-xl font-display font-bold font-mono mt-0.5 text-[#10380b]">{engineState.batteryDrainPerHour}</div>
                  <div className="text-[11px] text-[#10380b] font-bold font-mono">
                    {engineState.isGpsActive ? 'Foreground tracking active' : '⚡ 85% Battery Saved'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Senior Citizen & Accessibility Experience */}
        {activeTab === 'SENIOR' && (
          <div className="bg-[#fefde6] rounded-[36px] p-6 sm:p-8 border-2 border-[#10380b] shadow-[8px_8px_0px_0px_#10380b] animate-in fade-in duration-200">
            <div className="pb-6 border-b border-[#10380b]/20 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#10380b] uppercase tracking-wider">CUJ Flow 4</span>
                <h3 className="text-2xl font-display font-bold text-[#10380b]">
                  Senior Citizen & High-Accessibility Mode
                </h3>
                <p className="text-xs text-[#10380b]/80 mt-0.5 font-medium">
                  Engineered specifically for elderly commuters: 56dp minimum touch targets, high contrast, and voice-assisted confirmations.
                </p>
              </div>

              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#fce519] text-[#10380b] border border-[#10380b] shadow-[1px_1px_0px_0px_#10380b]">
                WCAG 2.1 AA Compliant
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Senior Spec 1 */}
              <div className="p-6 rounded-[28px] bg-[#f2ee98] border-2 border-[#10380b] space-y-3 shadow-[4px_4px_0px_0px_#10380b]">
                <div className="w-11 h-11 rounded-full bg-[#fce519] border border-[#10380b] text-[#10380b] flex items-center justify-center font-bold text-sm">
                  56dp
                </div>
                <h4 className="font-display font-bold text-[#10380b] text-lg">Enlarged Touch Targets</h4>
                <p className="text-xs text-[#10380b]/80 leading-relaxed font-medium">
                  Surpasses the standard Android 48dp guideline with 56dp x 56dp buttons, eliminating accidental miss-taps during jerky train motion.
                </p>
                <button className="w-full py-4 bg-[#10380b] text-[#fefde6] font-bold text-base rounded-full shadow-[2px_2px_0px_0px_#fce519] border border-[#10380b] hover:bg-[#10380b]/90 transition cursor-pointer">
                  Sample 56dp Action Button
                </button>
              </div>

              {/* Senior Spec 2 */}
              <div className="p-6 rounded-[28px] bg-[#f2ee98] border-2 border-[#10380b] space-y-3 shadow-[4px_4px_0px_0px_#10380b]">
                <div className="w-11 h-11 rounded-full bg-[#fce519] border border-[#10380b] text-[#10380b] flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-[#10380b] text-lg">Ultra-High Contrast Palette</h4>
                <p className="text-xs text-[#10380b]/80 leading-relaxed font-medium">
                  Parchment backgrounds and deep forest ink typography ensure clear legibility even in direct Indian summer sunlight on open platforms.
                </p>
                <div className="p-3.5 bg-[#fefde6] border-2 border-[#10380b] rounded-2xl shadow-[2px_2px_0px_0px_#10380b]">
                  <div className="text-base font-bold text-[#10380b]">Sealdah ➔ Ranaghat Local</div>
                  <div className="text-xs font-mono font-bold text-[#10380b]/80">Platform 4 • Departs in 6 mins</div>
                </div>
              </div>

              {/* Senior Spec 3 */}
              <div className="p-6 rounded-[28px] bg-[#f2ee98] border-2 border-[#10380b] space-y-3 shadow-[4px_4px_0px_0px_#10380b]">
                <div className="w-11 h-11 rounded-full bg-[#fce519] border border-[#10380b] text-[#10380b] flex items-center justify-center">
                  <Volume2 className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-[#10380b] text-lg">Voice & Haptic Assistance</h4>
                <p className="text-xs text-[#10380b]/80 leading-relaxed font-medium">
                  Contextual station announcements and order arrival alerts trigger distinct haptic vibration pulses and audio readout in 6 Indian languages.
                </p>
                <div className="p-3.5 bg-[#dbe8ac] border border-[#10380b] rounded-2xl flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-[#10380b] shrink-0" />
                  <span className="text-xs font-bold text-[#10380b]">
                    "अगला स्टेशन दमदम जंक्शन है (४५ सेकंड ठहराव)"
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
