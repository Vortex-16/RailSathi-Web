import React from 'react';
import { 
  Train, 
  Wifi, 
  WifiOff, 
  Gauge, 
  Eye, 
  Globe, 
  Download, 
  Menu, 
  X,
  Sparkles,
  ShieldCheck
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
  activeSection: string;
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
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const navItems = [
    { id: 'difference', label: t.navDifference },
    { id: 'commuters', label: t.navCommuters },
    { id: 'vendors', label: t.navVendors },
    { id: 'features', label: t.navFeatures },
    { id: 'install-guide', label: t.navInstall },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#42433d] bg-[#0e100f]/95 backdrop-blur-md transition-all">
      {/* Announcement Banner: Full-bleed band, cream text on near-black, centered single line */}
      <div className="w-full bg-[#191919] border-b border-[#42433d] py-1 px-3 sm:px-4 text-center text-[11px] sm:text-xs tracking-tight text-[#fffce1] flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 font-mono">
        <span className="text-[#0ae448] font-bold shrink-0">{'{'} RailSaathi® 24.90 MB {'}'}</span>
        <span className="text-[#7c7c6f] hidden xs:inline">|</span>
        <span className="text-[#fffce1] truncate">100% Offline SQLite Railway Mesh</span>
        <span className="hidden md:inline text-[#7c7c6f]">· Zero Mobile Internet Required</span>
      </div>

      {/* Offline Alert Banner if simulated or real offline */}
      {(!isOnline || simulatedOffline) && (
        <div className="bg-[#191919] border-b border-[#ff8709] text-[#ff8709] px-3 sm:px-4 py-1.5 text-xs font-mono flex items-center justify-between transition gap-2">
          <div className="flex items-center gap-2 truncate">
            <WifiOff className="w-3.5 h-3.5 animate-pulse shrink-0" />
            <span className="truncate">
              {simulatedOffline ? '{ Simulated Tunnel }' : '{ Offline Rail }'}: Local SQLite & Radar 100% active.
            </span>
          </div>
          <button
            onClick={onToggleSimulateOffline}
            className="text-[11px] bg-[#42433d] hover:bg-[#7c7c6f] text-[#fffce1] px-2 py-0.5 rounded-full font-medium transition cursor-pointer shrink-0"
          >
            {simulatedOffline ? 'Online' : 'Dismiss'}
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-18">
          {/* Logo & Identity (Hindi word removed) */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none shrink-0"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#0ae448]/60 bg-[#191919] flex items-center justify-center text-[#fffce1] group-hover:scale-105 transition shrink-0 shadow-[0_0_12px_rgba(10,228,72,0.2)]">
              <Train className="w-4 h-4 sm:w-5 sm:h-5 text-[#0ae448]" />
            </div>
            <div>
              <span className={`font-bold tracking-tight text-[#fffce1] ${seniorMode ? 'text-lg sm:text-2xl' : 'text-base sm:text-lg'}`}>
                RailSaathi
              </span>
              <p className="text-[11px] font-normal text-[#7c7c6f] hidden md:block">
                {t.appTagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links — Ghost Nav Links with tight group spacing */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-full font-medium transition text-sm cursor-pointer ${
                    isActive
                      ? 'text-[#fffce1] bg-[#191919] border border-[#fffce1]/60'
                      : 'text-[#7c7c6f] hover:text-[#fffce1] hover:bg-[#191919]/60'
                  } ${seniorMode ? 'text-base font-bold' : ''}`}
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
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border transition cursor-pointer ${
                isOnline
                  ? 'bg-[#191919] text-[#abff84] border-[#42433d] hover:border-[#abff84]/50'
                  : 'bg-[#ff8709]/10 text-[#ff8709] border-[#ff8709]/50'
              }`}
            >
              {isOnline ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0ae448] animate-pulse" />
                  <Wifi className="w-3.5 h-3.5" />
                  <span>{t.online}</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-3.5 h-3.5" />
                  <span>{t.tunnelMode}</span>
                </>
              )}
            </button>

            {/* Low-Data Mode Toggle */}
            <button
              id="btn-toggle-low-data"
              onClick={onToggleLowBandwidth}
              title="Toggle 2G/3G low-data mode (lightweight rendering)"
              className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border transition cursor-pointer ${
                lowBandwidthMode
                  ? 'bg-[#00bae2]/20 text-[#00bae2] border-[#00bae2]'
                  : 'bg-[#191919] text-[#7c7c6f] border-[#42433d] hover:text-[#fffce1] hover:border-[#fffce1]/40'
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
              className={`flex items-center gap-1 p-2 sm:px-3 sm:py-1.5 rounded-full text-xs font-mono border transition cursor-pointer ${
                seniorMode
                  ? 'bg-[#fffce1] text-[#0e100f] border-[#fffce1] font-bold'
                  : 'bg-[#191919] text-[#7c7c6f] border-[#42433d] hover:text-[#fffce1] hover:border-[#fffce1]/40'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.seniorMode}</span>
            </button>

            {/* Language Selector */}
            <div className="relative inline-block">
              <div className="flex items-center gap-1 bg-[#191919] border border-[#42433d] rounded-full px-2 py-1 sm:px-2.5 sm:py-1.5">
                <Globe className="w-3.5 h-3.5 text-[#7c7c6f] shrink-0" />
                <select
                  id="select-language"
                  value={currentLang}
                  onChange={(e) => onLanguageChange(e.target.value as LanguageCode)}
                  className="bg-transparent text-xs font-medium text-[#fffce1] cursor-pointer focus:outline-hidden max-w-[65px] xs:max-w-[80px] sm:max-w-none"
                  aria-label="Select Language"
                >
                  {LANGUAGES.map((lang) => (
                    <option key={lang.code} value={lang.code} className="bg-[#191919] text-[#fffce1]">
                      {lang.native} ({lang.code.toUpperCase()})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Direct APK Download CTA — Gradient-Stroked Pill Button */}
            <a
              id="btn-header-download-apk"
              href={OFFICIAL_APK_DOWNLOAD_URL}
              download="RailSathi.apk"
              className="hidden sm:inline-flex items-center gap-2 border border-[#0ae448]/80 hover:border-[#abff84] text-[#fffce1] font-semibold text-xs px-4 py-2 rounded-full transition bg-[#191919] hover:bg-[#0ae448]/10 cursor-pointer shadow-[0_0_12px_rgba(10,228,72,0.15)]"
            >
              <Download className="w-3.5 h-3.5 text-[#0ae448]" />
              <span>{t.getApk} (24.9 MB)</span>
            </a>

            {/* PWA Install Button */}
            <div className="hidden xl:block">
              <PWAInstallButton compact={true} />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              id="btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-full border border-[#42433d] text-[#fffce1] hover:bg-[#191919] cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#42433d] space-y-3">
            <div className="grid grid-cols-1 gap-1 pb-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl font-medium text-[#7c7c6f] hover:text-[#fffce1] hover:bg-[#191919] text-sm cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-[#42433d] flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-xs text-[#7c7c6f] px-1">
                <span>Tunnel Mode Simulator</span>
                <button
                  onClick={onToggleSimulateOffline}
                  className="font-mono text-[#0ae448] underline cursor-pointer"
                >
                  {simulatedOffline ? 'Switch Online' : 'Simulate Offline'}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-[#7c7c6f] px-1">
                <span>2G/3G Low-Data Mode</span>
                <button
                  onClick={onToggleLowBandwidth}
                  className="font-mono text-[#00bae2] underline cursor-pointer"
                >
                  {lowBandwidthMode ? 'Turn Off' : 'Turn On'}
                </button>
              </div>

              <a
                href={OFFICIAL_APK_DOWNLOAD_URL}
                download="RailSathi.apk"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 border border-[#0ae448] text-[#fffce1] font-semibold text-sm py-2.5 rounded-full bg-[#191919] hover:bg-[#0ae448]/10 shadow-[0_0_15px_rgba(10,228,72,0.2)]"
              >
                <Download className="w-4 h-4 text-[#0ae448]" />
                <span>Download Android APK (24.90 MB)</span>
              </a>

              <div className="mt-1">
                <PWAInstallButton compact={false} />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
