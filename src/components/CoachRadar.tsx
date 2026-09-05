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
    <section id="coach-radar" className="py-12 sm:py-16 bg-[#0e100f] text-[#fffce1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase bg-[#191919] text-[#9d95ff] border border-[#42433d] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#9d95ff]" />
            <span>{'{'} Suburban EMU Rake Composition {'}'}</span>
          </div>
          <h2 className={`font-semibold text-[#fffce1] tracking-[-0.03em] ${seniorMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl lg:text-4xl'}`}>
            Authentic 12-Car Coach Radar
          </h2>
          <p className="mt-2 text-[#7c7c6f] text-sm sm:text-base leading-relaxed">
            Never sprint on crowded platforms again. Locate Ladies compartments, Divyangjan accessible coaches, and licensed vendor zones before the 30-second halt begins.
          </p>

          {/* Coach Quick Filters */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setFilterType('ALL')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer border ${
                filterType === 'ALL' ? 'bg-[#fffce1] text-[#0e100f] border-[#fffce1]' : 'bg-transparent text-[#fffce1] border-[#42433d] hover:border-[#fffce1]'
              }`}
            >
              All 12 Coaches
            </button>
            <button
              onClick={() => setFilterType('LADIES')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer border ${
                filterType === 'LADIES' ? 'bg-[#fec5fb] text-[#0e100f] border-[#fec5fb]' : 'bg-transparent text-[#fec5fb] border-[#42433d] hover:border-[#fec5fb]'
              }`}
            >
              Ladies Specials (L-1, L-2)
            </button>
            <button
              onClick={() => setFilterType('DIVYANG')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer border ${
                filterType === 'DIVYANG' ? 'bg-[#9d95ff] text-[#0e100f] border-[#9d95ff]' : 'bg-transparent text-[#9d95ff] border-[#42433d] hover:border-[#9d95ff]'
              }`}
            >
              ♿ Divyangjan Accessible (Car 1, 12)
            </button>
            <button
              onClick={() => setFilterType('VENDOR')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer border ${
                filterType === 'VENDOR' ? 'bg-[#ff8709] text-[#0e100f] border-[#ff8709]' : 'bg-transparent text-[#ff8709] border-[#42433d] hover:border-[#ff8709]'
              }`}
            >
              Hawker & Luggage (VND-1)
            </button>
          </div>
        </div>

        {/* 12-Car Rake Visual Track */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[#191919] text-[#fffce1] border border-[#42433d] overflow-hidden">
          <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#7c7c6f] pb-3 border-b border-[#42433d] font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0ae448] animate-pulse shrink-0" />
              <span className="truncate">12-CAR EMU FORMATION</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#0ae448] font-bold shrink-0">
              <span className="hidden sm:inline">DIRECTION OF TRAVEL</span>
              <span className="sm:hidden text-[10px]">ENGINE</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="pt-2 flex sm:hidden items-center justify-center gap-1.5 text-[11px] text-[#ff8709] font-medium font-mono">
            <span>↔ Swipe horizontally to inspect all 12 coaches</span>
          </div>

          {/* Horizontal Scrollable Coaches Strip */}
          <div className="py-4 sm:py-6 overflow-x-auto touch-pan-x">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-[880px] sm:min-w-[920px] px-1">
              {/* Locomotive / Leading Cab Marker */}
              <div className="w-14 h-24 rounded-l-xl rounded-r-sm bg-[#0e100f] border border-[#42433d] p-2 flex flex-col justify-between shrink-0">
                <span className="text-[10px] font-mono font-bold uppercase text-[#0ae448]">CAB</span>
                <Train className="w-6 h-6 text-[#fffce1]" />
                <span className="text-[9px] font-mono text-[#7c7c6f]">ENGINE</span>
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
                        ? 'border-[#0ae448] bg-[#0e100f] shadow-md ring-1 ring-[#0ae448]'
                        : isMatch
                        ? 'bg-[#0e100f] border-[#42433d] hover:border-[#7c7c6f]'
                        : 'opacity-30 bg-[#0e100f] border-[#42433d]'
                    }`}
                  >
                    {/* Top Row: Car Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-[#7c7c6f]">
                        #{coach.position}
                      </span>
                      {coach.hasWheelchairAccess && <span className="text-xs">♿</span>}
                      {coach.type === 'LADIES' && <span className="text-xs">👩</span>}
                      {coach.isVendorDedicated && <span className="text-xs">🧺</span>}
                    </div>

                    {/* Middle: Coach Code */}
                    <div>
                      <div className="font-mono text-sm font-bold text-[#fffce1] leading-tight">
                        {coach.code}
                      </div>
                      <div className="text-[9px] text-[#7c7c6f] truncate font-mono">
                        {coach.type === 'LADIES' ? 'Ladies' : coach.type === 'VENDOR' ? 'Vendor' : 'General'}
                      </div>
                    </div>

                    {/* Bottom: Crowd Dot */}
                    <div className="flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        coach.currentCrowdLevel === 'Dense Rush' ? 'bg-rose-500' :
                        coach.currentCrowdLevel === 'Crowded' ? 'bg-[#ff8709]' : 'bg-[#0ae448]'
                      }`} />
                      <span className="text-[8px] text-[#7c7c6f] truncate font-mono">
                        {coach.currentCrowdLevel}
                      </span>
                    </div>

                    {/* Active Selected Marker */}
                    {isSelected && (
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0ae448]" />
                    )}
                  </button>
                );
              })}

              {/* Guard End Marker */}
              <div className="w-14 h-24 rounded-r-xl rounded-l-sm bg-[#0e100f] border border-[#42433d] p-2 flex flex-col justify-between shrink-0">
                <span className="text-[10px] font-mono font-bold uppercase text-[#ff8709]">GUARD</span>
                <Shield className="w-5 h-5 text-[#fffce1]" />
                <span className="text-[9px] font-mono text-[#7c7c6f]">BRAKE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Coach Detail Card */}
        <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-[#191919] border border-[#42433d]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border border-[#42433d] bg-[#0e100f] text-[#0ae448]">
                  {selectedCoach.code}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono border border-[#42433d] bg-[#0e100f] text-[#ff8709]">
                  Crowd Status: {selectedCoach.currentCrowdLevel}
                </span>
                {selectedCoach.hasWheelchairAccess && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#0e100f] text-[#9d95ff] border border-[#42433d] flex items-center gap-1">
                    <Accessibility className="w-3 h-3" />
                    <span>Divyangjan Friendly</span>
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-[#fffce1]">
                {selectedCoach.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#7c7c6f] leading-relaxed">
                {selectedCoach.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#0e100f] rounded-xl border border-[#42433d]">
                  <div className="text-[10px] text-[#7c7c6f] uppercase font-mono font-bold">Max Limit</div>
                  <div className="text-sm font-bold text-[#fffce1] font-mono">{selectedCoach.capacity} Persons</div>
                </div>

                <div className="p-3 bg-[#0e100f] rounded-xl border border-[#42433d]">
                  <div className="text-[10px] text-[#7c7c6f] uppercase font-mono font-bold">Rake Position</div>
                  <div className="text-sm font-bold text-[#00bae2] font-mono">Car #{selectedCoach.position} of 12</div>
                </div>

                <div className="p-3 bg-[#0e100f] rounded-xl border border-[#42433d]">
                  <div className="text-[10px] text-[#7c7c6f] uppercase font-mono font-bold">Hawker Beacon</div>
                  <div className="text-sm font-bold text-[#0ae448] font-mono">
                    {selectedCoach.isVendorDedicated ? 'Designated Base' : 'Vestibule Access'}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-5 rounded-xl bg-[#0e100f] border border-[#42433d] space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#7c7c6f] flex items-center gap-1.5">
                <Info className="w-4 h-4 text-[#00bae2]" />
                <span>Station Platform Marker Tip</span>
              </h4>
              <p className="text-xs text-[#7c7c6f] leading-relaxed">
                Suburban stations on Eastern, Western, and Central Railway have painted platform pillar markings (e.g. <em>"12-CAR GS-1"</em>, <em>"LADIES"</em>).
              </p>
              <div className="p-3 rounded-xl bg-[#191919] text-[#fffce1] text-xs border border-[#42433d]">
                <strong className="text-[#0ae448]">Commuter Pro-Tip:</strong> RailSaathi predicts which platform pillar this coach lines up with before the train enters the platform!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
