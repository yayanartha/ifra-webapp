import Clickable from '@components/common/Clickable';
import Transition from '@components/common/Transition';
import Navbar from '@components/Navbar/Navbar';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';

const people = [
  'https://www.fs.usda.gov/research/people/ritsdocs/drlederle.jpg',
  'https://www.oliverwyman.com/content/dam/oliver-wyman/v2/careers/profiles/timib.jpg',
  'https://www.oliverwyman.com/content/dam/oliver-wyman/v2/careers/profiles/scottbk-profile-460x460.jpg',
  'https://www.fs.usda.gov/research/people/ritsdocs/drlederle.jpg',
  'https://www.oliverwyman.com/content/dam/oliver-wyman/v2/careers/profiles/timib.jpg',
  'https://www.oliverwyman.com/content/dam/oliver-wyman/v2/careers/profiles/scottbk-profile-460x460.jpg',
  'https://www.oliverwyman.com/content/dam/oliver-wyman/v2/careers/profiles/timib.jpg',
];

interface ExhibitorHallProps {}

const ExhibitorHall = (props: ExhibitorHallProps) => {
  const router = useRouter();
  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);

  const onClickItem = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <div className="flex flex-col flex-1">
      <Navbar />

      <div className="relative w-screen mt-12" style={{ height: 'calc(100vh - 3rem)' }}>
        <img src="/bg-expert.webp" alt="Main background" className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black bg-opacity-50 flex">
          <div className="flex flex-1 flex-col justify-center items-center">
            <div className="flex flex-row justify-between mt-6">
              {people.slice(0, 3).map((item, idx) => (
                <>
                  <Item onClick={onClickItem} image={item} alt="Lorem" title="Booth A" />
                  {idx < 2 && <div className="w-6" />}
                </>
              ))}
            </div>
            <div className="flex flex-row justify-between mt-6">
              {people.slice(3, 6).map((item, idx) => (
                <>
                  <Item onClick={onClickItem} image={item} alt="Lorem" title="Booth A" />
                  {idx < 2 && <div className="w-6" />}
                </>
              ))}
            </div>
            <div className="flex flex-row justify-between mt-6">
              {people.slice(3, 4).map((item, idx) => (
                <Item onClick={onClickItem} image={item} alt="Lorem" title="Booth A" />
              ))}
            </div>
          </div>

          <button onClick={() => setShow(!show)} className="bg-white w-8 h-16 mt-8">
            <svg
              className="text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {show && (
            <div className="flex flex-col w-1/3 items-end">
              <div
                className="bg-white p-8 overflow-y-scroll"
                style={{ height: 'calc(100vh - 3rem)' }}
              >
                <h1 className="text-3xl mb-4">{'Company Info'}</h1>

                <div className="mb-6">
                  <p className="text-blue-600 font-semibold text-xs mb-2">Company Name</p>
                  <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
                </div>

                <div className="mb-6">
                  <p className="text-blue-600 font-semibold text-xs mb-2">Brand Name</p>
                  <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
                </div>

                <div className="mb-6">
                  <p className="text-blue-600 font-semibold text-xs mb-2">Contact Person</p>
                  <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
                </div>

                <div className="mb-6">
                  <p className="text-blue-600 font-semibold text-xs mb-2">Position</p>
                  <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
                </div>

                <div className="mb-6">
                  <p className="text-blue-600 font-semibold text-xs mb-2">Company Address</p>
                  <p className="text-xs font-light">
                    {
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    }
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-blue-600 font-semibold text-xs mb-2">City / Country</p>
                  <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
                </div>

                <div className="mb-6">
                  <p className="text-blue-600 font-semibold text-xs mb-2">Phone Number</p>
                  <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
                </div>

                <div className="mb-6">
                  <p className="text-blue-600 font-semibold text-xs mb-2">Fax</p>
                  <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
                </div>

                <div className="mb-6">
                  <p className="text-blue-600 font-semibold text-xs mb-2">Company Email</p>
                  <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
                </div>

                <div className="mb-6">
                  <p className="text-blue-600 font-semibold text-xs mb-2">Website</p>
                  <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
                </div>

                <div className="mb-6">
                  <p className="text-blue-600 font-semibold text-xs mb-2">Social Media</p>
                  <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
                </div>

                <div className="mb-6">
                  <p className="text-blue-600 font-semibold text-xs mb-2">Type of Business</p>
                  <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
                </div>

                <div className="mb-6">
                  <p className="text-blue-600 font-semibold text-xs mb-2">Industry Category</p>
                  <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
                </div>

                <div className="mb-6">
                  <p className="text-blue-600 font-semibold text-xs mb-2">Number of Branch</p>
                  <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
                </div>

                <div className="mb-6">
                  <p className="text-blue-600 font-semibold text-xs mb-2">Investment Range</p>
                  <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
                </div>

                <div className="mb-6">
                  <p className="text-blue-600 font-semibold text-xs mb-2">
                    Payback Estimation Period
                  </p>
                  <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
                </div>

                <div className="mb-6">
                  <p className="text-blue-600 font-semibold text-xs mb-2">Description</p>
                  <p className="text-xs font-light">
                    {
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    }
                    <br />
                    <br />
                    {
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    }
                  </p>
                </div>

                <h1 className="text-3xl mt-8 mb-4">{'Gallery'}</h1>

                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <img
                      src="http://lorempixel.com/400/400/"
                      className="object-cover w-20 h-20 mr-4"
                    />
                    <div className="flex flex-col">
                      <p className="text-blue-600 font-semibold text-xs mb-2">Album Jakarta</p>
                      <p className="text-xs">
                        {
                          'What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. And through CODE, we see how this ingenuity and our very human compulsion to communicate have driven the technological innovations of the past two centuries.'
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row mt-4">
                    <button className="text-blue-600 flex flex-1 justify-center text-center rounded-lg bg-white border-blue-600 border py-1">
                      {'Lihat'}
                    </button>
                    <div className="w-8" />
                    <button className="text-white flex flex-1 justify-center text-center rounded-lg bg-blue-800 border-blue-800 border py-1">
                      {'Simpan'}
                    </button>
                  </div>
                </div>

                <h1 className="text-3xl mt-8 mb-4">{'Video'}</h1>

                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <img
                      src="http://lorempixel.com/400/400/"
                      className="object-cover w-20 h-20 mr-4"
                    />
                    <div className="flex flex-col">
                      <p className="text-blue-600 font-semibold text-xs mb-2">
                        Company Profile 2020
                      </p>
                      <p className="text-xs">
                        {
                          'What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. And through CODE, we see how this ingenuity and our very human compulsion to communicate have driven the technological innovations of the past two centuries.'
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row mt-4">
                    <button className="text-blue-600 flex flex-1 justify-center text-center rounded-lg bg-white border-blue-600 border py-1">
                      {'Lihat'}
                    </button>
                    <div className="w-8" />
                    <button className="text-white flex flex-1 justify-center text-center rounded-lg bg-blue-800 border-blue-800 border py-1">
                      {'Simpan'}
                    </button>
                  </div>
                </div>

                <h1 className="text-3xl mt-8 mb-4">{'Dokumen'}</h1>

                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <img
                      src="http://lorempixel.com/400/400/"
                      className="object-cover w-20 h-20 mr-4"
                    />
                    <div className="flex flex-col">
                      <p className="text-blue-600 font-semibold text-xs mb-2">Business Package</p>
                      <p className="text-xs">
                        {
                          'What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. And through CODE, we see how this ingenuity and our very human compulsion to communicate have driven the technological innovations of the past two centuries.'
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row mt-4">
                    <button className="text-blue-600 flex flex-1 justify-center text-center rounded-lg bg-white border-blue-600 border py-1">
                      {'Lihat'}
                    </button>
                    <div className="w-8" />
                    <button className="text-white flex flex-1 justify-center text-center rounded-lg bg-blue-800 border-blue-800 border py-1">
                      {'Simpan'}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col mt-8">
                  <div className="flex flex-row">
                    <img
                      src="http://lorempixel.com/400/400/"
                      className="object-cover w-20 h-20 mr-4"
                    />
                    <div className="flex flex-col">
                      <p className="text-blue-600 font-semibold text-xs mb-2">Brosur</p>
                      <p className="text-xs">
                        {
                          'What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. And through CODE, we see how this ingenuity and our very human compulsion to communicate have driven the technological innovations of the past two centuries.'
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row mt-4">
                    <button className="text-blue-600 flex flex-1 justify-center text-center rounded-lg bg-white border-blue-600 border py-1">
                      {'Play Video'}
                    </button>
                    <div className="w-8" />
                    <button className="text-white flex flex-1 justify-center text-center rounded-lg bg-blue-800 border-blue-800 border py-1">
                      {'Simpan'}
                    </button>
                  </div>
                </div>

                <div className="flex flex-row flex-1 items-center mt-12 justify-center">
                  <button className="w-32 h-32 rounded-lg bg-blue-600 text-white">{'Email'}</button>
                  <div className="w-8" />
                  <button
                    className="w-32 h-32 rounded-lg text-white"
                    style={{ backgroundColor: '#2EC740' }}
                  >
                    {'Whatsapp'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Item = (props: { onClick(): void; image: string; alt: string; title: string }) => {
  const [isHover, setHover] = useState(false);

  return (
    <button
      onClick={props.onClick}
      className="bg-gray-900 bg-opacity-75 relative rounded-full w-40 h-40"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={props.image} className="object-cover w-full h-full rounded-full" alt={props.alt} />

      <Transition
        show={isHover}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute inset-0 px-4 py-4 bg-blue-600 flex flex-col flex-1 justify-center rounded-full">
          <p className="text-sm text-white text-center font-semibold">
            {'Asosiasi Franchise Indonesia'}
          </p>
        </div>
      </Transition>
    </button>
  );
};

export default ExhibitorHall;
