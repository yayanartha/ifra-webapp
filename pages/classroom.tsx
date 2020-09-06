import Navbar from '@components/Navbar/Navbar';
import Schedule from '@components/Schedule/Schedule';
import { useState, useCallback } from 'react';
import PrimaryButton from '@components/common/PrimaryButton';
import ClassList from '@components/Classroom/ClassList';
import ClassSideBar from '@components/Classroom/ClassSideBar';

const Classroom = () => {
  const [isShowSchedule, setIsShowSchedule] = useState(true);
  const [isShowSpeaker, setIsShowSpeaker] = useState(false);

  const _handleRegister = useCallback(() => {
    setIsShowSchedule(false);
  }, [isShowSchedule]);

  const _handleBuyTicket = useCallback(() => {
    setIsShowSpeaker(true);
  }, [isShowSpeaker]);

  return (
    <div className="flex flex-col flex-1">
      <Navbar />

      <div
        style={{
          width: '100vw',
          height: '100vh',
          background: 'url(/bg-classroom-lobby.webp) no-repeat center center',
          objectFit: 'cover',
        }}
      >
        <div className="h-screen overflow-y-auto" style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}>
          {isShowSchedule && (
            <div className="h-screen flex items-center justify-center">
              <div
                onClick={() => setIsShowSchedule(false)}
                className="absolute w-screen h-screen flex flex-col items-center pt-24"
              >
                <Schedule title="Classroom Schedule" />

                <div className="mt-6">
                  <PrimaryButton onClick={_handleRegister} label="Register Now" width="300px" />
                </div>

                <p className="schedule-footnote absolute" style={{ bottom: '60px' }}>
                  Tekan tombol lonceng untuk mendapatkan notifikasi saat acara akan berlangsung
                </p>
              </div>
            </div>
          )}

          {!isShowSchedule && !isShowSpeaker && (
            <div className="flex">
              <div className="flex flex-col flex-1 px-10 pt-24">
                <ClassList />
              </div>

              <ClassSideBar handleBuyTicket={_handleBuyTicket} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Classroom;
