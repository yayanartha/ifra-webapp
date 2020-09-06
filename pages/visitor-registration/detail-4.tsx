import SideLogo from '@components/Registration/SideLogo';
import Step from '@components/Registration/Step';
import { useRouter } from 'next/router';
import React from 'react';

interface VisitorDetailFourRegisterProps {}

const VisitorDetailFourRegister = (props: VisitorDetailFourRegisterProps) => {
  const router = useRouter();

  return (
    <div className="w-screen h-screen bg-white flex">
      <SideLogo />

      <div className="h-screen w-full pt-8 pl-8 pr-8">
        <div className="h-16 flex flex-col justify-center mb-4">
          <h1 className="font-bold text-3xl text-blue-600 tracking-wider">Visitor Registration</h1>
        </div>

        <Step current={4} />

        <div className="flex flex-col mx-auto w-full mt-8">
          <div className="flex gap-8">
            <div className="flex items-center border border-gray-100 justify-center h-32 shadow-md w-3/12">
              <img src="/logo.png" />
            </div>

            <div className="flex flex-col w-6/12">
              <div className="flex">
                <h1 className="text-blue-600 font-bold text-2xl mr-20">1 Day Pass</h1>
                <h2 className="text-blue-600 font-thin text-2xl">IDR 20,000 / person</h2>
              </div>
              <p className="font-light leading-relaxed text-xs mt-1">
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                }
              </p>
            </div>

            <div className="w-3/12">
              <select
                className="form-select shadow-md h-12 font-light text-sm border-0 w-full mb-4"
                placeholder="Choose Your Available Date*"
              >
                <option>18 September 2020</option>
                <option>19 September 2020</option>
                <option>20 September 2020</option>
              </select>
              <button
                onClick={() => router.push('/visitor-registration/detail-4')}
                className="bg-blue-600 flex self-center justify-center items-center w-full h-10 text-white font-light text-xs"
              >
                BUY TICKET
              </button>
            </div>
          </div>

          <div className="flex gap-8 mt-8">
            <div className="flex items-center border border-gray-100 justify-center h-32 shadow-md w-3/12">
              <img src="/logo.png" />
            </div>

            <div className="flex flex-col w-6/12">
              <div className="flex">
                <h1 className="text-blue-600 font-bold text-2xl mr-20">3 Day Pass</h1>
                <h2 className="text-blue-600 font-thin text-2xl">IDR 50,000 / person</h2>
              </div>
              <p className="font-light leading-relaxed text-xs mt-1">
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                }
              </p>
            </div>

            <div className="w-3/12 flex justify-center">
              <button
                onClick={() => router.push('/visitor-registration/detail-4')}
                className="bg-blue-600 flex self-center justify-center items-center w-full h-10 text-white font-light text-xs"
              >
                BUY TICKET
              </button>
            </div>
          </div>

          <div className="mt-32">
          <label className="flex font-light text-sm text-gray-800 mt-4 items-center">
            <input
              className="form-checkbox appearance-none mr-2 h-6 w-6 border-2 border-blue-600 rounded-md"
              type="checkbox"
            />
            <span>{'We confirm to participate and attend to IFRA VIRTUAL Expo 2020'}</span>
          </label>

          <button
            onClick={() => router.push('/visitor-registration/detail-5')}
            className="bg-blue-600 flex self-center justify-center items-center w-full h-10 text-white font-light text-xs mt-6"
          >
            PROCESS TO CHECKOUT
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorDetailFourRegister;
