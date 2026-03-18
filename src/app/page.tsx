
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  ShieldCheck, 
  MousePointerClick, 
  Search, 
  RefreshCw, 
  Zap,
  Gift,
  Rocket,
  ArrowRight,
  BarChart3,
  Layers,
  Shield
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 px-6 overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl text-left">
            <div className="opacity-0 animate-blur-in">
              <Badge className="bg-[#f3f3f3] text-[#6b6b6b] hover:bg-[#f3f3f3] border-none px-4 py-1.5 mb-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
                Partner Perks Platform
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-medium text-[#111111] leading-[1.05] tracking-tight mb-3 opacity-0 animate-blur-in delay-100">
              Get high-intent users by partnering with complementary products
            </h1>
            
            <p className="text-lg md:text-xl text-[#6b6b6b] max-w-xl mb-4 font-normal leading-relaxed opacity-0 animate-blur-in delay-200">
              Perkshub helps you partner with the products your users already love, driving scalable growth through trusted network recommendations.
            </p>

            <div className="space-y-1 mb-6 opacity-0 animate-blur-in delay-300">
              {[
                "Get discovered by high-intent audiences",
                "Convert users with tailored exclusive deals",
                "Scale through an automated partner network"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-base font-medium text-[#6b6b6b]">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-start opacity-0 animate-blur-in delay-400">
              <Button asChild className="pill-button bg-[#111111] text-white h-[38px] text-base px-5 group shadow-xl shadow-black/5 hover:shadow-black/10 transition-all duration-300">
                <Link href="/discover">
                  Get started 
                  <svg className="ml-2 w-8 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M14 5l7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Wrapper with Side Borders */}
      <div className="max-w-6xl mx-auto border-x border-[#eeeeee]">
        {/* Showcase Image Section */}
        <section className="relative overflow-hidden border-b border-[#eeeeee] opacity-0 animate-blur-in delay-400 px-6 py-6 bg-white">
          <div className="relative overflow-hidden bg-[#f9f9f9] border border-[#eeeeee] rounded-xl mx-auto max-w-5xl">
            <Image 
              src="/assets/Frame.png" 
              alt="Partner Platform Showcase"
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-6 bg-white border-b border-[#eeeeee]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium mb-4">Traditional Growth Playbooks are breaking down</h2>
              <p className="text-lg md:text-xl text-[#6b6b6b] max-w-2xl mx-auto">
                Most acquisition channels are saturated, expensive, and drive low-intent traffic. It's getting harder to reach and convert the right users.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "Crowded channels", 
                  desc: "Everyone competes in the same space, making it harder to stand out.",
                  icon: AlertCircle 
                },
                { 
                  title: "Low intent traffic", 
                  desc: "Lots of views, but very few high-intent users who actually convert.",
                  icon: MousePointerClick 
                },
                { 
                  title: "Low ROI", 
                  desc: "Rising CAC and falling conversion is crushing margins.",
                  icon: TrendingUp 
                },
                { 
                  title: "Lack of trust signals", 
                  desc: "Amidst so much noise, people rely on trusted recommendations.",
                  icon: ShieldCheck 
                }
              ].map((item, i) => (
                <Card key={i} className="border border-[#eeeeee] shadow-md shadow-black/5 bg-[#f9f9f9] rounded-xl p-8 smooth-transition hover:border-accent/30 hover:shadow-lg hover:shadow-black/10">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#eeeeee] flex items-center justify-center mb-6">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-[#6b6b6b] leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section 1 - Strategy */}
        <section className="py-16 px-6 bg-white border-b border-[#eeeeee]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium mb-4">Acquire high-intent users through Partner Perks</h2>
              <p className="text-lg md:text-xl text-[#6b6b6b] max-w-2xl mx-auto">
                Join partner perks programs of complementary products - reach the right audience, offer exclusive deals that drive conversion, and build a scalable acquisition channel.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  label: "EXAMPLE",
                  title: "Perplexity",
                  desc: "Perplexity offers 1-year Pro access to subscribers Lenny's Newsletter, Airtel and more",
                  icon: Zap
                },
                {
                  label: "CONVERSION",
                  title: "Incentivize users with exclusive perks",
                  desc: "Drive trials and conversions with tailored discounts, free credits, or exclusive access.",
                  icon: Gift
                },
                {
                  label: "GROWTH",
                  title: "Drive growth through partnerships",
                  desc: "Every new partnership becomes a steady, repeatable source of high-quality users.",
                  icon: Rocket
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="relative group flex flex-col bg-[#F7F7F8] border border-gray-100 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden"
                >
                  <div className="bg-[#EFEFF1] h-64 flex items-center justify-center relative">
                    <item.icon className="w-20 h-20 text-gray-400 transform transition-transform group-hover:scale-110 duration-500" />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-accent mt-2">
                      {item.label}
                    </span>
                    <h3 className="text-lg font-medium text-gray-900 mt-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section - Repeated Card Grid */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium mb-4">Everything you need to run partner perks program</h2>
              <p className="text-lg md:text-xl text-[#6b6b6b] max-w-2xl mx-auto">Create perks, manage partnerships, track performance, and scale from one platform.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  label: "ANALYTICS",
                  title: "Deep Performance Insights",
                  desc: "Track every conversion, view, and redemption across your entire partner ecosystem in real-time.",
                  icon: BarChart3
                },
                {
                  label: "MANAGEMENT",
                  title: "Seamless Program Control",
                  desc: "Design complex perk structures and manage multi-partner relationships with ease.",
                  icon: Layers
                },
                {
                  label: "SECURITY",
                  title: "Fraud & Access Protection",
                  desc: "Secure distribution channels ensure perks reach only high-intent, verified users.",
                  icon: Shield
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="relative group flex flex-col bg-[#F7F7F8] border border-gray-100 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden"
                >
                  <div className="bg-[#EFEFF1] h-64 flex items-center justify-center relative">
                    <item.icon className="w-20 h-20 text-gray-400 transform transition-transform group-hover:scale-110 duration-500" />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-accent mt-2">
                      {item.label}
                    </span>
                    <h3 className="text-lg font-medium text-gray-900 mt-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 bg-white relative overflow-hidden border-t border-[#eeeeee]">
          <div className="max-w-5xl mx-auto relative z-10 text-left">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-left">Start acquiring new users through partnerships</h2>
              <p className="text-lg md:text-xl text-[#6b6b6b] mb-10 max-w-xl text-left">
                Reach high-intent audiences through complementary products and turn partnerships into a scalable acquisition channel.
              </p>
              <div className="flex justify-start">
                <Button asChild className="pill-button bg-[#111111] text-white h-[38px] px-5 text-base group">
                  <Link href="/discover">Get in touch <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
