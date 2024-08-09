import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function LoginPage() {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col items-center justify-center">
      {/* box */}
      <div className="h-full shadow-lg flex flex-col items-center md:flex-row md:w-full md:h-[70%] lg:w-[60%] 2xl:w-1/2">
        {/* image container */}
        <div className="relative w-full h-1/3 md:w-1/2 md:h-full">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>
        {/* form container */}
        <div className="flex flex-col gap-8 p-10 md:w-1/2">
          <h1 className="text-xl font-bold xl:text-3xl">Welcome</h1>
          <p>Login into your account or create new one using social buttons</p>
          <button className="flex gap-4 ring-2 ring-gray-100 p-3 rounded-sm">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 ring-2 ring-gray-100 p-3 rounded-sm">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p>
            Have problem?
            <Link href="/" className="underline">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
