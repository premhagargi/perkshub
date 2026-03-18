'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Gift, Plus, Trash2, Rocket, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function PerksPage() {
  const { toast } = useToast();
  const [perks, setPerks] = useState([
    { id: 1, type: 'Discount', value: '25% Off', description: 'Available for all first-time users via partners.' },
    { id: 2, type: 'Trial', value: '3 Months Free', description: 'Exclusive extended trial for enterprise clients.' }
  ]);

  const [newPerk, setNewPerk] = useState({ type: 'Discount', value: '', description: '' });

  const addPerk = () => {
    if (!newPerk.value || !newPerk.description) return;
    setPerks([...perks, { ...newPerk, id: Date.now() }]);
    setNewPerk({ type: 'Discount', value: '', description: '' });
    toast({ title: "Perk Added", description: "Your new partner perk has been saved." });
  };

  const removePerk = (id: number) => {
    setPerks(perks.filter(p => p.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-start mb-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Perk Program</h1>
          <p className="text-xl text-[#6b6b6b]">Design and manage the exclusive benefits you offer to your partner network.</p>
        </div>
        <Button className="pill-button bg-accent text-white h-[38px] px-6">
          <Share2 className="mr-2 h-4 w-4" /> Publish Program
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <Card className="border-[#eeeeee] sticky top-32 shadow-sm rounded-xl">
            <CardHeader>
              <CardTitle>Create New Perk</CardTitle>
              <CardDescription>Define the value and terms for your partners.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Perk Type</label>
                <Select value={newPerk.type} onValueChange={(v) => setNewPerk({...newPerk, type: v})}>
                  <SelectTrigger className="rounded-xl h-10 border-[#eeeeee]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Discount">Discount</SelectItem>
                    <SelectItem value="Trial">Free Trial</SelectItem>
                    <SelectItem value="Credits">Service Credits</SelectItem>
                    <SelectItem value="Access">Early Access</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Offer Value</label>
                <Input 
                  placeholder="e.g. 50% off for 6 months" 
                  className="h-10 rounded-xl border-[#eeeeee]"
                  value={newPerk.value}
                  onChange={(e) => setNewPerk({...newPerk, value: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Description</label>
                <Textarea 
                  placeholder="Who is this for? Any limitations?" 
                  className="rounded-xl border-[#eeeeee]"
                  value={newPerk.description}
                  onChange={(e) => setNewPerk({...newPerk, description: e.target.value})}
                />
              </div>
              <Button onClick={addPerk} className="w-full pill-button h-[38px] bg-[#111111] text-white">
                <Plus className="mr-2 h-4 w-4" /> Add Perk
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <div className="grid md:grid-cols-2 gap-6">
            {perks.map((perk) => (
              <Card key={perk.id} className="border-[#eeeeee] smooth-transition hover:border-accent group rounded-xl">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="w-12 h-12 rounded-xl bg-[#f3f3f3] flex items-center justify-center">
                    <Gift className="w-6 h-6 text-[#111111]" />
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removePerk(perk.id)} className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#6b6b6b]">{perk.type}</span>
                    <h3 className="text-2xl font-bold mt-1">{perk.value}</h3>
                  </div>
                  <p className="text-[#6b6b6b] text-sm mb-6">{perk.description}</p>
                  <div className="pt-4 border-t border-[#f3f3f3] flex items-center justify-between">
                    <span className="text-xs font-medium text-[#111111] flex items-center">
                      <Rocket className="w-3 h-3 mr-1 text-accent" /> Active Offer
                    </span>
                    <Button variant="link" className="text-accent p-0 h-auto text-xs font-bold uppercase tracking-tighter">Edit Terms</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {perks.length === 0 && (
            <div className="h-[400px] flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-[#eeeeee] rounded-xl bg-white/50">
              <Gift className="w-12 h-12 text-[#eeeeee] mb-4" />
              <h3 className="text-xl font-bold mb-2">No perks created yet</h3>
              <p className="text-[#6b6b6b]">Start by creating your first partnership offer on the left.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
