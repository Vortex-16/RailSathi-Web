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
    <section id="offline-timetables" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            <Database className="w-3.5 h-3.5 text-emerald-600" />
            100% Pre-Bundled Offline Database
          </div>
          <h2 className={`font-black text-slate-900 tracking-tight ${seniorMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
            Suburban Timetables & Live Departure Board
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Works inside river tunnels, underground sections, and remote cuttings with zero cellular connection. Powered by pre-indexed SQLite tables.
          </p>
        </div>

        {/* Search & Zone Controls */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search station by name or code (e.g. Sealdah, SDAH, Dadar, Howrah, CSMT, चेन्नई)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-800 focus:bg-white transition"
              />
            </div>

            {/* Zonal Filter */}
            <div className="md:col-span-4 flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {['ALL', 'ER', 'WR', 'CR', 'SR', 'NR'].map(zone => (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition shrink-0 ${
                    selectedZone === zone
                      ? 'bg-blue-900 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {zone === 'ALL' ? 'All Zones' : zone}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Layout: Station List + Selected Departure Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Station List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
              <span>Matching Stations ({filteredStations.length})</span>
              <span className="text-emerald-700 flex items-center gap-1 font-semibold">
                <Check className="w-3.5 h-3.5" /> SQLite Cached
              </span>
            </div>

            <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1">
              {filteredStations.length === 0 ? (
                <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
                  <p className="text-xs text-slate-500">No stations found matching "{searchQuery}".</p>
                </div>
              ) : (
                filteredStations.map(station => {
                  const isSelected = selectedStation.code === station.code;
                  const isBookmarked = bookmarkedStations.includes(station.code);

                  return (
                    <div
                      key={station.code}
                      onClick={() => setSelectedStation(station)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-blue-900 text-white border-blue-950 shadow-md'
                          : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300 hover:bg-slate-50/80'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                            isSelected ? 'bg-blue-800 text-amber-300' : 'bg-slate-100 text-blue-900'
                          }`}>
                            {station.code}
                          </span>
                          <span className="font-extrabold text-sm">{station.name}</span>
                        </div>
                        <div className={`text-xs ${isSelected ? 'text-blue-200' : 'text-slate-500'}`}>
                          {station.hindiName} {station.bengaliName ? `• ${station.bengaliName}` : ''} {station.marathiName ? `• ${station.marathiName}` : ''}
                        </div>
                        <div className={`text-[11px] font-medium ${isSelected ? 'text-blue-200' : 'text-slate-400'}`}>
                          {station.suburbanLine} • {station.platforms} Platforms
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark(station.code);
                        }}
                        className={`p-2 rounded-xl transition ${
                          isSelected ? 'hover:bg-blue-800 text-amber-300' : 'hover:bg-slate-100 text-slate-400'
                        }`}
                        title={isBookmarked ? 'Remove bookmark' : 'Bookmark station for quick commute'}
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-amber-400' : ''}`} />
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Departure Board for Selected Station */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold bg-blue-100 text-blue-900">
                      {selectedStation.code}
                    </span>
                    <h3 className="text-xl font-black text-slate-900">{selectedStation.name}</h3>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {selectedStation.suburbanLine} • Zone: {selectedStation.zone}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Daily Passenger Traffic</span>
                  <span className="text-sm font-black text-blue-900 font-mono">{selectedStation.dailyFootfall}</span>
                </div>
              </div>

              {/* Live Suburban Departures */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Scheduled Suburban EMU Services
                </h4>

                <div className="space-y-2.5">
                  {SAMPLE_TRAINS.map(train => (
                    <div
                      key={train.trainNumber}
                      className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 flex items-center justify-between transition"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-blue-900">#{train.trainNumber}</span>
                          <span className="text-xs font-black text-slate-900">{train.trainName}</span>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900">
                            {train.type}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 flex items-center gap-3">
                          <span>Origin: {train.origin}</span>
                          <span>➔</span>
                          <span>Dest: {train.destination}</span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-sm font-black text-slate-900 font-mono">
                          {train.departureTime}
                        </div>
                        <div className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-0.5">
                          Platform 2
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-100 text-xs text-slate-600 flex items-center justify-between">
                <span>Database Sync Status: <strong>Pre-bundled (Room v1.0)</strong></span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
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
