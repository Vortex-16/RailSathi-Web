import React, { useState } from 'react';
import { BatteryCharging, WifiOff, Compass, ShieldCheck, ChevronDown, ChevronUp, Train, MapPin } from 'lucide-react';
import { CoachRadar } from './CoachRadar';
import { OfflineTimetable } from './OfflineTimetable';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ScrollReveal } from './ScrollReveal';

interface CoreFeaturesGridProps {
  currentLang: LanguageCode;
  seniorMode?: boolean;
}

export const CoreFeaturesGrid: React.FC<CoreFeaturesGridProps> = ({ currentLang, seniorMode }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const [activeInteractiveTool, setActiveInteractiveTool] = useState<'NONE' | 'RADAR' | 'TIMETABLE'>('NONE');

  return (
    <section id="features" className="py-16 sm:py-24 bg-[#f2ee98] border-b-2 border-[#10380b] text-[#10380b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#fce519] border border-[#10380b] text-xs font-mono font-bold text-[#10380b] mb-4 shadow-[2px_2px_0px_0px_#10380b]">
            <span>//</span>
            <span>{t.featBadge}</span>
            <span>//</span>
          </div>
          <h2 className={`font-display font-bold tracking-tight text-[#10380b] mb-4 ${seniorMode ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl lg:text-5xl'}`}>
            {t.featTitle}
          </h2>
          <p className="text-[#10380b]/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            {t.featSubhead}
          </p>
        </ScrollReveal>

        {/* 4-Item Grid with Taxonomy Colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          
          {/* Feature 1: Zero Battery Drain */}
          <ScrollReveal delay={0.05} className="h-full">
            <div className="h-full p-6 rounded-[28px] bg-[#fefde6] border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b] hover:translate-y-[-2px] transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl border-2 border-[#10380b] bg-[#fce519] text-[#10380b] flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_#10380b]">
                  <BatteryCharging className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-[#10380b] mb-2">
                  {t.f1Title}
                </h3>
                <p className="text-[#10380b]/80 text-xs sm:text-sm leading-relaxed font-medium">
                  {t.f1Desc}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t-2 border-[#10380b]/20 text-xs font-mono font-bold text-[#10380b]">
                {t.f1Tag}
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 2: Works 100% Offline */}
          <ScrollReveal delay={0.12} className="h-full">
            <div className="h-full p-6 rounded-[28px] bg-[#fefde6] border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b] hover:translate-y-[-2px] transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl border-2 border-[#10380b] bg-[#fce519] text-[#10380b] flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_#10380b]">
                  <WifiOff className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-[#10380b] mb-2">
                  {t.f2Title}
                </h3>
                <p className="text-[#10380b]/80 text-xs sm:text-sm leading-relaxed font-medium">
                  {t.f2Desc}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t-2 border-[#10380b]/20 text-xs font-mono font-bold text-[#10380b]">
                {t.f2Tag}
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 3: Full Coach Radar */}
          <ScrollReveal delay={0.19} className="h-full">
            <div className="h-full p-6 rounded-[28px] bg-[#fefde6] border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b] hover:translate-y-[-2px] transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl border-2 border-[#10380b] bg-[#fce519] text-[#10380b] flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_#10380b]">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-[#10380b] mb-2">
                  {t.f3Title}
                </h3>
                <p className="text-[#10380b]/80 text-xs sm:text-sm leading-relaxed font-medium">
                  {t.f3Desc}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t-2 border-[#10380b]/20 text-xs font-mono font-bold text-[#10380b]">
                {t.f3Tag}
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 4: Regulated Rail Tariffs */}
          <ScrollReveal delay={0.26} className="h-full">
            <div className="h-full p-6 rounded-[28px] bg-[#fefde6] border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b] hover:translate-y-[-2px] transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl border-2 border-[#10380b] bg-[#fce519] text-[#10380b] flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_#10380b]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-[#10380b] mb-2">
                  {t.f4Title}
                </h3>
                <p className="text-[#10380b]/80 text-xs sm:text-sm leading-relaxed font-medium">
                  {t.f4Desc}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t-2 border-[#10380b]/20 text-xs font-mono font-bold text-[#10380b]">
                {t.f4Tag}
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Interactive Deep-Dive Drawer Toggles: Ghost Outlined Pills */}
        <ScrollReveal delay={0.15} className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <button
            id="btn-toggle-radar-drawer"
            onClick={() => setActiveInteractiveTool(prev => prev === 'RADAR' ? 'NONE' : 'RADAR')}
            className={`px-6 py-3 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer border-2 border-[#10380b] ${
              activeInteractiveTool === 'RADAR'
                ? 'bg-[#10380b] text-[#fefde6] shadow-[3px_3px_0px_0px_#10380b]'
                : 'bg-[#fefde6] text-[#10380b] shadow-[3px_3px_0px_0px_#10380b] hover:bg-[#fce519]'
            }`}
          >
            <Compass className="w-4 h-4 text-[#10380b]" />
            <span>{activeInteractiveTool === 'RADAR' ? t.hideRadar : t.toggleRadar}</span>
            {activeInteractiveTool === 'RADAR' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          <button
            id="btn-toggle-timetable-drawer"
            onClick={() => setActiveInteractiveTool(prev => prev === 'TIMETABLE' ? 'NONE' : 'TIMETABLE')}
            className={`px-6 py-3 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer border-2 border-[#10380b] ${
              activeInteractiveTool === 'TIMETABLE'
                ? 'bg-[#10380b] text-[#fefde6] shadow-[3px_3px_0px_0px_#10380b]'
                : 'bg-[#fefde6] text-[#10380b] shadow-[3px_3px_0px_0px_#10380b] hover:bg-[#fce519]'
            }`}
          >
            <Train className="w-4 h-4 text-[#10380b]" />
            <span>{activeInteractiveTool === 'TIMETABLE' ? t.hideTimetable : t.toggleTimetable}</span>
            {activeInteractiveTool === 'TIMETABLE' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </ScrollReveal>

        {/* Expanded Tool Container */}
        {activeInteractiveTool === 'RADAR' && (
          <div className="rounded-[32px] border-2 border-[#10380b] overflow-hidden mb-12 shadow-[8px_8px_0px_0px_#10380b]">
            <CoachRadar seniorMode={seniorMode ?? false} />
          </div>
        )}

        {activeInteractiveTool === 'TIMETABLE' && (
          <div className="rounded-[32px] border-2 border-[#10380b] overflow-hidden mb-12 shadow-[8px_8px_0px_0px_#10380b]">
            <OfflineTimetable seniorMode={seniorMode ?? false} />
          </div>
        )}

      </div>
    </section>
  );
};
