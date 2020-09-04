import Navbar from '@components/Navbar/Navbar';
import { useCallback } from 'react';
import { useRouter } from 'next/router';

const Exhibition = () => {
  const router = useRouter();

  const _gotoExhibitionList = useCallback(() => {
    _gotoLobby();
  }, [router]);

  const _gotoLobby = useCallback(() => {
    router.push('/exhibitor-hall');
  }, [router]);

  const _gotoMainStage = useCallback(() => {
    router.push('/');
  }, [router]);

  const _gotoClassroom = useCallback(() => {
    router.push('/classroom');
  }, [router]);

  const _gotoMeetTheExpert = useCallback(() => {
    router.push('/experts');
  }, [router]);

  const _gotoFavorite = useCallback(() => {
    router.push('/favorite');
  }, [router]);

  return (
    <div className="flex flex-col flex-1">
      <Navbar />

      <div
        style={{
          width: '100vw',
          height: '100vh',
          background: 'url(/bg-exhibition.png) no-repeat center center',
          objectFit: 'cover',
        }}
      >
        <div onClick={_gotoExhibitionList} className="h-screen overflow-y-auto" />

        <div className="absolute w-full flex flex-col items-center" style={{ bottom: '30px' }}>
          <div className="bg-white shadow-xl rounded-lg flex items-center p-4">
            <button onClick={_gotoLobby} className="bg-blue_button rounded-lg h-16 w-24">
              <p className="exhibition-menu">Lobby</p>
            </button>

            <div className="w-3" />

            <button onClick={_gotoMainStage} className="bg-blue_button rounded-lg h-16 w-24">
              <p className="exhibition-menu">Main Stage</p>
            </button>

            <div className="w-3" />

            <button onClick={_gotoClassroom} className="bg-blue_button rounded-lg h-16 w-24">
              <p className="exhibition-menu">Classroom</p>
            </button>

            <div className="w-3" />

            <button onClick={_gotoMeetTheExpert} className="bg-blue_button rounded-lg h-16 w-24">
              <p className="exhibition-menu">Meet the Experts</p>
            </button>

            <div className="w-3" />

            <button onClick={_gotoFavorite} className="bg-blue_button rounded-lg h-16 w-24">
              <p className="exhibition-menu">Favorite</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
