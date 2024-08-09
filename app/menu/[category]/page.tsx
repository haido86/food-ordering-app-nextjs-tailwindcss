import { pizzas } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CategoryPage() {
  return (
    <div className="flex flex-wrap">
      {pizzas.map(item => (
        <Link
          key={item.id}
          href={`/product/${item.id}`}
          className="odd:bg-fuchsia-50 group w-full h-[60vh] sm:w-1/2 lg:w-1/3 border-r-2 border-b-2 border-red-500 p-4 flex flex-col justify-between"
        >
          {item.img && (
            <div className="relative h-[80%]">
              <Image
                src={item.img}
                alt="pizza"
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="flex flex-row justify-between font-bold items-center">
            <h1 className="uppercase text-red-500 text-2xl">{item.title}</h1>
            <h2 className="text-red-500 text-xl group-hover:hidden">
              ${item.price}
            </h2>
            <button className="bg-red-500 text-white uppercase rounded-md p-2 hidden group-hover:block">
              Add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
