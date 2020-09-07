import { padStart } from 'lodash';
import React, { useCallback, useState } from 'react';
import Countdown from 'react-countdown';
import PrimaryButton from '@components/common/PrimaryButton';
import { useRouter } from 'next/router';

interface CountDownProps {}

export default (props: CountDownProps) => {
  const router = useRouter();

  const [isShowRegisterMenu, setIsShowRegisterMenu] = useState(false);

  const _handleRegister = useCallback(() => {
    setIsShowRegisterMenu(true);
  }, [isShowRegisterMenu]);

  const _registerSponsor = useCallback(() => {
    router.push('/sponsor-registration');
  }, []);

  const _registerExhibitor = useCallback(() => {
    router.push('/exhibitor-registration');
  }, []);

  const _registerVisitor = useCallback(() => {
    router.push('/visitor-registration');
  }, []);

  const _registerMedia = useCallback(() => {
    router.push('/media-registration');
  }, []);

  return (
    <div
      className="absolute inset-0 flex flex-col flex-1 items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
    >
      <p className="text-white mb-8 text-3xl font-body font-bold">
        The 18<sup>th</sup> IFRA Expo 2020
      </p>

      <div className="flex flex-row mb-16">
        <Countdown
          date={new Date('2020-09-18').setHours(10)}
          autoStart
          renderer={({ days, hours, minutes, seconds }) => (
            <>
              <ItemCount count={padStart(`${days}`, 2, '0')} label="DAYS" />
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

      {isShowRegisterMenu ? (
        <div className="flex">
          <button
            onClick={_registerSponsor}
            className="rounded-lg w-32 h-32 bg-primary flex items-center justify-center hover:bg-blue_button focus:outline-none"
          >
            <p className="text-white text-center text-base mt-2 font-body font-medium">Sponsor</p>
          </button>
          <div className="w-6" />
          <button
            onClick={_registerExhibitor}
            className="rounded-lg w-32 h-32 bg-primary flex items-center justify-center hover:bg-blue_button focus:outline-none"
          >
            <p className="text-white text-center text-base mt-2 font-body font-medium">Exhibitor</p>
          </button>
          <div className="w-6" />
          <button
            onClick={_registerVisitor}
            className="rounded-lg w-32 h-32 bg-primary flex items-center justify-center hover:bg-blue_button focus:outline-none"
          >
            <p className="text-white text-center text-base mt-2 font-body font-medium">Visitor</p>
          </button>
          <div className="w-6" />
          <button
            onClick={_registerMedia}
            className="rounded-lg w-32 h-32 bg-primary flex items-center justify-center hover:bg-blue_button focus:outline-none"
          >
            <p className="text-white text-center text-base mt-2 font-body font-medium">Media</p>
          </button>
        </div>
      ) : (
        <PrimaryButton onClick={_handleRegister} label="Register Now" width="250px" />
      )}
    </div>
  );
};

export const ItemCount = (props: { count: string; label?: string }) => {
  return (
    <div className="flex flex-col">
      <div className="rounded-lg w-32 h-32 bg-primary flex items-center justify-center">
        <p className="text-white text-5xl font-body font-bold tracking-wider">{props.count}</p>
      </div>
      {props.label !== undefined && (
        <p className="text-white text-center text-sm mt-2 font-body">{props.label}</p>
      )}
    </div>
  );
};
