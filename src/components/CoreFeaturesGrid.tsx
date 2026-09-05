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
    <section id="features" className="py-16 sm:py-24 bg-[#0e100f] border-b border-[#42433d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191919] border border-[#42433d] text-xs font-mono text-[#0ae448] mb-4">
            <span>{'{'}</span>
            <span>{t.featBadge}</span>
            <span>{'}'}</span>
          </div>
          <h2 className={`font-semibold tracking-[-0.03em] text-[#fffce1] mb-4 ${seniorMode ? 'text-3xl sm:text-4xl' : 'text-3xl sm:text-4xl lg:text-5xl'}`}>
            {t.featTitle}
          </h2>
          <p className="text-[#7c7c6f] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {t.featSubhead}
          </p>
        </ScrollReveal>

        {/* 4-Item Grid with Taxonomy Colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          
          {/* Feature 1: Zero Battery Drain - Orange */}
          <ScrollReveal delay={0.05} className="h-full">
            <div className="h-full p-6 rounded-xl bg-[#191919] border border-[#42433d] hover:border-[#ff8709]/60 transition flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full border border-[#42433d] bg-[#0e100f] text-[#ff8709] flex items-center justify-center mb-4">
                  <BatteryCharging className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#fffce1] mb-2">
                  {t.f1Title}
                </h3>
                <p className="text-[#7c7c6f] text-xs sm:text-sm leading-relaxed">
                  {t.f1Desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#42433d] text-xs font-mono text-[#ff8709]">
                {t.f1Tag}
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 2: Works 100% Offline - Pink */}
          <ScrollReveal delay={0.12} className="h-full">
            <div className="h-full p-6 rounded-xl bg-[#191919] border border-[#42433d] hover:border-[#fec5fb]/60 transition flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full border border-[#42433d] bg-[#0e100f] text-[#fec5fb] flex items-center justify-center mb-4">
                  <WifiOff className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#fffce1] mb-2">
                  {t.f2Title}
                </h3>
                <p className="text-[#7c7c6f] text-xs sm:text-sm leading-relaxed">
                  {t.f2Desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#42433d] text-xs font-mono text-[#fec5fb]">
                {t.f2Tag}
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 3: Full Coach Radar - Violet */}
          <ScrollReveal delay={0.19} className="h-full">
            <div className="h-full p-6 rounded-xl bg-[#191919] border border-[#42433d] hover:border-[#9d95ff]/60 transition flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full border border-[#42433d] bg-[#0e100f] text-[#9d95ff] flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#fffce1] mb-2">
                  {t.f3Title}
                </h3>
                <p className="text-[#7c7c6f] text-xs sm:text-sm leading-relaxed">
                  {t.f3Desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#42433d] text-xs font-mono text-[#9d95ff]">
                {t.f3Tag}
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 4: Regulated Rail Tariffs - Green */}
          <ScrollReveal delay={0.26} className="h-full">
            <div className="h-full p-6 rounded-xl bg-[#191919] border border-[#42433d] hover:border-[#0ae448]/60 transition flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full border border-[#42433d] bg-[#0e100f] text-[#0ae448] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#fffce1] mb-2">
                  {t.f4Title}
                </h3>
                <p className="text-[#7c7c6f] text-xs sm:text-sm leading-relaxed">
                  {t.f4Desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#42433d] text-xs font-mono text-[#0ae448]">
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
            className={`px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer border ${
              activeInteractiveTool === 'RADAR'
                ? 'bg-[#fffce1] text-[#0e100f] border-[#fffce1]'
                : 'bg-transparent text-[#fffce1] border-[#42433d] hover:border-[#fffce1]'
            }`}
          >
            <Compass className="w-4 h-4 text-[#9d95ff]" />
            <span>{activeInteractiveTool === 'RADAR' ? t.hideRadar : t.toggleRadar}</span>
            {activeInteractiveTool === 'RADAR' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          <button
            id="btn-toggle-timetable-drawer"
            onClick={() => setActiveInteractiveTool(prev => prev === 'TIMETABLE' ? 'NONE' : 'TIMETABLE')}
            className={`px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer border ${
              activeInteractiveTool === 'TIMETABLE'
                ? 'bg-[#fffce1] text-[#0e100f] border-[#fffce1]'
                : 'bg-transparent text-[#fffce1] border-[#42433d] hover:border-[#fffce1]'
            }`}
          >
            <Train className="w-4 h-4 text-[#0ae448]" />
            <span>{activeInteractiveTool === 'TIMETABLE' ? t.hideTimetable : t.toggleTimetable}</span>
            {activeInteractiveTool === 'TIMETABLE' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </ScrollReveal>

        {/* Expanded Tool Container */}
        {activeInteractiveTool === 'RADAR' && (
          <div className="rounded-2xl border border-[#42433d] overflow-hidden mb-12 bg-[#191919]">
            <CoachRadar seniorMode={seniorMode ?? false} />
          </div>
        )}

        {activeInteractiveTool === 'TIMETABLE' && (
          <div className="rounded-2xl border border-[#42433d] overflow-hidden mb-12 bg-[#191919]">
            <OfflineTimetable seniorMode={seniorMode ?? false} />
          </div>
        )}

      </div>
    </section>
  );
};
