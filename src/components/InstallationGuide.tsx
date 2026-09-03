import React, { useState } from 'react';
import { 
  Download, 
  Smartphone, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle, 
  Copy, 
  Check, 
  ChevronRight, 
  ArrowRight, 
  ExternalLink,
  Settings,
  Sparkles,
  AlertCircle,
  FileCheck
} from 'lucide-react';
import { 
  OFFICIAL_APK_DOWNLOAD_URL, 
  APK_VERSION, 
  APK_SIZE, 
  MIN_ANDROID_VERSION,
  TARGET_ANDROID_VERSION,
  SHA256_CHECKSUM 
} from '../data/railwayData';

export const InstallationGuide: React.FC<{ seniorMode: boolean }> = ({ seniorMode }) => {
  const [selectedBrand, setSelectedBrand] = useState<'STOCK' | 'SAMSUNG' | 'XIAOMI' | 'ONEPLUS'>('STOCK');
  const [copiedSha, setCopiedSha] = useState(false);
  const [quickStartStep, setQuickStartStep] = useState<number>(1);

  const handleCopySha = () => {
    navigator.clipboard.writeText(SHA256_CHECKSUM);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2000);
  };

  const brandInstructions = {
    STOCK: {
      title: 'Google Pixel / Motorola / Stock Android',
      steps: [
        'Tap on the downloaded RailSathi.apk in Chrome notifications or Files app.',
        'When prompted with "Chrome needs permission to install apps", tap Settings.',
        'Toggle ON "Allow from this source".',
        'Tap the Back button and select "Install".'
      ]
    },
    SAMSUNG: {
      title: 'Samsung Galaxy (One UI)',
      steps: [
        'Open My Files app > Downloads folder > Tap RailSathi.apk.',
        'If prompted about security, tap Settings in the dialog.',
        'Toggle ON "Allow from this source" next to Chrome or My Files.',
        'Tap Install when the One UI package installer appears.'
      ]
    },
    XIAOMI: {
      title: 'Xiaomi / Redmi / POCO (MIUI / HyperOS)',
      steps: [
        'Open Downloads or File Manager and tap RailSathi.apk.',
        'Allow installation from Unknown Sources when prompted.',
        'Review the 10-second security verification prompt and tap OK.',
        'Tap Install and RailSathi will be ready on your home screen.'
      ]
    },
    ONEPLUS: {
      title: 'OnePlus / Realme / Oppo (OxygenOS / ColorOS)',
      steps: [
        'Swipe down the notification shade and tap the completed RailSathi.apk download.',
        'Tap Settings on the security pop-up.',
        'Switch ON the toggle for "Allow apps from this source".',
        'Press Back and tap Install.'
      ]
    }
  };

  const quickStartSteps = [
    {
      step: 1,
      title: 'Language Selection',
      desc: 'Pick your regional mother tongue from 6 Indian languages (Hindi, Bengali, Marathi, Tamil, Telugu, English).',
      badge: 'Step 1 of 4'
    },
    {
      step: 2,
      title: 'Select Traveler Role',
      desc: 'Choose Commuter / Passenger profile to access coach formations, schedules, and hunger signals.',
      badge: 'Step 2 of 4'
    },
    {
      step: 3,
      title: 'Set Daily Commute Route',
      desc: 'Select your home and work railway stations (e.g. Sealdah to Ranaghat or Churchgate to Borivali) for 1-tap departure alerts.',
      badge: 'Step 3 of 4'
    },
    {
      step: 4,
      title: 'Ready for the 30s Halt!',
      desc: 'Track your coach live, send tea orders before reaching the platform, and save 85% mobile battery life.',
      badge: 'Complete'
    }
  ];

  return (
    <section id="installation-guide" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200 mb-3">
            <Smartphone className="w-3.5 h-3.5 text-blue-700" />
            Seamless Onboarding
          </div>
          <h2 className={`font-black text-slate-900 tracking-tight ${seniorMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
            Installation Guide & Quick-Start Walkthrough
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Get RailSaathi running on your Android smartphone in under 2 minutes. Follow the step-by-step sideloading walkthrough below.
          </p>
        </div>

        {/* Master APK Download Box */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white shadow-xl mb-12">
          <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-blue-800/60">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Official Production Release
              </span>
              <h3 className="text-2xl font-black">RailSaathi Android Package ({APK_VERSION})</h3>
              <p className="text-xs text-blue-200">
                Signed APK • {MIN_ANDROID_VERSION} up to {TARGET_ANDROID_VERSION}
              </p>
            </div>

            <a
              id="btn-guide-download-apk"
              href={OFFICIAL_APK_DOWNLOAD_URL}
              download="RailSathi.apk"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3.5 rounded-xl shadow-md transition transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
            >
              <Download className="w-5 h-5 text-slate-950" />
              <span>Download RailSathi.apk ({APK_SIZE})</span>
            </a>
          </div>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <div className="text-slate-400 uppercase font-bold text-[10px]">Package Size</div>
              <div className="text-base font-black text-white font-mono mt-0.5">{APK_SIZE}</div>
              <div className="text-[11px] text-blue-300">Fast download over 3G/4G</div>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <div className="text-slate-400 uppercase font-bold text-[10px]">Android Compatibility</div>
              <div className="text-base font-black text-white font-mono mt-0.5">8.0+ (Oreo to Android 15)</div>
              <div className="text-[11px] text-blue-300">Jetpack Compose M3</div>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <div className="text-slate-400 uppercase font-bold text-[10px]">Security Integrity</div>
              <button
                onClick={handleCopySha}
                className="text-left w-full hover:text-amber-300 transition"
                title="Click to copy SHA-256 hash"
              >
                <div className="text-xs font-mono font-bold text-amber-300 truncate mt-1 flex items-center justify-between">
                  <span>{SHA256_CHECKSUM.slice(0, 16)}...</span>
                  {copiedSha ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </div>
              </button>
              <div className="text-[11px] text-blue-300">Verified SHA-256 Checksum</div>
            </div>
          </div>
        </div>

        {/* 4-Step Sideloading Walkthrough */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-800" />
            <span>How to Install the APK on Android</span>
          </h3>

          {/* Phone Brand Selector */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 mb-6">
            {(['STOCK', 'SAMSUNG', 'XIAOMI', 'ONEPLUS'] as const).map(brand => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                  selectedBrand === brand
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {brand === 'STOCK' ? 'Pixel / Stock Android' :
                 brand === 'SAMSUNG' ? 'Samsung Galaxy' :
                 brand === 'XIAOMI' ? 'Xiaomi / Redmi' : 'OnePlus / Realme'}
              </button>
            ))}
          </div>

          {/* Steps List for Selected Brand */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <h4 className="text-sm font-extrabold text-blue-900">
              {brandInstructions[selectedBrand].title}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {brandInstructions[selectedBrand].steps.map((step, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
                  <span className="w-7 h-7 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-black text-xs shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed mt-0.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Why does Android show "File might be harmful"?</strong> This is standard Android security notice whenever downloading apps outside the Google Play Store. RailSaathi contains zero adware, requires no root, and only requests location permission when active travel is engaged.
              </div>
            </div>
          </div>
        </div>

        {/* 60-Second Quick-Start Walkthrough */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-blue-50/70 border border-blue-200">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
                First Launch Walkthrough
              </span>
              <h3 className="text-xl font-black text-slate-900">
                60-Second Onboarding Guide
              </h3>
            </div>

            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map(s => (
                <button
                  key={s}
                  onClick={() => setQuickStartStep(s)}
                  className={`w-8 h-8 rounded-lg font-bold text-xs transition ${
                    quickStartStep === s
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-blue-100 border border-slate-200'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                {quickStartSteps[quickStartStep - 1].badge}
              </span>
              <span className="text-xs text-slate-400 font-mono">Step {quickStartStep} of 4</span>
            </div>

            <h4 className="text-lg font-extrabold text-slate-900">
              {quickStartSteps[quickStartStep - 1].title}
            </h4>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {quickStartSteps[quickStartStep - 1].desc}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                disabled={quickStartStep === 1}
                onClick={() => setQuickStartStep(p => Math.max(1, p - 1))}
                className="text-xs font-bold text-slate-600 hover:text-slate-900 disabled:opacity-30"
              >
                ← Previous Step
              </button>

              {quickStartStep < 4 ? (
                <button
                  onClick={() => setQuickStartStep(p => Math.min(4, p + 1))}
                  className="inline-flex items-center gap-1.5 bg-blue-900 text-white font-bold text-xs px-4 py-2 rounded-lg hover:bg-blue-950 transition"
                >
                  <span>Next Step</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <a
                  href={OFFICIAL_APK_DOWNLOAD_URL}
                  download="RailSathi.apk"
                  className="inline-flex items-center gap-1.5 bg-emerald-600 text-white font-bold text-xs px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Now</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
