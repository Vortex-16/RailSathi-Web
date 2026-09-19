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
  MapPin,
  Radio,
  Database,
  Wifi
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
  const [activeDockTab, setActiveDockTab] = useState<'train' | 'radar' | 'chai' | 'offline'>('train');
  const [islandExpanded, setIslandExpanded] = useState(false);
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
      const tl = gsap.timeline({ 
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          gsap.set(['.hero-badge-item', headlineRef.current, '.hero-sub-item', ctaGroupRef.current, phoneRef.current], {
            clearProps: 'opacity,transform,scale'
          });
        }
      });

      tl.fromTo('.hero-badge-item', 
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, clearProps: 'all' }
      )
      .fromTo(headlineRef.current, 
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, clearProps: 'all' }, 
        '-=0.2'
      )
      .fromTo('.hero-sub-item', 
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, clearProps: 'all' }, 
        '-=0.3'
      )
      .fromTo(ctaGroupRef.current, 
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, clearProps: 'all' }, 
        '-=0.3'
      )
      .fromTo(phoneRef.current, 
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, clearProps: 'opacity,scale' }, 
        '-=0.4'
      );

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
    <div id="hero" ref={heroContainerRef} className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 bg-[#f2ee98] border-b-2 border-[#10380b]">
      {/* Botanical Almanac Stamp Accents in Background */}
      <div className="absolute top-8 right-8 pointer-events-none opacity-20 hidden md:block">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#10380b" strokeWidth="2">
          {/* Botanical leaf stamp */}
          <path d="M50 10 C50 10, 70 30, 70 55 C70 70, 50 90, 50 90 C50 90, 30 70, 30 55 C30 30, 50 10, 50 10 Z" />
          <path d="M50 10 L50 90" />
          <path d="M50 35 L62 25 M50 45 L66 38 M50 58 L64 54 M50 35 L38 25 M50 45 L34 38 M50 58 L36 54" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Almanac Pill Badge & Star Rating */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="hero-badge-item font-mono text-xs sm:text-sm font-bold text-[#10380b] bg-[#fce519] border border-[#10380b] px-3.5 py-1 rounded-full shadow-[2px_2px_0px_0px_#10380b]">
              RailSathi® Suburban Almanac
            </span>
            
            <span className="hero-badge-item font-mono text-xs font-bold text-[#10380b] px-3 py-1 rounded-full border border-[#10380b] bg-[#fefde6]">
              APK {APK_VERSION} • {APK_SIZE}
            </span>

            <span className="hero-badge-item font-mono text-xs font-bold text-[#10380b] px-3 py-1 rounded-full border border-[#10380b] bg-[#dbe8ac]">
              100% Offline SQLite
            </span>
          </div>

          {/* Stamped Marigold Star Rating */}
          <div className="flex items-center gap-1 text-xs font-bold text-[#10380b] bg-[#fefde6] px-3 py-1 rounded-full border border-[#10380b]">
            <span className="text-[#10380b]">★★★★★</span>
            <span className="ml-1">4.9/5 • 24M+ Suburban Commuters</span>
          </div>
        </div>

        {/* Main Grid: Copy & CTAs on Left, Almanac Phone Canvas on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Action Area */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bold Display Headline in Oswald (National 2 Condensed style), deep forest ink */}
            <h1 ref={headlineRef} className={`font-display font-bold tracking-tight text-[#10380b] leading-[1.02] ${
              seniorMode ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-[80px]'
            }`}>
              {t.heroHeadline}
            </h1>

            {/* Sub-headline */}
            <p className={`hero-sub-item text-[#10380b]/85 leading-relaxed max-w-2xl text-[17px] sm:text-[19px] font-medium ${
              seniorMode ? 'text-xl sm:text-2xl font-bold text-[#10380b]' : ''
            }`}>
              {t.heroSubheadline}
            </p>

            {/* Interactive Role Switcher Pill Container */}
            <div className="hero-sub-item pt-1">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#10380b]/70 mb-2 flex items-center gap-1.5">
                <span>// SELECT COMMUTER PERSPECTIVE:</span>
              </div>
              <div className="inline-flex max-w-full overflow-x-auto p-1.5 rounded-full bg-[#fefde6] border-1.5 border-[#10380b] shadow-[3px_3px_0px_0px_#10380b] gap-1.5">
                <button
                  id="toggle-role-traveler"
                  onClick={() => handleRoleSelect('TRAVELER')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer shrink-0 ${
                    activeRole === 'TRAVELER'
                      ? 'bg-[#fce519] text-[#10380b] border border-[#10380b] shadow-[2px_2px_0px_0px_#10380b]'
                      : 'text-[#10380b]/70 hover:text-[#10380b]'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>{t.travelerRoleBtn}</span>
                </button>
                <button
                  id="toggle-role-vendor"
                  onClick={() => handleRoleSelect('VENDOR')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer shrink-0 ${
                    activeRole === 'VENDOR'
                      ? 'bg-[#10380b] text-[#f2ee98] border border-[#10380b] shadow-[2px_2px_0px_0px_#10380b]'
                      : 'text-[#10380b]/70 hover:text-[#10380b]'
                  }`}
                >
                  <Store className="w-4 h-4" />
                  <span>{t.vendorRoleBtn}</span>
                </button>
              </div>
            </div>

            {/* Dynamic Role Benefit Highlight Card on Parchment Surface */}
            <div className="hero-sub-item p-5 rounded-[28px] border-1.5 border-[#10380b] bg-[#fefde6] shadow-[6px_6px_0px_0px_#10380b]">
              {activeRole === 'TRAVELER' ? (
                <div className="space-y-3">
                  <div className="flex items-start gap-3.5">
                    <div className="p-3 rounded-full bg-[#fce519] text-[#10380b] border border-[#10380b] shrink-0 shadow-[2px_2px_0px_0px_#10380b]">
                      <Coffee className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-bold text-[#10380b]">
                          {t.travelerCardTitle}
                        </h3>
                        <span className="text-[11px] font-mono font-bold text-[#10380b] bg-[#dbe8ac] px-2.5 py-0.5 rounded-full border border-[#10380b]">
                          Seat Delivery
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#10380b]/80 mt-1 leading-relaxed font-medium">
                        {t.travelerCardDesc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-[#10380b]/20 flex items-center justify-between text-xs">
                    <span className="text-[#10380b]/70 font-mono text-[11px]">Instant peer-to-peer coach ordering</span>
                    <button
                      onClick={() => onNavigate('commuters')}
                      className="inline-flex items-center gap-1 text-[#10380b] font-bold hover:underline cursor-pointer font-mono"
                    >
                      <span>Try Commuter Demo</span>
                      <span>➔</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-start gap-3.5">
                    <div className="p-3 rounded-full bg-[#dbe8ac] text-[#10380b] border border-[#10380b] shrink-0 shadow-[2px_2px_0px_0px_#10380b]">
                      <Store className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-bold text-[#10380b]">
                          {t.vendorCardTitle}
                        </h3>
                        <span className="text-[11px] font-mono font-bold text-[#10380b] bg-[#fce519] px-2.5 py-0.5 rounded-full border border-[#10380b]">
                          0% Commission
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#10380b]/80 mt-1 leading-relaxed font-medium">
                        {t.vendorCardDesc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-[#10380b]/20 flex items-center justify-between text-xs">
                    <span className="text-[#10380b]/70 font-mono text-[11px]">Real-time hunger signals across 12 coaches</span>
                    <button
                      onClick={() => onNavigate('vendors')}
                      className="inline-flex items-center gap-1 text-[#10380b] font-bold hover:underline cursor-pointer font-mono"
                    >
                      <span>Explore Hawker Radar</span>
                      <span>➔</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Download & Action Buttons: Marigold Pill Button & Parchment Pill */}
            <div ref={ctaGroupRef} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary CTA: Marigold Pill Button with Forest Ink Offset Shadow */}
              <a
                id="btn-hero-download-apk"
                href={OFFICIAL_APK_DOWNLOAD_URL}
                download="RailSathi-debug.apk"
                className="inline-flex items-center justify-center gap-2.5 bg-[#fce519] hover:bg-[#fff03d] text-[#10380b] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full border-1.5 border-[#10380b] shadow-[4px_4px_0px_0px_#10380b] hover:shadow-[2px_2px_0px_0px_#10380b] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer group"
              >
                <Download className="w-5 h-5 text-[#10380b] group-hover:scale-110 transition" />
                <span>{t.downloadApkBtn}</span>
              </a>

              {/* Secondary CTA: Parchment Pill Button */}
              <button
                id="btn-hero-how-it-works"
                onClick={() => onNavigate('difference')}
                className="inline-flex items-center justify-center gap-2 bg-[#fefde6] hover:bg-[#dbe8ac] text-[#10380b] font-bold text-sm sm:text-base px-6 py-3.5 rounded-full border-1.5 border-[#10380b] shadow-[4px_4px_0px_0px_#10380b] hover:shadow-[2px_2px_0px_0px_#10380b] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              >
                <span>{t.howItWorksBtn}</span>
                <ArrowRight className="w-4 h-4 text-[#10380b]" />
              </button>
            </div>

            {/* Technical Trust & Specs Line */}
            <div className="pt-1 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-[#10380b]/80 font-bold">
              <div className="flex items-center gap-1.5 text-[#10380b]">
                <CheckCircle className="w-3.5 h-3.5 text-[#10380b]" />
                <span>{MIN_ANDROID_VERSION}</span>
              </div>
              <span className="text-[#10380b]/40">•</span>
              <a 
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noreferrer" 
                className="inline-flex items-center gap-1 text-[#10380b] underline hover:text-[#1b5314]"
              >
                <span>{t.openSource}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-[#10380b]/40">•</span>
              <button
                onClick={handleCopySha}
                className="inline-flex items-center gap-1 text-[#10380b] hover:text-[#1b5314] transition cursor-pointer"
                title="Click to copy SHA-256 verification hash"
              >
                {copiedSha ? <Check className="w-3 h-3 text-[#10380b]" /> : <Copy className="w-3 h-3" />}
                <span>SHA-256: {SHA256_CHECKSUM.slice(0, 8)}...</span>
              </button>
            </div>

          </div>

          {/* Right Column: Almanac Mobile Hardware Canvas with Hard Offset Shadow */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              ref={phoneRef} 
              className="relative w-full max-w-[290px] xs:max-w-[330px] sm:max-w-[370px] rounded-[44px] sm:rounded-[48px] bg-[#fefde6] p-2.5 sm:p-3 border-2 border-[#10380b] shadow-[8px_8px_0px_0px_#10380b] select-none"
            >
              {/* Phone Screen Canvas: Full Height with Internal Scroll & Botanical Pill Cards */}
              <div className="rounded-[36px] sm:rounded-[40px] bg-[#fefde6] overflow-hidden border border-[#10380b] text-[#10380b] font-sans flex flex-col h-[580px] sm:h-[620px] relative">
                
                {/* Status Bar */}
                <div className="bg-[#dbe8ac] px-4 pt-3 pb-2 flex items-center justify-between border-b border-[#10380b] shrink-0 z-30 relative">
                  {/* Left: Clock */}
                  <span className="text-xs font-bold tracking-tight text-[#10380b] w-12 text-left font-mono">
                    9:41
                  </span>

                  {/* Center: Live Island Pill */}
                  <div
                    onClick={() => setIslandExpanded(prev => !prev)}
                    className={`h-7 bg-[#10380b] rounded-full flex items-center justify-between px-2.5 border border-[#10380b] shadow-xs transition-all duration-300 cursor-pointer select-none ${
                      islandExpanded ? 'w-44 px-3' : 'w-28 sm:w-30'
                    }`}
                    title="Tap to toggle Live Activity"
                  >
                    {islandExpanded ? (
                      <div className="w-full flex items-center justify-between text-[9px] font-mono text-[#f2ee98]">
                        <div className="flex items-center gap-1 text-[#fce519]">
                          <Train className="w-3 h-3" />
                          <span className="font-bold">12951</span>
                        </div>
                        <span className="text-[#dbe8ac]">82 km/h</span>
                        <span className="text-[#fce519]">Dum Dum 4m</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-1.5">
                          <Train className="w-3 h-3 text-[#fce519] shrink-0" />
                          <span className="text-[10px] font-mono text-[#fce519] font-bold">12951</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#fce519] animate-pulse" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#fefde6] flex items-center justify-center">
                            <div className="w-1 h-1 rounded-full bg-[#10380b]" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Right: Signal & Battery */}
                  <div className="flex items-center gap-1.5 text-[10px] w-14 justify-end font-mono font-bold">
                    <span>100%</span>
                    <div className="w-4 h-2 rounded-[3px] border border-[#10380b] p-[1px] flex items-center">
                      <div className="h-full w-full bg-[#10380b] rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* App Navigation Bar inside Mockup */}
                <div className="bg-[#fefde6] px-3.5 py-2.5 flex items-center justify-between border-b border-[#10380b] gap-2 shrink-0">
                  <div className="flex items-center gap-2 truncate">
                    <div className="w-7 h-7 rounded-full bg-[#10380b] flex items-center justify-center shrink-0 shadow-xs">
                      <Train className="w-3.5 h-3.5 text-[#fce519]" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs font-bold leading-tight flex items-center gap-1.5 text-[#10380b]">
                        <span>RailSathi</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#30be60] animate-ping" />
                      </div>
                      <div className="text-[10px] font-bold text-[#10380b]/70">
                        {activeRole === 'TRAVELER' ? 'Passenger Coach Mode' : 'Hawker Radar Mode'}
                      </div>
                    </div>
                  </div>

                  {/* Segmented Role Pill inside Phone */}
                  <div className="flex items-center p-0.5 rounded-full bg-[#dbe8ac] border border-[#10380b] text-[9px] font-mono">
                    <button
                      onClick={() => handleRoleSelect('TRAVELER')}
                      className={`px-2 py-0.5 rounded-full font-bold transition-all duration-200 cursor-pointer ${
                        activeRole === 'TRAVELER'
                          ? 'bg-[#fce519] text-[#10380b] border border-[#10380b]'
                          : 'text-[#10380b]/70'
                      }`}
                    >
                      Commuter
                    </button>
                    <button
                      onClick={() => handleRoleSelect('VENDOR')}
                      className={`px-2 py-0.5 rounded-full font-bold transition-all duration-200 cursor-pointer ${
                        activeRole === 'VENDOR'
                          ? 'bg-[#10380b] text-[#f2ee98]'
                          : 'text-[#10380b]/70'
                      }`}
                    >
                      Vendor
                    </button>
                  </div>
                </div>

                {/* Scrollable Screen Content */}
                <div className="flex-1 overflow-y-auto px-3 py-2.5 space-y-2.5 scrollbar-thin bg-[#f2ee98]">
                  
                  {/* Dynamic View 1: My Train & Coach Status */}
                  {(activeDockTab === 'train' || (activeDockTab !== 'radar' && activeDockTab !== 'chai' && activeDockTab !== 'offline' && activeRole === 'TRAVELER')) && (
                    <div className="p-3 rounded-2xl bg-[#fefde6] border-1.5 border-[#10380b] shadow-[3px_3px_0px_0px_#10380b]">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#10380b] mb-1">
                        <span className="flex items-center gap-1 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#30be60] animate-pulse" />
                          {t.mockupActiveSignal}
                        </span>
                        <span className="text-[#10380b] bg-[#fce519] border border-[#10380b] px-1.5 py-0.5 rounded text-[10px] font-bold">
                          ON TIME
                        </span>
                      </div>
                      <div className="text-sm font-bold text-[#10380b]">Sealdah - Ranaghat Local</div>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#10380b]/20 text-[11px]">
                        <div>
                          <span className="text-[#10380b]/70 block text-[9px] uppercase font-mono font-bold">Your Coach</span>
                          <span className="font-bold text-[#10380b]">GS-1 (Coach 2)</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[#10380b]/70 block text-[9px] uppercase font-mono font-bold">Next Halt</span>
                          <span className="font-bold text-[#10380b]">Dum Dum (45s halt)</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Dynamic View 2: Chai SOS Hunger Signal Alert */}
                  {(activeDockTab === 'chai' || (activeDockTab === 'train' && activeRole === 'TRAVELER')) && (
                    <div className="p-3 rounded-2xl bg-[#fefde6] border-1.5 border-[#10380b] shadow-[3px_3px_0px_0px_#10380b]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="flex h-2 w-2 rounded-full bg-[#fce519] border border-[#10380b]" />
                          <span className="text-xs font-bold text-[#10380b] font-mono uppercase">
                            {t.mockupHungerActive}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#10380b] border border-[#10380b] px-2 py-0.5 rounded-full bg-[#fce519]">
                          ₹20
                        </span>
                      </div>
                      <p className="text-[11px] text-[#10380b] mt-1.5 font-bold">
                        1x Kadak Masala Chai (₹10) + 1x Roasted Badam (₹10)
                      </p>
                      <div className="mt-2 flex items-center justify-between text-[10px] bg-[#dbe8ac] p-2 rounded-xl border border-[#10380b]">
                        <span className="text-[#10380b] font-semibold">{t.mockupVendorIncoming}</span>
                        <span className="text-[#10380b] font-bold font-mono">{t.mockupReachingDoor}</span>
                      </div>
                    </div>
                  )}

                  {/* Dynamic View 3: Hawker Radar View */}
                  {(activeDockTab === 'radar' || activeRole === 'VENDOR') && (
                    <>
                      <div className="p-3 rounded-2xl bg-[#fefde6] border-1.5 border-[#10380b] shadow-[3px_3px_0px_0px_#10380b]">
                        <div className="flex items-center justify-between text-[11px] font-mono text-[#10380b] mb-1">
                          <span className="flex items-center gap-1.5 font-bold">
                            <Radio className="w-3 h-3 animate-pulse text-[#10380b]" />
                            {t.mockupRadarActive}
                          </span>
                          <span className="text-[#10380b] bg-[#fce519] border border-[#10380b] px-1.5 py-0.5 rounded text-[10px] font-bold">
                            4 SIGNALS
                          </span>
                        </div>
                        <div className="text-sm font-bold text-[#10380b]">Item: Cutting Chai & Samosa</div>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#10380b]/20 text-[11px]">
                          <div>
                            <span className="text-[#10380b]/70 block text-[9px] uppercase font-mono font-bold">Your Position</span>
                            <span className="font-bold text-[#10380b]">Coach 4 (VND-1)</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[#10380b]/70 block text-[9px] uppercase font-mono font-bold">Est. Earning</span>
                            <span className="font-bold text-[#10380b]">₹65 Pending</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#fefde6] border-1.5 border-[#10380b] shadow-[3px_3px_0px_0px_#10380b]">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <BellRing className="w-3.5 h-3.5 text-[#10380b] animate-bounce" />
                            <span className="text-xs font-bold text-[#10380b] uppercase font-mono">
                              Coach GS-1 Signal
                            </span>
                          </div>
                          <span className="text-xs font-mono font-bold text-[#10380b] border border-[#10380b] px-2 py-0.5 rounded-full bg-[#fce519]">
                            ₹20 Cash
                          </span>
                        </div>
                        <p className="text-[11px] text-[#10380b] font-bold mt-1.5">
                          1x Masala Chai + 1x Roasted Badam (Window Seat 24)
                        </p>
                        <div className="mt-2 flex gap-1.5">
                          <button 
                            onClick={() => setActiveDockTab('train')}
                            className="flex-1 bg-[#fce519] hover:bg-[#fff03d] text-[#10380b] text-[10px] font-bold py-1.5 rounded-full border border-[#10380b] text-center transition-all cursor-pointer shadow-[2px_2px_0px_0px_#10380b]"
                          >
                            {t.mockupAcceptOrder}
                          </button>
                          <button 
                            onClick={() => setActiveDockTab('train')}
                            className="bg-[#dbe8ac] hover:bg-[#fefde6] text-[#10380b] text-[10px] font-bold px-2.5 py-1.5 rounded-full border border-[#10380b] transition-all cursor-pointer"
                          >
                            {t.mockupSkip}
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Dynamic View 4: Offline SQLite Mesh Health Card */}
                  {activeDockTab === 'offline' && (
                    <div className="p-3 rounded-2xl bg-[#fefde6] border-1.5 border-[#10380b] shadow-[3px_3px_0px_0px_#10380b]">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#10380b] mb-1">
                        <span className="flex items-center gap-1 font-bold">
                          <Database className="w-3 h-3 text-[#10380b]" />
                          Local SQLite DB
                        </span>
                        <span className="text-[#10380b] bg-[#fce519] border border-[#10380b] px-1.5 py-0.5 rounded text-[10px] font-bold">
                          24.90 MB
                        </span>
                      </div>
                      <div className="text-xs font-bold text-[#10380b]">100% Offline Railway Mesh Active</div>
                      <div className="mt-2 text-[10px] text-[#10380b] space-y-1 font-semibold">
                        <div className="flex justify-between">
                          <span>Mobile Internet Usage:</span>
                          <span className="text-[#10380b] font-bold">0.00 KB</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Peer Mesh Hops:</span>
                          <span className="text-[#10380b] font-bold">14 Coaches Linked</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Station Index:</span>
                          <span className="text-[#10380b] font-bold">8,420 Offline Halts</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 12-Car EMU Formation Strip */}
                  <div className="p-2.5 rounded-2xl bg-[#fefde6] border-1.5 border-[#10380b] shadow-[2px_2px_0px_0px_#10380b]">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#10380b] font-bold mb-1.5">
                      <span>{t.mockupFormationTitle}</span>
                      <span>Engine ➔</span>
                    </div>
                    <div className="grid grid-cols-6 gap-1">
                      <div className="bg-[#dbe8ac] border border-[#10380b] rounded-lg p-1 text-center">
                        <div className="text-[9px] font-bold text-[#10380b]">D-MC</div>
                        <div className="text-[8px] text-[#10380b]">♿</div>
                      </div>
                      <div className="bg-[#fce519] border border-[#10380b] text-[#10380b] rounded-lg p-1 text-center font-bold shadow-xs">
                        <div className="text-[9px] font-bold">GS-1</div>
                        <div className="text-[8px]">You</div>
                      </div>
                      <div className="bg-[#fefde6] border border-[#10380b] rounded-lg p-1 text-center">
                        <div className="text-[9px] font-bold text-[#10380b]">L-1</div>
                        <div className="text-[8px] text-[#10380b]">Ladies</div>
                      </div>
                      <div className="bg-[#dbe8ac] border border-[#10380b] rounded-lg p-1 text-center">
                        <div className="text-[9px] font-bold text-[#10380b]">VND</div>
                        <div className="text-[8px] text-[#10380b]">Hawker</div>
                      </div>
                      <div className="bg-[#fefde6] border border-[#10380b] rounded-lg p-1 text-center">
                        <div className="text-[9px] font-bold text-[#10380b]">GS-2</div>
                        <div className="text-[8px] text-[#10380b]">Mid</div>
                      </div>
                      <div className="bg-[#fefde6] border border-[#10380b] rounded-lg p-1 text-center">
                        <div className="text-[9px] font-bold text-[#10380b]">+7 Cars</div>
                        <div className="text-[8px] text-[#10380b]">...</div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation CTA inside mockup */}
                  <button
                    onClick={() => onNavigate(activeRole === 'TRAVELER' ? 'commuters' : 'vendors')}
                    className="w-full py-2 rounded-full border border-[#10380b] bg-[#fce519] hover:bg-[#fff03d] text-[#10380b] font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#10380b]"
                  >
                    <span>{activeRole === 'TRAVELER' ? t.mockupExploreCommuter : t.mockupExploreVendor}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#10380b]" />
                  </button>

                </div>

                {/* Bottom Dock with Authentic Almanac Styled Buttons */}
                <div className="sticky bottom-0 left-0 right-0 p-2 bg-[#dbe8ac] border-t border-[#10380b] z-20 shrink-0">
                  <div className="w-full bg-[#fefde6] border border-[#10380b] rounded-[22px] px-2.5 py-1.5 shadow-[2px_2px_0px_0px_#10380b] flex items-center justify-between gap-1">
                    
                    {/* Dock Icon 1: Train */}
                    <button
                      onClick={() => {
                        setActiveDockTab('train');
                        if (activeRole !== 'TRAVELER') handleRoleSelect('TRAVELER');
                      }}
                      className={`flex-1 flex flex-col items-center gap-0.5 py-1 rounded-xl transition-all cursor-pointer ${
                        activeDockTab === 'train' ? 'scale-105' : 'opacity-70 hover:opacity-100'
                      }`}
                      title="Train & EMU Formation"
                    >
                      <div className={`w-8 h-8 rounded-[10px] flex items-center justify-center border border-[#10380b] ${
                        activeDockTab === 'train'
                          ? 'bg-[#fce519] text-[#10380b] shadow-[1px_1px_0px_0px_#10380b]'
                          : 'bg-[#dbe8ac] text-[#10380b]'
                      }`}>
                        <Train className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-bold tracking-tight text-[#10380b]">Train</span>
                    </button>

                    {/* Dock Icon 2: Radar */}
                    <button
                      onClick={() => {
                        setActiveDockTab('radar');
                        if (activeRole !== 'VENDOR') handleRoleSelect('VENDOR');
                      }}
                      className={`flex-1 flex flex-col items-center gap-0.5 py-1 rounded-xl transition-all cursor-pointer ${
                        activeDockTab === 'radar' ? 'scale-105' : 'opacity-70 hover:opacity-100'
                      }`}
                      title="Live Hawker Radar"
                    >
                      <div className={`w-8 h-8 rounded-[10px] flex items-center justify-center border border-[#10380b] ${
                        activeDockTab === 'radar'
                          ? 'bg-[#fce519] text-[#10380b] shadow-[1px_1px_0px_0px_#10380b]'
                          : 'bg-[#dbe8ac] text-[#10380b]'
                      }`}>
                        <Radio className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-bold tracking-tight text-[#10380b]">Radar</span>
                    </button>

                    {/* Dock Icon 3: Chai SOS */}
                    <button
                      onClick={() => {
                        setActiveDockTab('chai');
                        if (activeRole !== 'TRAVELER') handleRoleSelect('TRAVELER');
                      }}
                      className={`flex-1 flex flex-col items-center gap-0.5 py-1 rounded-xl transition-all cursor-pointer ${
                        activeDockTab === 'chai' ? 'scale-105' : 'opacity-70 hover:opacity-100'
                      }`}
                      title="Chai & Food SOS"
                    >
                      <div className={`w-8 h-8 rounded-[10px] flex items-center justify-center border border-[#10380b] relative ${
                        activeDockTab === 'chai'
                          ? 'bg-[#fce519] text-[#10380b] shadow-[1px_1px_0px_0px_#10380b]'
                          : 'bg-[#dbe8ac] text-[#10380b]'
                      }`}>
                        <Coffee className="w-4 h-4" />
                        <span className="absolute -top-1 -right-1 px-1 bg-[#10380b] text-[8px] font-bold text-[#f2ee98] rounded-full">₹10</span>
                      </div>
                      <span className="text-[9px] font-bold tracking-tight text-[#10380b]">Chai SOS</span>
                    </button>

                    {/* Dock Icon 4: Offline DB */}
                    <button
                      onClick={() => setActiveDockTab('offline')}
                      className={`flex-1 flex flex-col items-center gap-0.5 py-1 rounded-xl transition-all cursor-pointer ${
                        activeDockTab === 'offline' ? 'scale-105' : 'opacity-70 hover:opacity-100'
                      }`}
                      title="Offline SQLite Mesh"
                    >
                      <div className={`w-8 h-8 rounded-[10px] flex items-center justify-center border border-[#10380b] relative ${
                        activeDockTab === 'offline'
                          ? 'bg-[#fce519] text-[#10380b] shadow-[1px_1px_0px_0px_#10380b]'
                          : 'bg-[#dbe8ac] text-[#10380b]'
                      }`}>
                        <Database className="w-4 h-4" />
                        <span className="absolute -top-1 -right-1 px-1 bg-[#10380b] text-[8px] font-bold text-[#f2ee98] rounded-full">24M</span>
                      </div>
                      <span className="text-[9px] font-bold tracking-tight text-[#10380b]">Offline DB</span>
                    </button>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Global Key Stats Bar — Parchment cards with Hard Offset Shadows */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 sm:p-6 rounded-[28px] bg-[#fefde6] border-1.5 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b]">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#10380b]">{t.statDailyPassengers}</div>
            <div className="text-xs font-mono font-bold text-[#10380b]/70 mt-1 uppercase">{t.statDailyLabel}</div>
          </div>
          <div className="p-5 sm:p-6 rounded-[28px] bg-[#fefde6] border-1.5 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b]">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#10380b]">{t.statHaltWindow}</div>
            <div className="text-xs font-mono font-bold text-[#10380b]/70 mt-1 uppercase">{t.statHaltLabel}</div>
          </div>
          <div className="p-5 sm:p-6 rounded-[28px] bg-[#fefde6] border-1.5 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b]">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#10380b]">{t.statZeroCut}</div>
            <div className="text-xs font-mono font-bold text-[#10380b]/70 mt-1 uppercase">{t.statZeroCutLabel}</div>
          </div>
          <div className="p-5 sm:p-6 rounded-[28px] bg-[#fefde6] border-1.5 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b]">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#10380b]">{t.statOffline}</div>
            <div className="text-xs font-mono font-bold text-[#10380b]/70 mt-1 uppercase">{t.statOfflineLabel}</div>
          </div>
        </div>

      </div>

      {/* QR Code Modal for Phone Download in Textla Parchment Theme */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10380b]/50 backdrop-blur-sm">
          <div className="bg-[#fefde6] rounded-[32px] p-6 sm:p-8 max-w-sm w-full border-2 border-[#10380b] shadow-[8px_8px_0px_0px_#10380b] relative text-[#10380b]">
            <button 
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 text-[#10380b] hover:bg-[#dbe8ac] rounded-full w-8 h-8 flex items-center justify-center font-bold cursor-pointer"
            >
              ✕
            </button>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border border-[#10380b] bg-[#fce519] text-[#10380b] flex items-center justify-center mx-auto mb-3">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#10380b]">Scan to Download on Android</h3>
              <p className="text-xs text-[#10380b]/80 mt-1 mb-4 font-medium">
                Point your Android camera at the QR code below to download the verified RailSathi APK directly.
              </p>
              
              {/* QR Image Representation */}
              <div className="p-4 bg-white rounded-2xl border border-[#10380b] inline-block mb-4">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(OFFICIAL_APK_DOWNLOAD_URL)}`}
                  alt="RailSathi APK Download QR Code"
                  className="w-44 h-44 mx-auto"
                  loading="lazy"
                />
              </div>

              <div className="text-xs font-mono font-bold text-[#10380b]">
                RailSathi {APK_VERSION} • {APK_SIZE}
              </div>
              <div className="mt-4 pt-3 border-t border-[#10380b]/20">
                <a
                  href={OFFICIAL_APK_DOWNLOAD_URL}
                  download="RailSathi-debug.apk"
                  className="w-full py-2.5 rounded-full border border-[#10380b] bg-[#fce519] hover:bg-[#fff03d] text-[#10380b] font-bold text-xs inline-block text-center transition shadow-[2px_2px_0px_0px_#10380b]"
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
