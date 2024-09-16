// app/layout.tsx
import type { Metadata } from "next";
import { Inter, DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layouts/MainLayout";
const inter = Inter({ subsets: ["latin"] });

// const dmSans = DM_Sans({ subsets: ['latin'] });
const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  preload: true,
  display: 'swap'
});


export const metadata: Metadata = {
  title: 'Joseph Babal | Developer Portfolio',
  description: 'Full-stack developer specializing in React, Next.js, and modern web development.',
  keywords: 'Full-stack Developer, Frontend Developer, React, Next.js Web Developer, Portfolio,',
  // openGraph: {
  //   title: 'Joseph Babal | Developer Portfolio',
  //   description: 'Full-stack developer specializing in React, Next.js, and modern web development.',
  //   url: 'https://josephbabal.vercel.app/',
  //   images: [
  //     {
  //       url: '/public/img/dev-portfolio.jpg',
  //       width: 1200,
  //       height: 630,
  //       alt: 'Joseph Babal - Developer Portfolio',
  //     },
  //   ],
  //   siteName: 'JosephBabal',
  // }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <MainLayout children={children} />

      </body>
    </html>
  );
}


