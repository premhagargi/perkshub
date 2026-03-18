'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Search, ArrowRight, Star, Target } from 'lucide-react';
import { aiPartnerDiscovery, AiPartnerDiscoveryOutput } from '@/ai/flows/ai-partner-discovery-flow';

export default function DiscoverPage() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AiPartnerDiscoveryOutput | null>(null);
  const [formData, setFormData] = useState({
    productDescription: '',
    targetAudience: '',
    partnershipGoals: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const output = await aiPartnerDiscovery(formData);
      setResults(output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner Discovery</h1>
        <p className="text-xl text-[#6b6b6b]">
          Describe your business to reveal ideal partnership matches powered by AI.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr,2fr] gap-12">
        <aside>
          <Card className="border-[#eeeeee] shadow-sm sticky top-32">
            <CardHeader>
              <CardTitle>Business Profile</CardTitle>
              <CardDescription>Tell us about your company and what you're looking for.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#111111]">Product Description</label>
                  <Textarea 
                    placeholder="e.g. A CRM for real estate professionals..."
                    className="min-h-[120px] rounded-xl focus:ring-accent border-[#eeeeee]"
                    required
                    value={formData.productDescription}
                    onChange={(e) => setFormData({...formData, productDescription: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#111111]">Target Audience</label>
                  <Input 
                    placeholder="e.g. Independent realtors and brokers"
                    className="h-12 rounded-xl focus:ring-accent border-[#eeeeee]"
                    required
                    value={formData.targetAudience}
                    onChange={(e) => setFormData({...formData, targetAudience: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#111111]">Partnership Goals</label>
                  <Input 
                    placeholder="e.g. Co-marketing and user acquisition"
                    className="h-12 rounded-xl focus:ring-accent border-[#eeeeee]"
                    required
                    value={formData.partnershipGoals}
                    onChange={(e) => setFormData({...formData, partnershipGoals: e.target.value})}
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full pill-button h-[52px] bg-[#111111] text-white"
                >
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Search className="mr-2 h-4 w-4" />}
                  Find Partners
                </Button>
              </form>
            </CardContent>
          </Card>
        </aside>

        <section>
          {!results && !loading && (
            <div className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-[#eeeeee] rounded-3xl bg-white/50">
              <div className="w-16 h-16 bg-[#f3f3f3] rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#6b6b6b]" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No results yet</h3>
              <p className="text-[#6b6b6b] max-w-sm">Complete your business profile on the left to discover potential partners.</p>
            </div>
          )}

          {loading && (
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse border-[#eeeeee]">
                  <div className="h-40 bg-[#f3f3f3] rounded-lg" />
                </Card>
              ))}
            </div>
          )}

          {results && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold px-2">Top Suggestions</h2>
              {results.suggestedPartners.map((partner, idx) => (
                <Card key={idx} className="border-[#eeeeee] overflow-hidden smooth-transition hover:shadow-xl hover:shadow-black/5 group">
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 ai-gradient rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                          {partner.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{partner.name}</h3>
                          <Badge variant="secondary" className="bg-[#f3f3f3] text-[#111111] mt-1">
                            {partner.alignmentScore}% Match
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.round(partner.alignmentScore / 20) ? 'text-[#EE8412] fill-[#EE8412]' : 'text-[#eeeeee]'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-lg text-[#6b6b6b] mb-6 leading-relaxed">{partner.description}</p>
                    <div className="bg-[#f9f9f9] p-4 rounded-xl mb-8 border border-[#eeeeee]">
                      <h4 className="text-sm font-bold text-[#111111] mb-1 uppercase tracking-wider">AI Reasoning</h4>
                      <p className="text-sm text-[#6b6b6b] italic">"{partner.reasoning}"</p>
                    </div>
                    <div className="flex justify-end">
                      <Button asChild variant="outline" className="pill-button border-[#eeeeee] hover:bg-[#111111] hover:text-white group">
                        <a href={`/outreach?name=${encodeURIComponent(partner.name)}&desc=${encodeURIComponent(partner.description)}`}>
                          Draft Outreach <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
