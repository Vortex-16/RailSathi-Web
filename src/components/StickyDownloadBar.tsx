import React, { useState, useEffect } from 'react';
import { Download, X, Train, ShieldCheck } from 'lucide-react';
import { OFFICIAL_APK_DOWNLOAD_URL, APK_SIZE } from '../data/railwayData';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface StickyDownloadBarProps {
  currentLang?: LanguageCode;
}

export const StickyDownloadBar: React.FC<StickyDownloadBarProps> = ({ currentLang = 'en' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 400px
      if (window.scrollY > 400 && !dismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!isVisible || dismissed) return null;

  return (
    <aside aria-label="Quick download bar" className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-slate-950/95 backdrop-blur-md text-white border-t border-slate-800 shadow-2xl animate-slideUp">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 flex items-center justify-between gap-3">
        
        {/* Left Information */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-blue-900 border border-blue-700/60 flex items-center justify-center text-amber-400 shrink-0 shadow-xs hidden xs:flex">
            <Train className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 truncate">
              <span>RailSaathi Android APK (v1.0.0)</span>
              <span className="text-[10px] bg-emerald-500 text-slate-950 px-1.5 py-0.2 rounded font-black hidden sm:inline">
                Verified
              </span>
            </div>
            <div className="text-[11px] text-slate-400 truncate">
              {t.stickySub || t.stickyText || 'Instant hunger signal on local trains'} • {APK_SIZE} • Free
            </div>
          </div>
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            id="btn-sticky-download-apk"
            href={OFFICIAL_APK_DOWNLOAD_URL}
            download="RailSathi.apk"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-lg transition transform active:scale-95 text-xs sm:text-sm"
          >
            <Download className="w-4 h-4 text-slate-950" />
            <span>{t.downloadBtn || t.stickyBtn || 'Download APK'}</span>
          </a>
          
          <button
            onClick={() => setDismissed(true)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            title="Dismiss bar"
            aria-label="Close download bar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </aside>
  );
};
