import Clickable from '@components/common/Clickable';
import PrimaryButton from '@components/common/PrimaryButton';
import Transition from '@components/common/Transition';
import Navbar from '@components/Navbar/Navbar';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';

interface ExhibitorHallProps {}

const ExhibitorHall = (props: ExhibitorHallProps) => {
  const router = useRouter();
  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);

  const onClickItem = useCallback(() => {
    router.push('/exhibition/exhibitor-1');
  }, []);

  return (
    <div className="flex flex-col flex-1">
      <Navbar />

      <div className="relative w-screen mt-12" style={{ height: 'calc(100vh - 3rem)' }}>
        <img
          src="/bg-exhibitor-hall.png"
          alt="Main background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="flex flex-row" style={{ height: 'calc(100vh - 3rem)' }}>
            <div className="flex flex-1 flex-col justify-center items-center">
              <div className="flex flex-row justify-between mt-6">
                <Item
                  onClick={onClickItem}
                  image="http://lorempixel.com/400/400/"
                  alt="Lorem"
                  title="Booth A"
                />
                <div className="w-6" />
                <Item
                  onClick={onClickItem}
                  image="http://lorempixel.com/400/400/"
                  alt="Lorem"
                  title="Booth B"
                />
                <div className="w-6" />
                <Item
                  onClick={onClickItem}
                  image="http://lorempixel.com/400/400/"
                  alt="Lorem"
                  title="Booth C"
                />
              </div>

              <div className="flex flex-row justify-between mt-6">
                <Item
                  onClick={onClickItem}
                  image="http://lorempixel.com/400/400/"
                  alt="Lorem"
                  title="Booth D"
                />
                <div className="w-6" />
                <Item
                  onClick={onClickItem}
                  image="http://lorempixel.com/400/400/"
                  alt="Lorem"
                  title="Booth E"
                />
                <div className="w-6" />
                <Item
                  onClick={onClickItem}
                  image="http://lorempixel.com/400/400/"
                  alt="Lorem"
                  title="Booth F"
                />
              </div>

              <div className="flex flex-row justify-between mt-6">
                <Item
                  onClick={onClickItem}
                  image="http://lorempixel.com/400/400/"
                  alt="Lorem"
                  title="Booth G"
                />
              </div>
            </div>

            {show && (
                <div className="flex flex-col w-1/3 items-end">
              <div className="bg-white p-8 overflow-y-scroll" style={{ height: 'calc(100vh - 3rem)' }}>
                  <h1 className="text-3xl mb-8">{'Dokumen'}</h1>

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
                    <button className="w-32 h-32 rounded-lg bg-blue-600 text-white">
                      {'Email'}
                    </button>
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
    </div>
  );
};

const Item = (props: { onClick(): void; image: string; alt: string; title: string }) => {
  const [isHover, setHover] = useState(false);

  return (
    <Clickable onClick={props.onClick}>
      <div
        className="flex items-center justify-center bg-gray-900 bg-opacity-75 relative rounded-full"
        style={{ width: '200px', height: '200px' }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={props.image}
          className="object-cover w-full h-full rounded-full"
          alt={props.alt}
        />

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
            <p className="text-lg text-white text-center font-bold">
              {'Asosiasi Franchise Indonesia'}
            </p>
          </div>
        </Transition>
      </div>
    </Clickable>
  );
};

export default ExhibitorHall;
