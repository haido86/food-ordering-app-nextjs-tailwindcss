import React from 'react';
import Menu from './Menu';
import Link from 'next/link';
import CartIcon from './CartIcon';
import Image from 'next/image';

export default function Navbar() {
  const user = false;
  return (
    <div className="h-12 flex justify-between text-red-500 p-4 items-center border-b-2 border-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* Right links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">contact</Link>
      </div>

      {/* LOGO */}
      <div>
        <Link href="/" className="text-xl md:font-bold flex-1 md:text-center">
          Massimo
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* left links */}
      <div className="hidden md:flex gap-4 flex-1 justify-end">
        <div className="flex items-center gap-2 bg-orange-300 px-1 rounded-md md:absolute right-2 top-3 lg:static">
          <Image src="/phone.png" alt="phone" width={20} height={20} />
          <span>+123 456 789</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
}
