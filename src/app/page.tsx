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
  Star
} from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const notionLogo = PlaceHolderImages.find(img => img.id === 'notion-mock');
  const perplexityLogo = PlaceHolderImages.find(img => img.id === 'perplexity-mock');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 md:pt-48 md:pb-56 px-6 overflow-hidden bg-white">
        {/* Decorative Watermark Background */}
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 text-[22vw] font-black text-black/[0.02] select-none pointer-events-none uppercase tracking-tighter leading-none whitespace-nowrap z-0">
          Partners
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl text-left">
            <Badge className="bg-[#f3f3f3] text-[#111111] hover:bg-[#f3f3f3] border-none px-4 py-1.5 mb-8 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
              Partner Perks Platform
            </Badge>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#111111] leading-[1.05] tracking-tight mb-8">
              Acquire high-intent users through complementary products
            </h1>
            
            <p className="text-xl md:text-2xl text-[#6b6b6b] max-w-xl mb-10 font-normal leading-relaxed">
              PerksHub helps you partner with the products your users already love, driving scalable growth through trusted network recommendations.
            </p>

            <div className="space-y-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {[
                "Get discovered by high-intent audiences",
                "Convert users with tailored exclusive deals",
                "Scale through an automated partner network"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-lg font-medium text-[#111111]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <Button asChild className="pill-button bg-[#111111] text-white h-[60px] text-lg px-10 group shadow-2xl shadow-black/10 hover:shadow-black/20 transition-all duration-300">
              <Link href="/discover">Get in touch <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-white border-y border-[#eeeeee]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Traditional Growth Playbooks are breaking down</h2>
            <p className="text-xl text-[#6b6b6b] max-w-2xl mx-auto">
              Most acquisition channels are saturated, expensive, and drive low-intent traffic. It's getting harder to reach and convert the right users.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <Card key={i} className="border-none shadow-none bg-[#f9f9f9] rounded-3xl p-4">
                <CardContent className="pt-6">
                  <item.icon className="w-8 h-8 text-accent mb-6" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-[#6b6b6b]">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Acquire high-intent users through Partner Perks</h2>
            <p className="text-xl text-[#6b6b6b] max-w-2xl mx-auto">
              Join partner perks programs of complementary products - reach the right audience, offer exclusive deals that drive conversion, and build a scalable acquisition channel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Get discovered by relevant audience",
                desc: "Join Perk Programs of complementary products and get found by relevant audience."
              },
              {
                step: "2",
                title: "Incentivize users with exclusive perks",
                desc: "Drive trials and conversions with tailored discounts, free credits, or exclusive access."
              },
              {
                step: "3",
                title: "Drive growth through partnerships",
                desc: "Every new partnership becomes a steady, repeatable source of high-quality users."
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full ai-gradient flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-orange-500/20">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg text-[#6b6b6b]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-24 px-6 bg-[#f9f9f9] border-y border-[#eeeeee]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">A proven playbook used by the best</h2>
            <p className="text-xl text-[#6b6b6b]">Top SaaS and Creators already offer perks through partner ecosystems.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-[#eeeeee] rounded-3xl overflow-hidden bg-white">
              <div className="p-8">
                <div className="h-12 w-32 relative mb-6">
                  {perplexityLogo && <Image src={perplexityLogo.imageUrl} alt="Perplexity" fill className="object-contain" />}
                </div>
                <h3 className="text-2xl font-bold mb-4">Perplexity</h3>
                <p className="text-[#6b6b6b]">Perplexity offers 1-year Pro access to subscribers of Lenny's Newsletter, Airtel and more.</p>
              </div>
            </Card>
            <Card className="border-[#eeeeee] rounded-3xl overflow-hidden bg-white">
              <div className="p-8">
                <div className="h-12 w-32 relative mb-6">
                  {notionLogo && <Image src={notionLogo.imageUrl} alt="Notion" fill className="object-contain" />}
                </div>
                <h3 className="text-2xl font-bold mb-4">Notion</h3>
                <p className="text-[#6b6b6b]">Notion offers exclusive credits and perks to communities, accelerators, and products.</p>
              </div>
            </Card>
          </div>
          <p className="text-center text-sm font-bold uppercase tracking-widest text-[#6b6b6b]">
            Many more prominent brands offering partner perks
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything you need to run partner perks program</h2>
            <p className="text-xl text-[#6b6b6b]">Create perks, manage partnerships, track performance, and scale from one platform.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
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
              <Card key={i} className="border-[#eeeeee] rounded-3xl p-4 smooth-transition hover:shadow-xl hover:shadow-black/5">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-[#6b6b6b]">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Tiered Partner Perks", desc: "Offer different perks based on partner plans.", icon: Star },
              { title: "Track Performance", desc: "Monitor views, unlocks, and conversions.", icon: TrendingUp },
              { title: "Partner Discovery", desc: "Get discovered by partners through directory.", icon: Search },
              { title: "Managed Payouts", desc: "Automate payouts & settlements.", icon: Zap, comingSoon: true }
            ].map((item, i) => (
              <div key={i} className="p-6 border border-[#eeeeee] rounded-2xl relative">
                {item.comingSoon && (
                  <Badge className="absolute -top-3 right-4 bg-accent/10 text-accent border-none text-[10px] font-bold">Coming Soon</Badge>
                )}
                <item.icon className="w-6 h-6 text-[#111111] mb-4" />
                <h4 className="font-bold mb-1">{item.title}</h4>
                <p className="text-sm text-[#6b6b6b]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Growth Section */}
      <section className="py-24 px-6 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Grow partnerships without the heavy lifting</h2>
              <p className="text-xl text-[#6b6b6b]">Find the right partners, exchange perks effortlessly, and start growing.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 relative">
                {item.comingSoon && (
                  <Badge className="absolute top-8 right-8 bg-white/10 text-white/60 border-none text-[10px] font-bold">Coming Soon</Badge>
                )}
                <item.icon className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-[#6b6b6b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full ai-gradient opacity-5 blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Start acquiring new users through partnerships</h2>
          <p className="text-xl text-[#6b6b6b] mb-12 max-w-2xl mx-auto">
            Reach high-intent audiences through complementary products and turn partnerships into a scalable acquisition channel.
          </p>
          <Button asChild className="pill-button bg-[#111111] text-white h-[60px] px-12 text-xl group">
            <Link href="/discover">Get in touch <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
