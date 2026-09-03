import React, { useState } from 'react';
import { 
  Wifi, 
  WifiOff, 
  Gauge, 
  Zap, 
  Database, 
  ShieldCheck, 
  HardDrive, 
  Cpu, 
  TrendingDown, 
  Layers,
  Sparkles
} from 'lucide-react';

export const LowBandwidthShowcase: React.FC<{
  isOnline: boolean;
  simulatedOffline: boolean;
  onToggleSimulateOffline: () => void;
  lowBandwidthMode: boolean;
  onToggleLowBandwidth: () => void;
  seniorMode: boolean;
}> = ({
  isOnline,
  simulatedOffline,
  onToggleSimulateOffline,
  lowBandwidthMode,
  onToggleLowBandwidth,
  seniorMode,
}) => {
  const [activePreset, setActivePreset] = useState<'4G' | '2G' | 'TUNNEL'>('4G');
  const [testLog, setTestLog] = useState<string>('Network idle. SQLite timetable ready.');

  const handleTestNetwork = (preset: '4G' | '2G' | 'TUNNEL') => {
    setActivePreset(preset);
    if (preset === 'TUNNEL') {
      if (!simulatedOffline) onToggleSimulateOffline();
      setTestLog('Tunnel dead-zone entered. Serving schedule from local SQLite in 1.2ms.');
    } else if (preset === '2G') {
      if (simulatedOffline) onToggleSimulateOffline();
      if (!lowBandwidthMode) onToggleLowBandwidth();
      setTestLog('Simulating 2G EDGE connection (64 kbps). Payloads compressed to <200 bytes.');
    } else {
      if (simulatedOffline) onToggleSimulateOffline();
      if (lowBandwidthMode) onToggleLowBandwidth();
      setTestLog('High-speed 4G/5G restored. Background synchronization active.');
    }
  };

  return (
    <section id="low-bandwidth" className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-3">
            <Gauge className="w-3.5 h-3.5 text-amber-400" />
            Optimized for Indian Telecom Realities
          </div>
          <h2 className={`font-black text-white tracking-tight ${seniorMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
            Built for 2G Networks, Tunnels & Dense Crowds
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Millions of Indian train commuters experience network dropouts between stations. RailSaathi is architected to perform flawlessly with zero bars of signal.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-white text-base">Pre-Bundled SQLite</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every station coordinate, platform count, and timetable is stored locally. Searching or filtering trains makes zero network calls.
            </p>
            <div className="text-[11px] font-mono text-emerald-400 font-semibold">
              Latency: &lt; 2ms • Data: 0 KB
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-white text-base">Micro-Payloads (&lt;200B)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hunger Signal broadcasts are compressed into ultra-compact byte payloads, successfully transmitting even on shaky 2G EDGE connections.
            </p>
            <div className="text-[11px] font-mono text-amber-400 font-semibold">
              Payload: 182 Bytes vs 45 KB standard
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <HardDrive className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-white text-base">Store-and-Forward Queue</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              If an order or route bookmark is initiated inside a tunnel, it is safely queued locally and dispatched the moment signal returns.
            </p>
            <div className="text-[11px] font-mono text-purple-400 font-semibold">
              Guaranteed Eventual Delivery
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <TrendingDown className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-white text-base">92% Less Bandwidth</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Eliminates heavy JavaScript bundles, video backgrounds, and marketing trackers. Total app shell weighs only ~18 MB.
            </p>
            <div className="text-[11px] font-mono text-emerald-400 font-semibold">
              Low-RAM & 2G Friendly
            </div>
          </div>
        </div>

        {/* Live Interactive Network Simulator */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Hands-On Network Simulator
              </span>
              <h3 className="text-xl font-black text-white">
                Test RailSaathi Under Adverse Connectivity
              </h3>
            </div>

            {/* Profile Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleTestNetwork('4G')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  activePreset === '4G' ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                <Wifi className="w-3.5 h-3.5" />
                <span>4G / 5G High Speed</span>
              </button>

              <button
                onClick={() => handleTestNetwork('2G')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  activePreset === '2G' ? 'bg-amber-600 text-white shadow-xs' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                <Gauge className="w-3.5 h-3.5" />
                <span>2G EDGE (Slow)</span>
              </button>

              <button
                onClick={() => handleTestNetwork('TUNNEL')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  activePreset === 'TUNNEL' ? 'bg-rose-600 text-white shadow-xs' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                <WifiOff className="w-3.5 h-3.5" />
                <span>Tunnel Dead-Zone</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 items-center">
            <div className="space-y-1">
              <div className="text-xs text-slate-400 font-medium">Active Network Simulation</div>
              <div className="text-2xl font-black font-mono text-white">
                {activePreset === '4G' ? '4G LTE (15 Mbps)' : activePreset === '2G' ? '2G EDGE (64 kbps)' : 'Zero Cellular Signal'}
              </div>
              <div className="text-xs text-slate-500">
                {activePreset === 'TUNNEL' ? 'Offline SQLite Cache Activated' : 'Cloud Sync Operational'}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs text-slate-400 font-medium">Data Consumed For Schedule Query</div>
              <div className="text-2xl font-black font-mono text-emerald-400">
                {activePreset === 'TUNNEL' ? '0 KB (Local)' : '0.18 KB (Micro-Sync)'}
              </div>
              <div className="text-xs text-slate-500">
                Compared to ~3.8 MB on standard web apps
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-[10px] uppercase font-bold text-slate-400 font-mono">Engine Log Output:</div>
              <p className="text-xs font-mono text-amber-300">
                {testLog}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
