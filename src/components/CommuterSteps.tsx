import React, { useState } from 'react';
import { Compass, BellRing, Check, Coffee, Droplets, Sparkles, Train, ArrowRight, CheckCircle2 } from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface CommuterStepsProps {
  currentLang: LanguageCode;
  seniorMode?: boolean;
}

export const CommuterSteps: React.FC<CommuterStepsProps> = ({ currentLang, seniorMode }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const [selectedItem, setSelectedItem] = useState<{ name: string; price: number; native: string }>({
    name: 'Kadak Masala Chai',
    price: 10,
    native: 'कड़क मसाला चाय',
  });
  const [selectedCoach, setSelectedCoach] = useState('GS-2 (Coach 4)');
  const [seatNote, setSeatNote] = useState('Left Middle Window, Row 3');
  const [signalSent, setSignalSent] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);

  const foodChoices = [
    { 
      name: currentLang === 'hi' ? 'कड़क मसाला चाय' : currentLang === 'bn' ? 'গরম মশলা চা' : currentLang === 'ta' ? 'சூடான மசாலா டீ' : currentLang === 'ur' ? 'کڑک مصالحہ چائے' : 'Kadak Masala Chai', 
      price: 10, 
      native: '₹10 • Hot & Fresh' 
    },
    { 
      name: currentLang === 'hi' ? 'भुनी मूंगफली / बादाम' : currentLang === 'bn' ? 'ভাজা চিনাবাদাম' : currentLang === 'ta' ? 'வறுத்த கடலை' : currentLang === 'ur' ? 'بھنی ہوئی مونگ پھلی' : 'Roasted Peanuts (Badam)', 
      price: 10, 
      native: '₹10 • Fresh Roasted' 
    },
    { 
      name: currentLang === 'hi' ? 'गरमा-गरम समोसा (2 पीस)' : currentLang === 'bn' ? 'গরম গরম সিঙাড়া (২ টি)' : currentLang === 'ta' ? 'சூடான சமோசா (2)' : currentLang === 'ur' ? 'گرما گرم سموسہ (2 عدد)' : 'Crispy Aloo Samosa (2 pcs)', 
      price: 15, 
      native: '₹15 • Hot & Spicy' 
    },
    { 
      name: currentLang === 'hi' ? 'रेल नीर बोतल (1L)' : currentLang === 'bn' ? 'রেল নীর জলের বোতল (১ লিটার)' : currentLang === 'ta' ? 'ரயில் நீர் பாட்டில் (1L)' : currentLang === 'ur' ? 'ریل نیر پانی کی بوتل (1 لیٹر)' : 'Rail Neer Packaged Water (1L)', 
      price: 15, 
      native: '₹15 • Official MRP' 
    },
  ];

  const handleSendSignal = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setSignalSent(true);
    }, 600);
  };

  return (
    <section id="commuters" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-xs font-bold tracking-wide uppercase mb-4">
            <Train className="w-3.5 h-3.5 text-blue-700" />
            <span>{t.commuterBadge || t.stepsBadge || 'Built For Suburban Commuters'}</span>
          </div>
          <h2 className={`font-black tracking-tight text-slate-900 mb-4 ${seniorMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl lg:text-4xl'}`}>
            {t.commuterTitle || t.stepsHeadline || 'How Commuters Get Food in 3 Easy Steps'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.commuterSubhead || t.stepsSubhead || 'Never risk missing your local train again. Order right from your coach without stepping onto the crowded platform.'}
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          
          {/* Step 1 */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs hover:shadow-md transition group">
            <div className="flex items-center justify-between mb-6">
              <span className="text-4xl sm:text-5xl font-black text-blue-900/20 group-hover:text-blue-900/40 transition">
                01
              </span>
              <div className="w-12 h-12 rounded-2xl bg-blue-900 text-amber-400 flex items-center justify-center shadow-md">
                <Compass className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              {t.step1Title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.step1Desc}
            </p>
            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs font-semibold text-blue-800 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>{t.step1Sub || 'Offline timetable auto-populates stops'}</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs hover:shadow-md transition group">
            <div className="flex items-center justify-between mb-6">
              <span className="text-4xl sm:text-5xl font-black text-amber-600/20 group-hover:text-amber-600/40 transition">
                02
              </span>
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-md">
                <BellRing className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              {t.step2Title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.step2Desc}
            </p>
            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs font-semibold text-amber-800 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>{t.step2Sub || 'Broadcasting across all compartments'}</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs hover:shadow-md transition group">
            <div className="flex items-center justify-between mb-6">
              <span className="text-4xl sm:text-5xl font-black text-emerald-600/20 group-hover:text-emerald-600/40 transition">
                03
              </span>
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              {t.step3Title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.step3Desc}
            </p>
            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>{t.step3Sub || 'Hassle-free UPI or exact cash'}</span>
            </div>
          </div>

        </div>

        {/* Interactive Commuter Hunger Signal Mini-Simulator */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 text-white p-6 sm:p-8 shadow-2xl border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">{t.simBadge || 'Interactive Simulator'}</span>
              </div>
              <h4 className="text-xl font-black text-white mt-1">{t.simTitle || 'Send a Hunger Signal'}</h4>
            </div>
            <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1.5 rounded-full border border-slate-700 font-mono">
              {t.simTrain || 'Simulated EMU Local • Thane Special'}
            </span>
          </div>

          <div className="py-6 space-y-6">
            {/* Step A: Choose Food */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">
                {t.simCraving || t.simStep1Label || '1. Choose Item'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {foodChoices.map((food) => {
                  const isSelected = selectedItem.name === food.name;
                  return (
                    <button
                      key={food.name}
                      onClick={() => {
                        setSelectedItem(food);
                        setSignalSent(false);
                      }}
                      className={`flex items-center justify-between p-3 rounded-xl border text-left transition cursor-pointer ${
                        isSelected
                          ? 'bg-amber-400/10 border-amber-400 text-white shadow-xs'
                          : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold flex items-center gap-1.5">
                          <span>{food.name}</span>
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">{food.native}</div>
                      </div>
                      <span className="text-sm font-black text-amber-400 bg-slate-900/80 px-2 py-1 rounded-md border border-slate-700 shrink-0">
                        ₹{food.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step B: Coach and Seat Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                  {t.simSelectCoach || t.simStep2Label || '2. Coach / Compartment'}
                </label>
                <select
                  value={selectedCoach}
                  onChange={(e) => {
                    setSelectedCoach(e.target.value);
                    setSignalSent(false);
                  }}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-hidden focus:border-amber-400"
                >
                  <option>GS-1 (Coach 2 - General)</option>
                  <option>GS-2 (Coach 4 - Middle)</option>
                  <option>L-1 (Coach 3 - Ladies Special)</option>
                  <option>GS-3 (Coach 7 - Middle)</option>
                  <option>VND-1 (Coach 4 - Vendor & Luggage)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                  {t.simStep3Label || '3. Seat / Window Note (Optional)'}
                </label>
                <input
                  type="text"
                  value={seatNote}
                  onChange={(e) => {
                    setSeatNote(e.target.value);
                    setSignalSent(false);
                  }}
                  placeholder="e.g. Near Door 2, Window"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-hidden focus:border-amber-400"
                />
              </div>
            </div>

            {/* Signal Result or CTA */}
            {signalSent ? (
              <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/60 text-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-black shrink-0">
                    ✓
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{t.simBroadcastActive || t.simBroadcastSuccess || 'Hunger Signal Active!'} ({selectedCoach})</div>
                    <div className="text-xs text-emerald-300">
                      {t.simOrderPlaced || t.simVendorAccepted || 'Vendor notified and approaching'} • ₹{selectedItem.price}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSignalSent(false)}
                  className="text-xs bg-emerald-800 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg font-semibold transition cursor-pointer"
                >
                  {t.simReset || t.simResetBtn || 'Send Another Signal'}
                </button>
              </div>
            ) : (
              <button
                id="btn-simulate-hunger-signal"
                onClick={handleSendSignal}
                disabled={isSimulating}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition transform active:scale-98 cursor-pointer"
              >
                {isSimulating ? (
                  <span>{t.simSignalBroadcasting || t.simBroadcasting || 'Broadcasting Signal to Nearby Hawkers...'}</span>
                ) : (
                  <>
                    <BellRing className="w-5 h-5 text-slate-950" />
                    <span>{t.simSendSignal || t.simSendBtn || 'Send Hunger Signal'} - {selectedItem.name} (₹{selectedItem.price})</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
