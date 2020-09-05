import Navbar from '@components/Navbar/Navbar';
import { useCallback, useState, useMemo } from 'react';
import ModalCenter from '@components/common/ModalCenter';
import ImageViewer from '@components/common/ImageViewer';
import BottomMenu, { BottomMenuItem } from '@components/common/BottomMenu';
import ReactIcons from '@components/common/ReactIcons';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import InfoSpot from '@components/Exhibitor/InfoSpot';

const Exhibitor1 = () => {
  const [isShowVideo, setIsShowVideo] = useState(false);
  const [isShowBrochure, setIsShowBrochure] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const bottomMenu: BottomMenuItem[] = useMemo(
    () => [
      {
        name: 'Video',
        action: () => _openVideo(),
      },
      {
        name: 'Brochure',
        action: () => _openBrochure(),
      },
      {
        name: 'Photos',
        action: () => _openPhotos(),
      },
      {
        name: 'Company Info',
        action: () => _openCompanyInfo(),
      },
      {
        name: 'Investment Package',
        action: () => _openInvestPackage(),
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

  const _openBrochure = useCallback(() => {
    setIsShowBrochure(true);
  }, [isShowBrochure]);

  const _openPhotos = useCallback(() => {
    //
  }, []);

  const _openCompanyInfo = useCallback(() => {
    //
  }, []);

  const _openInvestPackage = useCallback(() => {
    //
  }, []);

  const _handleLater = useCallback(() => {
    //
  }, []);

  const _handleDeal = useCallback(() => {
    //
  }, []);

  const _showInfo = useCallback(() => {
    //
  }, []);

  return (
    <div className="flex flex-col flex-1">
      <Navbar />

      <div className="fixed">
        <img src="/exhibitor-1.png" alt="Main background" className="w-full h-auto fixed" />

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
            style={{ bottom: '30px', left: 'calc(50vw + 28.7vw)', width: '20vw', height: '15vw' }}
          >
            <p className="text-exhibitor-menu mb-4">Ada yang bisa saya bantu?</p>
            <img
              src="/exhibitor-menu.png"
              style={{ width: '80%', height: '70%', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      <ModalCenter isOpen={isShowVideo} onClose={() => setIsShowVideo(false)}>
        <div style={{ width: '720px', height: '400px' }}>
          <img src="/video-player.png" className="w-full h-full object-cover" />
        </div>
      </ModalCenter>

      <ModalCenter isOpen={isShowBrochure} onClose={() => setIsShowBrochure(false)}>
        <ImageViewer />
      </ModalCenter>
    </div>
  );
};

export default Exhibitor1;
