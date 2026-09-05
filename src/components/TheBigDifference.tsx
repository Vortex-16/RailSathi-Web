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
    <section id="difference" className="py-16 sm:py-24 bg-[#0e100f] border-b border-[#42433d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191919] border border-[#42433d] text-xs font-mono text-[#0ae448] mb-4">
            <span>{'{'}</span>
            <span>{t.diffBadge}</span>
            <span>{'}'}</span>
          </div>
          <h2 className={`font-semibold tracking-[-0.03em] text-[#fffce1] mb-4 ${seniorMode ? 'text-3xl sm:text-4xl' : 'text-3xl sm:text-4xl lg:text-5xl'}`}>
            {t.diffHeadlinePre}
            <span className="text-[#ff8709] line-through decoration-[#ff8709]/60 mx-2">NOT</span>
            {t.diffHeadlinePost}
          </h2>
          <p className="text-[#7c7c6f] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {t.diffSubhead}
          </p>
        </ScrollReveal>

        {/* High-Contrast Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: Other Delivery Apps */}
          <ScrollReveal delay={0.1} className="h-full">
            <div className="h-full rounded-xl p-6 sm:p-8 bg-[#191919] border border-[#42433d] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#42433d] mb-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#7c7c6f]">{t.tradTag}</span>
                    <h3 className="text-xl font-bold text-[#fffce1] mt-1">{t.tradTitle}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-[#42433d] bg-[#0e100f] text-[#ff8709] flex items-center justify-center font-bold">
                    <XCircle className="w-5 h-5" />
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-[#7c7c6f]">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#ff8709] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#fffce1] font-semibold">{t.tradPoint1Title} </strong>
                      <span>{t.tradPoint1Desc}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#ff8709] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#fffce1] font-semibold">{t.tradPoint2Title} </strong>
                      <span>{t.tradPoint2Desc}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#ff8709] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#fffce1] font-semibold">{t.tradPoint3Title} </strong>
                      <span>{t.tradPoint3Desc}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#ff8709] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#fffce1] font-semibold">{t.tradPoint4Title} </strong>
                      <span>{t.tradPoint4Desc}</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#42433d] bg-[#0e100f] rounded-lg p-3 text-xs text-[#ff8709] font-mono">
                ⚠️ {currentLang === 'hi' ? 'नतीजा: पानी खरीदने के लिए ट्रेन से नीचे उतरना मतलब लोकल ट्रेन छूटना।' : currentLang === 'bn' ? 'ফলাফল: ভিড় ট্রেন থেকে নেমে জল কিনতে যাওয়া মানেই ট্রেন মিস হওয়ার নিশ্চিত ঝুঁকি।' : currentLang === 'ta' ? 'முடிவு: தண்ணீர் வாங்க ரயிலை விட்டு இறங்கினால் ரயிலை தவறவிட நேரிடும்.' : currentLang === 'ur' ? 'نتیجہ: پانی کی خاطر ٹرین سے نیچے اترنے کا مطلب ہے ٹرین چھوٹ جانا۔' : 'Result: Stepping off a crowded local train to buy water means missing your train or getting left behind.'}
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: RailSaathi (Winning Card) */}
          <ScrollReveal delay={0.2} className="h-full">
            <div className="h-full rounded-xl p-6 sm:p-8 bg-[#191919] border border-[#0ae448]/60 relative flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#42433d] mb-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#0ae448]">{t.rsTag}</span>
                    <h3 className="text-xl font-bold text-[#fffce1] mt-1 flex items-center gap-2">
                      {t.rsTitle}
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-[#0ae448]/40 bg-[#0e100f] text-[#0ae448]">
                        Suburban Ready
                      </span>
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-[#0ae448] bg-[#0e100f] text-[#0ae448] flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-[#7c7c6f]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0ae448] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#fffce1] font-semibold">{t.rsPoint1Title} </strong>
                      <span>{t.rsPoint1Desc}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0ae448] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#fffce1] font-semibold">{t.rsPoint2Title} </strong>
                      <span>{t.rsPoint2Desc}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0ae448] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#fffce1] font-semibold">{t.rsPoint3Title} </strong>
                      <span>{t.rsPoint3Desc}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0ae448] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#fffce1] font-semibold">{t.rsPoint4Title} </strong>
                      <span>{t.rsPoint4Desc}</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#42433d] bg-[#0e100f] rounded-lg p-3 text-xs text-[#0ae448] font-mono flex items-center gap-2">
                <Train className="w-4 h-4 text-[#0ae448] shrink-0" />
                <span>{currentLang === 'hi' ? 'गार्ड की हरी झंडी और सीटी बजने से पहले सीधे आपकी सीट या गेट पर डिलीवरी।' : currentLang === 'bn' ? 'গার্ডের বাঁশি বাজার আগেই সরাসরি আপনার কামরায় বা দরজায় খাবার পৌঁছে যাবে।' : currentLang === 'ta' ? 'ரயில் கிளம்புவதற்கான பச்சை விசிலுக்கு முன்பே உங்கள் இருக்கைக்கே நேரடியாக உணவு.' : currentLang === 'ur' ? 'گارڈ کی ہری سیٹی بجنے سے پہلے براہ راست آپ کی سیٹ یا دروازے پر ترسیل۔' : 'Direct delivery right to your seat or door before the guard blows the green departure whistle.'}</span>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
