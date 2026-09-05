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
    <aside aria-label="Quick download bar" className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-3 bg-[#0e100f]/95 backdrop-blur-md text-[#fffce1] border-t border-[#42433d] shadow-2xl animate-slideUp">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 flex items-center justify-between gap-2 sm:gap-3">
        
        {/* Left Information */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#191919] border border-[#42433d] flex items-center justify-center text-[#0ae448] shrink-0 hidden xs:flex">
            <Train className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-xs sm:text-sm font-bold text-[#fffce1] flex items-center gap-1.5 truncate">
              <span className="truncate">RailSaathi APK (v1.0.0)</span>
              <span className="text-[10px] bg-[#0e100f] text-[#0ae448] border border-[#42433d] px-1.5 py-0.2 rounded-full font-mono hidden sm:inline">
                Verified
              </span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-[#7c7c6f] truncate font-mono">
              {APK_SIZE} • 100% Offline • Free
            </div>
          </div>
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <a
            id="btn-sticky-download-apk"
            href={OFFICIAL_APK_DOWNLOAD_URL}
            download="RailSathi.apk"
            className="btn-cta-gradient !py-1.5 !px-3 sm:!py-2 sm:!px-4 text-xs sm:text-sm"
          >
            <Download className="w-3.5 h-3.5 text-[#0ae448]" />
            <span className="hidden xs:inline">{t.downloadBtn || t.stickyBtn || 'Download APK'}</span>
            <span className="xs:hidden">Get APK</span>
          </a>
          
          <button
            onClick={() => setDismissed(true)}
            className="p-1 sm:p-1.5 rounded-full text-[#7c7c6f] hover:text-[#fffce1] hover:bg-[#191919] transition cursor-pointer"
            title="Dismiss bar"
            aria-label="Close download bar"
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

      </div>
    </aside>
  );
};
