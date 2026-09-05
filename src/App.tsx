/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GSAPScrollProgress } from './components/GSAPScrollProgress';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TheBigDifference } from './components/TheBigDifference';
import { CommuterSteps } from './components/CommuterSteps';
import { VendorBenefits } from './components/VendorBenefits';
import { CoreFeaturesGrid } from './components/CoreFeaturesGrid';
import { InstallationGuide } from './components/InstallationGuide';
import { StickyDownloadBar } from './components/StickyDownloadBar';
import { Footer } from './components/Footer';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { LanguageCode, UserRole } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('en');
  const [seniorMode, setSeniorMode] = useState<boolean>(false);
  const [lowBandwidthMode, setLowBandwidthMode] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<UserRole>('TRAVELER');

  const [activeSection, setActiveSection] = useState<string>('hero');

  const { isOnline, simulatedOffline, toggleSimulatedOffline } = useOnlineStatus();

  React.useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ur' ? 'rtl' : 'ltr';
  }, [currentLang]);

  // Track active section for high-contrast header navigation highlighting
  React.useEffect(() => {
    const sectionIds = ['hero', 'difference', 'commuters', 'vendors', 'features', 'install-guide'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#0e100f] text-[#fffce1] flex flex-col font-sans transition-all selection:bg-[#0ae448] selection:text-[#0e100f] ${
      seniorMode ? 'text-lg' : 'text-base'
    }`}>
      {/* GSAP Scroll Progress Bar */}
      <GSAPScrollProgress />

      {/* Top Fixed Header */}
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
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (Above the fold) */}
        <Hero
          currentLang={currentLang}
          seniorMode={seniorMode}
          onNavigate={handleNavigate}
          userRole={userRole}
          onRoleChange={setUserRole}
        />

        {/* 2. The Big Difference (Why RailSaathi is NOT Zepto or Blinkit) */}
        <TheBigDifference
          currentLang={currentLang}
          seniorMode={seniorMode}
        />

        {/* 3. For Daily Commuters (3-Step Journey + Hunger Signal Simulator) */}
        <CommuterSteps
          currentLang={currentLang}
          seniorMode={seniorMode}
        />

        {/* 4. For Local Hawkers & Vendors (वेंडर्स के लिए क्या फायदा है?) */}
        <VendorBenefits
          currentLang={currentLang}
          seniorMode={seniorMode}
        />

        {/* 5. Authentic Train & Battery Features (4-Item Pill Grid + Interactive Drawers) */}
        <CoreFeaturesGrid
          currentLang={currentLang}
          seniorMode={seniorMode}
        />

        {/* 6. How to Install the App (Simple 30-Second Guide) */}
        <InstallationGuide
          currentLang={currentLang}
          seniorMode={seniorMode}
        />
      </main>

      {/* 7. Final Footer with CTA */}
      <Footer
        onNavigate={handleNavigate}
        seniorMode={seniorMode}
        currentLang={currentLang}
      />

      {/* Sticky Bottom Download APK Bar */}
      <StickyDownloadBar currentLang={currentLang} />
    </div>
  );
}
