import React from 'react';
import { XCircle, CheckCircle2, Zap, Clock, MapPin, IndianRupee, ShieldCheck, Train } from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ScrollReveal } from './ScrollReveal';

interface TheBigDifferenceProps {
  currentLang: LanguageCode;
  seniorMode?: boolean;
}

export const TheBigDifference: React.FC<TheBigDifferenceProps> = ({ currentLang, seniorMode }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  return (
    <section id="difference" className="py-16 sm:py-24 bg-[#f2ee98] border-b-2 border-[#10380b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#fce519] border border-[#10380b] text-xs font-mono font-bold text-[#10380b] mb-4 shadow-[2px_2px_0px_0px_#10380b]">
            <span>//</span>
            <span>{t.diffBadge}</span>
          </div>
          <h2 className={`font-display font-bold tracking-tight text-[#10380b] mb-4 ${seniorMode ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl lg:text-5xl'}`}>
            {t.diffHeadlinePre}
            <span className="bg-[#fce519] text-[#10380b] px-2 py-0.5 mx-2 rounded-lg border border-[#10380b] line-through decoration-[#10380b]">NOT</span>
            {t.diffHeadlinePost}
          </h2>
          <p className="text-[#10380b]/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            {t.diffSubhead}
          </p>
        </ScrollReveal>

        {/* High-Contrast Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: Other Delivery Apps (Traditional / Friction) */}
          <ScrollReveal delay={0.1} className="h-full">
            <div className="h-full rounded-[36px] p-6 sm:p-8 bg-[#fefde6] border-1.5 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#10380b]/20 mb-6">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#10380b]/60">{t.tradTag}</span>
                    <h3 className="text-xl font-bold text-[#10380b] mt-1">{t.tradTitle}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-[#10380b] bg-[#f2ee98] text-[#10380b] flex items-center justify-center font-bold">
                    <XCircle className="w-5 h-5" />
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-[#10380b]/80">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#10380b] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#10380b] font-bold">{t.tradPoint1Title} </strong>
                      <span>{t.tradPoint1Desc}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#10380b] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#10380b] font-bold">{t.tradPoint2Title} </strong>
                      <span>{t.tradPoint2Desc}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#10380b] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#10380b] font-bold">{t.tradPoint3Title} </strong>
                      <span>{t.tradPoint3Desc}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#10380b] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#10380b] font-bold">{t.tradPoint4Title} </strong>
                      <span>{t.tradPoint4Desc}</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#10380b]/20 bg-[#f2ee98] rounded-2xl p-4 text-xs text-[#10380b] font-mono font-bold border border-[#10380b]">
                ⚠️ {currentLang === 'hi' ? 'नतीजा: पानी खरीदने के लिए ट्रेन से नीचे उतरना मतलब लोकल ट्रेन छूटना।' : currentLang === 'bn' ? 'ফলাফল: ভিড় ট্রেন থেকে নেমে জল কিনতে যাওয়া মানেই ট্রেন মিস হওয়ার নিশ্চিত ঝুঁকি।' : currentLang === 'ta' ? 'முடிவு: தண்ணீர் வாங்க ரயிலை விட்டு இறங்கினால் ரயிலை தவறவிட நேரிடும்.' : currentLang === 'ur' ? 'نتیجہ: پانی کی خاطر ٹرین سے نیچے اترنے کا مطلب ہے ٹرین چھوٹ جانا۔' : 'Result: Stepping off a crowded local train to buy water means missing your train or getting left behind.'}
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: RailSathi (Winning Card — Botanical Sage Wash) */}
          <ScrollReveal delay={0.2} className="h-full">
            <div className="h-full rounded-[36px] p-6 sm:p-8 bg-[#dbe8ac] border-2 border-[#10380b] shadow-[8px_8px_0px_0px_#10380b] relative flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#10380b]/20 mb-6">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#10380b]">{t.rsTag}</span>
                    <h3 className="text-xl font-bold text-[#10380b] mt-1 flex items-center gap-2">
                      {t.rsTitle}
                      <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-[#10380b] bg-[#fce519] text-[#10380b]">
                        Suburban Ready
                      </span>
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-[#10380b] bg-[#fce519] text-[#10380b] flex items-center justify-center font-bold shadow-[2px_2px_0px_0px_#10380b]">
                    <CheckCircle2 className="w-5 h-5 text-[#10380b]" />
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-[#10380b]/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10380b] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#10380b] font-bold">{t.rsPoint1Title} </strong>
                      <span className="font-medium">{t.rsPoint1Desc}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10380b] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#10380b] font-bold">{t.rsPoint2Title} </strong>
                      <span className="font-medium">{t.rsPoint2Desc}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10380b] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#10380b] font-bold">{t.rsPoint3Title} </strong>
                      <span className="font-medium">{t.rsPoint3Desc}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10380b] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#10380b] font-bold">{t.rsPoint4Title} </strong>
                      <span className="font-medium">{t.rsPoint4Desc}</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#10380b]/20 bg-[#fefde6] rounded-2xl p-4 text-xs text-[#10380b] font-mono font-bold flex items-center gap-2 border border-[#10380b]">
                <Train className="w-4 h-4 text-[#10380b] shrink-0" />
                <span>{currentLang === 'hi' ? 'गार्ड की हरी झंडी और सीटी बजने से पहले सीधे आपकी सीट या गेट पर डिलीवरी।' : currentLang === 'bn' ? 'গার্ডের বাঁশি বাজার আগেই সরাসরি আপনার কামরায় বা দরজায় খাবার পৌঁছে যাবে।' : currentLang === 'ta' ? 'ரயில் கிளம்புவதற்கான பச்சை விசிலுக்கு முன்பே உங்கள் இருக்கைக்கே நேரடியாக உணவு.' : currentLang === 'ur' ? 'گارڈ کی ہری سیٹی بجنے سے پہلے براہ راست آپ کی سیٹ یا دروازے پر ترسیل۔' : 'Direct delivery right to your seat or door before the guard blows the green departure whistle.'}</span>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
