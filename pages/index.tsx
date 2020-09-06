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
import EventSchedule from '@components/MainHall/EventSchedule';

const MainHall = () => {
  const router = useRouter();

  const [isShowModal, setIsShowModal] = useState(false);

  const [isShowPress, setIsShowPress] = useState(false);

  const [isShowAgenda, setIsShowAgenda] = useState(false);
  const [agendaDay, setAgendaDay] = useState(0);
  const [eventSchedules, setEventSchedules] = useState([]);

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

  const _closeModal = useCallback(() => {
    setIsShowModal(false);
  }, [isShowModal]);

  const _closeAgenda = useCallback(() => {
    setIsShowAgenda(false);
  }, [isShowAgenda]);

  const _closePress = useCallback(() => {
    setIsShowPress(false);
  }, [isShowPress]);

  return (
    <div className="flex flex-col flex-1">
      <Navbar />

      <div className="fixed">
        <img src="/bg-main1.webp" alt="Main background" className="w-full h-auto fixed" />

        <div
          className="relative top-0 left-0 overfl"
          style={{
            width: 'calc((1920 * 100vh) / 1080)',
            height: 'calc((1080 * 100vw) / 1920)',
          }}
        >
          {/* HOTSPOTS */}
          <MainLogo onClick={_onClickLogo} />
          <OrganiserLogo onClick={_onClickLogo} left="calc(50vw - 15.6vw)" top="33.5%" />
          <OrganiserLogo onClick={_onClickLogo} left="calc(50vw + 7.6vw)" top="33.5%" />
          <OrganiserMiniLogo onClick={_onClickLogo} left="calc(50vw - 4.15vw)" top="31.4%" />
          <OrganiserMiniLogo onClick={_onClickLogo} left="calc(50vw - 4.15vw)" top="46.5%" />
          <Poster onClick={_onClickPoster} />
          <XBanner onClick={_onClickBanner} />
          <Wallpaper onClick={_onClickWallpaper} />
          <Agenda onClick={_onClickAgenda} />
          <Videotron onClick={_onClickVideotron} />
          <Exhibition onClick={_onClickExhibition} />
          <Press onClick={_onClickPress} />

          <SponsorFooter />
        </div>
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
