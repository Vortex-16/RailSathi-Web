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
import { ScrollReveal } from './ScrollReveal';

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
        'Tap on the downloaded RailSathi-debug.apk in Chrome notifications or Files app.',
        'When prompted with "Chrome needs permission to install apps", tap Settings.',
        'Toggle ON "Allow from this source".',
        'Tap the Back button and select "Install".'
      ]
    },
    SAMSUNG: {
      title: 'Samsung Galaxy (One UI)',
      steps: [
        'Open My Files app > Downloads folder > Tap RailSathi-debug.apk.',
        'If prompted about security, tap Settings in the dialog.',
        'Toggle ON "Allow from this source" next to Chrome or My Files.',
        'Tap Install when the One UI package installer appears.'
      ]
    },
    XIAOMI: {
      title: 'Xiaomi / Redmi / POCO (MIUI / HyperOS)',
      steps: [
        'Open Downloads or File Manager and tap RailSathi-debug.apk.',
        'Allow installation from Unknown Sources when prompted.',
        'Review the 10-second security verification prompt and tap OK.',
        'Tap Install and RailSathi will be ready on your home screen.'
      ]
    },
    ONEPLUS: {
      title: 'OnePlus / Realme / Oppo (OxygenOS / ColorOS)',
      steps: [
        'Swipe down the notification shade and tap the completed RailSathi-debug.apk download.',
        'Tap Settings on the security pop-up.',
        'Switch ON the toggle for "Allow apps from this source".',
        'Press Back and tap Install.'
      ]
    }
  };

  return (
    <section id="install-guide" className="py-16 sm:py-24 bg-[#f2ee98] border-b-2 border-[#10380b] text-[#10380b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#fce519] border border-[#10380b] text-xs font-mono font-bold text-[#10380b] mb-4 shadow-[2px_2px_0px_0px_#10380b]">
            <span>//</span>
            <span>{t.instBadge || 'Verified Android APK'}</span>
            <span>//</span>
          </div>
          <h2 className={`font-display font-bold tracking-tight text-[#10380b] mb-4 ${seniorMode ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl lg:text-5xl'}`}>
            {t.instTitle || 'Easy 30-Second Sideloading'}
          </h2>
          <p className="text-[#10380b]/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            {t.instSubhead || 'Install directly onto your Android smartphone. No Google Play account or mobile data needed.'}
          </p>
        </ScrollReveal>

        {/* Master Step-by-Step Box */}
        <ScrollReveal delay={0.08} className="max-w-4xl mx-auto mb-16">
          <div className="rounded-[36px] bg-[#fefde6] border-2 border-[#10380b] shadow-[8px_8px_0px_0px_#10380b] p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b-2 border-[#10380b]/20 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#10380b] font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#10380b]" />
                  <span>{t.instSafe || 'Safe & Verified Official Build'}</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#10380b] mt-1">
                  4-Step Installation
                </h3>
              </div>
              
              <a
                id="btn-guide-download-apk"
                href={OFFICIAL_APK_DOWNLOAD_URL}
                download="RailSathi-debug.apk"
                className="btn-marigold-pill !py-3 !px-7 text-sm font-bold shadow-[4px_4px_0px_0px_#10380b] shrink-0 inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#10380b]" />
                <span>{t.downloadApkBtn || t.downloadBtn || 'Download APK'} ({APK_SIZE})</span>
              </a>
            </div>

            {/* 4 Simple Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-8">
              {simpleFourSteps.map((s) => {
                return (
                  <div key={s.num} className="p-5 rounded-2xl bg-[#f2ee98] border-2 border-[#10380b] flex gap-4 shadow-[3px_3px_0px_0px_#10380b]">
                    <div 
                      className="w-10 h-10 rounded-full border-2 border-[#10380b] bg-[#fce519] font-mono font-bold text-sm flex items-center justify-center shrink-0 text-[#10380b] shadow-[1px_1px_0px_0px_#10380b]"
                    >
                      0{s.num}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-[#10380b] text-base mb-1">{s.title}</h4>
                      <p className="text-xs sm:text-sm text-[#10380b]/80 leading-relaxed font-medium">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust and Safety Banner inside box */}
            <div className="mt-8 p-4 rounded-2xl bg-[#dbe8ac] border-2 border-[#10380b] text-[#10380b] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-[2px_2px_0px_0px_#10380b]">
              <div className="flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-[#10380b] shrink-0" />
                <span className="font-medium">
                  <strong className="font-bold text-[#10380b]">Privacy Guaranteed:</strong> {t.instPrivacy || 'No internet or backend server required. Zero personal telemetry.'}
                </span>
              </div>
              <button
                onClick={handleCopySha}
                className="font-mono font-bold text-[#10380b] hover:underline flex items-center gap-1 shrink-0 transition cursor-pointer"
              >
                {copiedSha ? <Check className="w-3.5 h-3.5 text-[#10380b]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSha ? 'Copied SHA-256!' : (t.instCopySha || 'Copy SHA-256')}</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Brand-Specific Sideloading Walkthrough Tabs */}
        <ScrollReveal delay={0.16} className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-[36px] bg-[#fefde6] text-[#10380b] border-2 border-[#10380b] shadow-[8px_8px_0px_0px_#10380b]">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#10380b] mb-2 flex items-center gap-2">
              <span>{t.brandGuideTitle || 'Brand-Specific Instructions'}</span>
            </h3>
            <p className="text-xs text-[#10380b]/80 mb-6 font-medium">
              {t.brandGuideSub || 'Select your smartphone brand below to see the exact quick permission toggle:'}
            </p>

            {/* Brand Selector Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {(['STOCK', 'SAMSUNG', 'XIAOMI', 'ONEPLUS'] as const).map(brand => (
                <button
                  key={brand}
                  id={`btn-brand-${brand.toLowerCase()}`}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer border-2 border-[#10380b] ${
                    selectedBrand === brand
                      ? 'bg-[#10380b] text-[#fefde6] shadow-[2px_2px_0px_0px_#10380b]'
                      : 'bg-[#f2ee98] text-[#10380b] hover:bg-[#fce519]'
                  }`}
                >
                  {brand === 'STOCK' ? 'Pixel / Moto' : brand === 'SAMSUNG' ? 'Samsung' : brand === 'XIAOMI' ? 'Xiaomi / Redmi' : 'OnePlus / Realme'}
                </button>
              ))}
            </div>

            {/* Brand Steps Display */}
            <div className="p-5 rounded-2xl bg-[#f2ee98] border-2 border-[#10380b] shadow-[3px_3px_0px_0px_#10380b]">
              <h4 className="text-sm font-bold text-[#10380b] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10380b]"></span>
                <span className="font-display font-bold text-base">{brandInstructions[selectedBrand].title}</span>
              </h4>
              <ol className="space-y-2.5 text-xs sm:text-sm text-[#10380b]/90">
                {brandInstructions[selectedBrand].steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full border border-[#10380b] bg-[#fce519] text-[#10380b] flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5 shadow-[1px_1px_0px_0px_#10380b]">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed font-medium">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-[#10380b]/20 flex flex-wrap items-center justify-between text-xs text-[#10380b]/80 gap-2 font-mono">
              <span className="font-bold">Requires {MIN_ANDROID_VERSION}</span>
              <a 
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="text-[#10380b] font-bold hover:underline flex items-center gap-1 transition"
              >
                <span>{t.footerGitHub || 'Inspect Source on GitHub'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
