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
    <section id="vendors" className="py-16 sm:py-24 bg-[#f2ee98] border-b-2 border-[#10380b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#fce519] border border-[#10380b] text-xs font-mono font-bold text-[#10380b] mb-4 shadow-[2px_2px_0px_0px_#10380b]">
            <span>//</span>
            <span>{t.vendorBadge}</span>
            <span>//</span>
          </div>
          <h2 className={`font-display font-bold tracking-tight text-[#10380b] mb-4 ${seniorMode ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl lg:text-5xl'}`}>
            {t.vendorTitle}
          </h2>
          <p className="text-[#10380b]/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            {t.vendorSubhead}
          </p>
        </ScrollReveal>

        {/* 4 Core Vendor Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Benefit 1 */}
          <ScrollReveal delay={0.06} className="h-full">
            <div className="h-full p-6 sm:p-8 rounded-[32px] bg-[#fefde6] border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b] hover:shadow-[8px_8px_0px_0px_#10380b] transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full border-1.5 border-[#10380b] bg-[#fce519] text-[#10380b] flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_#10380b]">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#10380b] mb-2">
                  {t.vb1Title}
                </h3>
                <p className="text-[#10380b]/80 text-sm leading-relaxed font-medium">
                  {t.vb1Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#10380b]/20 text-xs font-mono font-bold text-[#10380b] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10380b]" />
                <span>{t.vb1Sub}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Benefit 2 */}
          <ScrollReveal delay={0.12} className="h-full">
            <div className="h-full p-6 sm:p-8 rounded-[32px] bg-[#fefde6] border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b] hover:shadow-[8px_8px_0px_0px_#10380b] transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full border-1.5 border-[#10380b] bg-[#fce519] text-[#10380b] flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_#10380b]">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#10380b] mb-2">
                  {t.vb2Title}
                </h3>
                <p className="text-[#10380b]/80 text-sm leading-relaxed font-medium">
                  {t.vb2Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#10380b]/20 text-xs font-mono font-bold text-[#10380b] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10380b]" />
                <span>{t.vb2Sub}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Benefit 3 */}
          <ScrollReveal delay={0.18} className="h-full">
            <div className="h-full p-6 sm:p-8 rounded-[32px] bg-[#fefde6] border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b] hover:shadow-[8px_8px_0px_0px_#10380b] transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full border-1.5 border-[#10380b] bg-[#fce519] text-[#10380b] flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_#10380b]">
                  <Banknote className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#10380b] mb-2">
                  {t.vb3Title}
                </h3>
                <p className="text-[#10380b]/80 text-sm leading-relaxed font-medium">
                  {t.vb3Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#10380b]/20 text-xs font-mono font-bold text-[#10380b] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10380b]" />
                <span>{t.vb3Sub}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Benefit 4 */}
          <ScrollReveal delay={0.24} className="h-full">
            <div className="h-full p-6 sm:p-8 rounded-[32px] bg-[#fefde6] border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b] hover:shadow-[8px_8px_0px_0px_#10380b] transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full border-1.5 border-[#10380b] bg-[#fce519] text-[#10380b] flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_#10380b]">
                  <Languages className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#10380b] mb-2">
                  {t.vb4Title}
                </h3>
                <p className="text-[#10380b]/80 text-sm leading-relaxed font-medium">
                  {t.vb4Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#10380b]/20 text-xs font-mono font-bold text-[#10380b] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10380b]" />
                <span>{t.vb4Sub}</span>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Authentic Vendor Voice / Quote Banner in Botanical Sage */}
        <ScrollReveal delay={0.15} className="max-w-4xl mx-auto">
          <div className="rounded-[36px] bg-[#dbe8ac] border-2 border-[#10380b] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#10380b]">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full border-2 border-[#10380b] bg-[#fce519] text-[#10380b] flex items-center justify-center font-bold text-3xl shrink-0 shadow-[2px_2px_0px_0px_#10380b]">
                ☕
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-[#10380b] font-medium text-base sm:text-lg italic leading-relaxed">
                  "{t.vendorQuote}"
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-mono text-[#10380b]">
                  <strong className="text-[#10380b] font-bold">{t.vendorQuoteAuthor}</strong>
                  <span>• {t.vendorQuoteRole}</span>
                  <span className="px-3 py-0.5 rounded-full border border-[#10380b] bg-[#fce519] text-[#10380b] font-bold shadow-[1px_1px_0px_0px_#10380b]">{t.vendorVerified}</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
