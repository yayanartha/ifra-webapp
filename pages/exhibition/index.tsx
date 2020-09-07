import Navbar from '@components/Navbar/Navbar';
import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import BottomMenu, { BottomMenuItem } from '@components/common/BottomMenu';
import ExhibitorCategoryButton from '@components/Exhibitor/ExhibitorCategoryButton';

const Exhibition = () => {
  const router = useRouter();

  const bottomMenu: BottomMenuItem[] = useMemo(
    () => [
      {
        name: 'Lobby',
        action: () => _gotoLobby(),
      },
      {
        name: 'Main Stage',
        action: () => _gotoMainStage(),
      },
      {
        name: 'Classroom',
        action: () => _gotoClassroom(),
      },
      {
        name: 'Meet the Experts',
        action: () => _gotoMeetTheExpert(),
      },
      {
        name: 'Favorite',
        action: () => _gotoFavorite(),
      },
    ],
    []
  );

  const _gotoExhibitorHall = useCallback(() => {
    _gotoLobby();
  }, [router]);

  const _gotoLobby = useCallback(() => {
    router.push('/main-hall');
  }, [router]);

  const _gotoMainStage = useCallback(() => {
    router.push('/stage');
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
    <div>
      <Navbar />

      <div className="fixed w-screen h-screen overflow-y-scroll overflow-x-hidden">
        <img src="/bg-exhibition.webp" alt="Exhibition Hall" className="w-full h-auto" />

        <div
          className="absolute top-0"
          style={{
            width: 'calc((1920 * 100vh) / 1080)',
            height: 'calc(((1080 * 100vw) / 1920) - 10px)',
          }}
        >
          <ExhibitorCategoryButton
            action={() => _gotoExhibitorHall()}
            left="calc(50vw - 41vw)"
            top="14%"
            label="Ministry of Trade of PI Pavillion"
          />

          <ExhibitorCategoryButton
            action={() => _gotoExhibitorHall()}
            left="calc(50vw - 45.5vw)"
            top="26%"
            label="Retail Mini Market"
          />

          <ExhibitorCategoryButton
            action={() => _gotoExhibitorHall()}
            left="calc(50vw - 36vw)"
            top="37.5%"
            label="Food & Beverage"
          />

          <ExhibitorCategoryButton
            action={() => _gotoExhibitorHall()}
            left="calc(50vw - 31.7vw)"
            top="49.5%"
            label="Beauty, Health & SPA"
          />

          <ExhibitorCategoryButton
            action={() => _gotoExhibitorHall()}
            left="calc(50vw - 23vw)"
            top="69.3%"
            label="Delivery Services"
          />

          <ExhibitorCategoryButton
            action={() => _gotoExhibitorHall()}
            left="calc(50vw - 22vw)"
            top="24%"
            label="Water Refill"
          />

          <ExhibitorCategoryButton
            action={() => _gotoExhibitorHall()}
            left="calc(50vw - 18.5vw)"
            top="39%"
            label="Laundry & Services"
          />

          <ExhibitorCategoryButton
            action={() => _gotoExhibitorHall()}
            left="calc(50vw - 4.5vw)"
            top="59%"
            label="Pharmacy"
          />

          <ExhibitorCategoryButton
            action={() => _gotoExhibitorHall()}
            left="calc(50vw - 6.5vw)"
            top="21.5%"
            label="Automotive"
          />

          <ExhibitorCategoryButton
            action={() => _gotoExhibitorHall()}
            left="calc(50vw - 3.5vw)"
            top="40.5%"
            label="Repair Services"
          />

          <ExhibitorCategoryButton
            action={() => _gotoExhibitorHall()}
            left="calc(50vw + 11.3vw)"
            top="52.5%"
            label="Property"
          />

          <ExhibitorCategoryButton
            action={() => _gotoExhibitorHall()}
            left="calc(50vw + 9vw)"
            top="19%"
            label="Fintech & Telco"
          />

          <ExhibitorCategoryButton
            action={() => _gotoExhibitorHall()}
            left="calc(50vw + 17.8vw)"
            top="31%"
            label="Sponsors"
          />

          <ExhibitorCategoryButton
            action={() => _gotoExhibitorHall()}
            left="calc(50vw + 35vw)"
            top="37%"
            label="Education Center"
          />
        </div>
      </div>
      <div className="fixed w-screen flex flex-col items-center" style={{ bottom: '20px' }}>
        <BottomMenu data={bottomMenu} />
      </div>
    </div>
  );
};

export default Exhibition;
