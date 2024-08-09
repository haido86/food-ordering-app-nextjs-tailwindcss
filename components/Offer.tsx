import Image from 'next/image';
import React from 'react';
import CountDown from './CountDown';

export default function Offer() {
  return (
    <div className="flex flex-col bg-black md:flex-row h-screen">
      {/* text container */}
      <div className="text-white text-center flex-1 justify-center items-center flex flex-col p-6 md:p-20 gap-8">
        <h1 className="font-bold uppercase text-5xl xl:text-6xl 2xl:text-7xl">
          Delicious Burger & French Fry
        </h1>
        <p className="xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown />
        <button className="bg-red-500 px-6 py-3 rounded-lg">Order Now</button>
      </div>
      {/* image container */}
      <div className="relative flex-1 w-full">
        <Image
          src="/offerProduct.png"
          alt="pizza"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
