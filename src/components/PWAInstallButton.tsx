import React, { useState } from 'react';
import { Download, Share, X, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [justInstalled, setJustInstalled] = useState(false);

  if (isInstalled || justInstalled) {
    return (
      <div id="pwa-installed-badge" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#191919] text-[#0ae448] border border-[#42433d]">
        <CheckCircle2 className="w-3.5 h-3.5 text-[#0ae448]" />
        PWA Active
      </div>
    );
  }

  const handleInstall = async () => {
    const success = await install();
    if (success) {
      setJustInstalled(true);
    }
  };

  if (isInstallable) {
    return (
      <button
        id="btn-pwa-install"
        onClick={handleInstall}
        className={`inline-flex items-center gap-2 rounded-full font-semibold transition border cursor-pointer ${
          compact
            ? 'bg-transparent text-[#0ae448] border-[#42433d] hover:border-[#0ae448] text-xs px-3 py-1.5'
            : 'btn-ghost-cream text-sm px-4 py-2'
        }`}
        title="Install Web App for Offline Use"
      >
        <Download className="w-4 h-4 text-[#0ae448]" />
        <span>Install Web App</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          id="btn-ios-pwa-guide"
          onClick={() => setShowIOSGuide(true)}
          className="inline-flex items-center gap-1.5 rounded-full font-mono text-xs px-3 py-1 border border-[#42433d] text-[#fffce1] hover:border-[#fffce1] transition cursor-pointer"
        >
          <Share className="w-3.5 h-3.5 text-[#00bae2]" />
          <span>iOS Home Screen</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0e100f]/80 p-4 backdrop-blur-xs">
            <div className="w-full max-w-sm rounded-2xl bg-[#191919] p-6 shadow-2xl border border-[#42433d] text-[#fffce1]">
              <div className="flex items-center justify-between pb-3 border-b border-[#42433d]">
                <h3 className="font-bold text-[#fffce1] text-base">Add RailSaathi to iPhone / iPad</h3>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="rounded-full p-1 text-[#7c7c6f] hover:text-[#fffce1] hover:bg-[#0e100f]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-4 space-y-3 text-sm text-[#7c7c6f]">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0e100f] text-xs font-mono font-bold text-[#0ae448] border border-[#42433d]">1</span>
                  <p>In Safari, tap the <strong className="text-[#fffce1]">Share</strong> icon at the bottom bar.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0e100f] text-xs font-mono font-bold text-[#0ae448] border border-[#42433d]">2</span>
                  <p>Scroll down and select <strong className="text-[#fffce1]">"Add to Home Screen"</strong>.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0e100f] text-xs font-mono font-bold text-[#0ae448] border border-[#42433d]">3</span>
                  <p>Tap <strong className="text-[#fffce1]">Add</strong>. RailSaathi will launch with full offline capabilities!</p>
                </div>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-full bg-[#fffce1] py-2.5 text-sm font-semibold text-[#0e100f] hover:bg-[#fffce1]/90 transition cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
