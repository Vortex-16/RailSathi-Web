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
              <div className="inline-flex max-w-full overflow-x-auto p-1 rounded-full bg-[#191919] border border-[#42433d] gap-1">
                <button
                  id="toggle-role-traveler"
                  onClick={() => handleRoleSelect('TRAVELER')}
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer shrink-0 ${
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
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer shrink-0 ${
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
            <div className="hero-sub-item p-4 rounded-xl border border-[#42433d] bg-[#191919]">
              {activeRole === 'TRAVELER' ? (
                <div className="space-y-3">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-full bg-[#ff8709]/15 text-[#ff8709] border border-[#ff8709]/40 shrink-0">
                      <Coffee className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm font-bold text-[#fffce1]">
                          {t.travelerCardTitle}
                        </h3>
                        <span className="text-[10px] font-mono text-[#0ae448] bg-[#0e100f] px-2 py-0.5 rounded-full border border-[#42433d]">
                          Seat Delivery
                        </span>
                      </div>
                      <p className="text-xs text-[#7c7c6f] mt-1 leading-relaxed">
                        {t.travelerCardDesc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-2.5 border-t border-[#42433d]/60 flex items-center justify-between text-xs">
                    <span className="text-[#7c7c6f] font-mono text-[11px]">Tap to test the commuter hunger flow</span>
                    <button
                      onClick={() => onNavigate('commuters')}
                      className="inline-flex items-center gap-1 text-[#00bae2] hover:text-[#fffce1] font-semibold transition cursor-pointer font-mono"
                    >
                      <span>Try Commuter Demo</span>
                      <span>➔</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-full bg-[#0ae448]/15 text-[#0ae448] border border-[#0ae448]/40 shrink-0">
                      <Store className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm font-bold text-[#fffce1]">
                          {t.vendorCardTitle}
                        </h3>
                        <span className="text-[10px] font-mono text-[#0ae448] bg-[#0e100f] px-2 py-0.5 rounded-full border border-[#42433d]">
                          0% Commission
                        </span>
                      </div>
                      <p className="text-xs text-[#7c7c6f] mt-1 leading-relaxed">
                        {t.vendorCardDesc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-2.5 border-t border-[#42433d]/60 flex items-center justify-between text-xs">
                    <span className="text-[#7c7c6f] font-mono text-[11px]">Explore verified hawker coach radar</span>
                    <button
                      onClick={() => onNavigate('vendors')}
                      className="inline-flex items-center gap-1 text-[#0ae448] hover:text-[#fffce1] font-semibold transition cursor-pointer font-mono"
                    >
                      <span>Explore Hawker Radar</span>
                      <span>➔</span>
                    </button>
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

          {/* Right Column: Authentic iPhone 16 / 17 Pro Titanium Mockup with Fixed iOS Dock */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              ref={phoneRef} 
              className="relative w-full max-w-[290px] xs:max-w-[330px] sm:max-w-[370px] rounded-[50px] sm:rounded-[54px] bg-gradient-to-b from-[#2e2d35] via-[#1a191f] to-[#121115] p-2.5 sm:p-3 border-[3.5px] border-[#3e3d48] shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.08),inset_0_1px_2px_rgba(255,255,255,0.22)] select-none"
            >
              {/* iPhone 16 / 17 Physical Hardware Buttons on Titanium Edge */}
              {/* Left Side: Action Button + Volume Up + Volume Down */}
              <div className="absolute -left-[5.5px] top-20 w-[3.5px] h-5 bg-[#4c4b56] rounded-l-sm border-l border-white/20 shadow-sm" title="Action Button" />
              <div className="absolute -left-[5.5px] top-29 w-[3.5px] h-10 bg-[#4c4b56] rounded-l-sm border-l border-white/20 shadow-sm" title="Volume Up" />
              <div className="absolute -left-[5.5px] top-42 w-[3.5px] h-10 bg-[#4c4b56] rounded-l-sm border-l border-white/20 shadow-sm" title="Volume Down" />

              {/* Right Side: Power/Siri Button + iPhone 16/17 Camera Control Button */}
              <div className="absolute -right-[5.5px] top-28 w-[3.5px] h-13 bg-[#4c4b56] rounded-r-sm border-r border-white/20 shadow-sm" title="Side Button" />
              <div 
                className="absolute -right-[5.5px] top-64 w-[3.5px] h-16 bg-gradient-to-b from-[#3e3d48] via-[#0ae448]/80 to-[#3e3d48] rounded-r-sm border-r border-[#0ae448]/60 shadow-[0_0_8px_rgba(10,228,72,0.4)] cursor-pointer" 
                title="iPhone 16/17 Camera Control & Haptic Sensor"
              />

              {/* Top Earpiece Speaker Slit */}
              <div className="w-12 h-[2.5px] bg-[#0c0c0f] rounded-full mx-auto -mb-1 relative z-30" />

              {/* Phone Screen Canvas: Full Height with Internal Scroll & Fixed Dock */}
              <div className="rounded-[40px] sm:rounded-[44px] bg-[#0e100f] overflow-hidden border border-[#27262e] text-[#fffce1] font-sans flex flex-col h-[580px] sm:h-[620px] relative shadow-inner">
                
                {/* iOS 18/19 Status Bar with Authentic Dynamic Island */}
                <div className="bg-[#141417]/95 backdrop-blur-md px-4 pt-3 pb-2 flex items-center justify-between border-b border-[#2e2d36] shrink-0 z-30 relative">
                  {/* Left: iOS Clock */}
                  <span className="text-xs font-semibold tracking-tight text-[#fffce1] w-12 text-left">
                    9:41
                  </span>

                  {/* Center: Dynamic Island (iPhone 16/17 signature, interactive) */}
                  <div
                    onClick={() => setIslandExpanded(prev => !prev)}
                    className={`h-7 bg-black rounded-full flex items-center justify-between px-2.5 border border-[#27272f] shadow-md transition-all duration-300 cursor-pointer select-none ${
                      islandExpanded ? 'w-44 px-3' : 'w-28 sm:w-30'
                    }`}
                    title="Tap to toggle Dynamic Island Live Activity"
                  >
                    {islandExpanded ? (
                      <div className="w-full flex items-center justify-between text-[9px] font-mono text-[#fffce1] animate-in fade-in duration-200">
                        <div className="flex items-center gap-1 text-[#0ae448]">
                          <Train className="w-3 h-3" />
                          <span className="font-bold">12951</span>
                        </div>
                        <span className="text-[#00bae2]">82 km/h</span>
                        <span className="text-[#ff8709]">Dum Dum 4m</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-1.5">
                          <Train className="w-3 h-3 text-[#0ae448] shrink-0" />
                          <span className="text-[10px] font-mono text-[#0ae448] font-bold">12951</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {/* Microphone/GPS Activity Dot */}
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff8709] animate-pulse" />
                          {/* Camera specular lens */}
                          <div className="w-2.5 h-2.5 rounded-full bg-[#070714] border border-[#1c1b2c] flex items-center justify-center relative">
                            <div className="w-1 h-1 rounded-full bg-[#00bae2]/70" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Right: iOS Cellular, Offline Mesh, Battery Capsule */}
                  <div className="flex items-center gap-1.5 text-[10px] w-14 justify-end">
                    {/* Stepped Cellular Bars */}
                    <div className="flex items-end gap-[1.5px] h-2.5" title="Cellular Offline Mesh Active">
                      <span className="w-[2px] h-1 bg-[#fffce1] rounded-xs" />
                      <span className="w-[2px] h-1.5 bg-[#fffce1] rounded-xs" />
                      <span className="w-[2px] h-2 bg-[#fffce1] rounded-xs" />
                      <span className="w-[2px] h-2.5 bg-[#0ae448] rounded-xs" />
                    </div>
                    {/* Battery Capsule with 94% Green Fill */}
                    <div className="flex items-center gap-0.5">
                      <span className="text-[9px] font-semibold">94</span>
                      <div className="w-4 h-2 rounded-[3px] border border-[#fffce1]/80 p-[1px] flex items-center">
                        <div className="h-full w-4/5 bg-[#0ae448] rounded-[1px]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* App Navigation Bar with Role Toggle Pill */}
                <div className="bg-[#141417]/80 backdrop-blur-sm px-3.5 py-2.5 flex items-center justify-between border-b border-[#2e2d36] gap-2 shrink-0">
                  <div className="flex items-center gap-2 truncate">
                    <div className="w-6 h-6 rounded-full bg-[#0e100f] border border-[#0ae448]/60 flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(10,228,72,0.2)]">
                      <Train className="w-3 h-3 text-[#0ae448]" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs font-bold leading-tight flex items-center gap-1.5">
                        <span>RailSaathi</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0ae448] animate-ping" />
                      </div>
                      <div className="text-[10px] text-[#7c7c6f]">
                        {activeRole === 'TRAVELER' ? 'Passenger Coach Mode' : 'Hawker Radar Mode'}
                      </div>
                    </div>
                  </div>

                  {/* In-Mockup Role Switcher Segmented Pill */}
                  <div className="flex items-center p-0.5 rounded-full bg-[#0e100f] border border-[#3e3d48] text-[9px] font-mono">
                    <button
                      onClick={() => handleRoleSelect('TRAVELER')}
                      className={`px-2 py-0.5 rounded-full transition-all duration-200 cursor-pointer ${
                        activeRole === 'TRAVELER'
                          ? 'bg-[#0ae448] text-[#0e100f] font-bold shadow-xs'
                          : 'text-[#7c7c6f] hover:text-[#fffce1]'
                      }`}
                    >
                      Commuter
                    </button>
                    <button
                      onClick={() => handleRoleSelect('VENDOR')}
                      className={`px-2 py-0.5 rounded-full transition-all duration-200 cursor-pointer ${
                        activeRole === 'VENDOR'
                          ? 'bg-[#ff8709] text-[#0e100f] font-bold shadow-xs'
                          : 'text-[#7c7c6f] hover:text-[#fffce1]'
                      }`}
                    >
                      Vendor
                    </button>
                  </div>
                </div>

                {/* Scrollable Screen Content Area (Smooth scrolling inside the phone canvas) */}
                <div className="flex-1 overflow-y-auto px-3 py-2.5 space-y-2.5 scrollbar-thin">
                  
                  {/* Dynamic View 1: My Train & Coach GS-1 status */}
                  {(activeDockTab === 'train' || (activeDockTab !== 'radar' && activeDockTab !== 'chai' && activeDockTab !== 'offline' && activeRole === 'TRAVELER')) && (
                    <div className="p-3 rounded-2xl bg-[#17171c] border border-[#3a3945] shadow-sm transition-all duration-200">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#7c7c6f] mb-1">
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0ae448] animate-pulse" />
                          {t.mockupActiveSignal}
                        </span>
                        <span className="text-[#0ae448] bg-[#0e100f] border border-[#0ae448]/40 px-1.5 py-0.5 rounded text-[10px] font-bold">
                          ON TIME
                        </span>
                      </div>
                      <div className="text-sm font-bold text-[#fffce1]">Sealdah - Ranaghat Local</div>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#2e2d38] text-[11px]">
                        <div>
                          <span className="text-[#7c7c6f] block text-[9px] uppercase font-mono">Your Coach</span>
                          <span className="font-bold text-[#00bae2]">GS-1 (Coach 2)</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[#7c7c6f] block text-[9px] uppercase font-mono">Next Halt</span>
                          <span className="font-bold text-[#fffce1]">Dum Dum (45s halt)</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Dynamic View 2: Chai SOS Hunger Signal Alert */}
                  {(activeDockTab === 'chai' || (activeDockTab === 'train' && activeRole === 'TRAVELER')) && (
                    <div className="p-3 rounded-2xl bg-[#17171c] border border-[#ff8709]/50 shadow-sm transition-all duration-200">
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
                        1x Kadak Masala Chai (₹10) + 1x Roasted Badam (₹10)
                      </p>
                      <div className="mt-2 flex items-center justify-between text-[10px] bg-[#0e100f] p-2 rounded-xl border border-[#2e2d38]">
                        <span className="text-[#7c7c6f]">{t.mockupVendorIncoming}</span>
                        <span className="text-[#0ae448] font-bold font-mono">{t.mockupReachingDoor}</span>
                      </div>
                    </div>
                  )}

                  {/* Dynamic View 3: Hawker Radar View */}
                  {(activeDockTab === 'radar' || activeRole === 'VENDOR') && (
                    <>
                      <div className="p-3 rounded-2xl bg-[#17171c] border border-[#3a3945] shadow-sm transition-all duration-200">
                        <div className="flex items-center justify-between text-[11px] font-mono text-[#7c7c6f] mb-1">
                          <span className="flex items-center gap-1.5 text-[#00bae2]">
                            <Radio className="w-3 h-3 animate-pulse" />
                            {t.mockupRadarActive}
                          </span>
                          <span className="text-[#00bae2] bg-[#0e100f] border border-[#00bae2]/40 px-1.5 py-0.5 rounded text-[10px] font-bold">
                            4 SIGNALS
                          </span>
                        </div>
                        <div className="text-sm font-bold text-[#fffce1]">Item: Cutting Chai & Samosa</div>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#2e2d38] text-[11px]">
                          <div>
                            <span className="text-[#7c7c6f] block text-[9px] uppercase font-mono">Your Position</span>
                            <span className="font-bold text-[#0ae448]">Coach 4 (VND-1)</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[#7c7c6f] block text-[9px] uppercase font-mono">Est. Earning</span>
                            <span className="font-bold text-[#ff8709]">₹65 Pending</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#17171c] border border-[#0ae448]/50 shadow-sm transition-all duration-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <BellRing className="w-3.5 h-3.5 text-[#0ae448] animate-bounce" />
                            <span className="text-xs font-bold text-[#0ae448] uppercase font-mono">
                              Coach GS-1 Signal
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
                          <button 
                            onClick={() => setActiveDockTab('train')}
                            className="flex-1 bg-[#0ae448] hover:bg-[#abff84] text-[#0e100f] text-[10px] font-bold py-1.5 rounded-full text-center transition-all duration-200 active:scale-95 cursor-pointer shadow-xs"
                          >
                            {t.mockupAcceptOrder}
                          </button>
                          <button 
                            onClick={() => setActiveDockTab('train')}
                            className="bg-[#2e2d38] hover:bg-[#3e3d48] text-[#fffce1] text-[10px] font-semibold px-2.5 py-1.5 rounded-full transition-all duration-200 active:scale-95 cursor-pointer"
                          >
                            {t.mockupSkip}
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Dynamic View 4: Offline SQLite Mesh Health Card */}
                  {activeDockTab === 'offline' && (
                    <div className="p-3 rounded-2xl bg-[#17171c] border border-[#9d95ff]/50 shadow-sm transition-all duration-200">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#9d95ff] mb-1">
                        <span className="flex items-center gap-1">
                          <Database className="w-3 h-3 text-[#9d95ff]" />
                          Local SQLite DB
                        </span>
                        <span className="text-[#0ae448] bg-[#0e100f] border border-[#0ae448]/40 px-1.5 py-0.5 rounded text-[10px] font-bold">
                          24.90 MB
                        </span>
                      </div>
                      <div className="text-xs font-bold text-[#fffce1]">100% Offline Railway Mesh Active</div>
                      <div className="mt-2 text-[10px] text-[#7c7c6f] space-y-1">
                        <div className="flex justify-between">
                          <span>Mobile Internet Usage:</span>
                          <span className="text-[#0ae448] font-bold">0.00 KB</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Peer Mesh Hops:</span>
                          <span className="text-[#00bae2] font-bold">14 Coaches Linked</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Station Index:</span>
                          <span className="text-[#fffce1] font-bold">8,420 Offline Halts</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 12-Car EMU Formation Strip */}
                  <div className="p-2.5 rounded-2xl bg-[#17171c] border border-[#3a3945]">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#7c7c6f] mb-1.5">
                      <span>{t.mockupFormationTitle}</span>
                      <span className="text-[#00bae2]">Engine ➔</span>
                    </div>
                    <div className="grid grid-cols-6 gap-1">
                      <div className="bg-[#0e100f] border border-[#9d95ff]/40 rounded-lg p-1 text-center">
                        <div className="text-[9px] font-bold text-[#9d95ff]">D-MC</div>
                        <div className="text-[8px] text-[#9d95ff]">♿</div>
                      </div>
                      <div className="bg-[#00bae2]/20 border border-[#00bae2] text-[#00bae2] rounded-lg p-1 text-center shadow-xs">
                        <div className="text-[9px] font-bold">GS-1</div>
                        <div className="text-[8px]">You</div>
                      </div>
                      <div className="bg-[#0e100f] border border-[#fec5fb]/40 rounded-lg p-1 text-center">
                        <div className="text-[9px] font-bold text-[#fec5fb]">L-1</div>
                        <div className="text-[8px] text-[#fec5fb]">Ladies</div>
                      </div>
                      <div className="bg-[#0e100f] border border-[#ff8709]/40 rounded-lg p-1 text-center">
                        <div className="text-[9px] font-bold text-[#ff8709]">VND</div>
                        <div className="text-[8px] text-[#ff8709]">Hawker</div>
                      </div>
                      <div className="bg-[#0e100f] border border-[#2e2d38] rounded-lg p-1 text-center">
                        <div className="text-[9px] font-bold text-[#7c7c6f]">GS-2</div>
                        <div className="text-[8px] text-[#7c7c6f]">Mid</div>
                      </div>
                      <div className="bg-[#0e100f] border border-[#2e2d38] rounded-lg p-1 text-center">
                        <div className="text-[9px] font-bold text-[#7c7c6f]">+7 Cars</div>
                        <div className="text-[8px] text-[#7c7c6f]">...</div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation CTA inside mockup */}
                  <button
                    onClick={() => onNavigate(activeRole === 'TRAVELER' ? 'commuters' : 'vendors')}
                    className="w-full py-2 rounded-full border border-[#fffce1]/80 hover:border-[#fffce1] text-[#fffce1] hover:bg-[#fffce1]/10 font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer active:scale-98 shadow-xs"
                  >
                    <span>{activeRole === 'TRAVELER' ? t.mockupExploreCommuter : t.mockupExploreVendor}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0ae448]" />
                  </button>

                </div>

                {/* iPhone 16 / 17 Fixed Frosted Glass Bottom Dock with Authentic iOS Squircles & Home Bar */}
                <div className="sticky bottom-0 left-0 right-0 p-2 pb-1.5 bg-gradient-to-t from-[#0e100f] via-[#0e100f]/95 to-transparent backdrop-blur-xl border-t border-[#3a3945]/40 z-20 shrink-0">
                  {/* Floating Frosted Glass Dock Pill */}
                  <div className="w-full bg-[#1e1e24]/90 backdrop-blur-2xl border border-white/12 rounded-[22px] px-2.5 py-1.5 shadow-[0_10px_25px_rgba(0,0,0,0.8)] flex items-center justify-between gap-1">
                    
                    {/* Dock Icon 1: Train (Active Train View) */}
                    <button
                      onClick={() => {
                        setActiveDockTab('train');
                        if (activeRole !== 'TRAVELER') handleRoleSelect('TRAVELER');
                      }}
                      className={`flex-1 flex flex-col items-center gap-0.5 py-1 rounded-xl transition-all duration-200 cursor-pointer group active:scale-90 ${
                        activeDockTab === 'train' ? 'scale-105' : 'opacity-75 hover:opacity-100'
                      }`}
                      title="Train & EMU Formation"
                    >
                      <div className={`w-8 h-8 rounded-[10px] flex items-center justify-center transition-all duration-200 shadow-sm ${
                        activeDockTab === 'train'
                          ? 'bg-gradient-to-br from-[#0ae448] to-[#046c21] text-[#0e100f] ring-2 ring-[#0ae448]/60 shadow-[0_0_12px_rgba(10,228,72,0.4)]'
                          : 'bg-[#2a2933] text-[#fffce1] group-hover:bg-[#34333f]'
                      }`}>
                        <Train className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-medium tracking-tight text-[#fffce1]">Train</span>
                    </button>

                    {/* Dock Icon 2: Radar (Vendor / Signal Radar) */}
                    <button
                      onClick={() => {
                        setActiveDockTab('radar');
                        if (activeRole !== 'VENDOR') handleRoleSelect('VENDOR');
                      }}
                      className={`flex-1 flex flex-col items-center gap-0.5 py-1 rounded-xl transition-all duration-200 cursor-pointer group active:scale-90 ${
                        activeDockTab === 'radar' ? 'scale-105' : 'opacity-75 hover:opacity-100'
                      }`}
                      title="Live Hawker Radar"
                    >
                      <div className={`w-8 h-8 rounded-[10px] flex items-center justify-center transition-all duration-200 shadow-sm ${
                        activeDockTab === 'radar'
                          ? 'bg-gradient-to-br from-[#00bae2] to-[#014e7a] text-[#fffce1] ring-2 ring-[#00bae2]/60 shadow-[0_0_12px_rgba(0,186,226,0.4)]'
                          : 'bg-[#2a2933] text-[#fffce1] group-hover:bg-[#34333f]'
                      }`}>
                        <Radio className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-medium tracking-tight text-[#fffce1]">Radar</span>
                    </button>

                    {/* Dock Icon 3: Chai SOS (Hunger Signal Order) */}
                    <button
                      onClick={() => {
                        setActiveDockTab('chai');
                        if (activeRole !== 'TRAVELER') handleRoleSelect('TRAVELER');
                      }}
                      className={`flex-1 flex flex-col items-center gap-0.5 py-1 rounded-xl transition-all duration-200 cursor-pointer group active:scale-90 ${
                        activeDockTab === 'chai' ? 'scale-105' : 'opacity-75 hover:opacity-100'
                      }`}
                      title="Chai & Food SOS"
                    >
                      <div className={`w-8 h-8 rounded-[10px] flex items-center justify-center transition-all duration-200 shadow-sm relative ${
                        activeDockTab === 'chai'
                          ? 'bg-gradient-to-br from-[#ff8709] to-[#8f4100] text-[#fffce1] ring-2 ring-[#ff8709]/60 shadow-[0_0_12px_rgba(255,135,9,0.4)]'
                          : 'bg-[#2a2933] text-[#fffce1] group-hover:bg-[#34333f]'
                      }`}>
                        <Coffee className="w-4 h-4" />
                        <span className="absolute -top-1 -right-1 px-1 bg-[#ff8709] text-[8px] font-bold text-[#0e100f] rounded-full">₹10</span>
                      </div>
                      <span className="text-[9px] font-medium tracking-tight text-[#fffce1]">Chai SOS</span>
                    </button>

                    {/* Dock Icon 4: Offline DB (SQLite Mesh Engine) */}
                    <button
                      onClick={() => setActiveDockTab('offline')}
                      className={`flex-1 flex flex-col items-center gap-0.5 py-1 rounded-xl transition-all duration-200 cursor-pointer group active:scale-90 ${
                        activeDockTab === 'offline' ? 'scale-105' : 'opacity-75 hover:opacity-100'
                      }`}
                      title="Offline SQLite Mesh"
                    >
                      <div className={`w-8 h-8 rounded-[10px] flex items-center justify-center transition-all duration-200 shadow-sm relative ${
                        activeDockTab === 'offline'
                          ? 'bg-gradient-to-br from-[#9d95ff] to-[#4537b0] text-[#fffce1] ring-2 ring-[#9d95ff]/60 shadow-[0_0_12px_rgba(157,149,255,0.4)]'
                          : 'bg-[#2a2933] text-[#fffce1] group-hover:bg-[#34333f]'
                      }`}>
                        <Database className="w-4 h-4" />
                        <span className="absolute -top-1 -right-1 px-1 bg-[#0ae448] text-[8px] font-bold text-[#0e100f] rounded-full">24M</span>
                      </div>
                      <span className="text-[9px] font-medium tracking-tight text-[#fffce1]">Offline DB</span>
                    </button>

                  </div>

                  {/* Authentic iOS Home Bar Indicator (Fixed bottom pill) */}
                  <div className="pt-1.5 pb-0.5 flex justify-center">
                    <div 
                      className="w-28 sm:w-32 h-1 bg-white/70 hover:bg-white rounded-full transition-all duration-200 shadow-xs cursor-pointer active:scale-95" 
                      title="iPhone Home Indicator"
                    />
                  </div>
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
