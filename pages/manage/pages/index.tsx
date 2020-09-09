import BaseLayout from '@components/Manage/Layout/BaseLayout';
import SubmenuLayout, { SubmenuItem } from '@components/Manage/Layout/SubmenuLayout';
import { useCallback, useMemo, useState } from 'react';
import PagesMainHall from './main-hall';
import LoadingScreen from './loading-screen';
import WelcomeScreen from './welcome-screen'

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
        name: 'Exhibition List',
        target: '/exhibition-list',
      },
      {
        id: 3,
        name: 'Main Stage',
        target: '/main-stage',
      },
      {
        id: 4,
        name: 'Classroom',
        target: '/classroom',
      },
      {
        id: 5,
        name: 'Meet The Experts',
        target: '/meet-the-experts',
      },
      {
        id: 6,
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
      </SubmenuLayout>
    </BaseLayout>
  );
};

export default Pages;
