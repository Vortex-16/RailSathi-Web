import { useEffect, useState } from 'react';

export function useOnlineStatus() {
  const [realOnline, setRealOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );
  // Allow simulation for railway dead-zone testing
  const [simulatedOffline, setSimulatedOffline] = useState(false);
  const [lowBandwidthMode, setLowBandwidthMode] = useState(false);

  useEffect(() => {
    const handleOnline = () => setRealOnline(true);
    const handleOffline = () => setRealOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const isOnline = realOnline && !simulatedOffline;

  const toggleSimulatedOffline = () => {
    setSimulatedOffline((prev) => !prev);
  };

  const toggleLowBandwidth = () => {
    setLowBandwidthMode((prev) => !prev);
  };

  return {
    isOnline,
    realOnline,
    simulatedOffline,
    toggleSimulatedOffline,
    lowBandwidthMode,
    toggleLowBandwidth,
  };
}
