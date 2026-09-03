import React from 'react';
import { 
  Train, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  Heart, 
  Github, 
  Smartphone,
  ArrowUp
} from 'lucide-react';
import { 
  OFFICIAL_APK_DOWNLOAD_URL, 
  GITHUB_REPO_URL, 
  APK_VERSION, 
  APK_SIZE 
} from '../data/railwayData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  seniorMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, seniorMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              The digital travel companion for 24 million daily Indian suburban commuters. 100% offline-ready timetables, authentic 12-car coach radar, and direct-to-seat station refreshments during 30s halts.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800 font-mono">
                {APK_VERSION} ({APK_SIZE})
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 text-emerald-400 border border-slate-800 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Apache 2.0 Open Source
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-white transition"
                >
                  Overview & Badges
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('user-flows')}
                  className="hover:text-white transition"
                >
                  Interactive User Flows (CUJs)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('coach-radar')}
                  className="hover:text-white transition"
                >
                  12-Car EMU Coach Radar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('offline-timetables')}
                  className="hover:text-white transition"
                >
                  Suburban Offline Timetables
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('low-bandwidth')}
                  className="hover:text-white transition"
                >
                  Low-Bandwidth & 2G Optimization
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('installation-guide')}
                  className="hover:text-white transition"
                >
                  Android Sideloading Walkthrough
                </button>
              </li>
            </ul>
          </div>

          {/* Downloads & Repository */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Download & Source Code
            </h4>
            <div className="space-y-2.5">
              <a
                id="btn-footer-download-apk"
                href={OFFICIAL_APK_DOWNLOAD_URL}
                download="RailSathi.apk"
                className="w-full inline-flex items-center justify-between p-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold transition shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Download Android APK</span>
                </div>
                <span className="font-mono text-[11px] text-blue-200">{APK_SIZE}</span>
              </a>

              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-bold transition border border-slate-800"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>View GitHub Repository</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            <div className="text-[11px] text-slate-500 leading-relaxed">
              Available in: English • हिन्दी • বাংলা • मराठी • தமிழ் • తెలుగు
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Top Button */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} RailSaathi Project. Designed for Indian Railways Suburban Commuters.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-slate-300 transition"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
