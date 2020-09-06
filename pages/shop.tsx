import Clickable from '@components/common/Clickable';
import PrimaryButton from '@components/common/PrimaryButton';
import Navbar from '@components/Navbar/Navbar';
import React, { useCallback, useState } from 'react';

interface ShopProps {}

const Shop = (props: ShopProps) => {
  const [show, setShow] = useState(false);

  const onClickItem = useCallback(() => {
    setShow(!show);
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
                <Item onClick={onClickItem} image="http://lorempixel.com/400/400/" alt="Lorem" />
                <div className="w-6" />
                <Item onClick={onClickItem} image="http://lorempixel.com/400/400/" alt="Lorem" />
                <div className="w-6" />
                <Item onClick={onClickItem} image="http://lorempixel.com/400/400/" alt="Lorem" />
              </div>

              <div className="flex flex-row justify-between mt-6">
                <Item onClick={onClickItem} image="http://lorempixel.com/400/400/" alt="Lorem" />
                <div className="w-6" />
                <Item onClick={onClickItem} image="http://lorempixel.com/400/400/" alt="Lorem" />
                <div className="w-6" />
                <Item onClick={onClickItem} image="http://lorempixel.com/400/400/" alt="Lorem" />
              </div>

              <div className="flex flex-row justify-between mt-6">
                <Item onClick={onClickItem} image="http://lorempixel.com/400/400/" alt="Lorem" />
                <div className="w-6" />
                <Item onClick={onClickItem} image="http://lorempixel.com/400/400/" alt="Lorem" />
                <div className="w-6" />
                <Item onClick={onClickItem} image="http://lorempixel.com/400/400/" alt="Lorem" />
              </div>
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

const Item = (props: { onClick(): void; image: string; alt: string }) => {
  return (
    <button onClick={props.onClick}>
      <div
        className="flex items-center justify-center bg-white"
        style={{ width: '200px', height: '200px' }}
      >
        <img
          src={props.image}
          className="object-contain"
          style={{ width: '100px', height: '100px' }}
          alt={props.alt}
        />
      </div>
    </button>
  );
};

export default Shop;
