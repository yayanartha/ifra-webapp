import PrimaryButton from '@components/common/PrimaryButton';
import { padStart } from 'lodash';
import React from 'react';
import Countdown from 'react-countdown';

interface CountDownProps {}

export default (props: CountDownProps) => {
  return (
    <div className="bg-black bg-opacity-50 absolute inset-0 flex flex-col flex-1 items-center justify-center">
      <h1 className="text-white mb-8 text-3xl">{'Event Countdown'}</h1>

      <div className="flex flex-row mb-16">
        <Countdown
          date={Date.now() + 10000000}
          autoStart
          renderer={({ days, hours, minutes, seconds }) => (
            <>
              <ItemCount count={padStart(`${days}`, 2, '0')} label="DAY" />
              <div className="w-6" />
              <ItemCount count={padStart(`${hours}`, 2, '0')} label="HOURS" />
              <div className="w-6" />
              <ItemCount count={padStart(`${minutes}`, 2, '0')} label="MINUTES" />
              <div className="w-6" />
              <ItemCount count={padStart(`${seconds}`, 2, '0')} label="SECONDS" />
            </>
          )}
        />
      </div>

      <div className="w-1/5 flex self-center">
        <PrimaryButton label="Register Now" onClick={() => {}} />
      </div>
    </div>
  );
};

export const ItemCount = (props: { count: string; label?: string }) => {
  return (
    <div>
      <div className="rounded-lg w-24 h-24 bg-blue-500 flex items-center justify-center">
        <h1 className="text-white text-5xl font-extrabold tracking-wider">{props.count}</h1>
      </div>
      {props.label !== undefined && (
        <p className="text-white text-center text-sm mt-2">{props.label}</p>
      )}
    </div>
  );
};
