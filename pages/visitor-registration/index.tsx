import SideLogo from '@components/Registration/SideLogo';
import { useRouter } from 'next/router';
import React from 'react';

interface VisitorEmailRegisterProps {}

const VisitorEmailRegister = (props: VisitorEmailRegisterProps) => {
  const router = useRouter();

  return (
    <div className="w-screen h-screen bg-white flex">
      <SideLogo />

      <div className="h-screen w-full pt-8 pl-8 pr-8">
        <div className="h-16 flex flex-col justify-center mb-4">
          <h1 className="font-bold text-3xl text-blue-600 tracking-wider">Visitor Registration</h1>
        </div>

        <div
          className="flex flex-col justify-center items-center w-full"
          style={{ height: 'calc(100vh - 12rem)' }}
        >
          <input
            type="text"
            className="appearance-none shadow-md w-6/12 h-10 pl-2 font-light text-sm mb-4"
            placeholder="Company*"
          />
          <input
            type="text"
            className="appearance-none shadow-md w-6/12 h-10 pl-2 font-light text-sm mb-6"
            placeholder="Email*"
          />

          <button
            onClick={() => router.push('/visitor-registration/detail-1')}
            className="bg-blue-600 w-6/12 h-10 text-white font-light text-xs mt-2"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisitorEmailRegister;
