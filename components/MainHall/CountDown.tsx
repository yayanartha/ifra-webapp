import React from 'react';
import PrimaryButton from '@components/common/PrimaryButton';

interface CountDownProps {

}

export default (props: CountDownProps) => {
  return (
    <div className="bg-black bg-opacity-50 absolute inset-0 flex flex-col flex-1 items-center justify-center">
      <h1 className="text-white mb-8 text-3xl">{'Event Countdown'}</h1>

      <div className="flex flex-row mb-16">
        <ItemCount count={'03'} label="DAY" />
        <div className="w-6" />
        <ItemCount count={'12'} label="HOURS" />
        <div className="w-6" />
        <ItemCount count={'59'} label="MINUTES" />
        <div className="w-6" />
        <ItemCount count={'34'} label="SECONDS" />
      </div>

      <PrimaryButton label="Register Now" onClick={() => {}} />
    </div>
  );
};

const ItemCount = (props: { count: string; label: string }) => {
  return (
    <div className="flex flex-col">
      <div className="rounded-lg w-24 h-24 bg-blue-500 flex items-center justify-center">
        <h1 className="text-white text-5xl font-extrabold tracking-wider">{props.count}</h1>
      </div>
      <p className="text-white text-center text-sm mt-2">{props.label}</p>
    </div>
  );
};
