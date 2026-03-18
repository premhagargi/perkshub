'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#eeeeee] transition-transform duration-500 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-12 md:h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center group shrink-0">
          <Image 
            src="/assets/Perks Hub Logo (2).svg" 
            alt="Perkshub Logo" 
            width={120} 
            height={32} 
            priority
            className="h-8 w-auto"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/discover" className="text-sm font-medium text-[#6b6b6b] hover:text-[#111111] transition-colors">Discover</Link>
          <Link href="/outreach" className="text-sm font-medium text-[#6b6b6b] hover:text-[#111111] transition-colors">Outreach</Link>
          <Link href="/perks" className="text-sm font-medium text-[#6b6b6b] hover:text-[#111111] transition-colors">Perks</Link>
          <Link href="/analytics" className="text-sm font-medium text-[#6b6b6b] hover:text-[#111111] transition-colors">Analytics</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm font-medium text-[#6b6b6b] hover:text-[#111111] transition-colors px-2 hidden sm:block">Log in</Link>
          <Button asChild className="pill-button bg-[#111111] text-white hover:bg-[#111111]/90 h-[32px] px-3 text-xs md:text-sm">
            <Link href="/discover">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
