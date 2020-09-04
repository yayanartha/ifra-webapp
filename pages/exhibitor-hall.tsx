import Carousel from '@brainhubeu/react-carousel';
import Clickable from '@components/common/Clickable';
import PrimaryButton from '@components/common/PrimaryButton';
import Transition from '@components/common/Transition';
import Navbar from '@components/Navbar/Navbar';
import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

interface ExhibitorHallProps {}

const ExhibitorHall = (props: ExhibitorHallProps) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
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
          <div className="flex flex-col" style={{ height: 'calc(100vh - 3rem)' }}>
            <Carousel value={index} onChange={setIndex}>
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
                  <div className="w-6" />
                  <Item
                    onClick={onClickItem}
                    image="http://lorempixel.com/400/400/"
                    alt="Lorem"
                    title="Booth H"
                  />
                  <div className="w-6" />
                  <Item
                    onClick={onClickItem}
                    image="http://lorempixel.com/400/400/"
                    alt="Lorem"
                    title="Booth I"
                  />
                </div>
              </div>

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
                    title="Booth A"
                  />
                  <div className="w-6" />
                  <Item
                    onClick={onClickItem}
                    image="http://lorempixel.com/400/400/"
                    alt="Lorem"
                    title="Booth A"
                  />
                </div>

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
                    title="Booth A"
                  />
                  <div className="w-6" />
                  <Item
                    onClick={onClickItem}
                    image="http://lorempixel.com/400/400/"
                    alt="Lorem"
                    title="Booth A"
                  />
                </div>

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
                    title="Booth A"
                  />
                  <div className="w-6" />
                  <Item
                    onClick={onClickItem}
                    image="http://lorempixel.com/400/400/"
                    alt="Lorem"
                    title="Booth A"
                  />
                </div>
              </div>
            </Carousel>

            <div className="flex flex-row justify-center mt-8">
              {[0, 1].map((_, idx) => {
                return (
                  <div
                    className={`rounded-full w-2 h-2 bg-white ${
                      index === idx ? 'bg-opacity-100' : 'bg-opacity-25'
                    } mx-2`}
                  />
                );
              })}
            </div>

            {show && (
              <div className="flex flex-col w-1/3 items-end">
                <div className="bg-white p-8" style={{ height: 'calc(100vh - 3rem)' }}>
                  <h1 className="text-3xl mb-8">{'Alpha man by Maxcoach'}</h1>
                  <h2 className="text-xl text-blue-800 mb-2">{'IDR 35,000'}</h2>
                  <p className="text-sm">
                    {
                      'What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. And through CODE, we see how this ingenuity and our very human compulsion to communicate have driven the technological innovations of the past two centuries.'
                    }
                  </p>
                  <br />
                  <p className="text-sm">
                    {
                      'What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. And through CODE, we see how this ingenuity and our very human compulsion to communicate have driven the technological innovations of the past two centuries.'
                    }
                  </p>
                  <div className="flex flex-col flex-1 items-center mt-12">
                    <PrimaryButton label="Kunjungi Toko" onClick={() => {}} />
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
        className="flex items-center justify-center bg-gray-900 bg-opacity-75 relative rounded-lg"
        style={{ width: '16rem', height: '12rem' }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={props.image}
          className="object-contain"
          style={{ width: '150px', height: '150px' }}
          alt={props.alt}
        />

        <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-center items-center rounded-lg">
          <h1 className="text-lg font-bold text-white">{props.title}</h1>
        </div>

        <Transition
          show={isHover}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 px-4 py-4 bg-blue-800 flex flex-col flex-1 justify-center rounded-lg">
            <p className="text-xs text-white text-center">
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            </p>
            <button
              className="mt-8 shadow bg-white focus:shadow-outline focus:outline-none text-blue-800 py-2 px-4 rounded-lg"
              onClick={() => {}}
            >
              {'Kunjungi Booth'}
            </button>
          </div>
        </Transition>
      </div>
    </Clickable>
  );
};

export default ExhibitorHall;
