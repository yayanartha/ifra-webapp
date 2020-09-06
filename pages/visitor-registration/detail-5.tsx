import SideLogo from '@components/Registration/SideLogo';
import Step from '@components/Registration/Step';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';

interface VisitorDetailFiveRegisterProps {}

const VisitorDetailFiveRegister = (props: VisitorDetailFiveRegisterProps) => {
  const router = useRouter();

  const _handleSubmit = useCallback(() => {
    router.push('/login');
  }, []);

  return (
    <div className="w-screen h-screen bg-white flex">
      <SideLogo />

      <div className="h-screen w-full pt-8 pl-8 pr-8">
        <div className="h-16 flex flex-col justify-center mb-4">
          <h1 className="font-bold text-3xl text-blue-600 tracking-wider">Visitor Registration</h1>
        </div>

        <Step current={5} />

        <div className="flex flex-col w-1/2 mt-8 mx-auto mt-32">
          <h1 className="text-blue-600 font-bold text-6xl text-center">Thank You</h1>
          <p className="text-center text-sm font-thin mt-4">
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
          </p>

          <button
            onClick={_handleSubmit}
            className="bg-blue-600 flex self-center justify-center items-center w-64 h-10 text-white font-light text-xs mt-20"
          >
            DONE
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisitorDetailFiveRegister;
