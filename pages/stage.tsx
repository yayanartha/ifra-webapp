import Schedule from '@components/Schedule/Schedule';
import Navbar from '@components/Navbar/Navbar';
import { useState } from 'react';
import QuizCard from '@components/Quiz/QuizCard';

const Stage = () => {
  const [isShowSchedule, setIsShowSchedule] = useState(true);

  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <div
        style={{
          width: '100vw',
          height: '100vh',
          background: 'url(/bg-main-stage.webp) no-repeat center center',
          objectFit: 'cover',
        }}
      >
        <div
          className="h-screen flex flex-col items-center overflow-y-auto"
          style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
        >
          <div className="bg-white" style={{ width: '810px', height: '390px', marginTop: '130px' }}>
            <img src="/video-main-stage.png" className="w-full h-full bg-cover" />
          </div>

          {isShowSchedule && (
            <div
              className="absolute"
              style={{
                backgroundColor: 'rgba(0,0,0,0.75)',
                width: '810px',
                height: '390px',
                top: '130px',
              }}
            />
          )}

          {isShowSchedule && (
            <div
              onClick={() => setIsShowSchedule(false)}
              className="absolute w-screen h-screen flex flex-col items-center pt-32"
            >
              <Schedule title="Main Stage" />

              <p className="schedule-footnote absolute" style={{ bottom: '60px' }}>
                Tekan tombol lonceng untuk mendapatkan notifikasi saat acara akan berlangsung
              </p>
            </div>
          )}

          {!isShowSchedule && (
            <div className="absolute" style={{ bottom: '30px', right: '30px' }}>
              <QuizCard />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stage;
