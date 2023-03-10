import Carousel from '@brainhubeu/react-carousel';
import Clickable from '@components/common/Clickable';
import Transition from '@components/common/Transition';
import Navbar from '@components/Navbar/Navbar';
import { useRouter } from 'next/router';
import React, { useCallback, useState, useMemo } from 'react';
import TabHeader, { TabItem } from '@components/common/TabHeader';

interface FavoriteProps {}

const Favorite = (props: FavoriteProps) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const tabs: TabItem[] = useMemo(
    () => [
      {
        name: 'Filter',
        target: 'filter',
      },
      {
        name: 'Sort',
        target: 'sort',
      },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState(0);

  const _onTabChange = useCallback(
    (tabIndex: number) => {
      setActiveTab(tabIndex);
    },
    [activeTab]
  );

  const onClickItem = useCallback(() => {
    router.push('/exhibition/exhibitor-1');
  }, []);

  return (
    <div className="flex flex-col flex-1">
      <Navbar />

      <div className="relative w-screen mt-12" style={{ height: 'calc(100vh - 3rem)' }}>
        <img
          src="/bg_shop.webp"
          alt="Main background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 flex">
          <div className="flex flex-col flex-1 justify-center min-w-0">
            <Carousel value={index} onChange={setIndex}>
              {[0, 1].map((page) => (
                <div className="flex flex-1 flex-col justify-center items-center">
                  {[0, 1, 2].map((row) => (
                    <div className="flex flex-row justify-between mt-6">
                      {[0, 1, 2].map((col) => (
                        <>
                          <Item
                            onClick={onClickItem}
                            image="/booth.webp"
                            alt="Lorem"
                            title={`Booth ${(col + 1) * (row + 1) * (page + 1)}`}
                          />
                          {col < 2 && <div className="w-6" />}
                        </>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </Carousel>

            <div className="flex flex-row justify-center mt-8">
              {[0, 1].map((_, idx) => {
                return (
                  <button
                    onClick={() => setIndex(idx)}
                    className={`rounded-full w-2 h-2 bg-white ${
                      index === idx ? 'bg-opacity-100' : 'bg-opacity-25'
                    } mx-2`}
                  />
                );
              })}
            </div>
          </div>

          <button
            onClick={() => setShow(!show)}
            className="bg-white w-8 h-16 mt-8 focus:outline-none"
          >
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
            <div className="flex flex-col w-1/3">
              <div className="bg-white p-8 overflow-scroll" style={{ height: 'calc(100vh - 3rem)' }}>
                <div className="grid grid-cols-5 mb-6">
                  <div className="col-span-4">
                    <TabHeader data={tabs} activeTab={activeTab} setActiveTab={_onTabChange} />
                  </div>

                  <button
                    onClick={() => {}}
                    className="text-sm text-blue-600 hover:text-blue-300 focus:outline-none col-span1 mt-4"
                  >
                    Show All
                  </button>
                </div>

                {activeTab === 0 && <FilterBar />}

                {activeTab === 1 && <SortBar />}
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
      className="bg-gray-900 bg-opacity-75 relative rounded-lg w-56 h-40"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={props.image} className="object-contain w-56 h-40 rounded-lg" alt={props.alt} />

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
        <div className="absolute inset-0 p-4 bg-blue-800 flex flex-col flex-1 justify-center rounded-lg">
          <p className="text-xs text-white text-center">
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
          </p>
          <button
            className="mt-4 shadow bg-white focus:shadow-outline focus:outline-none text-blue-800 py-2 px-4 rounded-lg text-sm"
            onClick={() => {}}
          >
            {'Kunjungi Booth'}
          </button>
        </div>
      </Transition>
    </button>
  );
};

const FilterBar = () => {
  return (
    <>
      {[
        'Ministry of Trade of Pi Pavilion (10)',
        'Sponsor (12)',
        'Automotive (21)',
        'Ministry of Trade of Pi Pavilion (10)',
        'Beauty, Health & SPA (10)',
        'Delivery Services (30)',
        'Education Center (8)',
        'Fintech & Telco (2)',
        'Food & Beverage (2)',
        'Laundry & Services (17)',
        'Pharmacy (8)',
        'Property (13)',
        'Repair Services (8)',
        'Retail Mini Market (3)',
        'Water Refill (3)',
      ].map((item) => (
        <label className="block font-light text-md text-gray-800 mt-4 hover:bg-gray-200 focus:outline-none cursor-pointer">
          <input
            className="focus:outline-none form-checkbox mr-4 leading-tight h-6 w-6 border-2 border-blue-600 rounded-md outline-none"
            type="checkbox"
          />
          <span>{item}</span>
        </label>
      ))}
    </>
  );
};

const SortBar = () => {
  return (
    <select
      className="form-select shadow-md h-10 pl-2 font-light text-sm border-0 w-full"
      placeholder="Sort"
    >
      <option>{'Name : A - Z'}</option>
      <option>{'Name : Z - A'}</option>
      <option>{'Business Type : Franchise'}</option>
      <option>{'Business Type : License'}</option>
      <option>{'Business Type : Business Concept'}</option>
      <option>{'Investment Range'}</option>
    </select>
  );
};

export default Favorite;
