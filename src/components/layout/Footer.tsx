'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#eeeeee] h-32 md:h-40 px-6 relative z-50 flex items-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-0">
        
        {/* Left: Branding */}
        <div className="flex items-center justify-center md:justify-start">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 ai-gradient rounded-xl flex items-center justify-center text-white font-bold text-xl">P</div>
            <span className="text-2xl font-bold tracking-tight text-[#111111]">Perkshub</span>
          </Link>
        </div>
        
        {/* Center: Navigation Links */}
        <div className="flex items-center justify-center gap-8 md:gap-12">
          <Link href="/discover" className="text-sm md:text-base font-bold text-[#6b6b6b] hover:text-[#111111] transition-colors uppercase tracking-widest">Discover</Link>
          <Link href="/outreach" className="text-sm md:text-base font-bold text-[#6b6b6b] hover:text-[#111111] transition-colors uppercase tracking-widest">Outreach</Link>
          <Link href="/perks" className="text-sm md:text-base font-bold text-[#6b6b6b] hover:text-[#111111] transition-colors uppercase tracking-widest">Perks</Link>
          <Link href="/analytics" className="text-sm md:text-base font-bold text-[#6b6b6b] hover:text-[#111111] transition-colors uppercase tracking-widest">Analytics</Link>
        </div>
        
        {/* Right: Copyright */}
        <div className="flex items-center justify-center md:justify-end">
          <p className="text-xs md:text-sm text-[#999999] font-semibold tracking-wide text-center md:text-right">
            © {new Date().getFullYear()} Perkshub. <br className="md:hidden" />All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
