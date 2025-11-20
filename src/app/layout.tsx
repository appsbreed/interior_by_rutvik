// app/layout.tsx
import Footer from './components/footer';
import Header from './components/header';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MySite',
  description: 'A Next.js site with header and footer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  
<html lang="en" className="h-full">
      <body className="min-h-screen flex flex-col">
        <Header />

        {/* Main content grows to fill space */}
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
      
    </html>
  );
}
