import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
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

  const heroContainerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroContainerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge-item', {
        opacity: 0,
        y: 16,
        stagger: 0.08,
        duration: 0.6,
      })
      .from(headlineRef.current, {
        opacity: 0,
        y: 32,
        duration: 0.85,
      }, '-=0.3')
      .from('.hero-sub-item', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, '-=0.5')
      .from(ctaGroupRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, '-=0.4')
      .from(phoneRef.current, {
        opacity: 0,
        y: 45,
        scale: 0.96,
        duration: 0.9,
      }, '-=0.6');

      // Scroll-triggered subtle parallax on phone mockup
      if (phoneRef.current) {
        gsap.to(phoneRef.current, {
          y: -35,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.3,
          },
        });
      }
    }, heroContainerRef);

    return () => ctx.revert();
  }, []);

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
    <div id="hero" ref={heroContainerRef} className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 bg-[#0e100f] border-b border-[#42433d]">
      {/* Soft 3D Organic Ambient Blobs (Pink, Blue, Green) */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#00bae2]/10 to-[#9d95ff]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-80 h-80 rounded-full bg-gradient-to-bl from-[#fec5fb]/10 to-[#0ae448]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curly-Bracket Annotation Eyebrow & Category Label */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="hero-badge-item font-mono text-xs sm:text-sm text-[#fffce1] tracking-tight">
            {'{'} RailSaathi® Suburban Companion {'}'}
          </span>
          
          <span className="hero-badge-item font-mono text-xs text-[#0ae448] px-3 py-1 rounded-full border border-[#42433d] bg-[#191919]">
            APK {APK_VERSION} • {APK_SIZE}
          </span>

          <span className="hero-badge-item font-mono text-xs text-[#fec5fb] px-3 py-1 rounded-full border border-[#42433d] bg-[#191919]">
            {'{'} 100% Offline SQLite {'}'}
          </span>
        </div>

        {/* Main Grid: Copy & CTAs on Left, Live Phone Mockup on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Action Area */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bold Display Headline (Mori style, massive, -0.02em tracking, carved cream type) */}
            <h1 ref={headlineRef} className={`font-semibold tracking-[-0.03em] text-[#fffce1] leading-[0.98] break-words ${
              seniorMode ? 'text-3xl xs:text-4xl sm:text-5xl lg:text-6xl' : 'text-2xl xs:text-3xl sm:text-5xl lg:text-6xl xl:text-7xl'
            }`}>
              {t.heroHeadline}
            </h1>

            {/* Sub-headline */}
            <p className={`hero-sub-item text-[#7c7c6f] leading-relaxed max-w-2xl text-[17px] sm:text-[19px] ${
              seniorMode ? 'text-lg sm:text-xl font-medium text-[#fffce1]' : ''
            }`}>
              {t.heroSubheadline}
            </p>

            {/* Interactive Role Switcher Toggle */}
            <div className="hero-sub-item pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#7c7c6f] mb-2 flex items-center gap-1.5">
                <span className="text-[#0ae448]">{'{'}</span>
                <span>{t.roleSelectLabel}</span>
                <span className="text-[#0ae448]">{'}'}</span>
              </div>
              <div className="inline-flex p-1 rounded-full bg-[#191919] border border-[#42433d] gap-1">
                <button
                  id="toggle-role-traveler"
                  onClick={() => handleRoleSelect('TRAVELER')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                    activeRole === 'TRAVELER'
                      ? 'bg-[#fffce1] text-[#0e100f]'
                      : 'text-[#7c7c6f] hover:text-[#fffce1]'
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>{t.travelerRoleBtn}</span>
                </button>
                <button
                  id="toggle-role-vendor"
                  onClick={() => handleRoleSelect('VENDOR')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                    activeRole === 'VENDOR'
                      ? 'bg-[#ff8709] text-[#0e100f] font-bold'
                      : 'text-[#7c7c6f] hover:text-[#fffce1]'
                  }`}
                >
                  <Store className="w-3.5 h-3.5" />
                  <span>{t.vendorRoleBtn}</span>
                </button>
              </div>
            </div>

            {/* Dynamic Role Benefit Highlight Banner on #191919 Surface */}
            <div className="hero-sub-item p-4 rounded-xl border border-[#42433d] bg-[#191919] transition-all">
              {activeRole === 'TRAVELER' ? (
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-full bg-[#ff8709]/15 text-[#ff8709] border border-[#ff8709]/40 shrink-0">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#fffce1]">
                      {t.travelerCardTitle}
                    </h3>
                    <p className="text-xs text-[#7c7c6f] mt-1 leading-relaxed">
                      {t.travelerCardDesc}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-full bg-[#0ae448]/15 text-[#0ae448] border border-[#0ae448]/40 shrink-0">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#fffce1]">
                      {t.vendorCardTitle}
                    </h3>
                    <p className="text-xs text-[#7c7c6f] mt-1 leading-relaxed">
                      {t.vendorCardDesc}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Download & Action Buttons: Outlined Only (Primary Gradient Pill & Cream Ghost Pill) */}
            <div ref={ctaGroupRef} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary CTA: Gradient-Stroked CTA Pill */}
              <a
                id="btn-hero-download-apk"
                href={OFFICIAL_APK_DOWNLOAD_URL}
                download="RailSathi.apk"
                className="btn-cta-gradient group"
              >
                <Download className="w-5 h-5 text-[#0ae448] group-hover:scale-110 transition" />
                <span>{t.downloadApkBtn}</span>
              </a>

              {/* Secondary CTA: Outlined Cream Pill Button */}
              <button
                id="btn-hero-how-it-works"
                onClick={() => onNavigate('difference')}
                className="btn-ghost-cream"
              >
                <span>{t.howItWorksBtn}</span>
              </button>
            </div>

            {/* Technical Trust & Specs Line */}
            <div className="pt-1 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-[#7c7c6f]">
              <div className="flex items-center gap-1.5 text-[#abff84]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{MIN_ANDROID_VERSION}</span>
              </div>
              <span className="text-[#42433d]">•</span>
              <a 
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noreferrer" 
                className="inline-flex items-center gap-1 text-[#fffce1] hover:underline"
              >
                <span>{t.openSource}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-[#42433d]">•</span>
              <button
                onClick={handleCopySha}
                className="inline-flex items-center gap-1 text-[#7c7c6f] hover:text-[#fffce1] transition cursor-pointer"
                title="Click to copy SHA-256 verification hash"
              >
                {copiedSha ? <Check className="w-3 h-3 text-[#0ae448]" /> : <Copy className="w-3 h-3" />}
                <span>SHA-256: {SHA256_CHECKSUM.slice(0, 8)}...</span>
              </button>
            </div>

          </div>

          {/* Right Column: Phone Preview Mockup in Dark Canvas Studio Style */}
          <div className="lg:col-span-5 flex justify-center">
            <div ref={phoneRef} className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] rounded-[36px] bg-[#191919] p-2.5 sm:p-3.5 border border-[#42433d]">
              
              {/* Speaker & Camera Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#0e100f] rounded-full flex items-center justify-center gap-2 z-20 border border-[#42433d]">
                <div className="w-2 h-2 rounded-full bg-[#42433d]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#00bae2]" />
              </div>

              {/* Phone Screen Canvas */}
              <div className="rounded-[28px] bg-[#0e100f] overflow-hidden border border-[#42433d] text-[#fffce1] font-sans">
                
                {/* Android Status Bar */}
                <div className="bg-[#191919] text-[#fffce1] px-5 pt-3.5 pb-2 flex items-center justify-between text-[11px] font-mono border-b border-[#42433d]">
                  <span>08:42</span>
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="text-[#0ae448] font-bold">{t.mockupGps}</span>
                    <BatteryCharging className="w-3 h-3 text-[#ff8709]" />
                    <span>88%</span>
                  </div>
                </div>

                {/* App Bar */}
                <div className="bg-[#191919] text-[#fffce1] px-3.5 py-3 flex items-center justify-between border-b border-[#42433d] gap-2">
                  <div className="flex items-center gap-2 truncate">
                    <div className="w-7 h-7 rounded-full bg-[#0e100f] border border-[#0ae448]/50 flex items-center justify-center shrink-0">
                      <Train className="w-3.5 h-3.5 text-[#0ae448]" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs font-bold leading-tight truncate">RailSaathi</div>
                      <div className="text-[10px] text-[#7c7c6f] truncate">
                        {activeRole === 'TRAVELER' ? t.mockupTravelerMode : t.mockupVendorMode}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#0ae448] border border-[#0ae448]/40 bg-[#0e100f] px-2 py-0.5 rounded-full shrink-0">
                    {t.mockupOfflineReady}
                  </span>
                </div>

                {/* Body Content changes depending on activeRole */}
                <div className="p-3.5 space-y-3">
                  
                  {activeRole === 'TRAVELER' ? (
                    <>
                      {/* Active Train Card */}
                      <div className="p-3 rounded-xl bg-[#191919] border border-[#42433d]">
                        <div className="flex items-center justify-between text-[11px] font-mono text-[#7c7c6f] mb-1">
                          <span>{t.mockupActiveSignal}</span>
                          <span className="text-[#0ae448] bg-[#0e100f] border border-[#0ae448]/40 px-1.5 py-0.5 rounded text-[10px] font-bold">ON TIME</span>
                        </div>
                        <div className="text-sm font-bold text-[#fffce1]">Sealdah - Ranaghat Local</div>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#42433d] text-[11px]">
                          <div>
                            <span className="text-[#7c7c6f] block text-[9px]">YOUR COACH</span>
                            <span className="font-bold text-[#00bae2]">GS-1 (Coach 2)</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[#7c7c6f] block text-[9px]">NEXT HALT</span>
                            <span className="font-bold text-[#fffce1]">Dum Dum (45s halt)</span>
                          </div>
                        </div>
                      </div>

                      {/* Active Hunger Signal */}
                      <div className="p-3 rounded-xl bg-[#191919] border border-[#ff8709]/50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="flex h-2 w-2 rounded-full bg-[#ff8709] animate-ping" />
                            <span className="text-xs font-bold text-[#ff8709] font-mono uppercase tracking-wide">
                              {t.mockupHungerActive}
                            </span>
                          </div>
                          <span className="text-xs font-mono font-bold text-[#ff8709] border border-[#ff8709]/50 px-2 py-0.5 rounded-full bg-[#0e100f]">
                            ₹20
                          </span>
                        </div>
                        <p className="text-[11px] text-[#fffce1] mt-1.5">
                          1x Kadak Chai (₹10) + 1x Roasted Badam (₹10)
                        </p>
                        <div className="mt-2 flex items-center justify-between text-[10px] bg-[#0e100f] p-2 rounded-lg border border-[#42433d]">
                          <span className="text-[#7c7c6f]">{t.mockupVendorIncoming}</span>
                          <span className="text-[#0ae448] font-bold font-mono">{t.mockupReachingDoor}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Vendor Radar View */}
                      <div className="p-3 rounded-xl bg-[#191919] border border-[#42433d]">
                        <div className="flex items-center justify-between text-[11px] font-mono text-[#7c7c6f] mb-1">
                          <span>{t.mockupRadarActive}</span>
                          <span className="text-[#00bae2] bg-[#0e100f] border border-[#00bae2]/40 px-1.5 py-0.5 rounded text-[10px] font-bold">4 SIGNALS</span>
                        </div>
                        <div className="text-sm font-bold text-[#fffce1]">Your Item: Cutting Chai & Samosa</div>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#42433d] text-[11px]">
                          <div>
                            <span className="text-[#7c7c6f] block text-[9px]">YOUR POSITION</span>
                            <span className="font-bold text-[#0ae448]">Coach 4 (VND-1)</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[#7c7c6f] block text-[9px]">EST. EARNING</span>
                            <span className="font-bold text-[#ff8709]">₹65 Pending</span>
                          </div>
                        </div>
                      </div>

                      {/* Incoming Passenger Request Alert */}
                      <div className="p-3 rounded-xl bg-[#191919] border border-[#0ae448]/50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <BellRing className="w-3.5 h-3.5 text-[#0ae448] animate-bounce" />
                            <span className="text-xs font-bold text-[#0ae448] uppercase font-mono">
                              Signal from Coach GS-1
                            </span>
                          </div>
                          <span className="text-xs font-mono font-bold text-[#0ae448] border border-[#0ae448]/40 px-2 py-0.5 rounded-full bg-[#0e100f]">
                            ₹20 Cash
                          </span>
                        </div>
                        <p className="text-[11px] text-[#fffce1] font-medium mt-1.5">
                          1x Masala Chai + 1x Roasted Badam (Window Seat 24)
                        </p>
                        <div className="mt-2 flex gap-1.5">
                          <button className="flex-1 bg-[#0ae448] text-[#0e100f] text-[10px] font-bold py-1.5 rounded-full text-center cursor-pointer">
                            {t.mockupAcceptOrder}
                          </button>
                          <button className="bg-[#42433d] text-[#fffce1] text-[10px] font-semibold px-2.5 py-1.5 rounded-full cursor-pointer">
                            {t.mockupSkip}
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  {/* 12-Car EMU Formation Strip */}
                  <div className="p-2.5 rounded-xl bg-[#191919] border border-[#42433d]">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#7c7c6f] mb-1.5">
                      <span>{t.mockupFormationTitle}</span>
                      <span className="text-[#00bae2]">Engine ➔</span>
                    </div>
                    <div className="grid grid-cols-6 gap-1">
                      <div className="bg-[#0e100f] border border-[#9d95ff]/40 rounded p-1 text-center">
                        <div className="text-[9px] font-bold text-[#9d95ff]">D-MC</div>
                        <div className="text-[8px] text-[#9d95ff]">♿</div>
                      </div>
                      <div className="bg-[#00bae2]/20 border border-[#00bae2] text-[#00bae2] rounded p-1 text-center">
                        <div className="text-[9px] font-bold">GS-1</div>
                        <div className="text-[8px]">You</div>
                      </div>
                      <div className="bg-[#0e100f] border border-[#fec5fb]/40 rounded p-1 text-center">
                        <div className="text-[9px] font-bold text-[#fec5fb]">L-1</div>
                        <div className="text-[8px] text-[#fec5fb]">Ladies</div>
                      </div>
                      <div className="bg-[#0e100f] border border-[#ff8709]/40 rounded p-1 text-center">
                        <div className="text-[9px] font-bold text-[#ff8709]">VND</div>
                        <div className="text-[8px] text-[#ff8709]">Hawker</div>
                      </div>
                      <div className="bg-[#0e100f] border border-[#42433d] rounded p-1 text-center">
                        <div className="text-[9px] font-bold text-[#7c7c6f]">GS-2</div>
                        <div className="text-[8px] text-[#7c7c6f]">Mid</div>
                      </div>
                      <div className="bg-[#0e100f] border border-[#42433d] rounded p-1 text-center">
                        <div className="text-[9px] font-bold text-[#7c7c6f]">+7 Cars</div>
                        <div className="text-[8px] text-[#7c7c6f]">...</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action in Mockup */}
                  <button
                    onClick={() => onNavigate(activeRole === 'TRAVELER' ? 'commuters' : 'vendors')}
                    className="w-full py-2.5 rounded-full border border-[#fffce1] text-[#fffce1] hover:bg-[#fffce1]/10 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                  >
                    <span>{activeRole === 'TRAVELER' ? t.mockupExploreCommuter : t.mockupExploreVendor}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0ae448]" />
                  </button>

                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Global Key Stats Bar — 8px radius on #191919 surface with #42433d hairline */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-lg bg-[#191919] border border-[#42433d]">
          <div className="p-2 sm:p-0 text-center sm:text-left sm:border-r border-[#42433d] pr-2">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#fffce1]">{t.statDailyPassengers}</div>
            <div className="text-[11px] sm:text-xs font-mono text-[#7c7c6f] mt-1">{t.statDailyLabel}</div>
          </div>
          <div className="p-2 sm:p-0 text-center sm:text-left lg:border-r border-[#42433d] pr-2">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#ff8709]">{t.statHaltWindow}</div>
            <div className="text-[11px] sm:text-xs font-mono text-[#7c7c6f] mt-1">{t.statHaltLabel}</div>
          </div>
          <div className="p-2 sm:p-0 text-center sm:text-left sm:border-r border-[#42433d] pr-2">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#0ae448]">{t.statZeroCut}</div>
            <div className="text-[11px] sm:text-xs font-mono text-[#7c7c6f] mt-1">{t.statZeroCutLabel}</div>
          </div>
          <div className="p-2 sm:p-0 text-center sm:text-left">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#00bae2]">{t.statOffline}</div>
            <div className="text-[11px] sm:text-xs font-mono text-[#7c7c6f] mt-1">{t.statOfflineLabel}</div>
          </div>
        </div>

      </div>

      {/* QR Code Modal for Phone Download in Dark Theme */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0e100f]/80 backdrop-blur-sm">
          <div className="bg-[#191919] rounded-2xl p-6 sm:p-8 max-w-sm w-full border border-[#42433d] relative text-[#fffce1]">
            <button 
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 text-[#7c7c6f] hover:text-[#fffce1] p-1 cursor-pointer"
            >
              ✕
            </button>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border border-[#42433d] bg-[#0e100f] text-[#0ae448] flex items-center justify-center mx-auto mb-3">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#fffce1]">Scan to Download on Android</h3>
              <p className="text-xs text-[#7c7c6f] mt-1 mb-4">
                Point your Android camera at the QR code below to download the verified RailSaathi APK directly.
              </p>
              
              {/* QR Image Representation */}
              <div className="p-4 bg-white rounded-xl inline-block mb-4">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(OFFICIAL_APK_DOWNLOAD_URL)}`}
                  alt="RailSaathi APK Download QR Code"
                  className="w-44 h-44 mx-auto"
                  loading="lazy"
                />
              </div>

              <div className="text-xs font-mono text-[#7c7c6f]">
                RailSaathi {APK_VERSION} • {APK_SIZE}
              </div>
              <div className="mt-4 pt-3 border-t border-[#42433d]">
                <a
                  href={OFFICIAL_APK_DOWNLOAD_URL}
                  download="RailSathi.apk"
                  className="w-full py-2.5 rounded-full border border-[#0ae448] text-[#fffce1] hover:bg-[#0ae448]/10 font-bold text-xs inline-block text-center transition"
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
