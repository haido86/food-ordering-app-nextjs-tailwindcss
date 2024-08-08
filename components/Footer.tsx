import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="uppercase text-red-500 h-12 md:h-24 p-4 lg:px-20 xl:px-40 flex items-center justify-between">
      <Link href="/" className="font-bold">
        Massimo
      </Link>
      <p>Ⓒ all rights reserved.</p>
    </div>
  );
}
