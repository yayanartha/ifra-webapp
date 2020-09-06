import SideLogo from '@components/Registration/SideLogo';
import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

interface ExhibitorRegistrationProps {}

const ExhibitorRegistration = (props: ExhibitorRegistrationProps) => {
  const router = useRouter();

  const _handleSubmit = useCallback(() => {
    router.push('/login');
  }, []);

  return (
    <div className="w-screen h-screen bg-white flex">
      <SideLogo />

      <div className="h-screen w-full pt-8 pl-8 pr-8">
        <div className="h-16 flex flex-col justify-center mb-4">
          <h1 className="font-bold text-3xl text-blue-600 tracking-wider">
            Exhibitor Registration
          </h1>
        </div>

        <div className="flex w-full h-screen gap-8" style={{ height: 'calc(100vh - 7rem)' }}>
          <div className="flex flex-col flex-1">
            <div className="flex flex-row gap-4 mb-4">
              <select
                className="form-select shadow-md h-10 flex flex-1 pl-2 font-light text-sm border-0"
                placeholder="Choose Business Type*"
              >
                <option>Franchise</option>
                <option>License</option>
                <option>Business Concept</option>
              </select>

              <select
                className="form-select shadow-md h-10 flex flex-1 pl-2 font-light text-sm border-0"
                placeholder="Choose Nature of Business*"
              >
                <option>Natural</option>
                <option>Natural Mid</option>
                <option>Natural High</option>
              </select>
            </div>

            <div className="flex flex-row gap-4 mb-4">
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

            <div className="flex flex-row gap-4 mb-4">
              <input
                type="text"
                className="appearance-none shadow-md h-10 flex flex-1 pl-2 font-light text-sm"
                placeholder="Company Email*"
              />
              <input
                type="text"
                className="appearance-none shadow-md h-10 flex flex-1 pl-2 font-light text-sm"
                placeholder="Company Address*"
              />
            </div>

            <textarea
              className="appearance-none shadow-md h-48 p-2 font-light text-sm resize-none mb-4"
              placeholder="Company Description (max 500 characters)"
            ></textarea>

            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm"
              placeholder="Link Video TVC (YouTube)*"
            />
          </div>

          <div className="flex flex-col flex-1">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                className="appearance-none shadow-md h-10 pl-2 font-light text-sm"
                placeholder="Name*"
              />
              <select
                className="form-select shadow-md h-10 pl-2 font-light text-sm border-0"
                placeholder="Select Title*"
              >
                <option>Mr.</option>
                <option>Mrs.</option>
                <option>Ms.</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                className="appearance-none shadow-md h-10 pl-2 font-light text-sm"
                placeholder="Email*"
              />
              <input
                type="text"
                className="appearance-none shadow-md h-10 pl-2 font-light text-sm"
                placeholder="Mobile Phone*"
              />
            </div>

            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mb-4"
              placeholder="Telephone"
            />

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                className="appearance-none shadow-md h-10 pl-2 font-light text-sm"
                placeholder="Fax*"
              />
              <select
                className="form-select shadow-md h-10 pl-2 font-light text-sm border-0"
                placeholder="Select Country*"
              >
                <option>Indonesia</option>
                <option>USA</option>
                <option>Argentina</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                className="appearance-none shadow-md h-10 pl-2 font-light text-sm"
                placeholder="Website"
              />
              <input
                type="text"
                className="appearance-none shadow-md h-10 pl-2 font-light text-sm"
                placeholder="Social Media"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                className="appearance-none shadow-md h-10 pl-2 font-light text-sm"
                placeholder="Number of Branch"
              />
              <input
                type="text"
                className="appearance-none shadow-md h-10 pl-2 font-light text-sm"
                placeholder="Investment Range"
              />
            </div>

            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mb-6"
              placeholder="Payback Estimate Period"
            />

            <label className="flex font-light text-xs text-gray-800 ">
              <input
                className="form-checkbox appearance-none mr-2 h-6 w-6 border-2 border-blue-600 rounded-md"
                type="checkbox"
              />
              <span>{'We confirm to participate and attend to IFRA VIRTUAL Expo 2020'}</span>
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

export default ExhibitorRegistration;
