import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Train, 
  MapPin, 
  Clock, 
  Database, 
  WifiOff, 
  Check, 
  Bookmark, 
  Filter,
  ArrowUpDown
} from 'lucide-react';
import { Station, TrainSchedule } from '../types';
import { STATIONS, SAMPLE_TRAINS } from '../data/railwayData';

export const OfflineTimetable: React.FC<{ seniorMode: boolean }> = ({ seniorMode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('ALL');
  const [selectedStation, setSelectedStation] = useState<Station>(STATIONS[0]);
  const [bookmarkedStations, setBookmarkedStations] = useState<string[]>(['SDAH', 'CCG']);

  // Filter stations based on query & zone
  const filteredStations = useMemo(() => {
    return STATIONS.filter(s => {
      const matchesZone = selectedZone === 'ALL' || s.zone === selectedZone;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = 
        !q ||
        s.code.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q) ||
        s.hindiName.includes(q) ||
        (s.bengaliName && s.bengaliName.includes(q)) ||
        (s.marathiName && s.marathiName.includes(q)) ||
        (s.tamilName && s.tamilName.includes(q));
      return matchesZone && matchesQuery;
    });
  }, [searchQuery, selectedZone]);

  const toggleBookmark = (code: string) => {
    setBookmarkedStations(prev => 
      prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code]
    );
  };

  return (
    <section id="offline-timetables" className="py-12 sm:py-16 bg-[#0e100f] text-[#fffce1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase bg-[#191919] text-[#0ae448] border border-[#42433d] mb-3">
            <Database className="w-3.5 h-3.5 text-[#0ae448]" />
            <span>{'{'} 100% Pre-Bundled Offline Database {'}'}</span>
          </div>
          <h2 className={`font-semibold text-[#fffce1] tracking-[-0.03em] ${seniorMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl lg:text-4xl'}`}>
            Suburban Timetables & Live Departure Board
          </h2>
          <p className="mt-2 text-[#7c7c6f] text-sm sm:text-base leading-relaxed">
            Works inside river tunnels, underground sections, and remote cuttings with zero cellular connection. Powered by pre-indexed SQLite tables.
          </p>
        </div>

        {/* Search & Zone Controls */}
        <div className="p-4 rounded-2xl bg-[#191919] border border-[#42433d] mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 text-[#7c7c6f] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search station by name or code (e.g. Sealdah, SDAH, Dadar, Howrah, CSMT, चेन्नई)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#42433d] bg-[#0e100f] text-[#fffce1] placeholder-[#7c7c6f] text-xs sm:text-sm focus:outline-hidden focus:border-[#fffce1] transition"
              />
            </div>

            {/* Zonal Filter */}
            <div className="md:col-span-4 flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {['ALL', 'ER', 'WR', 'CR', 'SR', 'NR'].map(zone => (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition shrink-0 cursor-pointer border ${
                    selectedZone === zone
                      ? 'bg-[#fffce1] text-[#0e100f] border-[#fffce1]'
                      : 'bg-transparent text-[#7c7c6f] border-[#42433d] hover:border-[#fffce1] hover:text-[#fffce1]'
                  }`}
                >
                  {zone === 'ALL' ? 'All' : zone}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Layout: Station List + Selected Departure Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Station List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#7c7c6f] uppercase tracking-wider px-1">
              <span>Matching Stations ({filteredStations.length})</span>
              <span className="text-[#0ae448] flex items-center gap-1 font-semibold">
                <Check className="w-3.5 h-3.5" /> SQLite Cached
              </span>
            </div>

            <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1">
              {filteredStations.length === 0 ? (
                <div className="p-8 text-center bg-[#191919] rounded-2xl border border-[#42433d]">
                  <p className="text-xs text-[#7c7c6f]">No stations found matching "{searchQuery}".</p>
                </div>
              ) : (
                filteredStations.map(station => {
                  const isSelected = selectedStation.code === station.code;
                  const isBookmarked = bookmarkedStations.includes(station.code);

                  return (
                    <div
                      key={station.code}
                      onClick={() => setSelectedStation(station)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#0e100f] text-[#fffce1] border-[#0ae448]'
                          : 'bg-[#191919] text-[#fffce1] border-[#42433d] hover:border-[#7c7c6f]'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                            isSelected ? 'bg-[#0ae448] text-[#0e100f]' : 'bg-[#0e100f] text-[#00bae2] border border-[#42433d]'
                          }`}>
                            {station.code}
                          </span>
                          <span className="font-bold text-sm text-[#fffce1]">{station.name}</span>
                        </div>
                        <div className="text-xs text-[#7c7c6f]">
                          {station.hindiName} {station.bengaliName ? `• ${station.bengaliName}` : ''} {station.marathiName ? `• ${station.marathiName}` : ''}
                        </div>
                        <div className="text-[11px] font-mono text-[#7c7c6f]">
                          {station.suburbanLine} • {station.platforms} Platforms
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark(station.code);
                        }}
                        className="p-2 rounded-lg transition hover:bg-[#0e100f] text-[#7c7c6f] cursor-pointer"
                        title={isBookmarked ? 'Remove bookmark' : 'Bookmark station for quick commute'}
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-[#ff8709]' : ''}`} />
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Departure Board for Selected Station */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 rounded-2xl bg-[#191919] border border-[#42433d] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#42433d]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[#0e100f] text-[#0ae448] border border-[#42433d]">
                      {selectedStation.code}
                    </span>
                    <h3 className="text-xl font-bold text-[#fffce1]">{selectedStation.name}</h3>
                  </div>
                  <div className="text-xs text-[#7c7c6f] mt-1 font-mono">
                    {selectedStation.suburbanLine} • Zone: {selectedStation.zone}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-[#7c7c6f] uppercase font-mono font-bold block">Daily Passenger Traffic</span>
                  <span className="text-sm font-bold text-[#00bae2] font-mono">{selectedStation.dailyFootfall}</span>
                </div>
              </div>

              {/* Live Suburban Departures */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#7c7c6f] mb-3">
                  Scheduled Suburban EMU Services
                </h4>

                <div className="space-y-2.5">
                  {SAMPLE_TRAINS.map(train => (
                    <div
                      key={train.trainNumber}
                      className="p-3.5 rounded-xl border border-[#42433d] bg-[#0e100f] flex items-center justify-between transition"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-[#00bae2]">#{train.trainNumber}</span>
                          <span className="text-xs font-bold text-[#fffce1]">{train.trainName}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#191919] text-[#ff8709] border border-[#42433d]">
                            {train.type}
                          </span>
                        </div>
                        <div className="text-xs text-[#7c7c6f] flex items-center gap-3 font-mono">
                          <span>Origin: {train.origin}</span>
                          <span>➔</span>
                          <span>Dest: {train.destination}</span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-sm font-bold text-[#fffce1] font-mono">
                          {train.departureTime}
                        </div>
                        <div className="text-[10px] font-mono font-semibold text-[#0ae448] bg-[#191919] border border-[#42433d] px-2 py-0.5 rounded-full inline-block mt-0.5">
                          Platform 2
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0e100f] border border-[#42433d] text-xs text-[#7c7c6f] font-mono flex items-center justify-between">
                <span>Database Sync Status: <strong className="text-[#fffce1]">Pre-bundled (Room v1.0)</strong></span>
                <span className="text-[#0ae448] font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#0ae448]" />
                  0 KB Data Consumed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
