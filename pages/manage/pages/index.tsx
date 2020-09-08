import SubmenuLayout, { SubmenuItem } from '@components/Manage/Layout/SubmenuLayout';
import { useMemo, useState, useCallback } from 'react';
import BaseLayout from '@components/Manage/Layout/BaseLayout';
import ContentLayout, { ContentTypes } from '@components/Manage/Layout/ContentLayout';
import FileUploadButton from '@components/Manage/Components/FileUploadButton';
import PagesMainHall from './main-hall';

const Pages = () => {
  const submenu: SubmenuItem[] = useMemo(
    () => [
      {
        id: 0,
        name: 'Main Hall',
        target: '/main-hall',
      },
      {
        id: 1,
        name: 'Exhibition List',
        target: '/exhibition-list',
      },
      {
        id: 2,
        name: 'Main Stage',
        target: '/main-stage',
      },
      {
        id: 3,
        name: 'Classroom',
        target: '/classroom',
      },
      {
        id: 4,
        name: 'Meet The Experts',
        target: '/meet-the-experts',
      },
      {
        id: 5,
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
        {activeSubmenu.id === 0 && <PagesMainHall />}
      </SubmenuLayout>
    </BaseLayout>
  );
};

export default Pages;
