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
import { ScrollReveal } from './ScrollReveal';

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
    <footer className="bg-[#fefde6] text-[#10380b] border-t-2 border-[#10380b]">
      
      {/* Final Pre-Footer Call to Action Banner */}
      <div className="py-16 sm:py-24 border-b-2 border-[#10380b] bg-[#f2ee98]">
        <ScrollReveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-2xl border-2 border-[#10380b] bg-[#fce519] flex items-center justify-center text-[#10380b] mx-auto mb-6 shadow-[3px_3px_0px_0px_#10380b]">
            <Train className="w-7 h-7" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#fce519] border border-[#10380b] text-xs font-mono font-bold text-[#10380b] mb-4 shadow-[2px_2px_0px_0px_#10380b]">
            <span>//</span>
            <span>Get Started</span>
            <span>//</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#10380b] tracking-tight mb-4">
            {t.footerCtaTitle || t.footerCtaHeadline || 'Ready for a smoother, hunger-free local train commute?'}
          </h2>

          <p className="text-[#10380b]/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            {t.footerCtaSub || t.footerCtaSubhead || "Join thousands of daily suburban passengers in Mumbai, Kolkata, and Chennai. Download the signed APK today and enjoy tea, snacks, and water delivered right to your coach seat."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="btn-footer-cta-download"
              href={OFFICIAL_APK_DOWNLOAD_URL}
              download="RailSathi-debug.apk"
              className="btn-marigold-pill !py-3.5 !px-8 text-sm sm:text-base font-bold shadow-[4px_4px_0px_0px_#10380b] inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-[#10380b]" />
              <span>{t.footerCtaDownload || t.footerCtaBtn || 'Download RailSathi APK'} ({APK_SIZE})</span>
            </a>

            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-forest !py-3 !px-6 text-sm font-bold shadow-[2px_2px_0px_0px_#10380b] inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>{t.footerGitHub || 'GitHub Repository'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="mailto:support@railsathi.in"
              className="btn-ghost-forest !py-3 !px-6 text-sm font-bold shadow-[2px_2px_0px_0px_#10380b] inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>{t.footerContactTeam || 'Contact Team'}</span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <ScrollReveal delay={0.08}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b-2 border-[#10380b]/20">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border-2 border-[#10380b] bg-[#fce519] flex items-center justify-center text-[#10380b] shadow-[1px_1px_0px_0px_#10380b]">
                <Train className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xl font-display font-bold text-[#10380b] tracking-tight">RailSathi</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#10380b]/80 leading-relaxed max-w-sm font-medium">
              {t.appTagline || t.footerTagline || "Smart mobile companion for India's 24 million daily suburban train commuters."}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-[#f2ee98] text-[#10380b] border border-[#10380b] font-bold">
                {APK_VERSION} • {APK_SIZE}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#dbe8ac] text-[#10380b] border border-[#10380b] font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Apache 2.0 Open Source
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-[#10380b] uppercase tracking-wider font-bold">
              {t.footerNavTitle || 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold">
              <li>
                <button
                  onClick={() => onNavigate('difference')}
                  className="hover:underline text-[#10380b]/80 hover:text-[#10380b] transition cursor-pointer"
                >
                  {t.navDifference || t.footerDiffLink || 'The Difference'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('commuters')}
                  className="hover:underline text-[#10380b]/80 hover:text-[#10380b] transition cursor-pointer"
                >
                  {t.navCommuters || t.footerCommutersLink || 'For Commuters'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('vendors')}
                  className="hover:underline text-[#10380b]/80 hover:text-[#10380b] transition cursor-pointer"
                >
                  {t.navVendors || t.footerVendorsLink || 'For Vendors'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('features')}
                  className="hover:underline text-[#10380b]/80 hover:text-[#10380b] transition cursor-pointer"
                >
                  {t.navFeatures || t.footerFeaturesLink || 'Features'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('install-guide')}
                  className="hover:underline text-[#10380b]/80 hover:text-[#10380b] transition cursor-pointer"
                >
                  {t.navInstall || t.footerInstallLink || 'How to Install'}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono text-[#10380b] uppercase tracking-wider font-bold">
              {t.footerContactTitle || 'Get in Touch & Contribute'}
            </h4>
            <p className="text-xs sm:text-sm text-[#10380b]/80 leading-relaxed font-medium">
              Have suggestions for your suburban line (Western, Central, Eastern, or Southern Railway)? Send feedback or report an issue.
            </p>
            <div className="space-y-2 text-xs sm:text-sm font-mono font-bold">
              <a 
                href="mailto:support@railsathi.in"
                className="flex items-center gap-2 text-[#10380b] hover:underline transition"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>support@railsathi.in</span>
              </a>
              <a 
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#10380b] hover:underline transition"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/Vortex-16/RailSathi</span>
              </a>
            </div>
          </div>

        </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#10380b]/80 gap-4 font-mono font-medium">
          <div className="flex items-center gap-1">
            <span>{t.footerBuiltWith}</span>
            <Heart className="w-3.5 h-3.5 text-[#10380b] fill-[#10380b] mx-0.5" />
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#10380b] font-bold hover:underline transition cursor-pointer"
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
