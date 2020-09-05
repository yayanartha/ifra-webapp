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
// import CountDown from '@components/MainHall/CountDown';

const MainHall = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const _onClickAgenda = useCallback(() => {
    _openModal();
  }, []);

  const _onClickExhibition = useCallback(() => {
    _openModal();
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
            className="absolute bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200"
            style={{
              left: 'calc(50vw - 6.5vw)',
              top: '11.5%',
              width: '13vw',
              height: '13vw',
            }}
          >
            <p>LOGO</p>
          </div>

          <div
            onClick={_onClickLogo}
            className="absolute rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200"
            style={{ left: 'calc(50vw - 15.6vw)', top: '33.5%', width: '8vw', height: '8vw' }}
          >
            <p>LOGO</p>
          </div>

          <div
            onClick={_onClickLogo}
            className="absolute rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200"
            style={{ left: 'calc(50vw + 7.6vw)', top: '33.5%', width: '8vw', height: '8vw' }}
          >
            <p>LOGO</p>
          </div>

          <div
            onClick={_onClickLogo}
            className="absolute rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200"
            style={{ left: 'calc(50vw - 4.15vw)', top: '31.4%', width: '8.3vw', height: '8.3vw' }}
          >
            <p>LOGO</p>
          </div>

          <div
            onClick={_onClickLogo}
            className="absolute rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200"
            style={{ left: 'calc(50vw - 4.15vw)', top: '46.5%', width: '8.3vw', height: '8.3vw' }}
          >
            <p>LOGO</p>
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
            onClick={_onClickAgenda}
            className="absolute"
            style={{
              left: 'calc(50vw + 24.5vw)',
              top: '21.5%',
              perspective: '1000px',
            }}
          >
            <div
              className="bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200"
              style={{
                width: '15vw',
                height: '7.2vw',
                transform: 'rotateY(-40deg) rotateX(-2deg) skewY(-10deg)',
              }}
            >
              <p>AGENDA</p>
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
        </div>

        {/* PRESS */}
        {/* <div className="fixed" style={{ top: '62.7vh', right: '5vw' }}>
          <Press onClick={_onClickPress} />
        </div> */}
      </div>

      <ModalCenter isOpen={isShowModal} onClose={_closeModal}>
        <div className="px-64 py-48">{/*  */}</div>
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
