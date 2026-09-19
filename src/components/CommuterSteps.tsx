import React, { useState } from 'react';
import { Compass, BellRing, Check, Coffee, Droplets, Sparkles, Train, ArrowRight, CheckCircle2 } from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ScrollReveal } from './ScrollReveal';

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
    <section id="commuters" className="py-16 sm:py-24 bg-[#f2ee98] border-b-2 border-[#10380b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#fce519] border border-[#10380b] text-xs font-mono font-bold text-[#10380b] mb-4 shadow-[2px_2px_0px_0px_#10380b]">
            <span>//</span>
            <span>{t.commuterBadge || t.stepsBadge || 'Built For Suburban Commuters'}</span>
            <span>//</span>
          </div>
          <h2 className={`font-display font-bold tracking-tight text-[#10380b] mb-4 ${seniorMode ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl lg:text-5xl'}`}>
            {t.commuterTitle || t.stepsHeadline || 'How Commuters Get Food in 3 Easy Steps'}
          </h2>
          <p className="text-[#10380b]/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            {t.commuterSubhead || t.stepsSubhead || 'Never risk missing your local train again. Order right from your coach without stepping onto the crowded platform.'}
          </p>
        </ScrollReveal>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          
          {/* Step 1 */}
          <ScrollReveal delay={0.08} className="h-full">
            <div className="h-full relative p-6 sm:p-8 rounded-[32px] bg-[#fefde6] border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b] flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-display font-bold text-[#10380b]">
                    01
                  </span>
                  <div className="w-11 h-11 rounded-full border-1.5 border-[#10380b] bg-[#fce519] text-[#10380b] flex items-center justify-center shadow-[2px_2px_0px_0px_#10380b]">
                    <Compass className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#10380b] mb-2 font-display">
                  {t.step1Title}
                </h3>
                <p className="text-[#10380b]/80 text-sm leading-relaxed font-medium">
                  {t.step1Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#10380b]/20 text-xs font-mono font-bold text-[#10380b] flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#10380b]" />
                <span>{t.step1Sub || 'Offline timetable auto-populates stops'}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Step 2 */}
          <ScrollReveal delay={0.16} className="h-full">
            <div className="h-full relative p-6 sm:p-8 rounded-[32px] bg-[#fefde6] border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b] flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-display font-bold text-[#10380b]">
                    02
                  </span>
                  <div className="w-11 h-11 rounded-full border-1.5 border-[#10380b] bg-[#fce519] text-[#10380b] flex items-center justify-center shadow-[2px_2px_0px_0px_#10380b]">
                    <BellRing className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#10380b] mb-2 font-display">
                  {t.step2Title}
                </h3>
                <p className="text-[#10380b]/80 text-sm leading-relaxed font-medium">
                  {t.step2Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#10380b]/20 text-xs font-mono font-bold text-[#10380b] flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#10380b]" />
                <span>{t.step2Sub || 'Broadcasting across all compartments'}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Step 3 */}
          <ScrollReveal delay={0.24} className="h-full">
            <div className="h-full relative p-6 sm:p-8 rounded-[32px] bg-[#fefde6] border-2 border-[#10380b] shadow-[6px_6px_0px_0px_#10380b] flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-display font-bold text-[#10380b]">
                    03
                  </span>
                  <div className="w-11 h-11 rounded-full border-1.5 border-[#10380b] bg-[#fce519] text-[#10380b] flex items-center justify-center shadow-[2px_2px_0px_0px_#10380b]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#10380b] mb-2 font-display">
                  {t.step3Title}
                </h3>
                <p className="text-[#10380b]/80 text-sm leading-relaxed font-medium">
                  {t.step3Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#10380b]/20 text-xs font-mono font-bold text-[#10380b] flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#10380b]" />
                <span>{t.step3Sub || 'Hassle-free UPI or exact cash'}</span>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Interactive Commuter Hunger Signal Mini-Simulator */}
        <ScrollReveal delay={0.1} className="max-w-3xl mx-auto">
          <div className="rounded-[36px] bg-[#fefde6] text-[#10380b] p-6 sm:p-8 border-2 border-[#10380b] shadow-[8px_8px_0px_0px_#10380b]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#10380b]/20 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#10380b]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#10380b] font-bold">{t.simBadge || 'Interactive Simulator'}</span>
              </div>
              <h4 className="text-2xl font-display font-bold text-[#10380b] mt-1">{t.simTitle || 'Send a Hunger Signal'}</h4>
            </div>
            <span className="text-xs bg-[#fce519] text-[#10380b] px-3.5 py-1.5 rounded-full border border-[#10380b] font-mono font-bold shadow-[2px_2px_0px_0px_#10380b]">
              {t.simTrain || 'Simulated EMU Local • Thane Special'}
            </span>
          </div>

          <div className="py-6 space-y-6">
            {/* Step A: Choose Food */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#10380b]/70 font-bold mb-3 block">
                {t.simCraving || t.simStep1Label || '1. Choose Item'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {foodChoices.map((food) => {
                  const isSelected = selectedItem.name === food.name;
                  return (
                    <button
                      key={food.name}
                      onClick={() => {
                        setSelectedItem(food);
                        setSignalSent(false);
                      }}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border-2 text-left transition cursor-pointer ${
                        isSelected
                          ? 'bg-[#fce519] border-[#10380b] text-[#10380b] shadow-[3px_3px_0px_0px_#10380b]'
                          : 'bg-[#f2ee98] border-[#10380b] text-[#10380b] hover:bg-[#dbe8ac]'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold flex items-center gap-1.5">
                          <span>{food.name}</span>
                        </div>
                        <div className="text-xs text-[#10380b]/75 font-medium mt-0.5">{food.native}</div>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#10380b] bg-[#fefde6] px-3 py-1 rounded-full border border-[#10380b] shrink-0 shadow-[1px_1px_0px_0px_#10380b]">
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
                <label className="text-xs font-mono uppercase tracking-wider text-[#10380b]/70 font-bold mb-2 block">
                  {t.simSelectCoach || t.simStep2Label || '2. Coach / Compartment'}
                </label>
                <select
                  value={selectedCoach}
                  onChange={(e) => {
                    setSelectedCoach(e.target.value);
                    setSignalSent(false);
                  }}
                  className="w-full bg-[#f2ee98] border-2 border-[#10380b] rounded-2xl px-3.5 py-2.5 text-sm text-[#10380b] font-medium focus:outline-hidden focus:bg-[#fce519]"
                >
                  <option>GS-1 (Coach 2 - General)</option>
                  <option>GS-2 (Coach 4 - Middle)</option>
                  <option>L-1 (Coach 3 - Ladies Special)</option>
                  <option>GS-3 (Coach 7 - Middle)</option>
                  <option>VND-1 (Coach 4 - Vendor & Luggage)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[#10380b]/70 font-bold mb-2 block">
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
                  className="w-full bg-[#f2ee98] border-2 border-[#10380b] rounded-2xl px-3.5 py-2.5 text-sm text-[#10380b] font-medium placeholder:text-[#10380b]/50 focus:outline-hidden focus:bg-[#fce519]"
                />
              </div>
            </div>

            {/* Signal Result or CTA */}
            {signalSent ? (
              <div className="p-5 rounded-2xl bg-[#dbe8ac] border-2 border-[#10380b] text-[#10380b] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[4px_4px_0px_0px_#10380b]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#10380b] bg-[#fce519] text-[#10380b] flex items-center justify-center font-bold shrink-0 shadow-[2px_2px_0px_0px_#10380b]">
                    ✓
                  </div>
                  <div>
                    <div className="font-bold text-base text-[#10380b]">{t.simBroadcastActive || t.simBroadcastSuccess || 'Hunger Signal Active!'} ({selectedCoach})</div>
                    <div className="text-xs font-mono font-bold text-[#10380b]">
                      {t.simOrderPlaced || t.simVendorAccepted || 'Vendor notified and approaching'} • ₹{selectedItem.price}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSignalSent(false)}
                  className="btn-marigold-pill !py-2 !px-4 text-xs font-bold"
                >
                  {t.simReset || t.simResetBtn || 'Send Another Signal'}
                </button>
              </div>
            ) : (
              <button
                id="btn-simulate-hunger-signal"
                onClick={handleSendSignal}
                disabled={isSimulating}
                className="w-full py-3.5 px-6 rounded-full border-2 border-[#10380b] bg-[#10380b] text-[#fefde6] hover:bg-[#10380b]/90 font-bold flex items-center justify-center gap-2 transition cursor-pointer text-sm shadow-[4px_4px_0px_0px_#fce519]"
              >
                {isSimulating ? (
                  <span className="font-mono text-center">{t.simSignalBroadcasting || t.simBroadcasting || 'Broadcasting Signal to Nearby Hawkers...'}</span>
                ) : (
                  <>
                    <BellRing className="w-4 h-4 text-[#fce519] shrink-0" />
                    <span className="text-center">{t.simSendSignal || t.simSendBtn || 'Send Hunger Signal'} • ₹{selectedItem.price}</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
