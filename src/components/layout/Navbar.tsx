'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="w-full md:w-[85%] max-w-6xl bg-white/70 backdrop-blur-xl border border-[#eeeeee] rounded-[24px] shadow-2xl shadow-black/5 pointer-events-auto overflow-hidden">
        <div className="px-6 h-14 md:h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-7 h-7 ai-gradient rounded-lg flex items-center justify-center text-white font-bold text-base">P</div>
            <span className="text-base font-bold tracking-tight text-[#111111] hidden sm:inline-block">PartnerPath AI</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/discover" className="text-sm font-medium text-[#6b6b6b] hover:text-[#111111] transition-colors">Discover</Link>
            <Link href="/outreach" className="text-sm font-medium text-[#6b6b6b] hover:text-[#111111] transition-colors">Outreach</Link>
            <Link href="/perks" className="text-sm font-medium text-[#6b6b6b] hover:text-[#111111] transition-colors">Perks</Link>
            <Link href="/analytics" className="text-sm font-medium text-[#6b6b6b] hover:text-[#111111] transition-colors">Analytics</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-[#6b6b6b] hover:text-[#111111] transition-colors px-2 hidden sm:block">Log in</Link>
            <Button asChild className="pill-button bg-[#111111] text-white hover:bg-[#111111]/90 h-[36px] md:h-[40px] px-4 md:px-5 text-xs md:text-sm">
              <Link href="/discover">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
