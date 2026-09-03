import React, { useState } from 'react';
import { 
  Download, 
  Play, 
  QrCode, 
  Copy, 
  Check, 
  Train, 
  Coffee, 
  BatteryCharging, 
  ShieldCheck, 
  CheckCircle, 
  ExternalLink,
  Zap,
  User,
  Store,
  BellRing,
  ArrowRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import { 
  OFFICIAL_APK_DOWNLOAD_URL, 
  GITHUB_REPO_URL, 
  APK_VERSION, 
  APK_SIZE, 
  MIN_ANDROID_VERSION,
  SHA256_CHECKSUM 
} from '../data/railwayData';
import { LanguageCode, UserRole } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  currentLang: LanguageCode;
  seniorMode?: boolean;
  onNavigate: (sectionId: string) => void;
  userRole?: UserRole;
  onRoleChange?: (role: UserRole) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  currentLang, 
  seniorMode, 
  onNavigate,
  userRole: propRole,
  onRoleChange
}) => {
  const [copiedSha, setCopiedSha] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [internalRole, setInternalRole] = useState<UserRole>('TRAVELER');
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const activeRole = propRole || internalRole;

  const handleRoleSelect = (role: UserRole) => {
    setInternalRole(role);
    if (onRoleChange) onRoleChange(role);
  };

  const handleCopySha = () => {
    navigator.clipboard.writeText(SHA256_CHECKSUM);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2500);
  };

  return (
    <div id="hero" className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 border-b border-slate-200/90">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00224408_1px,transparent_1px),linear-gradient(to_bottom,#00224408_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Official Commuter Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-amber-100/80 text-amber-950 border border-amber-300 shadow-2xs">
            <span className="text-base">🇮🇳</span>
            <span>{t.badgeSuburban}</span>
          </span>
          
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>APK {APK_VERSION} ({APK_SIZE})</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.badgeFairRates}</span>
          </span>
        </div>

        {/* Main Grid: Copy & CTAs on Left, Live Phone Mockup on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Action Area */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bold Headline */}
            <h1 className={`font-black tracking-tight text-slate-900 leading-[1.18] ${
              seniorMode ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-4xl lg:text-5xl'
            }`}>
              {t.heroHeadline}
            </h1>

            {/* Sub-headline */}
            <p className={`text-slate-600 leading-relaxed max-w-2xl ${
              seniorMode ? 'text-lg sm:text-xl font-medium' : 'text-base sm:text-lg'
            }`}>
              {t.heroSubheadline}
            </p>

            {/* Interactive Role Switcher Toggle */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>{t.roleSelectLabel}</span>
              </div>
              <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300 gap-1.5 shadow-inner">
                <button
                  id="toggle-role-traveler"
                  onClick={() => handleRoleSelect('TRAVELER')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer ${
                    activeRole === 'TRAVELER'
                      ? 'bg-blue-900 text-white shadow-md'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <User className="w-4 h-4 text-amber-400" />
                  <span>{t.travelerRoleBtn}</span>
                </button>
                <button
                  id="toggle-role-vendor"
                  onClick={() => handleRoleSelect('VENDOR')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer ${
                    activeRole === 'VENDOR'
                      ? 'bg-blue-900 text-white shadow-md'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Store className="w-4 h-4 text-emerald-400" />
                  <span>{t.vendorRoleBtn}</span>
                </button>
              </div>
            </div>

            {/* Dynamic Role Benefit Highlight Banner */}
            <div className="p-4 rounded-2xl border transition-all duration-300 shadow-2xs bg-white border-slate-200/90">
              {activeRole === 'TRAVELER' ? (
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 shrink-0">
                    <Coffee className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {t.travelerCardTitle}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {t.travelerCardDesc}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 shrink-0">
                    <Store className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {t.vendorCardTitle}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {t.vendorCardDesc}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Download & Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Primary CTA: Large Prominent Download Button */}
              <a
                id="btn-hero-download-apk"
                href={OFFICIAL_APK_DOWNLOAD_URL}
                download="RailSathi.apk"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-900 to-blue-950 hover:from-blue-950 hover:to-slate-950 text-white font-black px-7 py-4 rounded-2xl shadow-xl shadow-blue-950/20 transition transform hover:-translate-y-0.5 active:translate-y-0 text-base sm:text-lg group border border-blue-700/50"
              >
                <Download className="w-5 h-5 text-amber-400 group-hover:animate-bounce" />
                <span>{t.downloadApkBtn}</span>
              </a>

              {/* Secondary CTA: See How It Works */}
              <button
                id="btn-hero-how-it-works"
                onClick={() => onNavigate('difference')}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold px-5 py-4 rounded-2xl border border-slate-300 shadow-2xs transition text-sm sm:text-base cursor-pointer"
              >
                <span>{t.howItWorksBtn}</span>
              </button>
            </div>

            {/* Technical Trust & Specs Line */}
            <div className="pt-1 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Compatible with {MIN_ANDROID_VERSION}</span>
              </div>
              <span className="text-slate-300">•</span>
              <a 
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noreferrer" 
                className="inline-flex items-center gap-1 hover:text-blue-800 font-medium underline"
              >
                <span>{t.openSource}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-slate-300">•</span>
              <button
                onClick={handleCopySha}
                className="inline-flex items-center gap-1 hover:text-slate-800 transition cursor-pointer"
                title="Click to copy SHA-256 verification hash"
              >
                {copiedSha ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>SHA-256: {SHA256_CHECKSUM.slice(0, 8)}...</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Phone Preview Mockup */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[300px] xs:max-w-[330px] sm:max-w-[360px] rounded-[36px] bg-slate-900 p-3 sm:p-3.5 shadow-2xl ring-1 ring-slate-900/10">
              
              {/* Speaker & Camera Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-950 rounded-full flex items-center justify-center gap-2 z-20">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-950" />
              </div>

              {/* Phone Screen Canvas */}
              <div className="rounded-[28px] bg-slate-50 overflow-hidden border border-slate-800 text-slate-900 font-sans shadow-inner">
                
                {/* Android Status Bar */}
                <div className="bg-blue-950 text-white px-5 pt-3.5 pb-2 flex items-center justify-between text-[11px] font-medium tracking-tight">
                  <span className="font-mono">08:42</span>
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="text-emerald-400 font-bold">{t.mockupGps}</span>
                    <BatteryCharging className="w-3 h-3 text-amber-400" />
                    <span>88%</span>
                  </div>
                </div>

                {/* App Bar */}
                <div className="bg-blue-900 text-white px-4 py-3 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                      <Train className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-tight">RailSaathi • {t.appNativeName}</div>
                      <div className="text-[10px] text-blue-200">
                        {activeRole === 'TRAVELER' ? t.mockupTravelerMode : t.mockupVendorMode}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-400/30">
                    {t.mockupOfflineReady}
                  </span>
                </div>

                {/* Body Content changes depending on activeRole */}
                <div className="p-3.5 space-y-3">
                  
                  {activeRole === 'TRAVELER' ? (
                    <>
                      {/* Active Train Card */}
                      <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-1">
                          <span>{t.mockupActiveSignal}</span>
                          <span className="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px] font-bold">ON TIME</span>
                        </div>
                        <div className="text-sm font-bold text-slate-900">Sealdah - Ranaghat Local</div>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-[11px]">
                          <div>
                            <span className="text-slate-400 block text-[9px]">YOUR COACH</span>
                            <span className="font-bold text-blue-900">GS-1 (Coach 2)</span>
                          </div>
                          <div className="text-right">
                            <span className="text-slate-400 block text-[9px]">NEXT HALT</span>
                            <span className="font-bold text-slate-800">Dum Dum (45s halt)</span>
                          </div>
                        </div>
                      </div>

                      {/* Active Hunger Signal */}
                      <div className="p-3 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping" />
                            <span className="text-xs font-bold text-amber-950 uppercase tracking-wide">
                              {t.mockupHungerActive}
                            </span>
                          </div>
                          <span className="text-xs font-extrabold text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded">
                            ₹20
                          </span>
                        </div>
                        <p className="text-[11px] text-amber-900 font-medium mt-1">
                          1x Kadak Chai (₹10) + 1x Roasted Badam (₹10)
                        </p>
                        <div className="mt-2 flex items-center justify-between text-[10px] bg-white/90 p-2 rounded-lg border border-amber-200/60">
                          <span className="font-semibold text-slate-700">{t.mockupVendorIncoming}</span>
                          <span className="text-emerald-700 font-bold">{t.mockupReachingDoor}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Vendor Radar View */}
                      <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-1">
                          <span>{t.mockupRadarActive}</span>
                          <span className="text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded text-[10px] font-bold">4 SIGNALS</span>
                        </div>
                        <div className="text-sm font-bold text-slate-900">Your Item: Cutting Chai & Samosa</div>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-[11px]">
                          <div>
                            <span className="text-slate-400 block text-[9px]">YOUR POSITION</span>
                            <span className="font-bold text-emerald-800">Coach 4 (VND-1)</span>
                          </div>
                          <div className="text-right">
                            <span className="text-slate-400 block text-[9px]">EST. EARNING</span>
                            <span className="font-bold text-amber-600">₹65 Pending</span>
                          </div>
                        </div>
                      </div>

                      {/* Incoming Passenger Request Alert */}
                      <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <BellRing className="w-3.5 h-3.5 text-emerald-700 animate-bounce" />
                            <span className="text-xs font-bold text-emerald-950 uppercase">
                              Signal from Coach GS-1
                            </span>
                          </div>
                          <span className="text-xs font-black text-emerald-900 bg-emerald-200 px-2 py-0.5 rounded">
                            ₹20 Cash
                          </span>
                        </div>
                        <p className="text-[11px] text-emerald-900 font-semibold mt-1">
                          1x Masala Chai + 1x Roasted Badam (Window Seat 24)
                        </p>
                        <div className="mt-2 flex gap-1.5">
                          <button className="flex-1 bg-emerald-700 text-white text-[10px] font-bold py-1.5 rounded-lg text-center shadow-xs">
                            {t.mockupAcceptOrder}
                          </button>
                          <button className="bg-slate-200 text-slate-700 text-[10px] font-semibold px-2 py-1.5 rounded-lg">
                            {t.mockupSkip}
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  {/* 12-Car EMU Formation Strip */}
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/90">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 mb-1.5">
                      <span>{t.mockupFormationTitle}</span>
                      <span className="text-blue-800">Engine ➔</span>
                    </div>
                    <div className="grid grid-cols-6 gap-1">
                      <div className="bg-purple-100 border border-purple-300 rounded p-1 text-center">
                        <div className="text-[9px] font-bold text-purple-900">D-MC</div>
                        <div className="text-[8px] text-purple-700">♿</div>
                      </div>
                      <div className="bg-blue-600 text-white rounded p-1 text-center shadow-2xs">
                        <div className="text-[9px] font-bold">GS-1</div>
                        <div className="text-[8px] text-blue-200">You</div>
                      </div>
                      <div className="bg-pink-100 border border-pink-300 rounded p-1 text-center">
                        <div className="text-[9px] font-bold text-pink-900">L-1</div>
                        <div className="text-[8px] text-pink-700">Ladies</div>
                      </div>
                      <div className="bg-amber-100 border border-amber-300 rounded p-1 text-center">
                        <div className="text-[9px] font-bold text-amber-900">VND</div>
                        <div className="text-[8px] text-amber-700">Hawker</div>
                      </div>
                      <div className="bg-slate-100 border border-slate-200 rounded p-1 text-center">
                        <div className="text-[9px] font-bold text-slate-700">GS-2</div>
                        <div className="text-[8px] text-slate-500">Mid</div>
                      </div>
                      <div className="bg-slate-100 border border-slate-200 rounded p-1 text-center">
                        <div className="text-[9px] font-bold text-slate-700">+7 Cars</div>
                        <div className="text-[8px] text-slate-500">...</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action in Mockup */}
                  <button
                    onClick={() => onNavigate(activeRole === 'TRAVELER' ? 'commuters' : 'vendors')}
                    className="w-full py-2.5 rounded-xl bg-blue-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:bg-blue-950 transition cursor-pointer"
                  >
                    <span>{activeRole === 'TRAVELER' ? t.mockupExploreCommuter : t.mockupExploreVendor}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>

                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Global Key Stats Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
          <div className="p-2 sm:p-0 text-center sm:text-left sm:border-r border-slate-100 pr-2">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-900">{t.statDailyPassengers}</div>
            <div className="text-[11px] sm:text-xs font-medium text-slate-500 mt-0.5 sm:mt-1">{t.statDailyLabel}</div>
          </div>
          <div className="p-2 sm:p-0 text-center sm:text-left lg:border-r border-slate-100 pr-2">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-amber-600">{t.statHaltWindow}</div>
            <div className="text-[11px] sm:text-xs font-medium text-slate-500 mt-0.5 sm:mt-1">{t.statHaltLabel}</div>
          </div>
          <div className="p-2 sm:p-0 text-center sm:text-left sm:border-r border-slate-100 pr-2">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-emerald-600">{t.statZeroCut}</div>
            <div className="text-[11px] sm:text-xs font-medium text-slate-500 mt-0.5 sm:mt-1">{t.statZeroCutLabel}</div>
          </div>
          <div className="p-2 sm:p-0 text-center sm:text-left">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900">{t.statOffline}</div>
            <div className="text-[11px] sm:text-xs font-medium text-slate-500 mt-0.5 sm:mt-1">{t.statOfflineLabel}</div>
          </div>
        </div>

      </div>

      {/* QR Code Modal for Phone Download */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full border border-slate-200 shadow-2xl relative">
            <button 
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1"
            >
              ✕
            </button>
            <div className="text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center mx-auto mb-3">
                <QrCode className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Scan to Download on Android</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                Point your Android camera at the QR code below to download the verified RailSaathi APK directly.
              </p>
              
              {/* QR Image Representation */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 inline-block mb-4">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(OFFICIAL_APK_DOWNLOAD_URL)}`}
                  alt="RailSaathi APK Download QR Code"
                  className="w-44 h-44 mx-auto rounded-lg"
                  loading="lazy"
                />
              </div>

              <div className="text-xs font-semibold text-slate-600">
                RailSaathi {APK_VERSION} • {APK_SIZE}
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex gap-2">
                <a
                  href={OFFICIAL_APK_DOWNLOAD_URL}
                  download="RailSathi.apk"
                  className="w-full py-2.5 rounded-xl bg-blue-900 text-white font-bold text-xs"
                >
                  Direct Download Link
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
