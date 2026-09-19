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
    <section id="coach-radar" className="py-12 sm:py-16 bg-[#f2ee98] text-[#10380b] border-b-2 border-[#10380b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#fce519] text-[#10380b] border border-[#10380b] mb-3 shadow-[2px_2px_0px_0px_#10380b]">
            <Compass className="w-3.5 h-3.5 text-[#10380b]" />
            <span>// Suburban EMU Rake Composition //</span>
          </div>
          <h2 className={`font-display font-bold text-[#10380b] tracking-tight ${seniorMode ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl lg:text-5xl'}`}>
            Authentic 12-Car Coach Radar
          </h2>
          <p className="mt-2 text-[#10380b]/80 text-sm sm:text-base leading-relaxed font-medium">
            Never sprint on crowded platforms again. Locate Ladies compartments, Divyangjan accessible coaches, and licensed vendor zones before the 30-second halt begins.
          </p>

          {/* Coach Quick Filters */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setFilterType('ALL')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition cursor-pointer border-1.5 border-[#10380b] ${
                filterType === 'ALL' ? 'bg-[#10380b] text-[#fefde6] shadow-[2px_2px_0px_0px_#10380b]' : 'bg-[#fefde6] text-[#10380b] hover:bg-[#fce519]'
              }`}
            >
              All 12 Coaches
            </button>
            <button
              onClick={() => setFilterType('LADIES')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition cursor-pointer border-1.5 border-[#10380b] ${
                filterType === 'LADIES' ? 'bg-[#fce519] text-[#10380b] shadow-[2px_2px_0px_0px_#10380b]' : 'bg-[#fefde6] text-[#10380b] hover:bg-[#fce519]'
              }`}
            >
              Ladies Specials (L-1, L-2)
            </button>
            <button
              onClick={() => setFilterType('DIVYANG')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition cursor-pointer border-1.5 border-[#10380b] ${
                filterType === 'DIVYANG' ? 'bg-[#dbe8ac] text-[#10380b] shadow-[2px_2px_0px_0px_#10380b]' : 'bg-[#fefde6] text-[#10380b] hover:bg-[#dbe8ac]'
              }`}
            >
              ♿ Divyangjan Accessible (Car 1, 12)
            </button>
            <button
              onClick={() => setFilterType('VENDOR')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition cursor-pointer border-1.5 border-[#10380b] ${
                filterType === 'VENDOR' ? 'bg-[#fce519] text-[#10380b] shadow-[2px_2px_0px_0px_#10380b]' : 'bg-[#fefde6] text-[#10380b] hover:bg-[#fce519]'
              }`}
            >
              Hawker & Luggage (VND-1)
            </button>
          </div>
        </div>

        {/* 12-Car Rake Visual Track */}
        <div className="p-4 sm:p-6 rounded-[32px] bg-[#fefde6] text-[#10380b] border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b] overflow-hidden">
          <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#10380b]/70 pb-3 border-b border-[#10380b]/20 font-mono font-bold">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10380b] animate-pulse shrink-0" />
              <span className="truncate tracking-wide">12-CAR EMU FORMATION</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#10380b] font-bold shrink-0">
              <span className="hidden sm:inline">DIRECTION OF TRAVEL</span>
              <span className="sm:hidden text-[10px]">ENGINE</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="pt-2 flex sm:hidden items-center justify-center gap-1.5 text-[11px] text-[#10380b] font-mono font-bold">
            <span>↔ Swipe horizontally to inspect all 12 coaches</span>
          </div>

          {/* Horizontal Scrollable Coaches Strip */}
          <div className="py-4 sm:py-6 overflow-x-auto touch-pan-x">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-[880px] sm:min-w-[920px] px-1">
              {/* Locomotive / Leading Cab Marker */}
              <div className="w-14 h-28 rounded-l-2xl rounded-r-md bg-[#10380b] text-[#fefde6] border-2 border-[#10380b] p-2 flex flex-col justify-between shrink-0 shadow-[2px_2px_0px_0px_#10380b]">
                <span className="text-[10px] font-mono font-bold uppercase text-[#fce519]">CAB</span>
                <Train className="w-6 h-6 text-[#fefde6]" />
                <span className="text-[9px] font-mono text-[#fefde6]/70">ENGINE</span>
              </div>

              {/* 12 Coaches */}
              {EMU_12_CAR_RAKE.map((coach) => {
                const isSelected = selectedCoach.position === coach.position;
                const isMatch = filteredCoaches.some(fc => fc.position === coach.position);

                return (
                  <button
                    key={coach.position}
                    onClick={() => setSelectedCoach(coach)}
                    className={`relative w-20 h-28 rounded-2xl border-2 transition-all flex flex-col justify-between p-2.5 text-left shrink-0 cursor-pointer ${
                      isSelected
                        ? 'border-[#10380b] bg-[#fce519] shadow-[4px_4px_0px_0px_#10380b]'
                        : isMatch
                        ? 'bg-[#f2ee98] border-[#10380b] hover:bg-[#dbe8ac]'
                        : 'opacity-40 bg-[#f2ee98]/60 border-[#10380b]/50'
                    }`}
                  >
                    {/* Top Row: Car Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-[#10380b]/70">
                        #{coach.position}
                      </span>
                      {coach.hasWheelchairAccess && <span className="text-xs">♿</span>}
                      {coach.type === 'LADIES' && <span className="text-xs">👩</span>}
                      {coach.isVendorDedicated && <span className="text-xs">🧺</span>}
                    </div>

                    {/* Middle: Coach Code */}
                    <div>
                      <div className="font-mono text-sm font-bold text-[#10380b] leading-tight">
                        {coach.code}
                      </div>
                      <div className="text-[9px] text-[#10380b]/80 truncate font-mono font-semibold">
                        {coach.type === 'LADIES' ? 'Ladies' : coach.type === 'VENDOR' ? 'Vendor' : 'General'}
                      </div>
                    </div>

                    {/* Bottom: Crowd Dot */}
                    <div className="flex items-center gap-1">
                      <span className={`w-2 h-2 rounded-full border border-[#10380b] ${
                        coach.currentCrowdLevel === 'Dense Rush' ? 'bg-[#d64028]' :
                        coach.currentCrowdLevel === 'Crowded' ? 'bg-[#fce519]' : 'bg-[#10380b]'
                      }`} />
                      <span className="text-[8px] text-[#10380b] truncate font-mono font-bold">
                        {coach.currentCrowdLevel}
                      </span>
                    </div>

                    {/* Active Selected Marker */}
                    {isSelected && (
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#10380b]" />
                    )}
                  </button>
                );
              })}

              {/* Guard End Marker */}
              <div className="w-14 h-28 rounded-r-2xl rounded-l-md bg-[#10380b] text-[#fefde6] border-2 border-[#10380b] p-2 flex flex-col justify-between shrink-0 shadow-[2px_2px_0px_0px_#10380b]">
                <span className="text-[10px] font-mono font-bold uppercase text-[#fce519]">GUARD</span>
                <Shield className="w-5 h-5 text-[#fefde6]" />
                <span className="text-[9px] font-mono text-[#fefde6]/70">BRAKE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Coach Detail Card */}
        <div className="mt-6 p-6 sm:p-8 rounded-[32px] bg-[#fefde6] border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold border border-[#10380b] bg-[#fce519] text-[#10380b]">
                  {selectedCoach.code}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold border border-[#10380b] bg-[#f2ee98] text-[#10380b]">
                  Crowd Status: {selectedCoach.currentCrowdLevel}
                </span>
                {selectedCoach.hasWheelchairAccess && (
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#dbe8ac] text-[#10380b] border border-[#10380b] flex items-center gap-1">
                    <Accessibility className="w-3 h-3" />
                    <span>Divyangjan Friendly</span>
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-display font-bold text-[#10380b]">
                {selectedCoach.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#10380b]/80 leading-relaxed font-medium">
                {selectedCoach.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#f2ee98] rounded-2xl border border-[#10380b]">
                  <div className="text-[10px] text-[#10380b]/70 uppercase font-mono font-bold">Max Limit</div>
                  <div className="text-sm font-bold text-[#10380b] font-mono">{selectedCoach.capacity} Persons</div>
                </div>

                <div className="p-3 bg-[#f2ee98] rounded-2xl border border-[#10380b]">
                  <div className="text-[10px] text-[#10380b]/70 uppercase font-mono font-bold">Rake Position</div>
                  <div className="text-sm font-bold text-[#10380b] font-mono">Car #{selectedCoach.position} of 12</div>
                </div>

                <div className="p-3 bg-[#f2ee98] rounded-2xl border border-[#10380b]">
                  <div className="text-[10px] text-[#10380b]/70 uppercase font-mono font-bold">Hawker Beacon</div>
                  <div className="text-sm font-bold text-[#10380b] font-mono">
                    {selectedCoach.isVendorDedicated ? 'Designated Base' : 'Vestibule Access'}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-5 rounded-2xl bg-[#dbe8ac] border-2 border-[#10380b] space-y-3 shadow-[4px_4px_0px_0px_#10380b]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#10380b] font-bold flex items-center gap-1.5">
                <Info className="w-4 h-4 text-[#10380b]" />
                <span>Station Platform Marker Tip</span>
              </h4>
              <p className="text-xs text-[#10380b]/85 leading-relaxed font-medium">
                Suburban stations on Eastern, Western, and Central Railway have painted platform pillar markings (e.g. <em>"12-CAR GS-1"</em>, <em>"LADIES"</em>).
              </p>
              <div className="p-3 rounded-xl bg-[#fefde6] text-[#10380b] text-xs border border-[#10380b]">
                <strong className="text-[#10380b] font-bold">Commuter Pro-Tip:</strong> RailSathi predicts which platform pillar this coach lines up with before the train enters the platform!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
