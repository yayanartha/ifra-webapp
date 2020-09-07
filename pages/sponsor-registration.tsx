import SideLogo from '@components/Registration/SideLogo';
import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

interface SponsorRegistrationProps {}

const SponsorRegistration = (props: SponsorRegistrationProps) => {
  const router = useRouter();

  const _handleSubmit = useCallback(() => {
    router.push('/login');
  }, []);

  return (
    <div className="w-screen h-screen bg-white flex">
      <SideLogo />

      <div className="h-screen w-full pt-8 pl-8 pr-8">
        <div className="h-16 flex flex-col justify-center mb-4">
          <h1 className="font-bold text-3xl text-blue-600 tracking-wider">Sponsor Registration</h1>
        </div>

        <div className="flex w-full h-screen gap-8" style={{ height: 'calc(100vh - 7rem)' }}>
          <div className="flex flex-col flex-1">
            <div className="flex flex-row gap-4">
              <input
                type="text"
                className="appearance-none shadow-md h-10 flex flex-1 pl-2 font-light text-sm"
                placeholder="Name of Brand*"
              />
              <input
                type="text"
                className="appearance-none shadow-md h-10 flex flex-1 pl-2 font-light text-sm"
                placeholder="Name of Company*"
              />
            </div>

            <textarea
              className="appearance-none shadow-md h-48 p-2 font-light text-sm resize-none mt-6"
              placeholder="Company Address*"
            ></textarea>

            <div className="flex flex-col shadow-md p-4 mt-6 bg-white" style={{ height: '18rem' }}>
              <p className="font-light text-sm text-label_2">Select Package</p>
              <div className="flex flex-1 items-center justify-around">
                <div className="w-32 h-20 shadow-md flex justify-center items-center border-dashed border border-blue-400 font-light text-blue-400 text-xs">
                  Package 1
                </div>
                <div className="w-32 h-20 shadow-md flex justify-center items-center border-dashed border border-blue-400 font-light text-blue-400 text-xs">
                  Package 2
                </div>
              </div>
              {/* <button
                onClick={() => {}}
                className="bg-blue-600 flex self-center justify-center items-center w-8/12 h-10 text-white font-light text-xs"
              >
                ADD IMAGE
              </button> */}
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex flex-row gap-4">
              <input
                type="text"
                className="appearance-none shadow-md h-10 flex flex-1 pl-2 font-light text-sm"
                placeholder="PIC Name*"
              />
              <select
                className="form-select shadow-md h-10 flex flex-1 pl-2 font-light text-sm border-0"
                placeholder="Select Title*"
              >
                <option>Mr.</option>
                <option>Mrs.</option>
                <option>Ms.</option>
              </select>
            </div>

            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mt-6"
              placeholder="Position*"
            />
            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mt-6"
              placeholder="Email*"
            />
            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mt-6"
              placeholder="Mobile*"
            />
            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mt-6"
              placeholder="Telephone*"
            />
            <div className="flex flex-row gap-4 mt-6">
              <select
                className="form-select shadow-md h-10 flex flex-1 pl-2 font-light text-sm border-0"
                placeholder="Select Title*"
              >
                <option>Indonesia</option>
                <option>English</option>
                <option>America</option>
              </select>
              <input
                type="text"
                className="appearance-none shadow-md h-10 flex flex-1 pl-2 font-light text-sm"
                placeholder="Postal Code*"
              />
            </div>
            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mt-6"
              placeholder="Website*"
            />

            <label className="flex font-light text-xs text-gray-800 mt-6">
              <input
                className="form-checkbox appearance-none mr-2 h-6 w-6 border-2 border-blue-600 rounded-md"
                type="checkbox"
              />
              <span>
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc lobortis mattis aliquam faucibus purus in massa. Ornare arcu odio ut sem.'
                }
              </span>
            </label>

            <button
              onClick={_handleSubmit}
              className="bg-blue-600 flex self-center justify-center items-center w-full h-10 text-white font-light text-xs mt-6"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorRegistration;
