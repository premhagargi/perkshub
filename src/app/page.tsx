import Link from 'next/link';
import Image from 'next/image';
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
  Gift,
  Rocket
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const getPlaceholderById = (id: string) => PlaceHolderImages.find(img => img.id === id);

  const perksData = [
    { name: 'Pipedrive', members: '2,376', desc: 'Sales software to help you focus on the deals that matter.', perk: '20% off for 12 months', save: 'Save up to $2,376', logoId: 'brand-shopify' },
    { name: 'Google Cloud (GCP)', members: '10,333', desc: 'Cloud services by Google.', perk: '$2,000 in credits for 1 year', save: 'Save up to $350,000', logoId: 'brand-gcp' },
    { name: 'HubSpot', members: '2,678', desc: 'CRM, marketing, automation & customer service suite.', perk: '90% off Professional plans', save: 'Save up to $17,000', logoId: 'brand-hubspot' },
    { name: 'Intercom', members: '2,943', desc: 'Strengthen relationships with customers.', perk: '1 year free on Advanced', save: 'Save up to $6,108', logoId: 'brand-shopify' },
    { name: 'Shopify', members: '1,952', desc: 'Ecommerce platform for online stores.', perk: '$1/mo for first 3 months', save: 'Save up to $4,500', logoId: 'brand-shopify' },
    { name: 'Airtable', members: '7,714', desc: 'Easily store and organize your data.', perk: '$1,000 in credits for 1 year', save: 'Save up to $1,000', logoId: 'brand-airtable' },
    { name: 'Auth0', members: '1,331', desc: 'Adaptable authentication platform.', perk: '12 months free', save: 'Save up to $22,000', logoId: 'brand-hubspot' },
    { name: 'ElevenLabs', members: '3,027', desc: 'AI-powered text-to-speech voices.', perk: '12 months free credits', save: 'Save up to $4,000', logoId: 'brand-airtable' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 px-6 overflow-hidden bg-white">
        {/* Decorative background hues - Slightly darker as requested */}
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] ai-gradient opacity-[0.5] blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 -left-48 w-[500px] h-[500px] ai-gradient opacity-[0.45] blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl text-left mb-20">
            <div className="opacity-0 animate-blur-in">
              <Badge className="bg-[#f3f3f3] text-[#111111] hover:bg-[#f3f3f3] border-none px-4 py-1.5 mb-6 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
                Partner Perks Platform
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-medium text-[#111111] leading-[1.1] tracking-tight mb-6 opacity-0 animate-blur-in delay-100">
              Get high-intent users by partnering with complementary products
            </h1>
            
            <p className="text-lg md:text-xl text-[#6b6b6b] max-w-xl mb-8 font-normal leading-relaxed opacity-0 animate-blur-in delay-200">
              Perkshub helps you partner with the products your users already love, driving scalable growth through trusted network recommendations.
            </p>

            <div className="space-y-3 mb-10 opacity-0 animate-blur-in delay-300">
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
            
            <div className="flex justify-start opacity-0 animate-blur-in delay-400">
              <Button asChild className="pill-button bg-[#111111] text-white h-[56px] text-base px-10 group shadow-xl shadow-black/5 hover:shadow-black/10 transition-all duration-300">
                <Link href="/discover">Get started <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
            </div>
          </div>

          {/* Featured Perks Grid - Integrated in Hero */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 opacity-0 animate-blur-in delay-400">
            {perksData.map((perk, i) => {
              const placeholder = getPlaceholderById(perk.logoId);
              return (
                <Card key={i} className="border-[#eeeeee] shadow-none rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative w-12 h-12 flex-shrink-0 rounded-lg border border-[#eeeeee] overflow-hidden bg-gray-50 flex items-center justify-center">
                        {placeholder && (
                          <Image 
                            src={placeholder.imageUrl} 
                            alt={perk.name}
                            width={40}
                            height={40}
                            className="object-contain"
                            data-ai-hint={placeholder.imageHint}
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#111111]">{perk.name}</h3>
                        <p className="text-[11px] text-[#999999]">Used by {perk.members} members</p>
                      </div>
                    </div>
                    
                    <p className="text-xs text-[#6b6b6b] line-clamp-2 mb-6 min-h-[32px]">
                      {perk.desc}
                    </p>
                    
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold text-green-600">{perk.perk}</p>
                      <p className="text-[11px] text-[#999999]">{perk.save}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Wrapper with Side Borders */}
      <div className="max-w-6xl mx-auto border-x border-[#eeeeee]">
        {/* Problem Section */}
        <section className="py-20 px-6 bg-white border-y border-[#eeeeee]">
          <div className="max-w-5xl mx-auto">
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
                <Card key={i} className="border-none shadow-md shadow-black/5 bg-[#f9f9f9] rounded-3xl p-2 smooth-transition hover:shadow-lg hover:shadow-black/10">
                  <CardContent className="pt-6">
                    <item.icon className="w-7 h-7 text-accent mb-4" />
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-[#6b6b6b]">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section 1 - Strategy */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
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
                  icon: Rocket
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="relative group flex flex-col bg-[#F7F7F8] border border-gray-100 rounded-3xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden"
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

        {/* Solution Section 2 - Playbook */}
        <section className="py-16 px-6 bg-white border-t border-[#eeeeee]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium mb-4">A proven playbook used by the best</h2>
              <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto">
                Top SaaS and Creators already offer perks through partner ecosystems to reach high-intent users and drive adoption.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  label: "CASE STUDY",
                  title: "Cross-Product Utility",
                  desc: "Strategic alliances between design tools and hosting platforms drive mutual adoption.",
                  icon: Zap
                },
                {
                  label: "ENGAGEMENT",
                  title: "Boost LTV with partner value",
                  desc: "Users stay longer when they have a stack of integrated, discounted tools.",
                  icon: Gift
                },
                {
                  label: "NETWORK",
                  title: "The power of affinity",
                  desc: "Users are 4x more likely to convert from a brand they already trust.",
                  icon: Rocket
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="relative group flex flex-col bg-[#F7F7F8] border border-gray-100 rounded-3xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden"
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

        {/* Features Section */}
        <section className="py-20 px-6 bg-white border-t border-[#eeeeee]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium mb-4">Everything you need to run partner perks program</h2>
              <p className="text-lg text-[#6b6b6b]">Create perks, manage partnerships, track performance, and scale from one platform.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-16">
              {[
                {
                  label: "CUSTOMIZATION",
                  title: "Create tailored perks for partners and users",
                  desc: "Create perks with discounts, credits, trials, and commissions customized for each partner.",
                  icon: Gift
                },
                {
                  label: "MANAGEMENT",
                  title: "Manage Partner and Perks easily in one place",
                  desc: "Manage partners, deals, access rules, and redemptions in one place without the complexity.",
                  icon: RefreshCw
                },
                {
                  label: "PLATFORM",
                  title: "Create your own Partner Perks Program",
                  desc: "Create a branded perks page to offer partner perks and add more value to your users.",
                  icon: Rocket
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="relative group flex flex-col bg-[#F7F7F8] border border-gray-100 rounded-3xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden"
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Tiered Partner Perks", desc: "Offer different perks based on partner plans.", icon: Star },
                { title: "Track Performance", desc: "Monitor views, unlocks, and conversions.", icon: TrendingUp },
                { title: "Partner Discovery", desc: "Get discovered by partners through directory.", icon: Search },
                { title: "Managed Payouts", desc: "Automate payouts & settlements.", icon: Zap, comingSoon: true }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-[#eeeeee] rounded-[2.5rem] relative bg-white smooth-transition hover:border-accent/30 hover:shadow-xl hover:shadow-black/5">
                  {item.comingSoon && (
                    <Badge className="absolute -top-3 right-6 bg-accent/10 text-accent border-none text-[10px] font-bold px-3 py-1 rounded-full">Coming Soon</Badge>
                  )}
                  <div className="w-12 h-12 rounded-2xl bg-[#f9f9f9] flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-[#111111]" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                  <p className="text-sm text-[#6b6b6b] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Growth Section */}
        <section className="py-20 px-6 bg-white border-t border-[#eeeeee]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium mb-4">Grow partnerships without the heavy lifting</h2>
              <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto">Find the right partners, exchange perks effortlessly, and start growing with automated tools.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  label: "DIRECTORY",
                  title: "Partner Directory",
                  desc: "Discover and connect with products already looking for partnerships in our curated network.",
                  icon: Search,
                  comingSoon: true
                },
                {
                  label: "OUTREACH",
                  title: "Easy Partner Outreach",
                  desc: "Find partners with overlapping audiences and reach out with proposals faster with built-in AI.",
                  icon: MousePointerClick
                },
                {
                  label: "AUTOMATION",
                  title: "Two-Way Perks Exchange",
                  desc: "Onboard new partners in minutes and set up mutual perk exchange deals without friction.",
                  icon: RefreshCw
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="relative group flex flex-col bg-[#F7F7F8] border border-gray-100 rounded-3xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden"
                >
                  <div className="bg-[#EFEFF1] h-64 flex items-center justify-center relative">
                    {item.comingSoon && (
                      <Badge className="absolute top-4 right-4 bg-white/50 text-gray-500 border-none text-[9px] font-bold backdrop-blur-sm">Coming Soon</Badge>
                    )}
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
        <section className="py-24 px-6 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full ai-gradient opacity-5 blur-[100px] pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10 text-left">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-left">Start acquiring new users through partnerships</h2>
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
    </div>
  );
}
