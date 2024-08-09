'use client';

import React, { useEffect, useState } from 'react';

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

export default function Price({ price, id, options }: Props) {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? options[selected].additionalPrice + price : price)
    );
  }, [selected, price, quantity, options]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-2xl">${total.toFixed(2)}</h2>
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="rounded-md ring-1 ring-red-400 p-2 min-w-[6rem]"
            style={{
              backgroundColor:
                selected === index ? 'rgb(248 113 113)' : 'white',
              color: selected === index ? 'white' : 'red',
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4">
            <button
              onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
            >
              {'<'}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity(prev => (prev < 9 ? prev + 1 : 9))}
            >
              {'>'}
            </button>
          </div>
        </div>
        <button className="bg-red-500 w-56 text-white uppercase p-3 ring-1 ring-red-500">
          Add to cart
        </button>
      </div>
    </div>
  );
}
