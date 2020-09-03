import Agenda from '@components/MainHall/Agenda';
import Exhibition from '@components/MainHall/Exhibition';
import MainLogo from '@components/MainHall/MainLogo';
import ModalTNC from '@components/MainHall/ModalTNC';
import OrganiserLogo from '@components/MainHall/OrganiserLogo';
import Poster from '@components/MainHall/Poster';
import Press from '@components/MainHall/Press';
import Videotron from '@components/MainHall/Videotron';
import Wallpaper from '@components/MainHall/Wallpaper';
import XBanner from '@components/MainHall/XBanner';
import Navbar from '@components/Navbar/Navbar';
import { useCallback, useState } from 'react';
import CountDown from '@components/MainHall/CountDown';

const MainHall = () => {
  const [showModal, setShowModal] = useState(true);

  const _onClickAgenda = useCallback(() => {}, []);

  const _onClickExhibition = useCallback(() => {
    //
  }, []);

  const _onClickPress = useCallback(() => {
    //
  }, []);

  const _onClickPoster = useCallback(() => {
    //
  }, []);

  const _onClickBanner = useCallback(() => {
    //
  }, []);

  const _onClickWallpaper = useCallback(() => {
    //
  }, []);

  const _onClickVideotron = useCallback(() => {
    //
  }, []);

  const _onClickLogo = useCallback(() => {
    //
  }, []);

  return (
    <div className="flex flex-col flex-1">
      <Navbar />

      <div
        className="relative w-screen mt-12"
        style={{
          height: 'calc(100vh - 3rem)',
        }}
      >
        <img src="/bg-main.png" alt="Main background" className="w-full h-full object-cover" />

        {/* LOGO */}

        <div className="absolute" style={{ top: '5vh', left: 'calc(50vw - 8vw)' }}>
          <MainLogo onClick={_onClickLogo} />
        </div>

        <div className="absolute" style={{ top: '29vh', left: 'calc(50vw - 19vw)' }}>
          <OrganiserLogo onClick={_onClickLogo} />
        </div>

        <div className="absolute" style={{ top: '27vh', left: 'calc(50vw - 5vw)' }}>
          <OrganiserLogo onClick={_onClickLogo} />
        </div>

        <div className="absolute" style={{ top: '29vh', left: 'calc(50vw + 9vw)' }}>
          <OrganiserLogo onClick={_onClickLogo} />
        </div>

        <div className="absolute" style={{ top: '43vh', left: 'calc(50vw - 5vw)' }}>
          <OrganiserLogo onClick={_onClickLogo} />
        </div>

        {/* POSTER */}
        <div className="absolute" style={{ top: '26vh', left: '5vw' }}>
          <Poster onClick={_onClickPoster} />
        </div>

        {/* X-BANNER */}
        <div className="absolute" style={{ top: '61vh', left: '13vw' }}>
          <XBanner onClick={_onClickBanner} />
        </div>

        {/* WALLPAPER */}
        <div className="absolute" style={{ top: '61vh', left: 'calc(50vw + 16vw)' }}>
          <Wallpaper onClick={_onClickWallpaper} />
        </div>

        {/* AGENDA */}
        <div className="absolute" style={{ top: '16vh', right: '2vw' }}>
          <Agenda onClick={_onClickAgenda} />
        </div>

        {/* VIDEOTRON */}
        <div className="absolute" style={{ top: '33vh', right: '2vw' }}>
          <Videotron onClick={_onClickVideotron} />
        </div>

        {/* EXHIBITION */}
        <div className="absolute" style={{ top: '60vh', left: 'calc(50vw - 10vw)' }}>
          <Exhibition onClick={_onClickExhibition} />
        </div>

        {/* PRESS */}
        <div className="absolute" style={{ top: '59vh', right: '2vw' }}>
          <Press onClick={_onClickPress} />
        </div>
      </div>

      <ModalTNC isShow={showModal} onCloseModal={() => setShowModal(false)} />

      <CountDown />
    </div>
  );
};

export default MainHall;
