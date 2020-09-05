import Navbar from '@components/Navbar/Navbar';
import { useCallback, useState, useMemo } from 'react';
import ModalCenter from '@components/common/ModalCenter';
import ImageViewer from '@components/common/ImageViewer';
import ExhibitorBottomMenu, {
  ExhibitorBottomMenuItem,
} from '@components/Exhibitor/ExhibitorBottomMenu';
import ReactIcons from '@components/common/ReactIcons';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Exhibitor1 = () => {
  const [isShowVideo, setIsShowVideo] = useState(false);
  const [isShowBrochure, setIsShowBrochure] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const bottomMenu: ExhibitorBottomMenuItem[] = useMemo(
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

  return (
    <div className="flex flex-col flex-1">
      <Navbar />

      <div
        style={{
          width: '100vw',
          height: '100vh',
          background: 'url(/exhibitor-1.png) no-repeat center center',
          objectFit: 'cover',
        }}
      >
        <div className="h-screen overflow-y-auto">
          <div className="absolute w-full flex flex-col items-center" style={{ bottom: '30px' }}>
            <button onClick={_toggleFavorite}>
              <ReactIcons
                Icon={isFavorited ? AiFillHeart : AiOutlineHeart}
                className="text-white w-12"
              />
            </button>

            <ExhibitorBottomMenu data={bottomMenu} />
          </div>
        </div>

        <button
          onClick={_handleLater}
          className="bg-white rounded-lg w-32 h-16 flex items-center justify-center absolute"
          style={{ top: '80px', right: '30px' }}
        >
          <p className="btn-later">LATER</p>
        </button>

        <button
          onClick={_handleDeal}
          className="bg-blue_button rounded-lg w-32 h-16 flex items-center justify-center absolute"
          style={{ top: '165px', right: '30px' }}
        >
          <p className="btn-deal">DEAL</p>
        </button>

        {/* <div
          className="bg-white rounded-lg p-5 absolute shadow-lg flex flex-col items-center justify-center"
          style={{ bottom: '30px', right: '30px', width: '350px', height: '260px' }}
        >
          <p className="text-exhibitor-menu mb-4">Ada yang bisa saya bantu?</p>
          <img
            src="/exhibitor-menu.png"
            style={{ width: '80%', height: '70%', objectFit: 'contain' }}
          />
        </div> */}
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
