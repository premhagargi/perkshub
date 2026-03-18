import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  ShieldCheck, 
  MousePointerClick, 
  Search, 
  RefreshCw, 
  Zap,
  Star,
  Users,
  Gift,
  Rocket
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-40 px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl text-left">
            <Badge className="bg-[#f3f3f3] text-[#111111] hover:bg-[#f3f3f3] border-none px-4 py-1.5 mb-6 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
              Partner Perks Platform
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#111111] leading-[1.1] tracking-tight mb-6">
              Get high-intent users by partnering with complementary products
            </h1>
            
            <p className="text-lg md:text-xl text-[#6b6b6b] max-w-xl mb-8 font-normal leading-relaxed">
              PerksHub helps you partner with the products your users already love, driving scalable growth through trusted network recommendations.
            </p>

            <div className="space-y-3 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {[
                "Get discovered by high-intent audiences",
                "Convert users with tailored exclusive deals",
                "Scale through an automated partner network"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-base font-medium text-[#111111]">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <Button asChild className="pill-button bg-[#111111] text-white h-[56px] text-base px-10 group shadow-xl shadow-black/5 hover:shadow-black/10 transition-all duration-300">
              <Link href="/discover">Get in touch <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-white border-y border-[#eeeeee]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Traditional Growth Playbooks are breaking down</h2>
            <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto">
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
              <Card key={i} className="border-none shadow-none bg-[#f9f9f9] rounded-3xl p-2">
                <CardContent className="pt-6">
                  <item.icon className="w-7 h-7 text-accent mb-4" />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-[#6b6b6b]">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section 1 - The Perks Strategy */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Acquire high-intent users through Partner Perks</h2>
            <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto">
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
                icon: Rocket,
                featured: true
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="relative group flex flex-col bg-[#F7F7F8] border border-gray-100 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden"
              >
                {item.featured && (
                  <div className="absolute top-4 right-4 bg-[#FF5A1F] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-20">
                    Featured
                  </div>
                )}
                
                <div className="bg-[#EFEFF1] h-64 flex items-center justify-center relative">
                  <item.icon className="w-20 h-20 text-gray-400 transform transition-transform group-hover:scale-110 duration-500" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF5A1F] mt-2">
                    {item.label}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-1 leading-snug">
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

      {/* Solution Section 2 - The Playbook */}
      <section className="py-16 px-6 bg-white border-t border-[#eeeeee]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">A proven playbook used by the best</h2>
            <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto">
              Top SaaS and Creators already offer perks through partner ecosystems to reach high-intent users and drive adoption.
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
                icon: Rocket,
                featured: true
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="relative group flex flex-col bg-[#F7F7F8] border border-gray-100 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden"
              >
                {item.featured && (
                  <div className="absolute top-4 right-4 bg-[#FF5A1F] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-20">
                    Featured
                  </div>
                )}
                
                <div className="bg-[#EFEFF1] h-64 flex items-center justify-center relative">
                  <item.icon className="w-20 h-20 text-gray-400 transform transition-transform group-hover:scale-110 duration-500" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF5A1F] mt-2">
                    {item.label}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-1 leading-snug">
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

      {/* Features Section */}
      <section className="py-20 px-6 bg-white border-t border-[#eeeeee]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Everything you need to run partner perks program</h2>
            <p className="text-lg text-[#6b6b6b]">Create perks, manage partnerships, track performance, and scale from one platform.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "Create tailored perks for partners and users",
                desc: "Create perks with discounts, credits, trials, and commissions customized for each partner."
              },
              {
                title: "Manage Partner and Perks easily in one place",
                desc: "Manage partners, deals, access rules, and redemptions in one place without the complexity."
              },
              {
                title: "Create your own Partner Perks Program",
                desc: "Create a branded perks page to offer partner perks and add more value to your users."
              }
            ].map((item, i) => (
              <Card key={i} className="border-[#eeeeee] rounded-3xl p-2 smooth-transition hover:shadow-lg hover:shadow-black/5">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                  <p className="text-sm text-[#6b6b6b]">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Tiered Partner Perks", desc: "Offer different perks based on partner plans.", icon: Star },
              { title: "Track Performance", desc: "Monitor views, unlocks, and conversions.", icon: TrendingUp },
              { title: "Partner Discovery", desc: "Get discovered by partners through directory.", icon: Search },
              { title: "Managed Payouts", desc: "Automate payouts & settlements.", icon: Zap, comingSoon: true }
            ].map((item, i) => (
              <div key={i} className="p-5 border border-[#eeeeee] rounded-2xl relative">
                {item.comingSoon && (
                  <Badge className="absolute -top-2 right-4 bg-accent/10 text-accent border-none text-[9px] font-bold">Coming Soon</Badge>
                )}
                <item.icon className="w-5 h-5 text-[#111111] mb-3" />
                <h4 className="text-sm font-bold mb-1">{item.title}</h4>
                <p className="text-xs text-[#6b6b6b]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Growth Section */}
      <section className="py-20 px-6 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-medium mb-3 text-white">Grow partnerships without the heavy lifting</h2>
              <p className="text-lg text-[#6b6b6b]">Find the right partners, exchange perks effortlessly, and start growing.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Partner Directory",
                desc: "Discover and connect with products already looking for partnerships.",
                comingSoon: true,
                icon: Search
              },
              {
                title: "Easy Partner Outreach",
                desc: "Find partners with overlapping audiences and reach out with proposals faster with built-in AI.",
                icon: MousePointerClick
              },
              {
                title: "Two-Way Perks Exchange",
                desc: "Onboard new partners in minutes and set up mutual perk exchange deals without friction.",
                icon: RefreshCw
              }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 relative">
                {item.comingSoon && (
                  <Badge className="absolute top-6 right-6 bg-white/10 text-white/60 border-none text-[9px] font-bold">Coming Soon</Badge>
                )}
                <item.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-medium mb-3 text-white">{item.title}</h3>
                <p className="text-sm text-[#6b6b6b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full ai-gradient opacity-5 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-left">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-medium mb-6 text-left">Start acquiring new users through partnerships</h2>
            <p className="text-lg text-[#6b6b6b] mb-10 max-w-xl text-left">
              Reach high-intent audiences through complementary products and turn partnerships into a scalable acquisition channel.
            </p>
            <div className="flex justify-start">
              <Button asChild className="pill-button bg-[#111111] text-white h-[56px] px-10 text-lg group">
                <Link href="/discover">Get in touch <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
