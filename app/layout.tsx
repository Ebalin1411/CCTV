import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { ThemeProvider } from 'next-themes';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SecureVision CCTV | Installation & AMC',
  description:
    'CCTV installation, maintenance, and 24/7 monitoring for homes, shops, and offices. Free site visit & same‑day installation.',
  // metadataBase: new URL("https://example.com"),
  openGraph: {
    title: 'SecureVision CCTV',
    description: 'Professional CCTV installation & service. Free site visit.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>

      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
