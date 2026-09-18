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
    <section id="install-guide" className="py-16 sm:py-24 bg-[#0e100f] border-b border-[#42433d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191919] border border-[#42433d] text-xs font-mono text-[#0ae448] mb-4">
            <span>{'{'}</span>
            <span>{t.instBadge || 'Verified Android APK'}</span>
            <span>{'}'}</span>
          </div>
          <h2 className={`font-semibold tracking-[-0.03em] text-[#fffce1] mb-4 ${seniorMode ? 'text-3xl sm:text-4xl' : 'text-3xl sm:text-4xl lg:text-5xl'}`}>
            {t.instTitle || 'Easy 30-Second Sideloading'}
          </h2>
          <p className="text-[#7c7c6f] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {t.instSubhead || 'Install directly onto your Android smartphone. No Google Play account or mobile data needed.'}
          </p>
        </ScrollReveal>

        {/* Master Step-by-Step Box */}
        <ScrollReveal delay={0.08} className="max-w-4xl mx-auto mb-16">
          <div className="rounded-2xl bg-[#191919] border border-[#42433d] p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#42433d] gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#0ae448] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0ae448]" />
                  <span>{t.instSafe || 'Safe & Verified Official Build'}</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#fffce1] mt-1">
                  4-Step Installation
                </h3>
              </div>
              
              <a
                id="btn-guide-download-apk"
                href={OFFICIAL_APK_DOWNLOAD_URL}
                download="RailSathi.apk"
                className="btn-cta-gradient !py-3 !px-6 text-sm shrink-0"
              >
                <Download className="w-4 h-4 text-[#0ae448]" />
                <span>{t.downloadApkBtn || t.downloadBtn || 'Download APK'} ({APK_SIZE})</span>
              </a>
            </div>

            {/* 4 Simple Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-8">
              {simpleFourSteps.map((s, idx) => {
                const colors = ['#00bae2', '#ff8709', '#fec5fb', '#0ae448'];
                const color = colors[idx % colors.length];
                return (
                  <div key={s.num} className="p-5 rounded-xl bg-[#0e100f] border border-[#42433d] flex gap-4">
                    <div 
                      className="w-10 h-10 rounded-full border border-[#42433d] bg-[#191919] font-mono font-bold text-sm flex items-center justify-center shrink-0"
                      style={{ color }}
                    >
                      0{s.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#fffce1] text-base mb-1">{s.title}</h4>
                      <p className="text-xs sm:text-sm text-[#7c7c6f] leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust and Safety Banner inside box */}
            <div className="mt-8 p-4 rounded-xl bg-[#0e100f] border border-[#42433d] text-[#7c7c6f] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-[#0ae448] shrink-0" />
                <span className="text-[#fffce1]">
                  <strong className="text-[#0ae448]">Privacy Guaranteed:</strong> {t.instPrivacy || 'No internet or backend server required. Zero personal telemetry.'}
                </span>
              </div>
              <button
                onClick={handleCopySha}
                className="font-mono text-[#00bae2] hover:text-[#fffce1] flex items-center gap-1 shrink-0 transition cursor-pointer"
              >
                {copiedSha ? <Check className="w-3.5 h-3.5 text-[#0ae448]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSha ? 'Copied SHA-256!' : (t.instCopySha || 'Copy SHA-256')}</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Brand-Specific Sideloading Walkthrough Tabs */}
        <ScrollReveal delay={0.16} className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#191919] text-[#fffce1] border border-[#42433d]">
            <h3 className="text-lg font-bold text-[#fffce1] mb-2 flex items-center gap-2">
              <span>{t.brandGuideTitle || 'Brand-Specific Instructions'}</span>
            </h3>
            <p className="text-xs text-[#7c7c6f] mb-6">
              {t.brandGuideSub || 'Select your smartphone brand below to see the exact quick permission toggle:'}
            </p>

            {/* Brand Selector Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {(['STOCK', 'SAMSUNG', 'XIAOMI', 'ONEPLUS'] as const).map(brand => (
                <button
                  key={brand}
                  id={`btn-brand-${brand.toLowerCase()}`}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer border ${
                    selectedBrand === brand
                      ? 'bg-[#fffce1] text-[#0e100f] border-[#fffce1]'
                      : 'bg-transparent text-[#fffce1] border-[#42433d] hover:border-[#fffce1]'
                  }`}
                >
                  {brand === 'STOCK' ? 'Pixel / Moto' : brand === 'SAMSUNG' ? 'Samsung' : brand === 'XIAOMI' ? 'Xiaomi / Redmi' : 'OnePlus / Realme'}
                </button>
              ))}
            </div>

            {/* Brand Steps Display */}
            <div className="p-5 rounded-xl bg-[#0e100f] border border-[#42433d]">
              <h4 className="text-sm font-bold text-[#fffce1] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0ae448]"></span>
                <span>{brandInstructions[selectedBrand].title}</span>
              </h4>
              <ol className="space-y-2.5 text-xs sm:text-sm text-[#7c7c6f]">
                {brandInstructions[selectedBrand].steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full border border-[#42433d] bg-[#191919] text-[#fffce1] flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 pt-4 border-t border-[#42433d] flex flex-wrap items-center justify-between text-xs text-[#7c7c6f] gap-2 font-mono">
              <span>Requires {MIN_ANDROID_VERSION}</span>
              <a 
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="text-[#00bae2] hover:text-[#fffce1] flex items-center gap-1 transition"
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
