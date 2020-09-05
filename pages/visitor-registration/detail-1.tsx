import SideLogo from '@components/Registration/SideLogo';
import React from 'react';
import Step from '@components/Registration/Step';
import { useRouter } from 'next/router';

interface VisitorDetailOneRegisterProps {}

const VisitorDetailOneRegister = (props: VisitorDetailOneRegisterProps) => {
  const router = useRouter();

  return (
    <div className="w-screen h-screen bg-white flex">
      <SideLogo />

      <div className="h-screen w-full pt-8 pl-8 pr-8">
        <div className="h-16 flex flex-col justify-center mb-4">
          <h1 className="font-bold text-3xl text-blue-600 tracking-wider">Visitor Registration</h1>
        </div>

        <Step current={1} />

        <div className="flex w-full gap-8 mt-8">
          <div className="flex flex-col flex-1">
            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mb-4"
              placeholder="Company*"
            />

            <textarea
              className="appearance-none shadow-md h-40 p-2 font-light text-sm resize-none mb-4"
              placeholder="Business Address*"
            ></textarea>

            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mb-4"
              placeholder="Position*"
            />

            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mb-4"
              placeholder="Telephone*"
            />

            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mb-4"
              placeholder="Email*"
            />
          </div>

          <div className="flex flex-col flex-1">
            <select
              className="form-select shadow-md h-10 pl-2 font-light text-sm border-0 mb-4"
              placeholder="Select Country*"
            >
              <option>Indonesia</option>
              <option>USA</option>
              <option>Argentina</option>
            </select>

            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mb-4"
              placeholder="Name*"
            />
            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mb-4"
              placeholder="Mobile Phone*"
            />
            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mb-4"
              placeholder="Fax"
            />

            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mb-4"
              placeholder="Website*"
            />

            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mb-4"
              placeholder="Postal Code*"
            />

            <button
              onClick={() => router.push('/visitor-registration/detail-2')}
              className="bg-blue-600 flex self-center justify-center items-center w-full h-10 text-white font-light text-xs"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorDetailOneRegister;
