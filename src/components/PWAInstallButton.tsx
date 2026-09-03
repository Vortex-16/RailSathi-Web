import React, { useState } from 'react';
import { Download, Share, X, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [justInstalled, setJustInstalled] = useState(false);

  if (isInstalled || justInstalled) {
    return (
      <div id="pwa-installed-badge" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
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
        className={`inline-flex items-center gap-2 rounded-lg font-medium transition shadow-sm ${
          compact
            ? 'bg-blue-800 text-white text-xs px-3 py-1.5 hover:bg-blue-900 border border-blue-700'
            : 'bg-white text-blue-900 text-sm px-4 py-2 hover:bg-slate-100 border border-slate-200'
        }`}
        title="Install Web App for Offline Use"
      >
        <Download className="w-4 h-4 text-amber-500" />
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
          className={`inline-flex items-center gap-1.5 rounded-lg font-medium transition ${
            compact
              ? 'bg-slate-100 text-slate-700 text-xs px-2.5 py-1 hover:bg-slate-200'
              : 'border border-slate-300 text-slate-700 text-xs px-3 py-1.5 hover:bg-slate-50'
          }`}
        >
          <Share className="w-3.5 h-3.5 text-blue-600" />
          <span>iOS Home Screen</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-base">Add RailSaathi to iPhone / iPad</h3>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="rounded-full p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800">1</span>
                  <p>In Safari, tap the <strong className="text-slate-900">Share</strong> icon at the bottom bar.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800">2</span>
                  <p>Scroll down and select <strong className="text-slate-900">"Add to Home Screen"</strong>.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800">3</span>
                  <p>Tap <strong className="text-slate-900">Add</strong>. RailSaathi will launch with full offline capabilities!</p>
                </div>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-xl bg-blue-900 py-2.5 text-sm font-semibold text-white hover:bg-blue-950 transition"
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
