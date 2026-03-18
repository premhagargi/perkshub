'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, TrendingUp, Users, Zap, Wallet } from 'lucide-react';

const data = [
  { name: 'Jan', value: 4000, reach: 2400 },
  { name: 'Feb', value: 3000, reach: 1398 },
  { name: 'Mar', value: 2000, reach: 9800 },
  { name: 'Apr', value: 2780, reach: 3908 },
  { name: 'May', value: 1890, reach: 4800 },
  { name: 'Jun', value: 2390, reach: 3800 },
  { name: 'Jul', value: 3490, reach: 4300 },
];

const partnersData = [
  { name: 'Echo Cloud', conversions: 450, value: '$45k' },
  { name: 'Alpha SaaS', conversions: 380, value: '$38k' },
  { name: 'Nexus Tech', conversions: 290, value: '$29k' },
  { name: 'Zion Studio', conversions: 120, value: '$12k' },
];

export default function AnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Performance Analytics</h1>
          <p className="text-xl text-[#6b6b6b]">Track your partnership ecosystem growth and conversion metrics.</p>
        </div>
        <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-1.5 text-sm font-semibold rounded-full">
          <TrendingUp className="w-4 h-4 mr-2" /> Live Updates
        </Badge>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {[
          { title: 'Total Partners', value: '42', change: '+12%', icon: Users },
          { title: 'Total Reach', value: '1.2M', change: '+24%', icon: Zap },
          { title: 'Conversions', value: '8.4k', change: '+18%', icon: ArrowUpRight },
          { title: 'Revenue Share', value: '$124k', change: '+7%', icon: Wallet },
        ].map((stat, i) => (
          <Card key={i} className="border-[#eeeeee] shadow-sm smooth-transition hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#f9f9f9] flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-[#111111]" />
                </div>
                <span className="text-green-600 text-sm font-bold flex items-center">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-sm font-medium text-[#6b6b6b]">{stat.title}</h3>
              <p className="text-3xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="border-[#eeeeee]">
          <CardHeader>
            <CardTitle>Conversion Growth</CardTitle>
            <CardDescription>Monthly conversion trends across all partner perks.</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EE8412" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#EE8412" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f3f3" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="value" stroke="#EE8412" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-[#eeeeee]">
          <CardHeader>
            <CardTitle>Top Performing Partners</CardTitle>
            <CardDescription>Revenue contribution by partner company.</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={partnersData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f3f3" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip 
                   contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="conversions" fill="#111111" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}