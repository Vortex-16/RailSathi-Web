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
    <aside aria-label="Quick download bar" className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-3 bg-[#fefde6] text-[#10380b] border-t-2 border-[#10380b] shadow-[0_-4px_0px_0px_#10380b] animate-slideUp">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 flex items-center justify-between gap-2 sm:gap-3">
        
        {/* Left Information */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#fce519] border-2 border-[#10380b] flex items-center justify-center text-[#10380b] shrink-0 hidden xs:flex shadow-[1px_1px_0px_0px_#10380b]">
            <Train className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-xs sm:text-sm font-bold font-display text-[#10380b] flex items-center gap-1.5 truncate">
              <span className="truncate">RailSathi APK (v1.0.0)</span>
              <span className="text-[10px] bg-[#dbe8ac] text-[#10380b] border border-[#10380b] px-2 py-0.5 rounded-full font-mono font-bold hidden sm:inline">
                Verified
              </span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-[#10380b]/75 truncate font-mono font-medium">
              {APK_SIZE} • 100% Offline • Free
            </div>
          </div>
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <a
            id="btn-sticky-download-apk"
            href={OFFICIAL_APK_DOWNLOAD_URL}
            download="RailSathi-debug.apk"
            className="btn-marigold-pill !py-2 !px-4 sm:!px-5 text-xs sm:text-sm font-bold shadow-[2px_2px_0px_0px_#10380b] inline-flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-[#10380b]" />
            <span className="hidden xs:inline">{t.downloadBtn || t.stickyBtn || 'Download APK'}</span>
            <span className="xs:hidden">Get APK</span>
          </a>
          
          <button
            onClick={() => setDismissed(true)}
            className="p-1 sm:p-1.5 rounded-full text-[#10380b] hover:bg-[#f2ee98] transition cursor-pointer"
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
