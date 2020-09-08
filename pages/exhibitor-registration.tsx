import SideLogo from '@components/Registration/SideLogo';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import Modal from 'react-modal';

interface ExhibitorRegistrationProps {}

const ExhibitorRegistration = (props: ExhibitorRegistrationProps) => {
  const router = useRouter();
  const [showInfo, setShowInfo] = useState(true);
  const [business, setBusiness] = useState('placeholder');
  const [nature, setNature] = useState('placeholder');
  const [title, setTitle] = useState('placeholder');
  const [country, setCountry] = useState('placeholder');

  const _handleSubmit = useCallback(() => {
    router.push('/login');
  }, []);

  const setGrayText = (value: string) => {
    return value === 'placeholder' ? 'text-gray-400' : 'text-black';
  };

  return (
    <div className="w-screen h-screen bg-white flex">
      <SideLogo />

      <div className="h-screen w-full pt-8 pl-8 pr-8 overflow-scroll">
        <div className="h-16 flex flex-col justify-center mb-4">
          <h1 className="font-bold text-3xl text-blue-600 tracking-wider">
            Exhibitor Registration
          </h1>
        </div>

        <div className="flex w-full gap-8">
          <div className="flex flex-col flex-1">
            <div className="flex flex-row gap-4 mb-4">
              <select
                className={`form-select shadow-md h-10 flex flex-1 pl-2 font-light text-sm border-0 ${setGrayText(
                  business
                )}`}
                placeholder="Choose Business Type*"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
              >
                <option value="placeholder" disabled>
                  Choose Business Type*
                </option>
                <option>Franchise</option>
                <option>License</option>
                <option>Business Concept</option>
              </select>

              <select
                className={`form-select shadow-md h-10 flex flex-1 pl-2 font-light text-sm border-0 ${setGrayText(nature)}`}
                placeholder="Choose Nature of Business*"
                value={nature}
                onChange={(e) => setNature(e.target.value)}
              >
                <option value="placeholder" disabled>
                  Choose Nature of Business*
                </option>
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

            <TextHelp />
          </div>

          <div className="flex flex-col flex-1">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                className="appearance-none shadow-md h-10 pl-2 font-light text-sm"
                placeholder="Name*"
              />
              <select
                className={`form-select shadow-md h-10 pl-2 font-light text-sm border-0 ${setGrayText(
                  title
                )}`}
                placeholder="Select Title*"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              >
                <option value="placeholder" disabled>
                  Select Title*
                </option>
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
                className={`form-select shadow-md h-10 pl-2 font-light text-sm border-0 ${setGrayText(
                  country
                )}`}
                placeholder="Select Country*"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="placeholder" disabled>
                  Select Country*
                </option>
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

            <label className="flex font-light items-center text-xs text-gray-800 ">
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

      <Modal isOpen={showInfo} onRequestClose={() => setShowInfo(false)} style={customStyles}>
        <div className="h-full flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <img src="/rule-diagram.png" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

const customStyles: Modal.Styles = {
  content: {
    width: '70%',
    height: '100vh',
    margin: 'auto',
    background: 'transparent',
    borderColor: 'transparent',
    borderWidth: '0',
  },
  overlay: {
    background: '#000000cc',
  },
};

const TextHelp = () => (
  <div className="mt-8 shadow-md p-2">
    <h1 className="text-xs text-blue-800 font-semibold mb-4">
      Please send the data (before 15 September 2020) via email dyandra.ifra@gmail.com (based on
      your choose package)
    </h1>
    <div className="mb-2">
      <p className="text-blue-800 font-semibold text-xs">
        {'Banner placement on homepage (max 2MB) : '}
        <span className="text-xs font-thin text-black">
          300 x 250 pixel or 1900 x 667 pixel based on your choose package (format PNG)
        </span>
      </p>
    </div>
    <div className="mb-2">
      <p className="text-blue-800 font-semibold text-xs">
        {'Product catalogue (max 2MB) : '}
        <span className="text-xs font-thin text-black">(format PDF)</span>
      </p>
    </div>
    <div className="mb-2">
      <p className="text-blue-800 font-semibold text-xs">
        {'Video display (max 2MB) : '}
        <span className="text-xs font-thin text-black">
          Size 16:9 (format MP4) & link Youtube. (10/20/30/60 seconds based on your choose package)
        </span>
      </p>
    </div>
    <div className="mb-2">
      <p className="text-blue-800 font-semibold text-xs">
        {'Poster/photos (max 2MB) : '}
        <span className="text-xs font-thin text-black">480 x 560 pixel (format JPEG/PNG)</span>
      </p>
    </div>
    <div className="mb-2">
      <p className="text-blue-800 font-semibold text-xs">
        {'Brochure (max 2MB) : '}
        <span className="text-xs font-thin text-black">480 x 560 pixel (format JPEG/PNG)</span>
      </p>
    </div>
    <div className="mb-2">
      <p className="text-blue-800 font-semibold text-xs">
        {'Logo placement (max 2MB) : '}
        <span className="text-xs font-thin text-black">500 x 500 pixel (format JPEG/PNG/PDF)</span>
      </p>
    </div>
    <div className="mb-2">
      <p className="text-blue-800 font-semibold text-xs">
        {'Social media ads (max 2MB) : '}
        <span className="text-xs font-thin text-black">1080 x 1080 pixel (format JPEG/PNG)</span>
      </p>
    </div>
  </div>
);

export default ExhibitorRegistration;
