// app/components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Header = () => {
  const pathname = usePathname();

  const isHome = pathname === '/';

  return (
    <header
      className={clsx(
        "w-full top-0 left-0 z-50 transition-colors duration-300",
        isHome ? "absolute bg-transparent text-white" : "bg-white shadow-md text-black fixed"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MySite</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/contact" className="hover:underline">Offers</Link>
          <Link href="/contact" className="hover:underline">Estimation</Link>
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/contact" className="hover:underline">Blogs</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
