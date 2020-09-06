import Navbar from '@components/Navbar/Navbar';
import { useCallback, useState, useMemo } from 'react';
import ModalCenter from '@components/common/ModalCenter';
import BottomMenu, { BottomMenuItem } from '@components/common/BottomMenu';
import ReactIcons from '@components/common/ReactIcons';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import InfoSpot from '@components/Exhibitor/InfoSpot';
import { FaComment, FaIdCardAlt, FaVideo } from 'react-icons/fa';
import ExhibitorHelpMenu from '@components/Exhibitor/ExhibitorHelpMenu';
import { SiGooglecalendar } from 'react-icons/si';
import ExhibitorImagesModal from '@components/Exhibitor/ExhibitorImagesModal';

const Exhibitor1 = () => {
  const [isShowVideo, setIsShowVideo] = useState(false);
  const [isShowImagesModal, setIsShowImagesModal] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [defaultTabIndex, setDefaultTabIndex] = useState(0);

  const bottomMenu: BottomMenuItem[] = useMemo(
    () => [
      {
        name: 'Video',
        action: () => _openVideo(),
      },
      {
        name: 'Brochure',
        action: () => _openImagesModal(0),
      },
      {
        name: 'Photos',
        action: () => _openImagesModal(1),
      },
      {
        name: 'Company Info',
        action: () => _openImagesModal(2),
      },
      {
        name: 'Investment Package',
        action: () => _openImagesModal(3),
      },
    ],
    []
  );

  const _toggleFavorite = useCallback(() => {
    setIsFavorited(!isFavorited);
  }, [isFavorited]);

  const _openVideo = useCallback(() => {
    setIsShowVideo(true);
  }, [isShowVideo]);

  const _openImagesModal = useCallback(
    (tabIndex: number) => {
      setIsShowImagesModal(true);
      setDefaultTabIndex(tabIndex);
    },
    [isShowImagesModal, defaultTabIndex]
  );

  const _handleLater = useCallback(() => {
    //
  }, []);

  const _handleDeal = useCallback(() => {
    //
  }, []);

  const _showInfo = useCallback(() => {
    //
  }, []);

  const _handleChat = useCallback(() => {
    //
  }, []);

  const _handleDropNameCard = useCallback(() => {
    //
  }, []);

  const _handleBusinessMeetUp = useCallback(() => {
    //
  }, []);

  const _handleVideoCall = useCallback(() => {
    //
  }, []);

  const _handleLiveStreaming = useCallback(() => {
    //
  }, []);

  const _closeImagesModal = useCallback(() => {
    setIsShowImagesModal(false);
  }, [isShowImagesModal]);

  return (
    <div className="flex flex-col flex-1">
      <Navbar />

      <div className="fixed">
        <img src="/exhibitor-1.webp" alt="Main background" className="w-full h-auto fixed" />

        <div
          className="relative top-0 left-0"
          style={{
            width: 'calc((1920 * 100vh) / 1080)',
            height: 'calc((1080 * 100vw) / 1920)',
          }}
        >
          <InfoSpot onClick={() => _showInfo()} left="calc(50vw - 27.5vw)" top="58%" />
          <InfoSpot onClick={() => _showInfo()} left="calc(50vw - 4.5vw)" top="27.5%" />
          <InfoSpot onClick={() => _showInfo()} left="calc(50vw - 13vw)" top="48%" />
          <InfoSpot onClick={() => _showInfo()} left="calc(50vw + 2.5vw)" top="62%" />
          <InfoSpot onClick={() => _showInfo()} left="calc(50vw + 22vw)" top="48%" />

          <div className="absolute w-screen flex flex-col items-center" style={{ bottom: '30px' }}>
            <button
              onClick={_toggleFavorite}
              className="flex bg-primary rounded-md items-center justify-center shadow-lg hover:bg-blue-500 focus:outline-none"
              style={{ marginBottom: '16px', width: '8vw', height: '3.7vw' }}
            >
              <ReactIcons
                Icon={isFavorited ? AiFillHeart : AiOutlineHeart}
                className="text-white mr-2"
                style={{ width: '1.5vw', height: '1.5vw', minWidth: '16px', minHeight: '16px' }}
              />
              <p className="exhibition-menu">Favorite</p>
            </button>

            <BottomMenu data={bottomMenu} />
          </div>

          <button
            onClick={_handleLater}
            className="absolute bg-white rounded-lg flex items-center justify-center"
            style={{ width: '8vw', height: '4.5vw', top: '9%', left: 'calc(50vw + 40.5vw)' }}
          >
            <p className="btn-later">LATER</p>
          </button>

          <button
            onClick={_handleDeal}
            className="absolute bg-blue_button rounded-lg flex items-center justify-center"
            style={{ width: '8vw', height: '4.5vw', top: '19%', left: 'calc(50vw + 40.5vw)' }}
          >
            <p className="btn-deal">DEAL</p>
          </button>

          <div
            className="absolute bg-white rounded-lg p-5 shadow-lg flex flex-col items-center justify-center"
            style={{ bottom: '30px', left: 'calc(50vw + 28.7vw)', width: '20vw', height: '18vw' }}
          >
            <p className="text-exhibitor-menu mt-3 mb-5 text-center">Ada yang bisa saya bantu?</p>

            <div className="flex">
              <ExhibitorHelpMenu label="Chat" onClick={_handleChat} icon={FaComment} />
              <div style={{ width: '2vw' }} />
              <ExhibitorHelpMenu
                label="Drop Namecard"
                onClick={_handleDropNameCard}
                icon={FaIdCardAlt}
              />
              <div style={{ width: '2vw' }} />
              <ExhibitorHelpMenu
                label="Business Meet Up"
                onClick={_handleBusinessMeetUp}
                icon={SiGooglecalendar}
              />
            </div>

            <div className="flex">
              <ExhibitorHelpMenu label="Video Call" onClick={_handleVideoCall} icon={FaVideo} />
              <div style={{ width: '2vw' }} />
              <ExhibitorHelpMenu
                label="Live Streaming"
                onClick={_handleLiveStreaming}
                icon={null}
              />
            </div>
          </div>
        </div>
      </div>

      <ModalCenter isOpen={isShowVideo} onClose={() => setIsShowVideo(false)}>
        <div style={{ width: '720px', height: '400px' }}>
          <img src="/video-player.png" className="w-full h-full object-cover" />
        </div>
      </ModalCenter>

      <ModalCenter isOpen={isShowImagesModal} onClose={_closeImagesModal}>
        <ExhibitorImagesModal defaultTabIndex={defaultTabIndex} />
      </ModalCenter>
    </div>
  );
};

export default Exhibitor1;
