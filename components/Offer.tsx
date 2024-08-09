import Image from 'next/image';
import React from 'react';
import CountDown from './CountDown';

export default function Offer() {
  return (
    <div className="flex flex-col h-screen bg-black md:flex-row md:bg-[url('/offerBg.png')] md:justify-between md:h-[70vh]">
      {/* text container */}
      <div className="flex-1 justify-center items-center text-white text-center flex flex-col gap-8 p-6 md:text-left md:items-start md:p-20">
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
      <div className="relative flex-1 w-full md:h-full">
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
