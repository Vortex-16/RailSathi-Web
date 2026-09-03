import React from 'react';
import { XCircle, CheckCircle2, Zap, Clock, MapPin, IndianRupee, ShieldCheck, Train } from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface TheBigDifferenceProps {
  currentLang: LanguageCode;
  seniorMode?: boolean;
}

export const TheBigDifference: React.FC<TheBigDifferenceProps> = ({ currentLang, seniorMode }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  return (
    <section id="difference" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold tracking-wide uppercase mb-4">
            <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>{t.diffBadge}</span>
          </div>
          <h2 className={`font-black tracking-tight text-slate-900 mb-4 ${seniorMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl lg:text-4xl'}`}>
            {t.diffHeadlinePre}
            <span className="text-red-600 line-through decoration-red-400">NOT</span> {t.diffHeadlinePost}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.diffSubhead}
          </p>
        </div>

        {/* High-Contrast Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: Other Delivery Apps */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.tradTag}</span>
                  <h3 className="text-xl font-black text-slate-700 mt-1">{t.tradTitle}</h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center font-bold">
                  <XCircle className="w-6 h-6" />
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">{t.tradPoint1Title} </strong>
                    <span>{t.tradPoint1Desc}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">{t.tradPoint2Title} </strong>
                    <span>{t.tradPoint2Desc}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">{t.tradPoint3Title} </strong>
                    <span>{t.tradPoint3Desc}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">{t.tradPoint4Title} </strong>
                    <span>{t.tradPoint4Desc}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 bg-red-50/50 rounded-xl p-3 text-xs text-red-800 font-medium">
              ⚠️ {currentLang === 'hi' ? 'नतीजा: पानी खरीदने के लिए ट्रेन से नीचे उतरना मतलब लोकल ट्रेन छूटना।' : currentLang === 'bn' ? 'ফলাফল: ভিড় ট্রেন থেকে নেমে জল কিনতে যাওয়া মানেই ট্রেন মিস হওয়ার নিশ্চিত ঝুঁকি।' : currentLang === 'ta' ? 'முடிவு: தண்ணீர் வாங்க ரயிலை விட்டு இறங்கினால் ரயிலை தவறவிட நேரிடும்.' : currentLang === 'ur' ? 'نتیجہ: پانی کی خاطر ٹرین سے نیچے اترنے کا مطلب ہے ٹرین چھوٹ جانا۔' : 'Result: Stepping off a crowded local train to buy water means missing your train or getting left behind.'}
            </div>
          </div>

          {/* Card 2: RailSaathi (Winning Card) */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 text-white shadow-xl border-2 border-amber-400/80 relative flex flex-col justify-between overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-56 h-56 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-blue-800/80 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">{t.rsTag}</span>
                  <h3 className="text-xl font-black text-white mt-1 flex items-center gap-2">
                    {t.rsTitle}
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950">Active</span>
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">{t.rsPoint1Title} </strong>
                    <span>{t.rsPoint1Desc}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">{t.rsPoint2Title} </strong>
                    <span>{t.rsPoint2Desc}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">{t.rsPoint3Title} </strong>
                    <span>{t.rsPoint3Desc}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">{t.rsPoint4Title} </strong>
                    <span>{t.rsPoint4Desc}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-blue-800/80 bg-blue-800/40 rounded-xl p-3 text-xs text-amber-300 font-semibold flex items-center gap-2">
              <Train className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{currentLang === 'hi' ? 'गार्ड की हरी झंडी और सीटी बजने से पहले सीधे आपकी सीट या गेट पर डिलीवरी।' : currentLang === 'bn' ? 'গার্ডের বাঁশি বাজার আগেই সরাসরি আপনার কামরায় বা দরজায় খাবার পৌঁছে যাবে।' : currentLang === 'ta' ? 'ரயில் கிளம்புவதற்கான பச்சை விசிலுக்கு முன்பே உங்கள் இருக்கைக்கே நேரடியாக உணவு.' : currentLang === 'ur' ? 'گارڈ کی ہری سیٹی بجنے سے پہلے براہ راست آپ کی سیٹ یا دروازے پر ترسیل۔' : 'Direct delivery right to your seat or door before the guard blows the green departure whistle.'}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
