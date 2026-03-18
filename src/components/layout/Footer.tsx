'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#eeeeee] h-24 md:h-32 px-6 relative z-50">
      <div className="max-w-6xl mx-auto h-full grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-0">
        
        {/* Left: Branding */}
        <div className="flex items-center justify-center md:justify-start">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 ai-gradient rounded-lg flex items-center justify-center text-white font-bold text-lg">P</div>
            <span className="text-xl font-bold tracking-tight text-[#111111]">Perkshub</span>
          </Link>
        </div>
        
        {/* Center: Navigation Links */}
        <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-10">
          <Link href="/discover" className="text-sm font-bold text-[#6b6b6b] hover:text-[#111111] transition-colors uppercase tracking-widest">Discover</Link>
          <Link href="/outreach" className="text-sm font-bold text-[#6b6b6b] hover:text-[#111111] transition-colors uppercase tracking-widest">Outreach</Link>
          <Link href="/perks" className="text-sm font-bold text-[#6b6b6b] hover:text-[#111111] transition-colors uppercase tracking-widest">Perks</Link>
          <Link href="/analytics" className="text-sm font-bold text-[#6b6b6b] hover:text-[#111111] transition-colors uppercase tracking-widest">Analytics</Link>
        </div>
        
        {/* Right: Copyright */}
        <div className="flex items-center justify-center md:justify-end">
          <p className="text-xs md:text-sm text-[#999999] font-semibold tracking-wide">
            © {new Date().getFullYear()} Perkshub. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
