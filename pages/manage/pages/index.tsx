import BaseLayout from '@components/Manage/Layout/BaseLayout';
import SubmenuLayout, { SubmenuItem } from '@components/Manage/Layout/SubmenuLayout';
import { useCallback, useMemo, useState } from 'react';
import LoadingScreen from './loading-screen';
import PagesMainHall from './main-hall';
import WelcomeScreen from './welcome-screen';
import ExhibitionHall from './exhibiton-hall';
import ExhibitionList from './exhibiton-list';
import Exhibitor from './exhibitor';

const Pages = () => {
  const submenu: SubmenuItem[] = useMemo(
    () => [
      {
        id: 0,
        name: 'Loading Screen',
        target: '/loading-screen',
      },
      {
        id: 1,
        name: 'Welcome Screen',
        target: '/welcome-screen',
      },
      {
        id: 2,
        name: 'Main Hall',
        target: '/main-hall',
      },
      {
        id: 3,
        name: 'Exhibition Hall',
        target: '/exhibition-hall',
      },
      {
        id: 4,
        name: 'Exhibiton LIst',
        target: '/exhibition-list',
      },
      {
        id: 5,
        name: 'Exhibitior',
        target: '/exhibitor',
      },
      {
        id: 6,
        name: 'Main Stage',
        target: '/main-stage',
      },
      {
        id: 7,
        name: 'Classroom',
        target: '/classroom',
      },
      {
        id: 8,
        name: 'Meet The Expert',
        target: '/meet-the-experts',
      },
      {
        id: 9,
        name: 'Shop',
        target: '/shop',
      },
    ],
    []
  );

  const [activeSubmenu, setActiveSubmenu] = useState(submenu[0]);

  const _selectSubMenu = useCallback(
    (subMenu: SubmenuItem) => {
      setActiveSubmenu(subMenu);
    },
    [activeSubmenu]
  );

  return (
    <BaseLayout>
      <SubmenuLayout
        data={submenu}
        selectedSubmenu={activeSubmenu}
        setSelectedSubmenu={_selectSubMenu}
      >
        {activeSubmenu.id === 0 && <LoadingScreen />}

        {activeSubmenu.id === 1 && <WelcomeScreen />}

        {activeSubmenu.id === 2 && <PagesMainHall />}
        
        {activeSubmenu.id === 3 && <ExhibitionHall />}
        
        {activeSubmenu.id === 4 && <ExhibitionList />}
        
        {activeSubmenu.id === 5 && <Exhibitor />}
      </SubmenuLayout>
    </BaseLayout>
  );
};

export default Pages;
