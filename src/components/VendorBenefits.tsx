import React from 'react';
import { Eye, Users, Banknote, Languages, CheckCircle2, TrendingUp, ShieldAlert, Sparkles, Store } from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ScrollReveal } from './ScrollReveal';

interface VendorBenefitsProps {
  currentLang: LanguageCode;
  seniorMode?: boolean;
}

export const VendorBenefits: React.FC<VendorBenefitsProps> = ({ currentLang, seniorMode }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  return (
    <section id="vendors" className="py-16 sm:py-24 bg-[#0e100f] border-b border-[#42433d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191919] border border-[#42433d] text-xs font-mono text-[#0ae448] mb-4">
            <span>{'{'}</span>
            <span>{t.vendorBadge}</span>
            <span>{'}'}</span>
          </div>
          <h2 className={`font-semibold tracking-[-0.03em] text-[#fffce1] mb-4 ${seniorMode ? 'text-3xl sm:text-4xl' : 'text-3xl sm:text-4xl lg:text-5xl'}`}>
            {t.vendorTitle}
          </h2>
          <p className="text-[#7c7c6f] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {t.vendorSubhead}
          </p>
        </ScrollReveal>

        {/* 4 Core Vendor Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Benefit 1 - Blue */}
          <ScrollReveal delay={0.06} className="h-full">
            <div className="h-full p-6 sm:p-8 rounded-xl bg-[#191919] border border-[#42433d] hover:border-[#00bae2]/60 transition flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full border border-[#00bae2]/50 bg-[#0e100f] text-[#00bae2] flex items-center justify-center mb-6">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#fffce1] mb-2">
                  {t.vb1Title}
                </h3>
                <p className="text-[#7c7c6f] text-sm leading-relaxed">
                  {t.vb1Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#42433d] text-xs font-mono text-[#00bae2] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0ae448]" />
                <span>{t.vb1Sub}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Benefit 2 - Orange */}
          <ScrollReveal delay={0.12} className="h-full">
            <div className="h-full p-6 sm:p-8 rounded-xl bg-[#191919] border border-[#42433d] hover:border-[#ff8709]/60 transition flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full border border-[#ff8709]/50 bg-[#0e100f] text-[#ff8709] flex items-center justify-center mb-6">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#fffce1] mb-2">
                  {t.vb2Title}
                </h3>
                <p className="text-[#7c7c6f] text-sm leading-relaxed">
                  {t.vb2Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#42433d] text-xs font-mono text-[#ff8709] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0ae448]" />
                <span>{t.vb2Sub}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Benefit 3 - Green */}
          <ScrollReveal delay={0.18} className="h-full">
            <div className="h-full p-6 sm:p-8 rounded-xl bg-[#191919] border border-[#42433d] hover:border-[#0ae448]/60 transition flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full border border-[#0ae448]/50 bg-[#0e100f] text-[#0ae448] flex items-center justify-center mb-6">
                  <Banknote className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#fffce1] mb-2">
                  {t.vb3Title}
                </h3>
                <p className="text-[#7c7c6f] text-sm leading-relaxed">
                  {t.vb3Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#42433d] text-xs font-mono text-[#0ae448] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0ae448]" />
                <span>{t.vb3Sub}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Benefit 4 - Lilac */}
          <ScrollReveal delay={0.24} className="h-full">
            <div className="h-full p-6 sm:p-8 rounded-xl bg-[#191919] border border-[#42433d] hover:border-[#9d95ff]/60 transition flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full border border-[#9d95ff]/50 bg-[#0e100f] text-[#9d95ff] flex items-center justify-center mb-6">
                  <Languages className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#fffce1] mb-2">
                  {t.vb4Title}
                </h3>
                <p className="text-[#7c7c6f] text-sm leading-relaxed">
                  {t.vb4Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#42433d] text-xs font-mono text-[#9d95ff] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0ae448]" />
                <span>{t.vb4Sub}</span>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Authentic Vendor Voice / Quote Banner on #191919 */}
        <ScrollReveal delay={0.15} className="max-w-4xl mx-auto">
          <div className="rounded-xl bg-[#191919] border border-[#42433d] p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-14 h-14 rounded-full border border-[#42433d] bg-[#0e100f] text-[#ff8709] flex items-center justify-center font-bold text-2xl shrink-0">
                ☕
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-[#fffce1] font-medium text-sm sm:text-base italic leading-relaxed">
                  "{t.vendorQuote}"
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-mono text-[#7c7c6f]">
                  <strong className="text-[#fffce1] font-bold">{t.vendorQuoteAuthor}</strong>
                  <span>• {t.vendorQuoteRole}</span>
                  <span className="px-2.5 py-0.5 rounded-full border border-[#0ae448]/40 bg-[#0e100f] text-[#0ae448] font-bold">{t.vendorVerified}</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
