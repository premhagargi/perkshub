'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#eeeeee] min-h-[80px] md:min-h-[100px] px-6 relative z-50">
  <div className="max-w-6xl mx-auto h-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 py-6 md:py-0">
    
    <div className="flex items-center gap-8 shrink-0">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 ai-gradient rounded-lg flex items-center justify-center text-white font-bold text-lg">P</div>
        <span className="text-lg font-bold tracking-tight text-[#111111]">Perkshub</span>
      </Link>
    </div>
    
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
      <Link href="/discover" className="text-sm font-semibold text-[#6b6b6b] hover:text-[#111111] transition-colors uppercase tracking-wider">Discover</Link>
      <Link href="/outreach" className="text-sm font-semibold text-[#6b6b6b] hover:text-[#111111] transition-colors uppercase tracking-wider">Outreach</Link>
      <Link href="/perks" className="text-sm font-semibold text-[#6b6b6b] hover:text-[#111111] transition-colors uppercase tracking-wider">Perks</Link>
      <Link href="/analytics" className="text-sm font-semibold text-[#6b6b6b] hover:text-[#111111] transition-colors uppercase tracking-wider">Analytics</Link>
    </div>
    
    <div className="flex items-center gap-6 shrink-0">
      <p className="text-xs md:text-sm text-[#999999] font-medium tracking-wide">
        © {new Date().getFullYear()} Perkshub. All rights reserved.
      </p>
    </div>

  </div>
</footer>
  );
}
