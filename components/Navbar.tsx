import React from 'react';
import Menu from './Menu';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="h-12 flex justify-between text-red-500 p-4 items-center border-b-2 border-red-500 uppercase">
      {/* LOGO */}
      <div>
        <Link href="/" className="text-xl">
          Massimo
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div>
        <Menu />
      </div>
    </div>
  );
}
