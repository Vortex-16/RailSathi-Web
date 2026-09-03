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
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'mr', label: 'Marathi', native: 'मराठी' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' },
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
  const t = TRANSLATIONS[currentLang];

  const navItems = [
    { id: 'user-flows', label: 'Live App Flows' },
    { id: 'coach-radar', label: 'EMU Coach Radar' },
    { id: 'offline-timetables', label: 'Offline Timetable' },
    { id: 'installation-guide', label: 'Install Guide' },
    { id: 'low-bandwidth', label: 'Network & Specs' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/90 bg-white/95 backdrop-blur-md transition-all shadow-xs">
      {/* Low-Bandwidth / Offline Alert Banner if simulated or real offline */}
      {(!isOnline || simulatedOffline) && (
        <div className="bg-amber-500 text-amber-950 px-4 py-1.5 text-xs font-semibold flex items-center justify-between transition">
          <div className="flex items-center gap-2 mx-auto">
            <WifiOff className="w-3.5 h-3.5 animate-pulse" />
            <span>
              {simulatedOffline ? 'Simulated Tunnel Mode Active:' : 'Offline Network Detected:'} Local SQLite Timetables & Cached Data are 100% functional.
            </span>
          </div>
          <button
            onClick={onToggleSimulateOffline}
            className="text-xs bg-amber-600 hover:bg-amber-700 text-white px-2 py-0.5 rounded font-medium transition"
          >
            {simulatedOffline ? 'Resume Online' : 'Dismiss'}
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo & Identity */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition shrink-0">
              <Train className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className={`font-black tracking-tight text-slate-900 ${seniorMode ? 'text-xl sm:text-2xl' : 'text-base sm:text-xl'}`}>
                  RailSaathi
                </span>
                <span className="text-[10px] sm:text-xs font-semibold px-1.5 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                  रेलसाथी
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 hidden md:block">
                Indian Railways Smart Commute & Vendor Companion
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg font-medium transition text-sm ${
                    isActive
                      ? 'text-blue-900 bg-blue-50/80 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  } ${seniorMode ? 'text-base font-bold' : ''}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Controls & Quick Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Connectivity Simulation / Indicator */}
            <button
              id="btn-toggle-offline-sim"
              onClick={onToggleSimulateOffline}
              title={isOnline ? 'Simulate train tunnel dead-zone' : 'Resume high-speed network'}
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition ${
                isOnline
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                  : 'bg-amber-100 text-amber-800 border-amber-300'
              }`}
            >
              {isOnline ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <Wifi className="w-3.5 h-3.5" />
                  <span>Online</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-3.5 h-3.5" />
                  <span>Tunnel Mode</span>
                </>
              )}
            </button>

            {/* Low-Data Mode Toggle */}
            <button
              id="btn-toggle-low-data"
              onClick={onToggleLowBandwidth}
              title="Toggle 2G/3G low-data mode (lightweight rendering)"
              className={`hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition ${
                lowBandwidthMode
                  ? 'bg-blue-900 text-white border-blue-800 shadow-xs'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              <Gauge className="w-3.5 h-3.5" />
              <span>{lowBandwidthMode ? '2G Saver ON' : 'Data Saver'}</span>
            </button>

            {/* Senior Mode Toggle */}
            <button
              id="btn-toggle-senior-mode"
              onClick={onToggleSeniorMode}
              title="Toggle high-contrast large touch target mode for seniors"
              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition ${
                seniorMode
                  ? 'bg-amber-500 text-slate-950 border-amber-600 font-bold shadow-xs'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Senior Mode</span>
            </button>

            {/* Language Selector */}
            <div className="relative inline-block">
              <div className="flex items-center gap-1 bg-slate-100 border border-slate-200 rounded-lg px-1.5 sm:px-2 py-1.5">
                <Globe className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <select
                  id="select-language"
                  value={currentLang}
                  onChange={(e) => onLanguageChange(e.target.value as LanguageCode)}
                  className="bg-transparent text-xs font-semibold text-slate-800 cursor-pointer focus:outline-hidden max-w-[85px] sm:max-w-none"
                  aria-label="Select Language"
                >
                  {LANGUAGES.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.native} ({lang.code.toUpperCase()})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Direct APK Download CTA */}
            <a
              id="btn-header-download-apk"
              href={OFFICIAL_APK_DOWNLOAD_URL}
              download="RailSathi.apk"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-950 hover:to-blue-900 text-white font-semibold text-xs px-3.5 py-2 rounded-lg shadow-sm transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Get APK ({APK_VERSION})</span>
            </a>

            {/* PWA Install Button */}
            <div className="hidden xl:block">
              <PWAInstallButton compact={true} />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              id="btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200/80 space-y-2 animate-in fade-in duration-150">
            <div className="grid grid-cols-1 gap-1 pb-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left px-3 py-2 rounded-lg font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-900 text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs text-slate-600 px-1">
                <span>Tunnel Mode Simulator</span>
                <button
                  onClick={onToggleSimulateOffline}
                  className="font-semibold text-blue-800 underline"
                >
                  {simulatedOffline ? 'Switch Online' : 'Simulate Offline'}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 px-1">
                <span>2G/3G Low-Data Mode</span>
                <button
                  onClick={onToggleLowBandwidth}
                  className="font-semibold text-blue-800 underline"
                >
                  {lowBandwidthMode ? 'Turn Off' : 'Turn On'}
                </button>
              </div>

              <a
                href={OFFICIAL_APK_DOWNLOAD_URL}
                download="RailSathi.apk"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-blue-900 text-white font-semibold text-sm py-2.5 rounded-lg shadow-sm"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download Android APK (v1.0.0)</span>
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
