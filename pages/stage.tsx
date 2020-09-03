import Schedule from '@components/Schedule/Schedule';
import Navbar from '@components/Navbar/Navbar';

const Stage = () => {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <div
        style={{
          width: '100vw',
          height: '100vh',
          background: 'url(/bg-main-stage.png) no-repeat center center',
          objectFit: 'cover',
        }}
      >
        <div
          className="h-screen flex flex-col items-center overflow-y-auto"
          style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
        >
          <div className="bg-white" style={{ width: '800px', height: '380px', marginTop: '130px' }}>
            {/*  */}
          </div>
          <div
            className="absolute"
            style={{
              backgroundColor: 'rgba(0,0,0,0.75)',
              width: '800px',
              height: '380px',
              top: '130px',
            }}
          />

          <div className="absolute w-screen h-screen flex items-center justify-center">
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage;
