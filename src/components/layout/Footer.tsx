'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#eeeeee] h-14 md:h-16 px-6 relative z-50">
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-7 h-7 ai-gradient rounded-lg flex items-center justify-center text-white font-bold text-base">P</div>
          <span className="text-base font-bold tracking-tight text-[#111111]">Perkshub</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <p className="text-[10px] md:text-xs text-[#999999] font-medium">
            © {new Date().getFullYear()} Perkshub
          </p>
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-[10px] md:text-xs text-[#999999] font-medium uppercase tracking-wider">Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
