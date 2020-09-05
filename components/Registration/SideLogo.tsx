import React from 'react';

export default () => {
  return (
    <div className="flex flex-col justify-center h-screen bg-blue-600" style={{ width: '400px' }}>
      <img src="/ifra_logo_white.png" className="object-contain w-8/12 self-center" />
      <div className="bg-white w-10/12 border-b border-white mt-8 self-center" />

      <div className="w-10/12 self-center pl-1 pt-6">
        <h1 className="font-bold text-white text-md tracking-wider">
          {'Gedung Dyandra Promosindo'}
        </h1>
        <p className="font-light text-white text-xs mb-8 mt-8 tracking-wider">
          Jalan Gelora VII No.15,
          <br />
          Palmerah - Tanah Abang, Jakarta Pusat
          <br />
          10270
        </p>
        <p className="font-light text-white text-xs tracking-wider">
          {'marketing.ifra@dyandra.com'}
        </p>
      </div>
    </div>
  );
};
