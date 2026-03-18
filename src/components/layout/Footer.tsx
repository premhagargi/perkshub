'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#eeeeee] pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 ai-gradient rounded-lg flex items-center justify-center text-white font-bold text-lg">P</div>
              <span className="text-xl font-bold tracking-tight text-[#111111]">PartnerPath AI</span>
            </Link>
            <p className="text-[#6b6b6b] max-w-xs mb-8 leading-relaxed">
              Empowering high-growth companies to discover and manage scalable partnership ecosystems.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-[#f9f9f9] flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-[#f9f9f9] flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-[#f9f9f9] flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
                <Github className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#111111] mb-6 uppercase tracking-widest text-[10px]">Platform</h4>
            <ul className="space-y-4">
              <li><Link href="/discover" className="text-sm text-[#6b6b6b] hover:text-[#111111] transition-colors">Discover Partners</Link></li>
              <li><Link href="/outreach" className="text-sm text-[#6b6b6b] hover:text-[#111111] transition-colors">Outreach Assistant</Link></li>
              <li><Link href="/perks" className="text-sm text-[#6b6b6b] hover:text-[#111111] transition-colors">Perk Management</Link></li>
              <li><Link href="/analytics" className="text-sm text-[#6b6b6b] hover:text-[#111111] transition-colors">Ecosystem Analytics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#111111] mb-6 uppercase tracking-widest text-[10px]">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-[#6b6b6b] hover:text-[#111111] transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-sm text-[#6b6b6b] hover:text-[#111111] transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm text-[#6b6b6b] hover:text-[#111111] transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm text-[#6b6b6b] hover:text-[#111111] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#111111] mb-6 uppercase tracking-widest text-[10px]">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-[#6b6b6b] hover:text-[#111111] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-[#6b6b6b] hover:text-[#111111] transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-[#6b6b6b] hover:text-[#111111] transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#f3f3f3] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#999999]">
            © {new Date().getFullYear()} PartnerPath AI. Built for the modern growth engine.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-[#999999]">Status: All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
