'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/Loading-screen';

export default function LoadingManager() {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence > 
      {loading && 
        <LoadingScreen setLoading={setLoading} key="loading-screen" /> }
    </AnimatePresence> 

  );
}