import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'AI Image Generator',
  description: 'Transform your ideas into stunning images using advanced AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`} suppressHydrationWarning>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}