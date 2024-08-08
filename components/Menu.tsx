'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import CartIcon from './CartIcon';

const links = [
  { id: 1, name: 'HomePage', href: '/' },
  { id: 2, name: 'Menu', href: '/menu' },
  { id: 3, name: 'Working hours', href: '/' },
  { id: 4, name: 'Contact', href: '/' },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const user = false;

  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt="menu"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt="menu"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="absolute top-24 z-10 left-0 bg-red-500 text-white w-full gap-8 h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-3xl">
          {links.map(link => (
            <Link href={link.href} key={link.id} onClick={() => setOpen(false)}>
              {link.name}
            </Link>
          ))}
          {user ? (
            <Link href={'/login'} onClick={() => setOpen(false)}>
              Orders
            </Link>
          ) : (
            <Link href={'/orders'} onClick={() => setOpen(false)}>
              Login
            </Link>
          )}
          <Link href={'/cart'} onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
}
