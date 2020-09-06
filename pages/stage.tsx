import { ItemCount } from '@components/MainHall/CountDown';
import Navbar from '@components/Navbar/Navbar';
import QuizCard from '@components/Quiz/QuizCard';
import Schedule from '@components/Schedule/Schedule';
import { useState } from 'react';

const Stage = () => {
  const [isShowSchedule, setIsShowSchedule] = useState(true);
  const [isShowLuckyDraw, setIsShowLuckyDraw] = useState(false);

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
            <img src="/video-main-stage.webP" className="w-full h-full bg-cover" />
          </div>

          {(isShowSchedule || isShowLuckyDraw) && (
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
              <Schedule dayNo={1} changeDayNo={() => {}} scheduleData={[]} title="Main Stage" />

              <p className="schedule-footnote absolute" style={{ bottom: '60px' }}>
                Tekan tombol lonceng untuk mendapatkan notifikasi saat acara akan berlangsung
              </p>
            </div>
          )}

          {!isShowSchedule && !isShowLuckyDraw && (
            <div className="absolute" style={{ bottom: '30px', right: '30px' }}>
              <QuizCard onClickJawab={() => setIsShowLuckyDraw(true)} />
            </div>
          )}

          {isShowLuckyDraw && (
            <div className="absolute w-screen h-screen flex flex-col">
              <div className="flex flex-col flex-1 justify-center items-center">
                <h1 className="text-3xl text-white text-center mb-6">
                  Selamat kepada pemenang!
                  <br />
                  Anda akan dihubungi oleh team IFRA 2020
                </h1>
                <div className="flex">
                  <ItemCount count={'07'} />
                  <div className="w-6" />
                  <ItemCount count={'11'} />
                  <div className="w-6" />
                  <ItemCount count={'25'} />
                  <div className="w-6" />
                  <ItemCount count={'23'} />
                </div>
              </div>

              <p className="mb-8 text-center text-white opacity-75 text-xs font-hairline">
                Nomor undian Anda adalah{' '}
                <span className="font-bold text-3xl text-white">07-11-25-23</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stage;
