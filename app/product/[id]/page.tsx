import Price from '@/components/Price';
import { singleProduct } from '@/data';
import Image from 'next/image';
import React from 'react';

export default function SingleProduct() {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around md:flex-row md:items-center">
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h[70%]">
          <Image
            src={singleProduct.img}
            alt={singleProduct.title}
            fill
            className="object-contain"
          />
        </div>
      )}
      <div className="text-red-500 flex flex-col h-1/2 md:h[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">
          {singleProduct.title}
        </h1>
        <p className="my-4">{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
}
