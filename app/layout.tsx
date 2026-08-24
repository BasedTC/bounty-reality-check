import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://bounty-reality-check.rawlz.chatgpt.site'),
  title: 'Bounty Reality Check',
  description: 'A free evidence check for public GitHub bounties before you start the work.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Is that bounty actually alive?',
    description: 'Check the public evidence before you do the work.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Bounty Reality Check evidence receipt' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is that bounty actually alive?',
    description: 'Check the public evidence before you do the work.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}

