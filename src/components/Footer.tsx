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
    <footer className="bg-[#0e100f] text-[#7c7c6f] border-t border-[#42433d]">
      
      {/* Final Pre-Footer Call to Action Banner */}
      <div className="py-16 sm:py-24 border-b border-[#42433d] bg-[#191919]">
        <ScrollReveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-full border border-[#42433d] bg-[#0e100f] flex items-center justify-center text-[#0ae448] mx-auto mb-6">
            <Train className="w-6 h-6" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e100f] border border-[#42433d] text-xs font-mono text-[#0ae448] mb-4">
            <span>{'{'}</span>
            <span>Get Started</span>
            <span>{'}'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#fffce1] tracking-[-0.03em] mb-4">
            {t.footerCtaTitle || t.footerCtaHeadline || 'Ready for a smoother, hunger-free local train commute?'}
          </h2>

          <p className="text-[#7c7c6f] text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.footerCtaSub || t.footerCtaSubhead || "Join thousands of daily suburban passengers in Mumbai, Kolkata, and Chennai. Download the signed APK today and enjoy tea, snacks, and water delivered right to your coach seat."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="btn-footer-cta-download"
              href={OFFICIAL_APK_DOWNLOAD_URL}
              download="RailSathi.apk"
              className="btn-cta-gradient !py-3.5 !px-8 text-sm sm:text-base"
            >
              <Download className="w-4 h-4 text-[#0ae448]" />
              <span>{t.footerCtaDownload || t.footerCtaBtn || 'Download RailSaathi APK'} ({APK_SIZE})</span>
            </a>

            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-cream !py-3 !px-6 text-sm"
            >
              <Github className="w-4 h-4" />
              <span>{t.footerGitHub || 'GitHub Repository'}</span>
              <ExternalLink className="w-3 h-3 text-[#7c7c6f]" />
            </a>

            <a
              href="mailto:support@railsaathi.in"
              className="btn-ghost-cream !py-3 !px-6 text-sm"
            >
              <Mail className="w-4 h-4 text-[#ff8709]" />
              <span>{t.footerContactTeam || 'Contact Team'}</span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <ScrollReveal delay={0.08}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#42433d]">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-[#42433d] bg-[#191919] flex items-center justify-center text-[#0ae448]">
                <Train className="w-4 h-4" />
              </div>
              <div>
                <span className="text-lg font-bold text-[#fffce1] tracking-tight">RailSaathi</span>
                <span className="ml-2 text-xs font-mono text-[#0ae448]">रेलसाथी</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#7c7c6f] leading-relaxed max-w-sm">
              {t.appTagline || t.footerTagline || "Smart mobile companion for India's 24 million daily suburban train commuters."}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-[#191919] text-[#7c7c6f] border border-[#42433d]">
                {APK_VERSION} • {APK_SIZE}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#191919] text-[#0ae448] border border-[#42433d] font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Apache 2.0 Open Source
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-[#fffce1] uppercase tracking-wider">
              {t.footerNavTitle || 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('difference')}
                  className="hover:text-[#fffce1] transition cursor-pointer"
                >
                  {t.navDifference || t.footerDiffLink || 'The Difference'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('commuters')}
                  className="hover:text-[#fffce1] transition cursor-pointer"
                >
                  {t.navCommuters || t.footerCommutersLink || 'For Commuters'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('vendors')}
                  className="hover:text-[#fffce1] transition cursor-pointer"
                >
                  {t.navVendors || t.footerVendorsLink || 'For Vendors'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('features')}
                  className="hover:text-[#fffce1] transition cursor-pointer"
                >
                  {t.navFeatures || t.footerFeaturesLink || 'Features'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('install-guide')}
                  className="hover:text-[#fffce1] transition cursor-pointer"
                >
                  {t.navInstall || t.footerInstallLink || 'How to Install'}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono text-[#fffce1] uppercase tracking-wider">
              {t.footerContactTitle || 'Get in Touch & Contribute'}
            </h4>
            <p className="text-xs sm:text-sm text-[#7c7c6f] leading-relaxed">
              Have suggestions for your suburban line (Western, Central, Eastern, or Southern Railway)? Send feedback or report an issue.
            </p>
            <div className="space-y-2 text-xs sm:text-sm font-mono">
              <a 
                href="mailto:support@railsaathi.in"
                className="flex items-center gap-2 text-[#7c7c6f] hover:text-[#fffce1] transition"
              >
                <Mail className="w-3.5 h-3.5 text-[#ff8709]" />
                <span>support@railsaathi.in</span>
              </a>
              <a 
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#7c7c6f] hover:text-[#fffce1] transition"
              >
                <Github className="w-3.5 h-3.5 text-[#00bae2]" />
                <span>github.com/Vortex-16/RailSathi</span>
              </a>
            </div>
          </div>

        </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7c7c6f] gap-4 font-mono">
          <div className="flex items-center gap-1">
            <span>{t.footerBuiltWith}</span>
            <Heart className="w-3 h-3 text-[#ff8709] fill-[#ff8709] mx-0.5" />
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#7c7c6f] hover:text-[#fffce1] transition cursor-pointer"
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
