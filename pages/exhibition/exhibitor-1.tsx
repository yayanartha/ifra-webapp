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
import { useRouter } from 'next/router';
import ChatModal from '@components/Exhibitor/ChatModal';

const Exhibitor1 = () => {
  const router = useRouter();

  const [isShowVideo, setIsShowVideo] = useState(false);
  const [isShowImagesModal, setIsShowImagesModal] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [defaultTabIndex, setDefaultTabIndex] = useState(0);
  const [isShowChat, setIsShowChat] = useState(false);
  const [isShowVideoCall, setIsShowVideoCall] = useState(false);

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
    router.push('/exhibition');
  }, [router]);

  const _handleDeal = useCallback(() => {
    //
  }, []);

  const _handleChat = useCallback(() => {
    setIsShowChat(true);
  }, [isShowChat]);

  const _handleDropNameCard = useCallback(() => {
    //
  }, []);

  const _handleBusinessMeetUp = useCallback(() => {
    setIsShowVideoCall(true);
  }, []);

  const _handleVideoCall = useCallback(() => {
    setIsShowVideoCall(true);
  }, []);

  const _handleLiveStreaming = useCallback(() => {
    //
  }, []);

  const _closeImagesModal = useCallback(() => {
    setIsShowImagesModal(false);
  }, [isShowImagesModal]);

  const _closeVideoCall = useCallback(() => {
    setIsShowVideoCall(false);
  }, [isShowVideoCall]);

  const _closeChat = useCallback(() => {
    setIsShowChat(false);
  }, [isShowChat]);

  return (
    <div>
      <Navbar />

      <div className="fixed w-screen h-screen overflow-y-scroll overflow-x-hidden">
        <img src="/exhibitor-1.webp" alt="Booth A Background" className="w-full h-auto" />

        <div
          className="absolute top-0"
          style={{
            width: `calc((1920 * 100vh) / 1080)`,
            height: 'calc(((1080 * 100vw) / 1920) - 10px)',
          }}
        >
          <InfoSpot onClick={() => _openImagesModal(0)} left="calc(50vw - 28vw)" top="58%" />
          <InfoSpot onClick={() => _openImagesModal(0)} left="calc(50vw - 5vw)" top="27.5%" />
          <InfoSpot onClick={() => _openImagesModal(0)} left="calc(50vw - 13.3vw)" top="48%" />
          <InfoSpot onClick={() => _openImagesModal(0)} left="calc(50vw + 2vw)" top="62%" />
          <InfoSpot onClick={() => _openImagesModal(0)} left="calc(50vw + 21.3vw)" top="48%" />
        </div>

        <div className="fixed" style={{ top: 'calc(3rem + 20px)', right: '35px' }}>
          <button
            onClick={_handleLater}
            className="bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 focus:outline-none"
            style={{ width: '8vw', height: '4vw', top: '9%', left: 'calc(50vw + 40vw)' }}
          >
            <p className="btn-later">LATER</p>
          </button>
          <div style={{ height: '16px' }} />
          <button
            onClick={_handleDeal}
            className="bg-blue_button rounded-lg flex items-center justify-center hover:bg-primary focus:outline-none"
            style={{ width: '8vw', height: '4vw', top: '18%', left: 'calc(50vw + 40vw)' }}
          >
            <p className="btn-deal">DEAL</p>
          </button>
        </div>

        <div className="fixed w-screen flex flex-col items-center" style={{ bottom: '20px' }}>
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

        {!isShowChat && (
          <div
            className="fixed bg-white rounded-lg p-5 shadow-lg flex flex-col items-center justify-center"
            style={{ bottom: '20px', right: '35px', width: '20vw', height: '18vw' }}
          >
            <p className="text-exhibitor-menu mt-3 mb-5 text-center">Need help?</p>

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
        )}
      </div>

      {isShowChat && <ChatModal handleClose={_closeChat} />}

      <ModalCenter isOpen={isShowVideo} onClose={() => setIsShowVideo(false)}>
        <div style={{ width: '720px', height: '400px' }}>
          <img src="/video-player.png" className="w-full h-full object-cover" />
        </div>
      </ModalCenter>

      <ModalCenter isOpen={isShowImagesModal} onClose={_closeImagesModal}>
        <ExhibitorImagesModal defaultTabIndex={defaultTabIndex} />
      </ModalCenter>

      <ModalCenter isOpen={isShowVideoCall} onClose={_closeVideoCall} backgroundColor="#000">
        <img src="/video-call.png" width="1080px" />
      </ModalCenter>
    </div>
  );
};

export default Exhibitor1;
