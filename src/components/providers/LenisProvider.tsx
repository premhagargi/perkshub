'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,             // Slightly snappier than the guide's 0.1
        duration: 1.0,         // Shorter duration for more responsive feel
        smoothWheel: true,
        smoothTouch: false,    // Keep touch scrolling native for better performance
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        wheelMultiplier: 1.0,  // Standard sensitivity
        touchMultiplier: 1.0,
        infinite: false,
        // Custom Easing: Exponential out for a soft landing
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      {children}
    </ReactLenis>
  );
}
