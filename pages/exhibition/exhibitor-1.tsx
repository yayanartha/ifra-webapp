import Navbar from '@components/Navbar/Navbar';
import { useCallback } from 'react';

const Exhibitor1 = () => {
  const _openVideo = useCallback(() => {
    //
  }, []);

  const _openBrochure = useCallback(() => {
    //
  }, []);

  const _openPhotos = useCallback(() => {
    //
  }, []);

  const _openCompanyInfo = useCallback(() => {
    //
  }, []);

  const _openInvestPackage = useCallback(() => {
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
      </div>
    </div>
  );
};

export default Exhibitor1;
