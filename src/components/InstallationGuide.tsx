import React, { useState } from 'react';
import { 
  Download, 
  Smartphone, 
  ShieldCheck, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink,
  Sparkles,
  Lock,
  ArrowRight
} from 'lucide-react';
import { 
  OFFICIAL_APK_DOWNLOAD_URL, 
  APK_VERSION, 
  APK_SIZE, 
  MIN_ANDROID_VERSION,
  SHA256_CHECKSUM,
  GITHUB_REPO_URL
} from '../data/railwayData';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface InstallationGuideProps {
  currentLang: LanguageCode;
  seniorMode?: boolean;
}

export const InstallationGuide: React.FC<InstallationGuideProps> = ({ currentLang, seniorMode }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const [selectedBrand, setSelectedBrand] = useState<'STOCK' | 'SAMSUNG' | 'XIAOMI' | 'ONEPLUS'>('STOCK');
  const [copiedSha, setCopiedSha] = useState(false);

  const handleCopySha = () => {
    navigator.clipboard.writeText(SHA256_CHECKSUM);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2000);
  };

  const simpleFourSteps = [
    {
      num: '1',
      title: t.instStep1Title,
      desc: t.instStep1Desc,
    },
    {
      num: '2',
      title: t.instStep2Title,
      desc: t.instStep2Desc,
    },
    {
      num: '3',
      title: t.instStep3Title,
      desc: t.instStep3Desc,
    },
    {
      num: '4',
      title: t.instStep4Title,
      desc: t.instStep4Desc,
    },
  ];

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

  return (
    <section id="install-guide" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold tracking-wide uppercase mb-4">
            <Smartphone className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.installBadge}</span>
          </div>
          <h2 className={`font-black text-slate-900 tracking-tight mb-4 ${seniorMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl lg:text-4xl'}`}>
            {t.installHeadline}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.installSubhead}
          </p>
        </div>

        {/* Master Reassuring Step-by-Step Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50 border-2 border-slate-200 p-6 sm:p-10 shadow-sm mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{t.instSafeBanner}</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                {t.instBoxTitle}
              </h3>
            </div>
            
            <a
              id="btn-guide-download-apk"
              href={OFFICIAL_APK_DOWNLOAD_URL}
              download="RailSathi.apk"
              className="inline-flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-950 text-white font-bold px-5 py-3 rounded-xl shadow-md transition text-sm shrink-0"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>{t.instDwnApkBtn} ({APK_SIZE})</span>
            </a>
          </div>

          {/* 4 Simple Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
            {simpleFourSteps.map((s) => (
              <div key={s.num} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-900 text-amber-400 font-black text-lg flex items-center justify-center shrink-0 shadow-xs">
                  {s.num}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-slate-900 text-base">{s.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust and Safety Banner inside box */}
          <div className="mt-8 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <Lock className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>
                <strong>{t.instPrivacyTitle}:</strong> {t.instPrivacyDesc}
              </span>
            </div>
            <button
              onClick={handleCopySha}
              className="font-mono text-emerald-800 hover:text-emerald-950 flex items-center gap-1 shrink-0 underline cursor-pointer"
            >
              {copiedSha ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSha ? t.instCopiedSha : t.instVerifyShaBtn}</span>
            </button>
          </div>
        </div>

        {/* Brand-Specific Sideloading Walkthrough Tabs */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800">
          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <span>{t.instBrandTitle}</span>
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            {t.instBrandDesc}
          </p>

          {/* Brand Selector Buttons */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 mb-6">
            {(['STOCK', 'SAMSUNG', 'XIAOMI', 'ONEPLUS'] as const).map(brand => (
              <button
                key={brand}
                id={`btn-brand-${brand.toLowerCase()}`}
                onClick={() => setSelectedBrand(brand)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  selectedBrand === brand
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {brand === 'STOCK' ? 'Pixel / Moto' : brand === 'SAMSUNG' ? 'Samsung' : brand === 'XIAOMI' ? 'Xiaomi / Redmi' : 'OnePlus / Realme'}
              </button>
            ))}
          </div>

          {/* Brand Steps Display */}
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
            <h4 className="text-sm font-bold text-amber-300 mb-3">
              {brandInstructions[selectedBrand].title}
            </h4>
            <ol className="space-y-2 text-xs sm:text-sm text-slate-300">
              {brandInstructions[selectedBrand].steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-slate-700 text-amber-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
            <span>{t.instMinReq}: {MIN_ANDROID_VERSION}</span>
            <a 
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 hover:underline flex items-center gap-1"
            >
              <span>{t.instViewGithub}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
