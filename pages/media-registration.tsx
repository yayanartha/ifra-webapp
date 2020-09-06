import SideLogo from '@components/Registration/SideLogo';
import React from 'react';

interface MediaRegistrationProps {}

const MediaRegistration = (props: MediaRegistrationProps) => {
  return (
    <div className="w-screen h-screen bg-white flex">
      <SideLogo />

      <div className="h-screen w-full pt-8 pl-8 pr-8">
        <div className="h-16 flex flex-col justify-center mb-4">
          <h1 className="font-bold text-3xl text-blue-600 tracking-wider">Media Registration</h1>
        </div>

        <div className="flex w-full gap-8">
          <div className="flex flex-col flex-1">
            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mb-4"
              placeholder="Name of Media*"
            />

            <textarea
              className="appearance-none shadow-md h-32 p-2 font-light text-sm resize-none mb-4"
              placeholder="Business Address*"
            ></textarea>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <select
                className="form-select shadow-md h-10 pl-2 font-light text-sm border-0"
                placeholder="Select Country*"
              >
                <option>Indonesia</option>
                <option>USA</option>
                <option>Argentina</option>
              </select>

              <input
                type="text"
                className="appearance-none shadow-md h-10 pl-2 font-light text-sm"
                placeholder="Postal Code"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <select
                className="form-select shadow-md h-10 pl-2 font-light text-sm border-0"
                placeholder="Type of Media"
              >
                <option>Type 1</option>
                <option>Type 2</option>
                <option>Type 3</option>
              </select>

              <input
                type="text"
                className="appearance-none shadow-md h-10 pl-2 font-light text-sm"
                placeholder="Website"
              />
            </div>


          </div>

          <div className="flex flex-col flex-1">
            <div className="grid grid-cols-2 gap-4 mb-6">
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

            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mb-6"
              placeholder="Position*"
            />
            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mb-6"
              placeholder="Email*"
            />
            <input
              type="text"
              className="appearance-none shadow-md h-10 pl-2 font-light text-sm mb-6"
              placeholder="Mobile Phone*"
            />

            <div className="grid grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                className="appearance-none shadow-md h-10 pl-2 font-light text-sm"
                placeholder="Telephone"
              />
              <input
                type="text"
                className="appearance-none shadow-md h-10 pl-2 font-light text-sm"
                placeholder="Fax"
              />
            </div>

            
          </div>
        </div>

        <div className="grid grid-cols-2 w-full gap-8 mb-6">
        <div className="shadow-md border-dashed border border-blue-400 pt-6 pb-8">
              <h1 className="font-bold text-blue-400 text-md text-center">
                Please Attach Your Scan of Press ID*
              </h1>
              <p className="font-thin text-blue-400 text-xs text-center mt-8">
                File type must be JPEG/JPG/PNG
                <br />
                Max file size is 3MB
              </p>
            </div>

        <div className="shadow-md border-dashed border border-blue-400 pt-6 pb-8">
              <h1 className="font-bold text-blue-400 text-md text-center">
                Please Attach Your Scan of Recents Photograph*
              </h1>
              <p className="font-thin text-blue-400 text-xs text-center mt-8">
                File type must be JPEG/JPG/PNG
                <br />
                Max file size is 3MB
              </p>
            </div>
        </div>

        <label className="flex items-center font-light text-xs text-gray-800 ">
          <input
            className="form-checkbox appearance-none mr-2 h-6 w-6 border-2 border-blue-600 rounded-md focus:outline-none"
            type="checkbox"
          />
          <span>{'We confirm to participate and attend to IFRA VIRTUAL Expo 2020'}</span>
        </label>

        <button
          onClick={() => {}}
          className="bg-blue-600 flex self-center justify-center items-center w-full h-10 text-white font-light text-xs mt-6"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default MediaRegistration;
