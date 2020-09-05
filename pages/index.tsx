import Agenda from '@components/MainHall/Agenda';
import Exhibition from '@components/MainHall/Exhibition';
import MainLogo from '@components/MainHall/MainLogo';
// import ModalTNC from '@components/MainHall/ModalTNC';
import OrganiserLogo from '@components/MainHall/OrganiserLogo';
import Poster from '@components/MainHall/Poster';
import Press from '@components/MainHall/Press';
import Videotron from '@components/MainHall/Videotron';
import Wallpaper from '@components/MainHall/Wallpaper';
import XBanner from '@components/MainHall/XBanner';
import Navbar from '@components/Navbar/Navbar';
import { useCallback, useState, useEffect, useMemo, useRef } from 'react';
import Modal from 'react-modal';
import ModalCenter from '@components/common/ModalCenter';
import SponsorFooter from '@components/Sponsor/SponsorFooter';
import { useRouter } from 'next/router';
import PressInfo from '@components/MainHall/PressInfo';
// import CountDown from '@components/MainHall/CountDown';

const MainHall = () => {
  const router = useRouter();
  const [isShowModal, setIsShowModal] = useState(false);

  const _onClickAgenda = useCallback((dayNo: number) => {
    //
  }, []);

  const _onClickExhibition = useCallback(() => {
    router.push('/exhibition');
  }, []);

  const _onClickPress = useCallback(() => {
    _openModal();
  }, []);

  const _onClickPoster = useCallback(() => {
    _openModal();
  }, []);

  const _onClickBanner = useCallback(() => {
    _openModal();
  }, []);

  const _onClickWallpaper = useCallback(() => {
    _openModal();
  }, []);

  const _onClickVideotron = useCallback(() => {
    _openModal();
  }, []);

  const _onClickLogo = useCallback(() => {
    _openModal();
  }, []);

  const _openModal = useCallback(() => {
    setIsShowModal(true);
  }, [isShowModal]);

  const _closeModal = useCallback(() => {
    setIsShowModal(false);
  }, [isShowModal]);

  return (
    <div className="flex flex-col flex-1">
      <Navbar />

      <div className="fixed">
        <img src="/bg-main1.png" alt="Main background" className="w-full h-auto fixed" />

        <div
          className="relative top-0 left-0"
          style={{
            width: 'calc((1920 * 100vh) / 1080)',
            height: 'calc((1080 * 100vw) / 1920)',
          }}
        >
          {/* LOGO */}
          <div
            onClick={_onClickLogo}
            className="absolute rounded-full flex items-center justify-center cursor-pointer hover:opacity-75"
            style={{
              left: 'calc(50vw - 6.5vw)',
              top: '11.5%',
              width: '13vw',
              height: '13vw',
            }}
          >
            {/* <p>LOGO</p> */}
          </div>

          <div
            onClick={_onClickLogo}
            className="absolute rounded-full flex items-center justify-center cursor-pointer hover:opacity-75"
            style={{ left: 'calc(50vw - 15.6vw)', top: '33.5%', width: '8vw', height: '8vw' }}
          >
            {/* <p>LOGO</p> */}
          </div>

          <div
            onClick={_onClickLogo}
            className="absolute rounded-full flex items-center justify-center cursor-pointer hover:opacity-75"
            style={{ left: 'calc(50vw + 7.6vw)', top: '33.5%', width: '8vw', height: '8vw' }}
          >
            {/* <p>LOGO</p> */}
          </div>

          <div
            onClick={_onClickLogo}
            className="absolute rounded-full flex items-center justify-center cursor-pointer hover:opacity-75"
            style={{ left: 'calc(50vw - 4.15vw)', top: '31.4%', width: '8.3vw', height: '8.3vw' }}
          >
            {/* <p>LOGO</p> */}
          </div>

          <div
            onClick={_onClickLogo}
            className="absolute rounded-full flex items-center justify-center cursor-pointer hover:opacity-75"
            style={{ left: 'calc(50vw - 4.15vw)', top: '46.5%', width: '8.3vw', height: '8.3vw' }}
          >
            {/* <p>LOGO</p> */}
          </div>

          {/* POSTER */}
          <div
            onClick={_onClickPoster}
            className="absolute"
            style={{
              left: 'calc(50vw - 37vw)',
              top: '29.8%',
              perspective: '1000px',
            }}
          >
            <div
              className="bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200"
              style={{
                width: '6.8vw',
                height: '16vw',
                transform: 'rotateY(25deg) rotateX(-4deg) skewY(6deg)',
              }}
            >
              <p>POSTER</p>
            </div>
          </div>

          {/* X-BANNER */}
          <div
            onClick={_onClickBanner}
            className="absolute"
            style={{
              left: 'calc(50vw - 31.1vw)',
              top: '64%',
              perspective: '1000px',
            }}
          >
            <div
              className="bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200"
              style={{
                width: '17.7vw',
                height: '5.6vw',
                transform: 'rotateY(20deg) ',
              }}
            >
              <p>X-BANNER</p>
            </div>
          </div>

          {/* WALLPAPER */}
          <div
            onClick={_onClickWallpaper}
            className="absolute"
            style={{
              left: 'calc(50vw + 12.7vw)',
              top: '63.1%',
              perspective: '1000px',
            }}
          >
            <div
              className="bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200"
              style={{
                width: '8.6vw',
                height: '6.65vw',
                transform: 'rotateY(-20deg) ',
              }}
            >
              <p>WALLPAPER</p>
            </div>
          </div>

          {/* AGENDA */}
          <div
            className="absolute"
            style={{
              left: 'calc(50vw + 24.5vw)',
              top: '21.5%',
              perspective: '1000px',
            }}
          >
            <div
              className="flex items-center justify-around"
              style={{
                width: '15vw',
                height: '7.2vw',
                transform: 'rotateY(-40deg) rotateX(-2deg) skewY(-10deg)',
                paddingTop: '10%',
                paddingLeft: '0.2vw',
              }}
            >
              <div
                onClick={() => _onClickAgenda(1)}
                className="cursor-pointer hover:bg-gray-200 opacity-25"
                style={{ width: '4vw', height: '4.5vw' }}
              />

              <div
                onClick={() => _onClickAgenda(2)}
                className="cursor-pointer hover:bg-gray-200 opacity-25"
                style={{ width: '4vw', height: '4.5vw' }}
              />

              <div
                onClick={() => _onClickAgenda(3)}
                className="cursor-pointer hover:bg-gray-200 opacity-25"
                style={{ width: '4vw', height: '4.5vw' }}
              />
            </div>
          </div>

          {/* VIDEOTRON */}
          <div
            onClick={_onClickVideotron}
            className="absolute"
            style={{
              left: 'calc(50vw + 24.6vw)',
              top: '37.9%',
              perspective: '1000px',
            }}
          >
            <div
              className="bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200"
              style={{
                width: '15.5vw',
                height: '9.5vw',
                transform: 'rotateY(-30deg) rotateX(-3deg) skewY(-6.3deg)',
              }}
            >
              <p>VIDEOTRON</p>
            </div>
          </div>

          {/* EXHIBITION */}
          <div
            onClick={_onClickExhibition}
            className="absolute cursor-pointer hover:bg-white opacity-25"
            style={{ left: 'calc(50vw - 5.7vw)', top: '65.5%', width: '11.3vw', height: '5.7vw' }}
          />

          {/* PRESS */}
          <div
            onClick={_onClickPress}
            className="absolute"
            style={{
              left: 'calc(50vw + 28.8vw)',
              top: '64.7%',
              perspective: '1000px',
            }}
          >
            <div
              className="hover:bg-white opacity-25 flex items-center justify-center cursor-pointer"
              style={{
                width: '9.8vw',
                height: '6.8vw',
                transform: 'rotateY(-40deg) skewY(1deg) skewX(2deg)',
              }}
            />
          </div>

          <SponsorFooter />
        </div>
      </div>

      <ModalCenter isOpen={isShowModal} onClose={_closeModal}>
        <PressInfo />
      </ModalCenter>

      {/* <ModalTNC isShow={showModal} onCloseModal={() => setShowModal(false)} /> */}

      {/* <CountDown /> */}

      {/* <div className="absolute bottom-0 w-screen h-20 bg-white flex items-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((s, i) => (
          <button
            key={i}
            className="bg-blue_button w-32 h-16 flex items-center justify-center mx-2"
          >
            <p className="text-white">LOGO</p>
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default MainHall;
