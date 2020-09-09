import Navbar from '@components/Navbar/Navbar';
import { useCallback, useState } from 'react';
import ModalCenter from '@components/common/ModalCenter';
import SponsorFooter from '@components/Sponsor/SponsorFooter';
import { useRouter } from 'next/router';
import PressInfo from '@components/MainHall/PressInfo';
import Schedule from '@components/Schedule/Schedule';
import MainLogo from '@components/MainHall/MainLogo';
import OrganiserLogo from '@components/MainHall/OrganiserLogo';
import OrganiserMiniLogo from '@components/MainHall/OrganiserMiniLogo';
import Poster from '@components/MainHall/Poster';
import XBanner from '@components/MainHall/XBanner';
import Wallpaper from '@components/MainHall/Wallpaper';
import Agenda from '@components/MainHall/Agenda';
import Videotron from '@components/MainHall/Videotron';
import Exhibition from '@components/MainHall/Exhibition';
import Press from '@components/MainHall/Press';
import LogoViewer from '@components/MainHall/LogoViewer';
import CountDown from '@components/MainHall/CountDown';
import InfoDesk from '@components/MainHall/InfoDesk';
import Info from '@components/MainHall/Info';

const MainHall = () => {
  const router = useRouter();

  const [isShowModal, setIsShowModal] = useState(false);

  const [isShowPress, setIsShowPress] = useState(false);

  const [isShowAgenda, setIsShowAgenda] = useState(false);
  const [agendaDay, setAgendaDay] = useState(0);
  const [eventSchedules, setEventSchedules] = useState([]);

  const [isShowPoster, setIsShowPoster] = useState(false);
  const [isShowBanner, setIsShowBanner] = useState(false);
  const [isShowWallpaper, setIsShowWallpaper] = useState(false);

  const [isShowInfoDesk, setIsShowInfoDesk] = useState(false);

  const _onClickAgenda = useCallback((dayNo: number) => {
    _onChangeAgenda(dayNo);
    setIsShowAgenda(true);
  }, []);

  const _onChangeAgenda = useCallback(
    (dayNo: number) => {
      setAgendaDay(dayNo);
    },
    [agendaDay]
  );

  const _fetchAgenda = useCallback(() => {
    //
  }, [eventSchedules]);

  const _onClickExhibition = useCallback(() => {
    router.push('/exhibition');
  }, []);

  const _onClickPress = useCallback(() => {
    setIsShowPress(true);
  }, []);

  const _onClickPoster = useCallback(() => {
    setIsShowPoster(true);
  }, []);

  const _onClickBanner = useCallback(() => {
    setIsShowBanner(true);
  }, []);

  const _onClickWallpaper = useCallback(() => {
    setIsShowWallpaper(true);
  }, []);

  const _onClickVideotron = useCallback(() => {
    //
  }, []);

  const _onClickLogo = useCallback(() => {
    setIsShowModal(true);
  }, []);

  const _onClickInfoDesk = useCallback(() => {
    setIsShowInfoDesk(true);
  }, []);

  const _closeModal = useCallback(() => {
    setIsShowModal(false);
  }, [isShowModal]);

  const _closeAgenda = useCallback(() => {
    setIsShowAgenda(false);
  }, [isShowAgenda]);

  const _closePress = useCallback(() => {
    setIsShowPress(false);
  }, [isShowPress]);

  const _closePoster = useCallback(() => {
    setIsShowPoster(false);
  }, [isShowPoster]);

  const _closeBanner = useCallback(() => {
    setIsShowBanner(false);
  }, [isShowBanner]);

  const _closeWallpaper = useCallback(() => {
    setIsShowWallpaper(false);
  }, [isShowWallpaper]);

  const _closeInfoDesk = useCallback(() => {
    setIsShowInfoDesk(false);
  }, [isShowInfoDesk]);

  return (
    <div>
      <Navbar />

      <div className="fixed w-screen h-screen overflow-y-scroll overflow-x-hidden">
        <img src="/bg-main1.jpg" alt="Main background" className="w-full h-auto" />

        <div
          className="absolute top-0"
          style={{
            width: 'calc((1920 * 100vh) / 1080)',
            height: 'calc(((1080 * 100vw) / 1920) - 10px)',
          }}
        >
          {/* HOTSPOTS */}
          <MainLogo onClick={_onClickLogo} />
          <OrganiserLogo onClick={_onClickLogo} left="calc(50vw - 16vw)" top="33.5%" />
          <OrganiserLogo onClick={_onClickLogo} left="calc(50vw + 7vw)" top="33.5%" />
          <OrganiserMiniLogo onClick={_onClickLogo} left="calc(50vw - 4.5vw)" top="31.4%" />
          <OrganiserMiniLogo onClick={_onClickLogo} left="calc(50vw - 4.5vw)" top="48%" />
          <Poster onClick={_onClickPoster} />
          <XBanner onClick={_onClickBanner} />
          <Wallpaper onClick={_onClickWallpaper} />
          <Agenda onClick={_onClickAgenda} />
          <Videotron onClick={_onClickVideotron} />
          <Exhibition onClick={_onClickExhibition} />
          <Press onClick={_onClickPress} />
          <Info onClick={_onClickInfoDesk} />
        </div>

        <SponsorFooter onClick={_onClickLogo} />
      </div>

      <ModalCenter isOpen={isShowPress} onClose={_closePress}>
        <PressInfo />
      </ModalCenter>

      <ModalCenter isOpen={isShowAgenda} onClose={_closeAgenda}>
        <Schedule
          title="Event Agenda"
          dayNo={agendaDay}
          scheduleData={eventSchedules}
          changeDayNo={_onChangeAgenda}
        />
      </ModalCenter>

      <ModalCenter isOpen={isShowModal} onClose={_closeModal}>
        <LogoViewer />
      </ModalCenter>

      <ModalCenter isOpen={isShowPoster} onClose={_closePoster}>
        <LogoViewer type="Poster" />
      </ModalCenter>

      <ModalCenter isOpen={isShowBanner} onClose={_closeBanner}>
        <LogoViewer type="Banner" />
      </ModalCenter>

      <ModalCenter isOpen={isShowWallpaper} onClose={_closeWallpaper}>
        <LogoViewer type="Wallpaper" />
      </ModalCenter>

      <ModalCenter isOpen={isShowInfoDesk} onClose={_closeInfoDesk}>
        <InfoDesk />
      </ModalCenter>
    </div>
  );
};

export default MainHall;
