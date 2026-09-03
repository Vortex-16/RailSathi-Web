import React, { useState } from 'react';
import { 
  Download, 
  QrCode, 
  Play, 
  ShieldCheck, 
  BatteryCharging, 
  Zap, 
  Smartphone, 
  X,
  ExternalLink,
  ChevronRight,
  Coffee,
  CheckCircle,
  Copy,
  Check,
  Train
} from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { 
  OFFICIAL_APK_DOWNLOAD_URL, 
  GITHUB_REPO_URL, 
  APK_VERSION, 
  APK_SIZE,
  MIN_ANDROID_VERSION,
  SHA256_CHECKSUM
} from '../data/railwayData';

interface HeroProps {
  currentLang: LanguageCode;
  seniorMode: boolean;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, seniorMode, onNavigate }) => {
  const [showQrModal, setShowQrModal] = useState(false);
  const [copiedSha, setCopiedSha] = useState(false);
  const t = TRANSLATIONS[currentLang];

  const handleCopySha = () => {
    navigator.clipboard.writeText(SHA256_CHECKSUM);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2000);
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Subtle geometric grid background accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e3a6c08_1px,transparent_1px),linear-gradient(to_bottom,#0e3a6c08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Official Indian Railways Companion • {APK_VERSION}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Zero Predatory Markups
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
            <BatteryCharging className="w-3.5 h-3.5 text-amber-600" />
            -85% Battery Drain
          </span>
        </div>

        {/* Main Grid: Pitch + Visual Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className={`font-black tracking-tight text-slate-900 leading-[1.15] ${
              seniorMode ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl lg:text-5xl'
            }`}>
              {t.heroHeadline}
            </h1>

            <p className={`text-slate-600 leading-relaxed max-w-2xl ${
              seniorMode ? 'text-xl font-medium' : 'text-base sm:text-lg'
            }`}>
              {t.heroSubheadline}
            </p>

            {/* Quick Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-800 shrink-0">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    "Hunger Signal" To Seat
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Order ₹10 chai & snacks during 30s halts without leaving your coach.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-800 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    100% Offline SQLite
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Full ER, WR, CR, SR & NR timetables bundled locally. Zero internet needed.
                  </p>
                </div>
              </div>
            </div>

            {/* Download & Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                id="btn-hero-download-apk"
                href={OFFICIAL_APK_DOWNLOAD_URL}
                download="RailSathi.apk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-900 hover:bg-blue-950 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base group"
              >
                <Download className="w-5 h-5 text-amber-400 group-hover:animate-bounce" />
                <span>Download APK ({APK_SIZE})</span>
              </a>

              <button
                id="btn-hero-show-qr"
                onClick={() => setShowQrModal(true)}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-4 py-3.5 rounded-xl border border-slate-300 shadow-2xs transition text-sm"
                title="Scan QR code on your Android phone to download directly"
              >
                <QrCode className="w-4 h-4 text-slate-600" />
                <span>Scan Phone QR</span>
              </button>

              <button
                id="btn-hero-try-sim"
                onClick={() => onNavigate('user-flows')}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-blue-50/80 hover:bg-blue-100 text-blue-900 font-semibold px-4 py-3.5 rounded-xl border border-blue-200 transition text-sm"
              >
                <Play className="w-4 h-4 fill-blue-900" />
                <span>Try Live Simulator</span>
              </button>
            </div>

            {/* Compatibility & Checksum note */}
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
                <span>Open Source (Apache 2.0)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-slate-300">•</span>
              <button
                onClick={handleCopySha}
                className="inline-flex items-center gap-1 hover:text-slate-800 transition"
                title="Click to copy SHA-256 verification hash"
              >
                {copiedSha ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>SHA-256: {SHA256_CHECKSUM.slice(0, 8)}...</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Phone Preview Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[300px] xs:max-w-[330px] sm:max-w-[360px] rounded-[36px] bg-slate-900 p-3 sm:p-3.5 shadow-2xl ring-1 ring-slate-900/10">
              {/* Speaker / Camera notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-950 rounded-full flex items-center justify-center gap-2 z-20">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-950" />
              </div>

              {/* Phone Screen Canvas */}
              <div className="rounded-[28px] bg-slate-50 overflow-hidden border border-slate-800 text-slate-900 font-sans shadow-inner">
                {/* Simulated Android Status Bar */}
                <div className="bg-blue-950 text-white px-5 pt-3.5 pb-2 flex items-center justify-between text-[11px] font-medium tracking-tight">
                  <span className="font-mono">08:42</span>
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="text-emerald-400 font-bold">GPS SMART</span>
                    <BatteryCharging className="w-3 h-3 text-amber-400" />
                    <span>88%</span>
                  </div>
                </div>

                {/* Simulated App Header */}
                <div className="bg-blue-900 text-white px-4 py-3 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                      <Train className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-tight">RailSaathi • रेलसाथी</div>
                      <div className="text-[10px] text-blue-200">Sealdah Division (ER)</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-400/30">
                    Offline Ready
                  </span>
                </div>

                {/* Active Train Card */}
                <div className="p-3.5 space-y-3">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-1">
                      <span>TRAIN #31821</span>
                      <span className="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px] font-bold">ON TIME</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900">Sealdah - Ranaghat Local</div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-[11px]">
                      <div>
                        <span className="text-slate-400 block text-[9px]">YOUR COACH</span>
                        <span className="font-bold text-blue-900">GS-1 (Seat 24 Door)</span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-400 block text-[9px]">NEXT HALT</span>
                        <span className="font-bold text-slate-800">Dum Dum (45s halt)</span>
                      </div>
                    </div>
                  </div>

                  {/* Hunger Signal Live Card */}
                  <div className="p-3 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping" />
                        <span className="text-xs font-bold text-amber-950 uppercase tracking-wide">
                          Hunger Signal Active
                        </span>
                      </div>
                      <span className="text-xs font-extrabold text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded">
                        ₹25
                      </span>
                    </div>
                    <p className="text-[11px] text-amber-900 font-medium mt-1">
                      1x Masala Chai + 1x Jhalmuri
                    </p>
                    <div className="mt-2.5 flex items-center justify-between text-[10px] bg-white/80 p-2 rounded-lg border border-amber-200/60">
                      <span className="font-semibold text-slate-700">Vendor: Subhas (ID: ER-4102)</span>
                      <span className="text-emerald-700 font-bold">Boarding Coach GS-1</span>
                    </div>
                  </div>

                  {/* EMU Coach Visualizer Strip preview */}
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/90">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 mb-1.5">
                      <span>12-CAR EMU RAKE</span>
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

                  {/* Interactive Trigger Button */}
                  <button
                    onClick={() => onNavigate('user-flows')}
                    className="w-full py-2 bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Launch Full Interactive Flow</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Key Stats Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
          <div className="p-2 sm:p-0 text-center sm:text-left sm:border-r border-slate-100 pr-2">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-900">24 Million</div>
            <div className="text-[11px] sm:text-xs font-medium text-slate-500 mt-0.5 sm:mt-1">Daily Indian Suburban Passengers</div>
          </div>
          <div className="p-2 sm:p-0 text-center sm:text-left lg:border-r border-slate-100 pr-2">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-amber-600">30–45s</div>
            <div className="text-[11px] sm:text-xs font-medium text-slate-500 mt-0.5 sm:mt-1">Target Station Halt Window</div>
          </div>
          <div className="p-2 sm:p-0 text-center sm:text-left sm:border-r border-slate-100 pr-2">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-emerald-600">85%</div>
            <div className="text-[11px] sm:text-xs font-medium text-slate-500 mt-0.5 sm:mt-1">Foreground GPS Battery Saving</div>
          </div>
          <div className="p-2 sm:p-0 text-center sm:text-left">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900">100%</div>
            <div className="text-[11px] sm:text-xs font-medium text-slate-500 mt-0.5 sm:mt-1">Zero-Data Offline Timetable Ready</div>
          </div>
        </div>
      </div>

      {/* QR Code Modal for Phone Download */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-slate-200 text-center animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-base">Scan to Download on Phone</h3>
              <button
                onClick={() => setShowQrModal(false)}
                className="rounded-full p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-5 flex flex-col items-center">
              {/* Clean SVG QR Representation */}
              <div className="p-4 bg-slate-50 rounded-2xl border-2 border-slate-200 inline-block shadow-inner">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(OFFICIAL_APK_DOWNLOAD_URL)}`}
                  alt="QR Code to Download RailSaathi APK"
                  className="w-44 h-44 rounded-lg"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-slate-600 mt-3 font-medium">
                Point your Android camera here to download <strong className="text-slate-900">RailSathi.apk ({APK_SIZE})</strong> directly.
              </p>
            </div>

            <div className="space-y-2">
              <a
                href={OFFICIAL_APK_DOWNLOAD_URL}
                download="RailSathi.apk"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2.5 rounded-xl text-sm transition"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download Directly Instead</span>
              </a>
              <button
                onClick={() => setShowQrModal(false)}
                className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
