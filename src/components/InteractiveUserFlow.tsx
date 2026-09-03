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
    <section id="user-flows" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-900 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            Interactive Core User Journeys (CUJs)
          </div>
          <h2 className={`font-black text-slate-900 tracking-tight ${seniorMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
            Experience How RailSaathi Works
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Switch between the commuter, verified hawker, battery state engine, and senior accessibility modes to see authentic Indian Railways workflows in action.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8">
          <button
            id="tab-flow-traveler"
            onClick={() => setActiveTab('TRAVELER')}
            className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-2 p-2.5 sm:px-4 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition text-center sm:text-left shadow-2xs ${
              activeTab === 'TRAVELER'
                ? 'bg-blue-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <User className="w-4 h-4 text-amber-400 shrink-0" />
            <span>1. Commuter Flow</span>
          </button>

          <button
            id="tab-flow-vendor"
            onClick={() => setActiveTab('VENDOR')}
            className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-2 p-2.5 sm:px-4 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition text-center sm:text-left shadow-2xs ${
              activeTab === 'VENDOR'
                ? 'bg-blue-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Store className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>2. Vendor Radar</span>
          </button>

          <button
            id="tab-flow-battery"
            onClick={() => setActiveTab('BATTERY')}
            className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-2 p-2.5 sm:px-4 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition text-center sm:text-left shadow-2xs ${
              activeTab === 'BATTERY'
                ? 'bg-blue-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <BatteryCharging className="w-4 h-4 text-amber-500 shrink-0" />
            <span>3. Battery Engine</span>
          </button>

          <button
            id="tab-flow-senior"
            onClick={() => setActiveTab('SENIOR')}
            className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-2 p-2.5 sm:px-4 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition text-center sm:text-left shadow-2xs ${
              activeTab === 'SENIOR'
                ? 'bg-blue-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Eye className="w-4 h-4 text-purple-400 shrink-0" />
            <span>4. Senior Mode</span>
          </button>
        </div>

        {/* Tab 1: Commuter & Hunger Signal Flow */}
        {activeTab === 'TRAVELER' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">CUJ Flow 1</span>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Daily Commuter Journey & Direct-to-Seat Ordering
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Order tea and snacks delivered right to your compartment door during 30s station halts.
                </p>
              </div>

              {orderStage !== 'SELECT' && (
                <button
                  onClick={() => {
                    setOrderStage('SELECT');
                    setAssignedVendor(null);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition"
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
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Step 1: Your Active Commute Setup
                  </h4>

                  {/* Nearest Station */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Boarding / Approaching Station</label>
                    <select
                      value={selectedStation.code}
                      onChange={(e) => {
                        const s = STATIONS.find(st => st.code === e.target.value);
                        if (s) setSelectedStation(s);
                      }}
                      className="w-full text-sm font-semibold p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-800"
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
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Suburban Train</label>
                    <select
                      value={selectedTrain.trainNumber}
                      onChange={(e) => {
                        const tr = SAMPLE_TRAINS.find(t => t.trainNumber === e.target.value);
                        if (tr) setSelectedTrain(tr);
                      }}
                      className="w-full text-sm font-semibold p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-800"
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
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Coach</label>
                      <select
                        value={selectedCoach}
                        onChange={(e) => setSelectedCoach(e.target.value)}
                        className="w-full text-sm font-semibold p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900"
                      >
                        <option value="GS-1">GS-1 (General)</option>
                        <option value="GS-2">GS-2 (General)</option>
                        <option value="L-1">L-1 (Ladies Special)</option>
                        <option value="VND-1">VND-1 (Vendor Compartment)</option>
                        <option value="D-MC-1">D-MC (Divyangjan ♿)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Seat / Door Marker</label>
                      <input
                        type="text"
                        value={seatLocation}
                        onChange={(e) => setSeatLocation(e.target.value)}
                        className="w-full text-sm font-semibold p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900"
                        placeholder="e.g., Door 2 Left"
                      />
                    </div>
                  </div>

                  {/* Summary Callout */}
                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
                    <div className="text-xs text-blue-900">
                      <span className="font-bold">Next Station Halt:</span> {selectedStation.name} • Train #{selectedTrain.trainNumber} arriving at Platform 2.
                    </div>
                  </div>
                </div>

                {/* Right: Regulated Tariff Catalog */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Step 2: Choose Official Railway Tariff Items
                      </h4>
                      <p className="text-xs text-slate-500">Regulated fixed tariffs enforced to prevent hawker overcharging.</p>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Official Tariff
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[260px] overflow-y-auto pr-1">
                    {REGULATED_FOOD_ITEMS.map((item) => {
                      const inCart = cartItems.find(c => c.item.id === item.id);
                      return (
                        <div
                          key={item.id}
                          className="p-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 flex items-center justify-between transition"
                        >
                          <div className="pr-2">
                            <div className="text-xs font-bold text-slate-900 leading-snug">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5">
                              {item.servingPortion} • <strong className="text-slate-900 font-mono">₹{item.unitPrice}</strong>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            {inCart ? (
                              <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-0.5">
                                <button
                                  onClick={() => handleRemoveFromCart(item.id)}
                                  className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold text-slate-600 hover:bg-slate-100"
                                >
                                  -
                                </button>
                                <span className="w-5 text-center text-xs font-bold text-blue-900">{inCart.count}</span>
                                <button
                                  onClick={() => handleAddToCart(item)}
                                  className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold text-slate-600 hover:bg-slate-100"
                                >
                                  +
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => handleAddToCart(item)}
                                className="text-xs font-bold px-3 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-950 text-white transition shadow-2xs"
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
                  <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-blue-950 to-blue-900 text-white flex flex-wrap items-center justify-between gap-4 shadow-md">
                    <div>
                      <div className="text-xs text-blue-200 font-medium">Total Regulated Tariff:</div>
                      <div className="text-2xl font-black text-amber-400 font-mono">₹{cartTotal}</div>
                      <div className="text-[10px] text-blue-300">
                        {cartItems.reduce((acc, c) => acc + c.count, 0)} item(s) selected for {selectedCoach}
                      </div>
                    </div>

                    <button
                      id="btn-fire-hunger-signal"
                      disabled={cartItems.length === 0}
                      onClick={handleSendHungerSignal}
                      className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-black px-5 py-3 rounded-xl shadow-md transition transform hover:-translate-y-0.5"
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
                    <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto animate-bounce">
                      <RefreshCw className="w-8 h-8 animate-spin" />
                    </div>
                    <h4 className="text-xl font-black text-slate-900">Broadcasting Hunger Signal to Approaching Platform...</h4>
                    <p className="text-xs text-slate-600">
                      Searching verified vendors stationed at <strong className="text-slate-900">{selectedStation.name}</strong> and inside <strong className="text-slate-900">Car {selectedCoach}</strong>.
                    </p>
                    <div className="p-3 bg-slate-100 rounded-xl text-xs font-mono text-slate-600">
                      Payload: {cartItems.map(c => `${c.count}x ${c.item.name}`).join(', ')} • Total ₹{cartTotal}
                    </div>
                  </div>
                )}

                {orderStage === 'ACCEPTED' && (
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                      Vendor Paired & Locked!
                    </span>
                    <h4 className="text-xl font-black text-slate-900">
                      {assignedVendor?.name} is arriving at Coach {selectedCoach}
                    </h4>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">Verified Vendor ID:</span>
                        <span className="font-mono font-bold text-slate-900">{assignedVendor?.id}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">Vendor Rating:</span>
                        <span className="font-bold text-amber-600">★ {assignedVendor?.rating} / 5.0</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">Target Delivery Point:</span>
                        <span className="font-bold text-blue-900">Coach {selectedCoach} • {seatLocation}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs border-t border-slate-200 pt-2">
                        <span className="text-slate-700 font-bold">Exact Cash to Handover:</span>
                        <span className="text-base font-black text-emerald-700 font-mono">₹{cartTotal}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setOrderStage('DELIVERED')}
                      className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition text-sm shadow-xs"
                    >
                      Confirm Item Received & Payment Complete
                    </button>
                  </div>
                )}

                {orderStage === 'DELIVERED' && (
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mx-auto">
                      <Coffee className="w-8 h-8 text-blue-900" />
                    </div>
                    <h4 className="text-xl font-black text-slate-900">Fulfillment Complete in 22 Seconds!</h4>
                    <p className="text-xs text-slate-600">
                      Snack received within the 30-second halt window. Transaction recorded in your local offline Room database.
                    </p>
                    <button
                      onClick={() => {
                        setOrderStage('SELECT');
                        setAssignedVendor(null);
                      }}
                      className="px-6 py-2.5 bg-blue-900 text-white text-xs font-bold rounded-xl hover:bg-blue-950 transition"
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
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">CUJ Flow 2</span>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Verified Hawker Demand Radar & Atomic Order Locking
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Eliminating blind hawking: vendors see exactly which coach has waiting buyers, with atomic locks to prevent disputes.
                </p>
              </div>

              {/* Vendor Zone Switcher */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
                <button
                  onClick={() => setVendorZone('ONBOARD')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    vendorZone === 'ONBOARD' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  Onboard Train #31821
                </button>
                <button
                  onClick={() => setVendorZone('PLATFORM')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    vendorZone === 'PLATFORM' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
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
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Live Signals Within 200m Rake Zone ({mockIncomingRequests.length})
                  </h4>
                  <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    Radar Active
                  </span>
                </div>

                {mockIncomingRequests.length === 0 ? (
                  <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <div className="font-bold text-slate-800 text-sm">All Signals Handled!</div>
                    <p className="text-xs text-slate-500 mt-1">Waiting for upcoming passengers to broadcast hunger signals.</p>
                  </div>
                ) : (
                  mockIncomingRequests.map(req => (
                    <div
                      key={req.requestId}
                      className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white transition space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-100 text-blue-900">
                            {req.requestId}
                          </span>
                          <span className="text-xs font-extrabold text-slate-900">
                            {req.foodItemName}
                          </span>
                        </div>
                        <span className="text-sm font-black text-emerald-800 font-mono bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                          ₹{req.totalPrice}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs bg-white p-2.5 rounded-xl border border-slate-200/80">
                        <div>
                          <span className="text-slate-400 text-[10px] block">TARGET COACH</span>
                          <strong className="text-blue-900 font-bold">{req.coach}</strong>
                        </div>
                        <div>
                          <span className="text-slate-400 text-[10px] block">PASSENGER SEAT</span>
                          <span className="text-slate-700 font-medium">{req.seatLocation}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 text-[10px] block">PASSENGER</span>
                          <span className="text-slate-700 font-medium">{req.travelerName}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <div className="text-[11px] text-slate-500 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          <span>Arrives in ~{req.estimatedArrivalMin} mins</span>
                        </div>

                        {req.status === 'PENDING' ? (
                          <button
                            onClick={() => handleLockOrder(req.requestId)}
                            className="inline-flex items-center gap-1.5 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition shadow-2xs"
                          >
                            <Lock className="w-3.5 h-3.5 text-amber-400" />
                            <span>Accept & Lock Request</span>
                          </button>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                              ✓ Locked by You
                            </span>
                            <button
                              onClick={() => handleDeliverOrder(req.requestId, req.totalPrice)}
                              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-2xs transition"
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
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Daily Shift Earnings Ledger
                </h4>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-4 shadow-md">
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Shift Revenue Logged</div>
                    <div className="text-3xl font-black text-amber-400 font-mono mt-1">₹{vendorEarnings.totalRevenue}</div>
                    <div className="text-xs text-slate-300 mt-1">
                      {vendorEarnings.totalOrders} successful deliveries today
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-700/80 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Vendor Rating:</span>
                      <strong className="text-amber-400 font-mono">★ {vendorEarnings.rating} / 5.0</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Zonal ID:</span>
                      <strong className="font-mono text-white">ER-VND-4102</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Halt Handover Avg:</span>
                      <strong className="text-emerald-400 font-mono">18.4 seconds</strong>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                  <ShieldCheck className="w-4 h-4 text-amber-700 mb-1" />
                  <strong>Fair Income Assurance:</strong> Zero commission deducted from vendor tariffs. Direct cash or UPI at the coach door.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Battery-Smart Location Engine & State Machine */}
        {activeTab === 'BATTERY' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm animate-in fade-in duration-200">
            <div className="pb-6 border-b border-slate-100">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">CUJ Flow 3</span>
              <h3 className="text-xl font-extrabold text-slate-900">
                Battery-Smart Location State Machine
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Continuous GPS drains phone batteries on 2-hour suburban commutes. RailSaathi pauses hardware GPS unless all active travel criteria are met.
              </p>
            </div>

            {/* Exact Mathematical Formula Banner */}
            <div className="my-6 p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs sm:text-sm overflow-x-auto shadow-inner">
              <span className="text-slate-400 block text-[10px] mb-1 font-sans uppercase font-bold tracking-wider">
                Location Policy Engine Boolean Formula:
              </span>
              <div className="text-amber-300 font-bold break-words sm:whitespace-nowrap">
                Tracking Active ⇔ (isForeground == true) ∧ (userTravelStatus == ACTIVE_TRAVEL) ∧ (hasPermission == true) ∧ (servicesEnabled == true)
              </div>
            </div>

            {/* Interactive Control Toggles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-slate-700">1. App Foreground Status</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => updateEngine({ isForeground: true })}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition ${
                      engineState.isForeground ? 'bg-blue-900 text-white border-blue-900' : 'bg-white text-slate-600'
                    }`}
                  >
                    Foreground
                  </button>
                  <button
                    onClick={() => updateEngine({ isForeground: false })}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition ${
                      !engineState.isForeground ? 'bg-blue-900 text-white border-blue-900' : 'bg-white text-slate-600'
                    }`}
                  >
                    Minimized
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-slate-700">2. Commuter Movement State</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => updateEngine({ userTravelStatus: 'ACTIVE_TRAVEL' })}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition ${
                      engineState.userTravelStatus === 'ACTIVE_TRAVEL' ? 'bg-blue-900 text-white border-blue-900' : 'bg-white text-slate-600'
                    }`}
                  >
                    Riding Train
                  </button>
                  <button
                    onClick={() => updateEngine({ userTravelStatus: 'STATIONARY' })}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition ${
                      engineState.userTravelStatus === 'STATIONARY' ? 'bg-blue-900 text-white border-blue-900' : 'bg-white text-slate-600'
                    }`}
                  >
                    Stationary
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-slate-700">3. Android Permission</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => updateEngine({ hasPermission: true })}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition ${
                      engineState.hasPermission ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-white text-slate-600'
                    }`}
                  >
                    Granted
                  </button>
                  <button
                    onClick={() => updateEngine({ hasPermission: false })}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition ${
                      !engineState.hasPermission ? 'bg-rose-700 text-white border-rose-700' : 'bg-white text-slate-600'
                    }`}
                  >
                    Denied
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-slate-700">4. Master Location Toggle</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => updateEngine({ servicesEnabled: true })}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition ${
                      engineState.servicesEnabled ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-white text-slate-600'
                    }`}
                  >
                    Enabled
                  </button>
                  <button
                    onClick={() => updateEngine({ servicesEnabled: false })}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition ${
                      !engineState.servicesEnabled ? 'bg-rose-700 text-white border-rose-700' : 'bg-white text-slate-600'
                    }`}
                  >
                    Disabled
                  </button>
                </div>
              </div>
            </div>

            {/* Resulting Hardware State Card */}
            <div className={`mt-6 p-6 rounded-2xl border transition-all ${
              engineState.isGpsActive 
                ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                : 'bg-amber-50/80 border-amber-200 text-amber-950'
            }`}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm ${
                    engineState.isGpsActive ? 'bg-emerald-600' : 'bg-amber-600'
                  }`}>
                    <BatteryCharging className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider">HARDWARE GPS STATE:</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-black font-mono ${
                        engineState.isGpsActive ? 'bg-emerald-200 text-emerald-900' : 'bg-amber-200 text-amber-900'
                      }`}>
                        {engineState.isGpsActive ? '🟢 ACTIVE' : '🛑 PAUSED / SAFE'}
                      </span>
                    </div>
                    <div className="text-sm font-semibold mt-0.5">{engineState.statusMessage}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-medium text-slate-600">Calculated Battery Consumption</div>
                  <div className="text-xl font-black font-mono mt-0.5">{engineState.batteryDrainPerHour}</div>
                  <div className="text-[11px] text-emerald-700 font-bold">
                    {engineState.isGpsActive ? 'Foreground tracking active' : '⚡ 85% Battery Saved'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Senior Citizen & Accessibility Experience */}
        {activeTab === 'SENIOR' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm animate-in fade-in duration-200">
            <div className="pb-6 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">CUJ Flow 4</span>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Senior Citizen & High-Accessibility Mode
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Engineered specifically for elderly commuters: 56dp minimum touch targets, high contrast, and voice-assisted confirmations.
                </p>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-900 border border-purple-200">
                WCAG 2.1 AA Compliant
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Senior Spec 1 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-black text-sm">
                  56dp
                </div>
                <h4 className="font-extrabold text-slate-900 text-base">Enlarged Touch Targets</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Surpasses the standard Android 48dp guideline with 56dp x 56dp buttons, eliminating accidental miss-taps during jerky train motion.
                </p>
                <button className="w-full py-4 bg-blue-900 text-white font-extrabold text-base rounded-2xl shadow-sm hover:bg-blue-950 transition">
                  Sample 56dp Action Button
                </button>
              </div>

              {/* Senior Spec 2 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-base">Ultra-High Contrast Palette</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pure white backgrounds and rich deep charcoal typography ensure clear legibility even in direct Indian summer sunlight on open platforms.
                </p>
                <div className="p-3 bg-white border-2 border-slate-900 rounded-xl">
                  <div className="text-base font-black text-slate-950">Sealdah ➔ Ranaghat Local</div>
                  <div className="text-xs font-bold text-slate-700">Platform 4 • Departs in 6 mins</div>
                </div>
              </div>

              {/* Senior Spec 3 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Volume2 className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-base">Voice & Haptic Assistance</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Contextual station announcements and order arrival alerts trigger distinct haptic vibration pulses and audio readout in 6 Indian languages.
                </p>
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="text-xs font-bold text-emerald-900">
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
