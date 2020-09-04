import Navbar from '@components/Navbar/Navbar';
import { useCallback, useState } from 'react';
import ModalCenter from '@components/common/ModalCenter';
import ImageViewer from '@components/common/ImageViewer';

const Exhibitor1 = () => {
  const [isShowVideo, setIsShowVideo] = useState(false);
  const [isShowBrochure, setIsShowBrochure] = useState(false);

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
            <div className="bg-white shadow-xl rounded-lg flex items-center p-4">
              <button onClick={_openVideo} className="bg-blue_button rounded-lg h-16 w-24">
                <p className="exhibition-menu">Video</p>
              </button>

              <div className="w-3" />

              <button onClick={_openBrochure} className="bg-blue_button rounded-lg h-16 w-24">
                <p className="exhibition-menu">Brochure</p>
              </button>

              <div className="w-3" />

              <button onClick={_openPhotos} className="bg-blue_button rounded-lg h-16 w-24">
                <p className="exhibition-menu">Photos</p>
              </button>

              <div className="w-3" />

              <button
                onClick={_openCompanyInfo}
                className="bg-blue_button rounded-lg h-16 w-24 px-2"
              >
                <p className="exhibition-menu">Company Info</p>
              </button>

              <div className="w-3" />

              <button onClick={_openInvestPackage} className="bg-blue_button rounded-lg h-16 w-24">
                <p className="exhibition-menu">Investment Package</p>
              </button>
            </div>
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
