'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Copy, Send, Check } from 'lucide-react';
import { aiOutreachMessageGenerator } from '@/ai/flows/ai-outreach-message-generator';
import { useToast } from '@/hooks/use-toast';

function OutreachContent() {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [formData, setFormData] = useState({
    partnerProfile: searchParams.get('desc') || '',
    companyValueProposition: ''
  });

  const handleGenerate = async () => {
    if (!formData.partnerProfile || !formData.companyValueProposition) {
      toast({
        title: "Incomplete fields",
        description: "Please fill in both fields to generate a message.",
        variant: "destructive"
      });
      return;
    }
    setLoading(true);
    try {
      const output = await aiOutreachMessageGenerator(formData);
      setGeneratedMessage(output.message);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: "Copied to clipboard",
      description: "The message is ready to be sent."
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Outreach Assistant</h1>
        <p className="text-xl text-[#6b6b6b]">
          Let AI craft the perfect opening for your next partnership.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Card className="border-[#eeeeee] rounded-xl">
            <CardHeader>
              <CardTitle>Drafting Context</CardTitle>
              <CardDescription>Input details about the partner and your value to personalize the message.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#111111]">Partner Profile</label>
                <Textarea 
                  placeholder="Paste their business description or website text here..."
                  className="min-h-[150px] rounded-xl focus:ring-accent border-[#eeeeee]"
                  value={formData.partnerProfile}
                  onChange={(e) => setFormData({...formData, partnerProfile: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#111111]">Your Value Proposition</label>
                <Textarea 
                  placeholder="What makes your product a great fit for them?"
                  className="min-h-[150px] rounded-xl focus:ring-accent border-[#eeeeee]"
                  value={formData.companyValueProposition}
                  onChange={(e) => setFormData({...formData, companyValueProposition: e.target.value})}
                />
              </div>
              <Button 
                onClick={handleGenerate} 
                disabled={loading}
                className="w-full pill-button h-[52px] bg-[#111111] text-white"
              >
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                Generate Message
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="relative">
          {generatedMessage ? (
            <Card className="border-[#eeeeee] h-full flex flex-col rounded-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle>Draft Message</CardTitle>
                  <CardDescription>Review and edit your generated outreach.</CardDescription>
                </div>
                <Button variant="ghost" size="icon" onClick={handleCopy} className="rounded-full">
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </Button>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="bg-[#f9f9f9] p-8 rounded-xl border border-[#eeeeee] font-mono text-sm leading-relaxed whitespace-pre-wrap">
                  {generatedMessage}
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-[#eeeeee] rounded-xl bg-white/50">
              <div className="w-16 h-16 bg-[#f3f3f3] rounded-full flex items-center justify-center mb-6">
                <Send className="w-8 h-8 text-[#6b6b6b]" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Generator</h3>
              <p className="text-[#6b6b6b] max-w-xs">Fill out the details on the left to create a personalized proposal.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function OutreachPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      < OutreachContent />
    </Suspense>
  );
}
