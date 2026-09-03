import React, { useState } from 'react';
import { 
  Train, 
  Users, 
  Accessibility, 
  Store, 
  Shield, 
  Sparkles, 
  Info,
  ChevronRight,
  Compass,
  ArrowRight
} from 'lucide-react';
import { CoachDetail } from '../types';
import { EMU_12_CAR_RAKE } from '../data/railwayData';

export const CoachRadar: React.FC<{ seniorMode: boolean }> = ({ seniorMode }) => {
  const [selectedCoach, setSelectedCoach] = useState<CoachDetail>(EMU_12_CAR_RAKE[1]); // Default to GS-1
  const [filterType, setFilterType] = useState<'ALL' | 'DIVYANG' | 'LADIES' | 'VENDOR'>('ALL');

  const filteredCoaches = EMU_12_CAR_RAKE.filter(c => {
    if (filterType === 'DIVYANG') return c.hasWheelchairAccess;
    if (filterType === 'LADIES') return c.type === 'LADIES';
    if (filterType === 'VENDOR') return c.isVendorDedicated;
    return true;
  });

  const getCoachBadgeColor = (type: CoachDetail['type']) => {
    switch (type) {
      case 'MOTOR_DIVYANG':
      case 'GUARD_DIVYANG':
        return 'bg-purple-100 text-purple-900 border-purple-300';
      case 'LADIES':
        return 'bg-pink-100 text-pink-900 border-pink-300';
      case 'VENDOR':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      default:
        return 'bg-blue-100 text-blue-900 border-blue-200';
    }
  };

  const getCrowdColor = (level: CoachDetail['currentCrowdLevel']) => {
    switch (level) {
      case 'Low':
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Moderate':
        return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'Crowded':
        return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'Dense Rush':
        return 'text-rose-700 bg-rose-50 border-rose-200';
    }
  };

  return (
    <section id="coach-radar" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200 mb-3">
            <Compass className="w-3.5 h-3.5 text-blue-700" />
            Suburban EMU Rake Composition
          </div>
          <h2 className={`font-black text-slate-900 tracking-tight ${seniorMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
            Authentic 12-Car Coach Radar
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Never sprint on crowded platforms again. Locate Ladies compartments, Divyangjan accessible coaches, and licensed vendor zones before the 30-second halt begins.
          </p>

          {/* Coach Quick Filters */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setFilterType('ALL')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                filterType === 'ALL' ? 'bg-blue-900 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All 12 Coaches
            </button>
            <button
              onClick={() => setFilterType('LADIES')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                filterType === 'LADIES' ? 'bg-pink-700 text-white shadow-xs' : 'bg-pink-50 text-pink-800 hover:bg-pink-100'
              }`}
            >
              Ladies Specials (L-1, L-2)
            </button>
            <button
              onClick={() => setFilterType('DIVYANG')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                filterType === 'DIVYANG' ? 'bg-purple-700 text-white shadow-xs' : 'bg-purple-50 text-purple-800 hover:bg-purple-100'
              }`}
            >
              ♿ Divyangjan Accessible (Car 1, 12)
            </button>
            <button
              onClick={() => setFilterType('VENDOR')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                filterType === 'VENDOR' ? 'bg-amber-600 text-white shadow-xs' : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
              }`}
            >
              Hawker & Luggage (VND-1)
            </button>
          </div>
        </div>

        {/* 12-Car Rake Visual Track */}
        <div className="p-3 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 overflow-hidden">
          <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-400 pb-3 border-b border-slate-800 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="truncate">12-CAR EMU FORMATION</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-400 font-bold shrink-0">
              <span className="hidden sm:inline">DIRECTION OF TRAVEL</span>
              <span className="sm:hidden text-[10px]">ENGINE</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="pt-2 flex sm:hidden items-center justify-center gap-1.5 text-[11px] text-amber-300/90 font-medium">
            <span>↔ Swipe horizontally to inspect all 12 coaches</span>
          </div>

          {/* Horizontal Scrollable Coaches Strip */}
          <div className="py-4 sm:py-6 overflow-x-auto touch-pan-x">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-[880px] sm:min-w-[920px] px-1">
              {/* Locomotive / Leading Cab Marker */}
              <div className="w-14 h-24 rounded-l-2xl rounded-r-sm bg-gradient-to-r from-blue-700 to-blue-600 border border-blue-400/40 p-2 flex flex-col justify-between shrink-0 shadow-md">
                <span className="text-[10px] font-black uppercase text-amber-300">CAB</span>
                <Train className="w-6 h-6 text-white" />
                <span className="text-[9px] font-mono text-blue-100">ENGINE</span>
              </div>

              {/* 12 Coaches */}
              {EMU_12_CAR_RAKE.map((coach) => {
                const isSelected = selectedCoach.position === coach.position;
                const isMatch = filteredCoaches.some(fc => fc.position === coach.position);

                return (
                  <button
                    key={coach.position}
                    onClick={() => setSelectedCoach(coach)}
                    className={`relative w-20 h-28 rounded-xl border transition-all flex flex-col justify-between p-2.5 text-left shrink-0 cursor-pointer ${
                      isSelected
                        ? 'ring-2 ring-amber-400 scale-105 shadow-lg bg-blue-950 border-amber-400'
                        : isMatch
                        ? 'bg-slate-800/90 border-slate-700 hover:bg-slate-700/80 hover:border-slate-500'
                        : 'opacity-35 bg-slate-900 border-slate-800'
                    }`}
                  >
                    {/* Top Row: Car Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        #{coach.position}
                      </span>
                      {coach.hasWheelchairAccess && <span className="text-xs">♿</span>}
                      {coach.type === 'LADIES' && <span className="text-xs">👩</span>}
                      {coach.isVendorDedicated && <span className="text-xs">🧺</span>}
                    </div>

                    {/* Middle: Coach Code */}
                    <div>
                      <div className="font-mono text-sm font-black text-white leading-tight">
                        {coach.code}
                      </div>
                      <div className="text-[9px] text-slate-400 truncate">
                        {coach.type === 'LADIES' ? 'Ladies' : coach.type === 'VENDOR' ? 'Vendor' : 'General'}
                      </div>
                    </div>

                    {/* Bottom: Crowd Dot */}
                    <div className="flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        coach.currentCrowdLevel === 'Dense Rush' ? 'bg-rose-500' :
                        coach.currentCrowdLevel === 'Crowded' ? 'bg-amber-500' : 'bg-emerald-500'
                      }`} />
                      <span className="text-[8px] text-slate-400 truncate font-mono">
                        {coach.currentCrowdLevel}
                      </span>
                    </div>

                    {/* Active Selected Triangle */}
                    {isSelected && (
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-amber-400" />
                    )}
                  </button>
                );
              })}

              {/* Guard End Marker */}
              <div className="w-14 h-24 rounded-r-2xl rounded-l-sm bg-gradient-to-r from-blue-800 to-slate-800 border border-slate-700 p-2 flex flex-col justify-between shrink-0 shadow-md">
                <span className="text-[10px] font-black uppercase text-amber-300">GUARD</span>
                <Shield className="w-5 h-5 text-white" />
                <span className="text-[9px] font-mono text-slate-300">BRAKE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Coach Detail Card */}
        <div className="mt-6 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-md text-xs font-mono font-bold border ${getCoachBadgeColor(selectedCoach.type)}`}>
                  {selectedCoach.code}
                </span>
                <span className={`px-2 py-0.5 rounded-md text-xs font-bold border ${getCrowdColor(selectedCoach.currentCrowdLevel)}`}>
                  Crowd Status: {selectedCoach.currentCrowdLevel}
                </span>
                {selectedCoach.hasWheelchairAccess && (
                  <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-purple-50 text-purple-800 border border-purple-200 flex items-center gap-1">
                    <Accessibility className="w-3 h-3" />
                    <span>Divyangjan Friendly</span>
                  </span>
                )}
              </div>

              <h3 className="text-xl font-extrabold text-slate-900">
                {selectedCoach.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedCoach.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Max Passenger Limit</div>
                  <div className="text-base font-black text-slate-900 font-mono">{selectedCoach.capacity} Persons</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Rake Position</div>
                  <div className="text-base font-black text-blue-900 font-mono">Car #{selectedCoach.position} of 12</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Hawker Beacon</div>
                  <div className="text-base font-black text-emerald-700 font-mono">
                    {selectedCoach.isVendorDedicated ? 'Designated Base' : 'Vestibule Access'}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-blue-800" />
                <span>Station Platform Marker Tip</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Suburban stations on Eastern, Western, and Central Railway have painted platform pillar markings (e.g. <em>"12-CAR GS-1"</em>, <em>"LADIES"</em>).
              </p>
              <div className="p-3 rounded-xl bg-blue-50 text-blue-900 text-xs font-medium border border-blue-100">
                💡 <strong>Commuter Pro-Tip:</strong> RailSaathi predicts which platform pillar this coach lines up with before the train enters the platform!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
