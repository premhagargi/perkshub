import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body selection:bg-accent/20">
        <div className="relative min-h-screen overflow-hidden">
          {/* Background Decorations */}
          <div className="fixed -top-[10%] -left-[5%] w-[40%] h-[40%] ai-gradient blob-blur rounded-full pointer-events-none" />
          <div className="fixed -bottom-[10%] -right-[5%] w-[40%] h-[40%] ai-gradient blob-blur rounded-full pointer-events-none" />
          
          <Navbar />
          <main className="relative z-10">{children}</main>
        </div>
      </body>
    </html>
  );
}