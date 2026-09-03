/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InteractiveUserFlow } from './components/InteractiveUserFlow';
import { CoachRadar } from './components/CoachRadar';
import { OfflineTimetable } from './components/OfflineTimetable';
import { LowBandwidthShowcase } from './components/LowBandwidthShowcase';
import { InstallationGuide } from './components/InstallationGuide';
import { Footer } from './components/Footer';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { LanguageCode } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('en');
  const [seniorMode, setSeniorMode] = useState<boolean>(false);
  const [lowBandwidthMode, setLowBandwidthMode] = useState<boolean>(false);

  const { isOnline, simulatedOffline, toggleSimulatedOffline } = useOnlineStatus();

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-white text-slate-900 flex flex-col font-sans transition-all selection:bg-amber-400 selection:text-slate-950 ${
      seniorMode ? 'text-lg' : 'text-base'
    }`}>
      {/* Top Sticky Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        seniorMode={seniorMode}
        onToggleSeniorMode={() => setSeniorMode(prev => !prev)}
        isOnline={isOnline}
        simulatedOffline={simulatedOffline}
        onToggleSimulateOffline={toggleSimulatedOffline}
        lowBandwidthMode={lowBandwidthMode}
        onToggleLowBandwidth={() => setLowBandwidthMode(prev => !prev)}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero & Value Propositions */}
        <Hero
          currentLang={currentLang}
          seniorMode={seniorMode}
          onNavigate={handleNavigate}
        />

        {/* 2. Interactive Core User Journeys (CUJs) */}
        <InteractiveUserFlow
          currentLang={currentLang}
          seniorMode={seniorMode}
        />

        {/* 3. Authentic 12-Car EMU Coach Radar */}
        <CoachRadar
          seniorMode={seniorMode}
        />

        {/* 4. Pre-Bundled Offline Timetables & Departures */}
        <OfflineTimetable
          seniorMode={seniorMode}
        />

        {/* 5. Low-Bandwidth & 2G Network Resilience Showcase */}
        <LowBandwidthShowcase
          isOnline={isOnline}
          simulatedOffline={simulatedOffline}
          onToggleSimulateOffline={toggleSimulatedOffline}
          lowBandwidthMode={lowBandwidthMode}
          onToggleLowBandwidth={() => setLowBandwidthMode(prev => !prev)}
          seniorMode={seniorMode}
        />

        {/* 6. Step-by-Step Android Sideloading & 60s Onboarding Guide */}
        <InstallationGuide
          seniorMode={seniorMode}
        />
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        seniorMode={seniorMode}
      />
    </div>
  );
}

