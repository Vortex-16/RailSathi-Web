import React, { useState } from 'react';
import { BatteryCharging, WifiOff, Compass, ShieldCheck, ChevronDown, ChevronUp, Train, MapPin } from 'lucide-react';
import { CoachRadar } from './CoachRadar';
import { OfflineTimetable } from './OfflineTimetable';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface CoreFeaturesGridProps {
  currentLang: LanguageCode;
  seniorMode?: boolean;
}

export const CoreFeaturesGrid: React.FC<CoreFeaturesGridProps> = ({ currentLang, seniorMode }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const [activeInteractiveTool, setActiveInteractiveTool] = useState<'NONE' | 'RADAR' | 'TIMETABLE'>('NONE');

  return (
    <section id="features" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-xs font-bold tracking-wide uppercase mb-4">
            <Train className="w-3.5 h-3.5 text-blue-700" />
            <span>{t.featuresBadge}</span>
          </div>
          <h2 className={`font-black tracking-tight text-slate-900 mb-4 ${seniorMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl lg:text-4xl'}`}>
            {t.featuresHeadline}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.featuresSubhead}
          </p>
        </div>

        {/* 4-Item Grid as Requested */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          
          {/* Feature 1: Zero Battery Drain */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-blue-300 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
                <BatteryCharging className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                {t.feat1Title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {t.feat1Desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-bold text-amber-700">
              {t.feat1Sub}
            </div>
          </div>

          {/* Feature 2: Works 100% Offline */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-blue-300 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                <WifiOff className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                {t.feat2Title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {t.feat2Desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-bold text-blue-700">
              {t.feat2Sub}
            </div>
          </div>

          {/* Feature 3: Full Coach Radar */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-blue-300 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                {t.feat3Title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {t.feat3Desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-bold text-purple-700">
              {t.feat3Sub}
            </div>
          </div>

          {/* Feature 4: Regulated Rail Tariffs */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-blue-300 transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                {t.feat4Title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {t.feat4Desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-bold text-emerald-700">
              {t.feat4Sub}
            </div>
          </div>

        </div>

        {/* Interactive Deep-Dive Drawer Toggles */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <button
            id="btn-toggle-radar-drawer"
            onClick={() => setActiveInteractiveTool(prev => prev === 'RADAR' ? 'NONE' : 'RADAR')}
            className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition border cursor-pointer ${
              activeInteractiveTool === 'RADAR'
                ? 'bg-blue-900 text-white border-blue-950 shadow-md'
                : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span>{activeInteractiveTool === 'RADAR' ? t.hideRadarBtn : t.showRadarBtn}</span>
            {activeInteractiveTool === 'RADAR' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          <button
            id="btn-toggle-timetable-drawer"
            onClick={() => setActiveInteractiveTool(prev => prev === 'TIMETABLE' ? 'NONE' : 'TIMETABLE')}
            className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition border cursor-pointer ${
              activeInteractiveTool === 'TIMETABLE'
                ? 'bg-blue-900 text-white border-blue-950 shadow-md'
                : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <Train className="w-4 h-4 text-emerald-500" />
            <span>{activeInteractiveTool === 'TIMETABLE' ? t.hideTimetableBtn : t.showTimetableBtn}</span>
            {activeInteractiveTool === 'TIMETABLE' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Expanded Tool Container */}
        {activeInteractiveTool === 'RADAR' && (
          <div className="rounded-3xl border border-slate-300 overflow-hidden shadow-xl mb-12 animate-fadeIn">
            <CoachRadar seniorMode={seniorMode ?? false} />
          </div>
        )}

        {activeInteractiveTool === 'TIMETABLE' && (
          <div className="rounded-3xl border border-slate-300 overflow-hidden shadow-xl mb-12 animate-fadeIn">
            <OfflineTimetable seniorMode={seniorMode ?? false} />
          </div>
        )}

      </div>
    </section>
  );
};
