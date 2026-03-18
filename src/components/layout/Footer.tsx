'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#eeeeee] h-16 px-6 relative z-50 flex items-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-0">
        
        {/* Left: Branding */}
        <div className="flex items-center justify-center md:justify-start">
          <Link href="/" className="flex items-center group">
            <Image 
              src="/assets/Perks Hub Logo (2).svg" 
              alt="Perkshub Logo" 
              width={100} 
              height={28} 
              className="h-6 w-auto"
            />
          </Link>
        </div>
        
        {/* Center: Navigation Links */}
        <div className="flex items-center justify-center gap-8">
          <Link href="/discover" className="text-xs font-normal text-[#6b6b6b] hover:text-[#111111] transition-colors uppercase tracking-widest">Discover</Link>
          <Link href="/outreach" className="text-xs font-normal text-[#6b6b6b] hover:text-[#111111] transition-colors uppercase tracking-widest">Outreach</Link>
          <Link href="/perks" className="text-xs font-normal text-[#6b6b6b] hover:text-[#111111] transition-colors uppercase tracking-widest">Perks</Link>
          <Link href="/analytics" className="text-xs font-normal text-[#6b6b6b] hover:text-[#111111] transition-colors uppercase tracking-widest">Analytics</Link>
        </div>
        
        {/* Right: Copyright */}
        <div className="flex items-center justify-center md:justify-end">
          <p className="text-[10px] text-[#999999] font-normal tracking-wide text-center md:text-right">
            © {new Date().getFullYear()} Perkshub. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
