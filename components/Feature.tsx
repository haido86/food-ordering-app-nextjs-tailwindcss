import { featuredProducts } from '@/data';
import Image from 'next/image';
import React from 'react';

export default function Feature() {
  return (
    <div className="w-screen overflow-x-scroll">
      {/* wrapper */}
      <div className="w-max flex">
        {/* single item */}
        {featuredProducts.map(product => (
          <div
            key={product.id}
            className="w-screen h-[60vh] flex flex-col justify-around p-4 items-center text-red-500 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* image */}
            {product.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-300">
                <Image
                  src={product.img}
                  alt="pizza"
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {/* text */}
            <div className="flex-1 flex flex-col gap-4 justify-center items-center text-center">
              <h1 className="text-xl uppercase font-bold xl:text-2xl 2xl:text-3xl">
                {product.title}
              </h1>
              <p className="p-4 2xl:p-8">{product.desc}</p>
              <span className="text-xl font-bold">${product.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
