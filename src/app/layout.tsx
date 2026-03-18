import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { LenisProvider } from '@/components/providers/LenisProvider';

export const metadata: Metadata = {
  title: 'PartnerPath AI | Premium Partnership Discovery',
  description: 'AI-native partnership discovery and management platform for growth-focused companies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body selection:bg-accent/20">
        <LenisProvider>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-14 md:pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
