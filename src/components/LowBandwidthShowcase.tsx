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
    <section id="low-bandwidth" className="py-14 sm:py-20 bg-[#f2ee98] text-[#10380b] border-b-2 border-[#10380b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#fce519] text-[#10380b] border border-[#10380b] mb-3 shadow-[2px_2px_0px_0px_#10380b]">
            <Gauge className="w-3.5 h-3.5 text-[#10380b]" />
            // Optimized for Indian Telecom Realities //
          </div>
          <h2 className={`font-display font-bold text-[#10380b] tracking-tight ${seniorMode ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl lg:text-5xl'}`}>
            Built for 2G Networks, Tunnels & Dense Crowds
          </h2>
          <p className="mt-2 text-[#10380b]/80 text-sm sm:text-base font-medium">
            Millions of Indian train commuters experience network dropouts between stations. RailSathi is architected to perform flawlessly with zero bars of signal.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-[28px] bg-[#fefde6] border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#fce519] text-[#10380b] border-2 border-[#10380b] flex items-center justify-center shadow-[2px_2px_0px_0px_#10380b]">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-[#10380b] text-lg">Pre-Bundled SQLite</h3>
            <p className="text-xs text-[#10380b]/80 leading-relaxed font-medium">
              Every station coordinate, platform count, and timetable is stored locally. Searching or filtering trains makes zero network calls.
            </p>
            <div className="text-[11px] font-mono text-[#10380b] font-bold bg-[#dbe8ac] px-2.5 py-1 rounded-full border border-[#10380b] inline-block">
              Latency: &lt; 2ms • Data: 0 KB
            </div>
          </div>

          <div className="p-6 rounded-[28px] bg-[#fefde6] border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#fce519] text-[#10380b] border-2 border-[#10380b] flex items-center justify-center shadow-[2px_2px_0px_0px_#10380b]">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-[#10380b] text-lg">Micro-Payloads (&lt;200B)</h3>
            <p className="text-xs text-[#10380b]/80 leading-relaxed font-medium">
              Hunger Signal broadcasts are compressed into ultra-compact byte payloads, successfully transmitting even on shaky 2G EDGE connections.
            </p>
            <div className="text-[11px] font-mono text-[#10380b] font-bold bg-[#fce519] px-2.5 py-1 rounded-full border border-[#10380b] inline-block">
              Payload: 182 Bytes vs 45 KB
            </div>
          </div>

          <div className="p-6 rounded-[28px] bg-[#fefde6] border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#fce519] text-[#10380b] border-2 border-[#10380b] flex items-center justify-center shadow-[2px_2px_0px_0px_#10380b]">
              <HardDrive className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-[#10380b] text-lg">Store-and-Forward</h3>
            <p className="text-xs text-[#10380b]/80 leading-relaxed font-medium">
              If an order or route bookmark is initiated inside a tunnel, it is safely queued locally and dispatched the moment signal returns.
            </p>
            <div className="text-[11px] font-mono text-[#10380b] font-bold bg-[#dbe8ac] px-2.5 py-1 rounded-full border border-[#10380b] inline-block">
              Guaranteed Eventual Delivery
            </div>
          </div>

          <div className="p-6 rounded-[28px] bg-[#fefde6] border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#fce519] text-[#10380b] border-2 border-[#10380b] flex items-center justify-center shadow-[2px_2px_0px_0px_#10380b]">
              <TrendingDown className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-[#10380b] text-lg">92% Less Bandwidth</h3>
            <p className="text-xs text-[#10380b]/80 leading-relaxed font-medium">
              Eliminates heavy JavaScript bundles, video backgrounds, and marketing trackers. Total app shell weighs only ~18 MB.
            </p>
            <div className="text-[11px] font-mono text-[#10380b] font-bold bg-[#fce519] px-2.5 py-1 rounded-full border border-[#10380b] inline-block">
              Low-RAM & 2G Friendly
            </div>
          </div>
        </div>

        {/* Live Interactive Network Simulator */}
        <div className="p-6 sm:p-8 rounded-[36px] bg-[#fefde6] border-2 border-[#10380b] shadow-[8px_8px_0px_0px_#10380b]">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-[#10380b]/20">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#10380b]/70">
                // Hands-On Network Simulator //
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#10380b]">
                Test RailSathi Under Adverse Connectivity
              </h3>
            </div>

            {/* Profile Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => handleTestNetwork('4G')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border-2 border-[#10380b] ${
                  activePreset === '4G' ? 'bg-[#10380b] text-[#fefde6] shadow-[2px_2px_0px_0px_#10380b]' : 'bg-[#f2ee98] text-[#10380b] hover:bg-[#fce519]'
                }`}
              >
                <Wifi className="w-3.5 h-3.5" />
                <span>4G / 5G High Speed</span>
              </button>

              <button
                onClick={() => handleTestNetwork('2G')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border-2 border-[#10380b] ${
                  activePreset === '2G' ? 'bg-[#10380b] text-[#fefde6] shadow-[2px_2px_0px_0px_#10380b]' : 'bg-[#f2ee98] text-[#10380b] hover:bg-[#fce519]'
                }`}
              >
                <Gauge className="w-3.5 h-3.5" />
                <span>2G EDGE (Slow)</span>
              </button>

              <button
                onClick={() => handleTestNetwork('TUNNEL')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border-2 border-[#10380b] ${
                  activePreset === 'TUNNEL' ? 'bg-[#10380b] text-[#fefde6] shadow-[2px_2px_0px_0px_#10380b]' : 'bg-[#f2ee98] text-[#10380b] hover:bg-[#fce519]'
                }`}
              >
                <WifiOff className="w-3.5 h-3.5" />
                <span>Tunnel Dead-Zone</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 items-center">
            <div className="space-y-1">
              <div className="text-xs text-[#10380b]/70 font-bold uppercase font-mono">Active Network Simulation</div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-[#10380b]">
                {activePreset === '4G' ? '4G LTE (15 Mbps)' : activePreset === '2G' ? '2G EDGE (64 kbps)' : 'Zero Cellular Signal'}
              </div>
              <div className="text-xs text-[#10380b]/70 font-medium">
                {activePreset === 'TUNNEL' ? 'Offline SQLite Cache Activated' : 'Cloud Sync Operational'}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs text-[#10380b]/70 font-bold uppercase font-mono">Data Consumed For Schedule</div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-[#10380b]">
                {activePreset === 'TUNNEL' ? '0 KB (Local)' : '0.18 KB (Micro-Sync)'}
              </div>
              <div className="text-xs text-[#10380b]/70 font-medium">
                Compared to ~3.8 MB on standard web apps
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#f2ee98] border-2 border-[#10380b] space-y-1 shadow-[3px_3px_0px_0px_#10380b]">
              <div className="text-[10px] uppercase font-bold text-[#10380b] font-mono">// Engine Log Output:</div>
              <p className="text-xs font-mono font-bold text-[#10380b]">
                {testLog}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
