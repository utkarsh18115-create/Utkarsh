import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { site } from '@/content';
import 'lenis/dist/lenis.css';
import '@/styles/tokens.css';
import './globals.css';

const grotesk = localFont({ src: '../public/fonts/schibsted-grotesk-latin-wght-normal.woff2', variable: '--font-grotesk', display: 'swap', weight: '400 900' });
const mono = localFont({ src: '../public/fonts/geist-mono-latin-wght-normal.woff2', variable: '--font-mono', display: 'swap', weight: '100 900' });

export const metadata: Metadata = { title: site.meta.title, description: site.meta.description, robots: { index: false, follow: false } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${grotesk.variable} ${mono.variable}`}>{children}</body></html>;
}
