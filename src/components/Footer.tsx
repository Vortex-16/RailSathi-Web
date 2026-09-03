import React from 'react';
import { 
  Train, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  Heart, 
  Github, 
  Mail,
  ArrowUp
} from 'lucide-react';
import { 
  OFFICIAL_APK_DOWNLOAD_URL, 
  GITHUB_REPO_URL, 
  APK_VERSION, 
  APK_SIZE 
} from '../data/railwayData';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  seniorMode: boolean;
  currentLang: LanguageCode;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, seniorMode, currentLang }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      
      {/* Final Pre-Footer Call to Action Banner */}
      <div className="py-16 sm:py-20 border-b border-slate-800/80 bg-gradient-to-b from-blue-950/60 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-blue-900 border border-blue-700/80 flex items-center justify-center text-amber-400 mx-auto mb-6 shadow-lg shadow-blue-900/40">
            <Train className="w-7 h-7" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
            {t.footerCtaHeadline}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.footerCtaSubhead}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="btn-footer-cta-download"
              href={OFFICIAL_APK_DOWNLOAD_URL}
              download="RailSathi.apk"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/10 transition transform hover:-translate-y-0.5 text-base"
            >
              <Download className="w-5 h-5 text-slate-950" />
              <span>{t.footerCtaBtn} ({APK_SIZE})</span>
            </a>

            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold px-6 py-4 rounded-2xl border border-slate-700 transition text-sm"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href="mailto:support@railsaathi.in"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold px-6 py-4 rounded-2xl border border-slate-700 transition text-sm"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Contact Team</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-900 border border-blue-700 flex items-center justify-center text-amber-400">
                <Train className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-tight">RailSaathi</span>
                <span className="ml-2 text-xs font-semibold text-amber-400 font-sans">रेलसाथी</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t.footerTagline}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800 font-mono">
                {APK_VERSION} • {APK_SIZE}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 text-emerald-400 border border-slate-800 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Apache 2.0 Open Source
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footerNavTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('difference')}
                  className="hover:text-white transition cursor-pointer"
                >
                  {t.footerDiffLink}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('commuters')}
                  className="hover:text-white transition cursor-pointer"
                >
                  {t.footerCommutersLink}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('vendors')}
                  className="hover:text-white transition cursor-pointer"
                >
                  {t.footerVendorsLink}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('features')}
                  className="hover:text-white transition cursor-pointer"
                >
                  {t.footerFeaturesLink}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('install-guide')}
                  className="hover:text-white transition cursor-pointer"
                >
                  {t.footerInstallLink}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footerContactTitle}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footerContactSub}
            </p>
            <div className="space-y-2 text-xs">
              <a 
                href="mailto:support@railsaathi.in"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>support@railsaathi.in</span>
              </a>
              <a 
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition"
              >
                <Github className="w-3.5 h-3.5 text-blue-400" />
                <span>github.com/Vortex-16/RailSathi</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-1">
            <span>{t.footerBuiltWith}</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 mx-0.5" />
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition cursor-pointer"
            >
              <span>{t.footerBackToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
