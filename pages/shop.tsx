import PrimaryButton from '@components/common/PrimaryButton';
import Navbar from '@components/Navbar/Navbar';
import React, { useCallback, useState } from 'react';

interface ShopProps {}

const Shop = (props: ShopProps) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<null | number>(null);

  const onClickItem = useCallback(
    (idx: number) => {
      if (selected === idx) {
        setSelected(null);
        return setShow(false);
      }

      setSelected(idx);
      setShow(true);
    },
    [show, selected]
  );

  const onToggleShow = useCallback(() => {
    if (show) {
      setSelected(null);
      return setShow(false);
    }

    setSelected(0);
    setShow(true);
  }, [show]);

  return (
    <div className="flex flex-col flex-1">
      <Navbar />

      <div
        className="relative w-screen mt-12"
        style={{
          height: 'calc(100vh - 3rem)',
        }}
      >
        <img src="/bg_shop.webp" alt="Main background" className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="flex flex-row" style={{ height: 'calc(100vh - 3rem)' }}>
            <div className="flex flex-1 flex-col justify-center items-center">
              <div className="flex flex-row justify-between mt-6">
                {[0, 1, 2].map((_, idx) => (
                  <>
                    <Item
                      onClick={() => onClickItem(idx)}
                      isTransparent={selected !== null && selected !== idx}
                      image="http://lorempixel.com/400/400/"
                      alt="Lorem"
                    />
                    {idx < 2 && <div className="w-6" />}
                  </>
                ))}
              </div>

              <div className="flex flex-row justify-between mt-6">
                {[0, 1, 2].map((_, idx) => (
                  <>
                    <Item
                      onClick={() => onClickItem(idx + 3)}
                      isTransparent={selected !== null && selected !== idx + 3}
                      image="http://lorempixel.com/400/400/"
                      alt="Lorem"
                    />
                    {idx < 2 && <div className="w-6" />}
                  </>
                ))}
              </div>

              <div className="flex flex-row justify-between mt-6">
                {[0, 1, 2].map((_, idx) => (
                  <>
                    <Item
                      onClick={() => onClickItem(idx + 6)}
                      isTransparent={selected !== null && selected !== idx + 6}
                      image="http://lorempixel.com/400/400/"
                      alt="Lorem"
                    />
                    {idx < 2 && <div className="w-6" />}
                  </>
                ))}
              </div>
            </div>

            <button onClick={onToggleShow} className="focus:outline-none bg-white w-8 h-16 mt-8">
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

const Item = (props: { onClick(): void; isTransparent: boolean; image: string; alt: string }) => {
  return (
    <button
      onClick={props.onClick}
      className={`focus:outline-none flex items-center justify-center bg-white w-40 h-40 p-4${
        props.isTransparent ? ' opacity-25' : ''
      }`}
      // style={{ width: '200px', height: '200px' }}
    >
      <img
        src={props.image}
        className="object-contain w-full h-full"
        // style={{ width: '100px', height: '100px' }}
        alt={props.alt}
      />
    </button>
  );
};

export default Shop;
