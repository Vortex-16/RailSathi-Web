import React, { useState } from 'react';
import { Download, Share, X, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [justInstalled, setJustInstalled] = useState(false);

  if (isInstalled || justInstalled) {
    return (
      <div id="pwa-installed-badge" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#dbe8ac] text-[#10380b] border border-[#10380b] shadow-[1px_1px_0px_0px_#10380b]">
        <CheckCircle2 className="w-3.5 h-3.5 text-[#10380b]" />
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
        className={`inline-flex items-center gap-2 rounded-full font-bold transition border-2 border-[#10380b] cursor-pointer ${
          compact
            ? 'bg-[#fce519] text-[#10380b] text-xs px-3 py-1 shadow-[2px_2px_0px_0px_#10380b] hover:bg-[#10380b] hover:text-[#fefde6]'
            : 'btn-marigold-pill text-xs px-4 py-2'
        }`}
        title="Install Web App for Offline Use"
      >
        <Download className="w-3.5 h-3.5" />
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
          className="inline-flex items-center gap-1.5 rounded-full font-mono font-bold text-xs px-3 py-1 border-2 border-[#10380b] bg-[#fefde6] text-[#10380b] hover:bg-[#fce519] transition cursor-pointer shadow-[2px_2px_0px_0px_#10380b]"
        >
          <Share className="w-3.5 h-3.5 text-[#10380b]" />
          <span>iOS Home Screen</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#10380b]/50 p-4 backdrop-blur-xs">
            <div className="w-full max-w-sm rounded-[32px] bg-[#fefde6] p-6 shadow-[8px_8px_0px_0px_#10380b] border-2 border-[#10380b] text-[#10380b]">
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#10380b]/20">
                <h3 className="font-display font-bold text-[#10380b] text-lg">Add to Home Screen</h3>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="rounded-full p-1 text-[#10380b] hover:bg-[#f2ee98]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-4 space-y-3 text-sm text-[#10380b]/80">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fce519] text-xs font-mono font-bold text-[#10380b] border border-[#10380b]">1</span>
                  <p className="font-medium">In Safari, tap the <strong className="font-bold text-[#10380b]">Share</strong> icon at the bottom bar.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fce519] text-xs font-mono font-bold text-[#10380b] border border-[#10380b]">2</span>
                  <p className="font-medium">Scroll down and select <strong className="font-bold text-[#10380b]">"Add to Home Screen"</strong>.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fce519] text-xs font-mono font-bold text-[#10380b] border border-[#10380b]">3</span>
                  <p className="font-medium">Tap <strong className="font-bold text-[#10380b]">Add</strong>. RailSathi will launch with full offline capabilities!</p>
                </div>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full btn-forest-pill py-2.5 text-sm"
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
