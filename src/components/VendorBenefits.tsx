import React from 'react';
import { Eye, Users, Banknote, Languages, CheckCircle2, TrendingUp, ShieldAlert, Sparkles, Store } from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface VendorBenefitsProps {
  currentLang: LanguageCode;
  seniorMode?: boolean;
}

export const VendorBenefits: React.FC<VendorBenefitsProps> = ({ currentLang, seniorMode }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  return (
    <section id="vendors" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold tracking-wide uppercase mb-4">
            <Store className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.vendorBadge}</span>
          </div>
          <h2 className={`font-black tracking-tight text-slate-900 mb-4 ${seniorMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl lg:text-4xl'}`}>
            {t.vendorHeadline}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.vendorSubhead}
          </p>
        </div>

        {/* 4 Core Vendor Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Benefit 1 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center mb-6 shadow-xs">
                <Eye className="w-6 h-6 text-blue-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                {t.vBen1Title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.vBen1Desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-blue-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t.vBen1Sub}</span>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-900 flex items-center justify-center mb-6 shadow-xs">
                <Users className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                {t.vBen2Title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.vBen2Desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-amber-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t.vBen2Sub}</span>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-900 flex items-center justify-center mb-6 shadow-xs">
                <Banknote className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                {t.vBen3Title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.vBen3Desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t.vBen3Sub}</span>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-900 flex items-center justify-center mb-6 shadow-xs">
                <Languages className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                {t.vBen4Title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.vBen4Desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-purple-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t.vBen4Sub}</span>
            </div>
          </div>

        </div>

        {/* Authentic Vendor Voice / Quote Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center font-black text-2xl shadow-md shrink-0">
              ☕
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-slate-700 font-medium text-sm sm:text-base italic">
                "{t.vendorQuote}"
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-slate-500">
                <strong className="text-slate-900 font-bold">{t.vendorAuthor}</strong>
                <span>• {t.vendorStation}</span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">{t.vendorVerified}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
