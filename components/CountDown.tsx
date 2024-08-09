'use client';

import React from 'react';
import Countdown from 'react-countdown';

const endDate = new Date('2024-10-08');
export default function CountDown() {
  return (
    <Countdown className="text-yellow-300 font-bold text-5xl" date={endDate} />
  );
}
