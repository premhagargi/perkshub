import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Target, Zap } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-dashboard');

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)]">
      {/* Hero Section */}
      <section className="pt-24 pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f3f3f3] text-[#111111] text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 text-[#EE8412]" />
            <span>AI-Powered Partnership Engine</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold max-w-4xl mb-8">
            Grow faster together with <span className="text-transparent bg-clip-text ai-gradient">Intelligent</span> partnerships.
          </h1>
          <p className="text-xl md:text-2xl text-[#6b6b6b] max-w-2xl mb-12 font-normal leading-relaxed">
            PartnerPath AI identifies, connects, and automates mutual growth opportunities with partners who share your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="pill-button bg-[#111111] text-white h-[52px] text-lg px-10">
              <Link href="/discover">Find Your Partners <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button variant="secondary" asChild className="pill-button bg-[#f3f3f3] text-[#111111] h-[52px] text-lg px-10">
              <Link href="/analytics">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-[#eeeeee] shadow-2xl shadow-black/5 bg-white relative">
          <div className="p-4 border-b border-[#eeeeee] bg-[#f9f9f9] flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-[#f9f9f9] py-32 px-6 border-y border-[#eeeeee]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl ai-gradient flex items-center justify-center text-white mb-2">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Intelligent Discovery</h3>
              <p className="text-lg">Our AI engine scans millions of profiles to find partners with complementary product categories and shared audiences.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl ai-gradient flex items-center justify-center text-white mb-2">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Automated Outreach</h3>
              <p className="text-lg">Generate personalized, high-conversion outreach messages tailored to each potential partner's specific value proposition.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl ai-gradient flex items-center justify-center text-white mb-2">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Perk Management</h3>
              <p className="text-lg">Design and distribute exclusive perks, discounts, and trials through your partner network with built-in tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Ready to scale your ecosystem?</h2>
          <p className="text-xl text-[#6b6b6b] mb-12">Join 500+ enterprises building the future of collaborative growth.</p>
          <Button asChild className="pill-button bg-[#111111] text-white h-[52px] px-10">
            <Link href="/discover">Get Started for Free</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}