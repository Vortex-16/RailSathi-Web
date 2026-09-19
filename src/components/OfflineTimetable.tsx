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
    <section id="offline-timetables" className="py-12 sm:py-16 bg-[#f2ee98] border-b-2 border-[#10380b] text-[#10380b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#fce519] text-[#10380b] border border-[#10380b] mb-3 shadow-[2px_2px_0px_0px_#10380b]">
            <Database className="w-3.5 h-3.5 text-[#10380b]" />
            <span>// 100% Pre-Bundled Offline Database //</span>
          </div>
          <h2 className={`font-display font-bold text-[#10380b] tracking-tight ${seniorMode ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl lg:text-5xl'}`}>
            Suburban Timetables & Live Departure Board
          </h2>
          <p className="mt-2 text-[#10380b]/80 text-sm sm:text-base leading-relaxed font-medium">
            Works inside river tunnels, underground sections, and remote cuttings with zero cellular connection. Powered by pre-indexed SQLite tables.
          </p>
        </div>

        {/* Search & Zone Controls */}
        <div className="p-4 sm:p-5 rounded-[28px] bg-[#fefde6] border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b] mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 text-[#10380b]/70 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search station by name or code (e.g. Sealdah, SDAH, Dadar, Howrah, CSMT, चेन्नई)..."
                className="w-full pl-11 pr-4 py-2.5 rounded-full border-2 border-[#10380b] bg-[#f2ee98] text-[#10380b] placeholder:text-[#10380b]/50 text-xs sm:text-sm font-semibold focus:outline-hidden focus:bg-[#fce519] transition"
              />
            </div>

            {/* Zonal Filter */}
            <div className="md:col-span-4 flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {['ALL', 'ER', 'WR', 'CR', 'SR', 'NR'].map(zone => (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition shrink-0 cursor-pointer border-2 ${
                    selectedZone === zone
                      ? 'bg-[#10380b] text-[#fefde6] border-[#10380b] shadow-[2px_2px_0px_0px_#10380b]'
                      : 'bg-[#f2ee98] text-[#10380b] border-[#10380b] hover:bg-[#fce519]'
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
            <div className="flex items-center justify-between text-xs font-mono font-bold text-[#10380b] uppercase tracking-wider px-1">
              <span>Matching Stations ({filteredStations.length})</span>
              <span className="text-[#10380b] flex items-center gap-1 font-bold">
                <Check className="w-3.5 h-3.5 text-[#10380b]" /> SQLite Cached
              </span>
            </div>

            <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-1">
              {filteredStations.length === 0 ? (
                <div className="p-8 text-center bg-[#fefde6] rounded-[28px] border-2 border-[#10380b]">
                  <p className="text-xs font-medium text-[#10380b]/80">No stations found matching "{searchQuery}".</p>
                </div>
              ) : (
                filteredStations.map(station => {
                  const isSelected = selectedStation.code === station.code;
                  const isBookmarked = bookmarkedStations.includes(station.code);

                  return (
                    <div
                      key={station.code}
                      onClick={() => setSelectedStation(station)}
                      className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#dbe8ac] text-[#10380b] border-[#10380b] shadow-[4px_4px_0px_0px_#10380b]'
                          : 'bg-[#fefde6] text-[#10380b] border-[#10380b] hover:bg-[#f2ee98] shadow-[2px_2px_0px_0px_#10380b]'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border border-[#10380b] ${
                            isSelected ? 'bg-[#10380b] text-[#fefde6]' : 'bg-[#fce519] text-[#10380b]'
                          }`}>
                            {station.code}
                          </span>
                          <span className="font-bold text-sm font-display text-[#10380b]">{station.name}</span>
                        </div>
                        <div className="text-xs text-[#10380b]/75 font-medium">
                          {station.hindiName} {station.bengaliName ? `• ${station.bengaliName}` : ''} {station.marathiName ? `• ${station.marathiName}` : ''}
                        </div>
                        <div className="text-[11px] font-mono font-medium text-[#10380b]/70">
                          {station.suburbanLine} • {station.platforms} Platforms
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark(station.code);
                        }}
                        className="p-2 rounded-xl transition hover:bg-[#fce519] text-[#10380b] cursor-pointer"
                        title={isBookmarked ? 'Remove bookmark' : 'Bookmark station for quick commute'}
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-[#10380b]' : ''}`} />
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Departure Board for Selected Station */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 sm:p-7 rounded-[36px] bg-[#fefde6] border-2 border-[#10380b] shadow-[8px_8px_0px_0px_#10380b] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#10380b]/20">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-[#fce519] text-[#10380b] border border-[#10380b] shrink-0">
                      {selectedStation.code}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#10380b]">{selectedStation.name}</h3>
                  </div>
                  <div className="text-xs text-[#10380b]/70 mt-1 font-mono">
                    {selectedStation.suburbanLine} • Zone: {selectedStation.zone}
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="text-[10px] text-[#10380b]/70 uppercase font-mono font-bold block">Daily Passenger Traffic</span>
                  <span className="text-sm font-bold text-[#10380b] font-mono">{selectedStation.dailyFootfall}</span>
                </div>
              </div>

              {/* Live Suburban Departures */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#10380b]/70 font-bold mb-3">
                  Scheduled Suburban EMU Services
                </h4>

                <div className="space-y-2.5">
                  {SAMPLE_TRAINS.map(train => (
                    <div
                      key={train.trainNumber}
                      className="p-3 sm:p-3.5 rounded-2xl border-2 border-[#10380b] bg-[#f2ee98] flex items-center justify-between transition gap-2 shadow-[2px_2px_0px_0px_#10380b]"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <span className="text-xs font-mono font-bold text-[#10380b]">#{train.trainNumber}</span>
                          <span className="text-xs font-bold text-[#10380b] truncate">{train.trainName}</span>
                          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#fce519] text-[#10380b] border border-[#10380b] shrink-0 font-bold">
                            {train.type}
                          </span>
                        </div>
                        <div className="text-[11px] sm:text-xs text-[#10380b]/80 flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono">
                          <span>{train.origin}</span>
                          <span>➔</span>
                          <span>{train.destination}</span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-sm font-bold text-[#10380b] font-mono">
                          {train.departureTime}
                        </div>
                        <div className="text-[10px] font-mono font-bold text-[#10380b] bg-[#dbe8ac] border border-[#10380b] px-2.5 py-0.5 rounded-full inline-block mt-0.5">
                          Plat 2
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#dbe8ac] border-2 border-[#10380b] text-xs text-[#10380b] font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-[2px_2px_0px_0px_#10380b]">
                <span>Database Sync: <strong className="text-[#10380b]">Pre-bundled (Room v1.0)</strong></span>
                <span className="text-[#10380b] font-bold flex items-center gap-1 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10380b]" />
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
