import React from 'react';
import { 
  Train, 
  Wifi, 
  WifiOff, 
  Gauge, 
  Eye, 
  Globe, 
  Download
} from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OFFICIAL_APK_DOWNLOAD_URL, APK_VERSION } from '../data/railwayData';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  currentLang: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  seniorMode: boolean;
  onToggleSeniorMode: () => void;
  isOnline: boolean;
  simulatedOffline: boolean;
  onToggleSimulateOffline: () => void;
  lowBandwidthMode: boolean;
  onToggleLowBandwidth: () => void;
  activeSection?: string;
  onNavigate: (sectionId: string) => void;
}

const LANGUAGES: { code: LanguageCode; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  { code: 'ur', label: 'Urdu', native: 'اردو' },
];

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  seniorMode,
  onToggleSeniorMode,
  isOnline,
  simulatedOffline,
  onToggleSimulateOffline,
  lowBandwidthMode,
  onToggleLowBandwidth,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const headerRef = React.useRef<HTMLElement>(null);

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const navItems = [
    { id: 'difference', label: t.navDifference },
    { id: 'commuters', label: t.navCommuters },
    { id: 'vendors', label: t.navVendors },
    { id: 'features', label: t.navFeatures },
    { id: 'install-guide', label: t.navInstall },
  ];

  // Track window scroll position for elevated header styling
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard escape & outside click handlers to smoothly close mobile menu
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuOpen && headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 w-full transition-all duration-300 bg-[#f2ee98]/95 backdrop-blur-md ${
        isScrolled 
          ? 'shadow-[0_4px_12px_rgba(16,56,11,0.15)] border-b border-[#10380b]' 
          : 'border-b border-[#10380b]/30'
      }`}
    >
      {/* Announcement Banner: Botanical Almanac Style */}
      <div 
        id="announcement-banner"
        className={`w-full bg-[#dbe8ac] border-b border-[#10380b] px-3 sm:px-4 text-center text-[11px] sm:text-xs tracking-tight text-[#10380b] flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 font-mono select-none transition-all duration-300 overflow-hidden ${
          isScrolled ? 'max-h-0 py-0 opacity-0 border-b-0 pointer-events-none' : 'max-h-12 py-1.5 opacity-100'
        }`}
      >
        <span className="font-bold shrink-0 bg-[#fce519] text-[#10380b] px-2 py-0.5 rounded-full border border-[#10380b]">RailSathi® 24.90 MB</span>
        <span className="text-[#10380b]/50 hidden xs:inline">•</span>
        <span className="font-semibold text-[#10380b] truncate">100% Offline SQLite Railway Mesh</span>
        <span className="hidden md:inline text-[#10380b]/70 font-sans">· Zero Mobile Internet Required</span>
      </div>

      {/* Offline Alert Banner */}
      {(!isOnline || simulatedOffline) && (
        <div className="bg-[#fce519] border-b border-[#10380b] text-[#10380b] px-3 sm:px-4 py-1.5 text-xs font-mono flex items-center justify-between transition-all duration-300 gap-2">
          <div className="flex items-center gap-2 truncate">
            <WifiOff className="w-3.5 h-3.5 animate-pulse shrink-0" />
            <span className="truncate font-bold">
              {simulatedOffline ? '[ Simulated Tunnel ]' : '[ Offline Rail ]'}: Local SQLite & Radar 100% active.
            </span>
          </div>
          <button
            onClick={onToggleSimulateOffline}
            className="text-[11px] bg-[#10380b] hover:bg-[#1b5314] text-[#f2ee98] px-2.5 py-0.5 rounded-full font-bold transition-all duration-200 cursor-pointer shrink-0"
          >
            {simulatedOffline ? 'Go Online' : 'Dismiss'}
          </button>
        </div>
      )}

      {/* Main Navbar Bar */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-18">
          {/* Logo & Identity */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none shrink-0"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#10380b] bg-[#10380b] flex items-center justify-center text-[#f2ee98] group-hover:scale-105 transition shrink-0 shadow-sm">
              <Train className="w-4 h-4 sm:w-5 sm:h-5 text-[#fce519]" />
            </div>
            <div>
              <span className={`font-display font-bold tracking-tight text-[#10380b] ${seniorMode ? 'text-lg sm:text-2xl' : 'text-lg sm:text-xl'}`}>
                RailSathi
              </span>
              <p className="text-[11px] font-semibold text-[#10380b]/70 hidden md:block">
                {t.appTagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links — Retro Botanical Pill Links */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-1.5 rounded-full font-bold transition text-sm cursor-pointer ${
                    isActive
                      ? 'text-[#10380b] bg-[#fefde6] border border-[#10380b] shadow-[2px_2px_0px_0px_#10380b]'
                      : 'text-[#10380b]/80 hover:text-[#10380b] hover:bg-[#dbe8ac]/60'
                  } ${seniorMode ? 'text-base' : ''}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Controls & Quick Actions */}
          <div className="flex items-center gap-1 sm:gap-2.5">
            {/* Connectivity Simulation / Indicator */}
            <button
              id="btn-toggle-offline-sim"
              onClick={onToggleSimulateOffline}
              title={isOnline ? 'Simulate train tunnel dead-zone' : 'Resume network'}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border border-[#10380b] transition cursor-pointer ${
                isOnline
                  ? 'bg-[#fefde6] text-[#10380b] hover:bg-[#dbe8ac]'
                  : 'bg-[#fce519] text-[#10380b]'
              }`}
            >
              {isOnline ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-[#30be60] animate-pulse" />
                  <Wifi className="w-3.5 h-3.5" />
                  <span className="font-bold">{t.online}</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-3.5 h-3.5" />
                  <span className="font-bold">{t.tunnelMode}</span>
                </>
              )}
            </button>

            {/* Low-Data Mode Toggle */}
            <button
              id="btn-toggle-low-data"
              onClick={onToggleLowBandwidth}
              title="Toggle 2G/3G low-data mode (lightweight rendering)"
              className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border border-[#10380b] transition cursor-pointer ${
                lowBandwidthMode
                  ? 'bg-[#dbe8ac] text-[#10380b] font-bold'
                  : 'bg-[#fefde6] text-[#10380b]/80 hover:text-[#10380b] hover:bg-[#dbe8ac]'
              }`}
            >
              <Gauge className="w-3.5 h-3.5" />
              <span>{lowBandwidthMode ? t.dataSaverOn : t.dataSaver}</span>
            </button>

            {/* Senior Mode Toggle */}
            <button
              id="btn-toggle-senior-mode"
              onClick={onToggleSeniorMode}
              title="Toggle high-contrast large touch target mode for seniors"
              className={`flex items-center gap-1 p-2 sm:px-3 sm:py-1.5 rounded-full text-xs font-mono border border-[#10380b] transition cursor-pointer ${
                seniorMode
                  ? 'bg-[#10380b] text-[#f2ee98] font-bold'
                  : 'bg-[#fefde6] text-[#10380b]/80 hover:text-[#10380b] hover:bg-[#dbe8ac]'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-bold">{t.seniorMode}</span>
            </button>

            {/* Language Selector */}
            <div className="relative inline-block">
              <div className="flex items-center gap-1 bg-[#fefde6] border border-[#10380b] rounded-full px-2 py-1 sm:px-2.5 sm:py-1.5">
                <Globe className="w-3.5 h-3.5 text-[#10380b] shrink-0" />
                <select
                  id="select-language"
                  value={currentLang}
                  onChange={(e) => onLanguageChange(e.target.value as LanguageCode)}
                  className="bg-transparent text-xs font-bold text-[#10380b] cursor-pointer focus:outline-hidden max-w-[65px] xs:max-w-[80px] sm:max-w-none"
                  aria-label="Select Language"
                >
                  {LANGUAGES.map((lang) => (
                    <option key={lang.code} value={lang.code} className="bg-[#fefde6] text-[#10380b]">
                      {lang.native} ({lang.code.toUpperCase()})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Direct APK Download CTA — Marigold Pill Button with Forest Ink Border */}
            <a
              id="btn-header-download-apk"
              href={OFFICIAL_APK_DOWNLOAD_URL}
              download="RailSathi-debug.apk"
              className="hidden sm:inline-flex items-center gap-2 border border-[#10380b] bg-[#fce519] hover:bg-[#fff03d] text-[#10380b] font-bold text-xs px-4 py-2 rounded-full transition cursor-pointer shadow-[2px_2px_0px_0px_#10380b] active:translate-x-0.5 active:translate-y-0.5"
            >
              <Download className="w-3.5 h-3.5 text-[#10380b]" />
              <span>{t.getApk} (24.9 MB)</span>
            </a>

            {/* PWA Install Button */}
            <div className="hidden xl:block">
              <PWAInstallButton compact={true} />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              id="btn-mobile-menu"
              type="button"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className={`lg:hidden w-10 h-10 rounded-full border border-[#10380b] flex items-center justify-center transition-all duration-300 cursor-pointer ${
                mobileMenuOpen 
                  ? 'bg-[#10380b] text-[#f2ee98]' 
                  : 'bg-[#fefde6] text-[#10380b] hover:bg-[#dbe8ac]'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <div className="w-5 h-3.5 relative flex flex-col justify-between items-center pointer-events-none">
                <span
                  className={`w-5 h-[2px] rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                    mobileMenuOpen
                      ? 'rotate-45 translate-y-[6px] bg-[#f2ee98]'
                      : 'bg-[#10380b]'
                  }`}
                />
                <span
                  className={`w-5 h-[2px] rounded-full transition-all duration-200 ease-in-out ${
                    mobileMenuOpen
                      ? 'opacity-0 scale-x-0 bg-[#f2ee98]'
                      : 'opacity-100 bg-[#10380b]'
                  }`}
                />
                <span
                  className={`w-5 h-[2px] rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                    mobileMenuOpen
                      ? '-rotate-45 -translate-y-[6px] bg-[#f2ee98]'
                      : 'bg-[#10380b]'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile Navigation Dropdown */}
    <div
      className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen
          ? 'max-h-[600px] opacity-100 border-t border-[#10380b]'
          : 'max-h-0 opacity-0 border-t-0 pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-3 bg-[#fefde6] border-b border-[#10380b]">
        <div className="grid grid-cols-1 gap-1 pb-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer flex items-center justify-between ${
                  isActive
                    ? 'bg-[#fce519] text-[#10380b] border border-[#10380b]'
                    : 'text-[#10380b]/80 hover:text-[#10380b] hover:bg-[#dbe8ac]'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs opacity-50 font-mono">#</span>
              </button>
            );
          })}
        </div>

        <div className="pt-3 border-t border-[#10380b] flex flex-col gap-2.5">
          <div className="flex items-center justify-between text-xs text-[#10380b] px-1 font-semibold">
            <span>Tunnel Mode Simulator</span>
            <button
              onClick={onToggleSimulateOffline}
              className="font-mono text-[#10380b] underline cursor-pointer hover:text-[#1b5314] font-bold"
            >
              {simulatedOffline ? 'Switch Online' : 'Simulate Offline'}
            </button>
          </div>

          <div className="flex items-center justify-between text-xs text-[#10380b] px-1 font-semibold">
            <span>2G/3G Low-Data Mode</span>
            <button
              onClick={onToggleLowBandwidth}
              className="font-mono text-[#10380b] underline cursor-pointer hover:text-[#1b5314] font-bold"
            >
              {lowBandwidthMode ? 'Turn Off' : 'Turn On'}
            </button>
          </div>

          <a
            href={OFFICIAL_APK_DOWNLOAD_URL}
            download="RailSathi-debug.apk"
            className="w-full mt-2 inline-flex items-center justify-center gap-2 border border-[#10380b] text-[#10380b] font-bold text-sm py-2.5 rounded-full bg-[#fce519] hover:bg-[#fff03d] shadow-[4px_4px_0px_0px_#10380b] transition-all active:translate-x-0.5 active:translate-y-0.5"
          >
            <Download className="w-4 h-4 text-[#10380b]" />
            <span>Download Android APK (24.90 MB)</span>
          </a>

          <div className="mt-1">
            <PWAInstallButton compact={false} />
          </div>
        </div>
      </div>
    </div>
  </header>
  );
};
