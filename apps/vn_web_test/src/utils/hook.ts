import { isMobile } from '@/utils';
import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isM, setIsM] = useState(window.innerWidth <= 768 || isMobile());
  useEffect(() => {
    const checkMobile = () => {
      setIsM(window.innerWidth <= 768 || isMobile());
    };
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  return {
    isM,
  };
};
