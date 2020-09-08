import { ReactNode, useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ReactIcons from '@components/common/ReactIcons';
import { FaChevronDown } from 'react-icons/fa';

interface MainMenu {
  id: number;
  name: string;
  route: string;
}

type Props = {
  children: ReactNode;
};

const BaseLayout = (props: Props) => {
  const router = useRouter();

  const [selectedMenu, setSelectedMenu] = useState<MainMenu | null>(null);

  const mainMenu: MainMenu[] = useMemo(
    () => [
      // {
      //   id: 0,
      //   name: 'Broadcast',
      //   route: '/manage/broadcast',
      // },
      // {
      //   id: 1,
      //   name: 'Ticket',
      //   route: '/manage/ticket',
      // },
      // {
      //   id: 2,
      //   name: 'Information Desk',
      //   route: '/manage/information-desk',
      // },
      // {
      //   id: 3,
      //   name: 'Press Release',
      //   route: '/manage/press-release',
      // },
      // {
      //   id: 4,
      //   name: 'Access',
      //   route: '/manage/access',
      // },
      // {
      //   id: 5,
      //   name: 'Booth',
      //   route: '/manage/booth',
      // },
      // {
      //   id: 6,
      //   name: 'Visitor',
      //   route: '/manage/visitor',
      // },
      // {
      //   id: 7,
      //   name: 'Main Stage',
      //   route: '/manage/main-stage',
      // },
      // {
      //   id: 8,
      //   name: 'Quiz',
      //   route: '/manage/quiz',
      // },
      // {
      //   id: 9,
      //   name: 'Lucky Draw',
      //   route: '/manage/lucky-draw',
      // },
      // {
      //   id: 10,
      //   name: 'Classroom',
      //   route: '/manage/classroom',
      // },
      // {
      //   id: 11,
      //   name: 'Meet The Experts',
      //   route: '/manage/experts',
      // },
      // {
      //   id: 12,
      //   name: 'Shop',
      //   route: '/manage/shop',
      // },
      // {
      //   id: 13,
      //   name: 'Pages',
      //   route: '/manage/pages',
      // },
      {
        id: 14,
        name: 'Inbox',
        route: '/manage/inbox',
      },
      {
        id: 15,
        name: 'Messages',
        route: '/manage/messages',
      },
      {
        id: 16,
        name: 'Notifications',
        route: '/manage/notification',
      },
      {
        id: 17,
        name: 'Name Card',
        route: '/manage/name-card',
      },
      {
        id: 18,
        name: 'Pages',
        route: '/manage/pages',
      },
      {
        id: 19,
        name: 'Quiz',
        route: '/manage/quiz',
      },
    ],
    []
  );

  useEffect(() => {
    for (const menu of mainMenu) {
      if (router.pathname.includes(menu.route)) {
        setSelectedMenu(menu);
        break;
      }
    }
  }, [router]);

  return (
    <div className="w-screen h-screen flex">
      <div className="w-64 h-full bg-blue-500">
        <div className="bg-blue-700 h-16 flex items-center justify-center">
          <p className="text-white font-body text-base font-medium tracking-widest">IFRA 2020</p>
        </div>

        <div className="overflow-y-auto" style={{ height: 'calc(100vh - 4rem)' }}>
          <div className="h-4" />
          {mainMenu.map((menu, i) => (
            <MenuItem key={i} data={menu} isActive={menu === selectedMenu} />
          ))}
          <div className="h-4" />
        </div>
      </div>

      <div className="bg-gray-200" style={{ width: 'calc(100vw - 16rem)' }}>
        <div className="bg-white shadow-sm h-16 flex items-center justify-end">
          <div className="ml-1 w-1 h-8 border-r border-gray-200" />

          <button
            onClick={() => {}}
            className="px-4 flex items-center h-16 hover:bg-gray-100 focus:outline-none"
          >
            <p className="nav-profile">John Doe</p>
            <ReactIcons Icon={FaChevronDown} className="text-gray-500 ml-2 text-xs" />
            <div className="w-8 h-8 rounded-full bg-gray-400 ml-2 text-xs">{/*  */}</div>
          </button>
        </div>

        <div className="overflow-y-auto" style={{ height: 'calc(100vh - 4rem)' }}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

interface MenuItemProps {
  data: MainMenu;
  isActive: boolean;
}

const MenuItem = (props: MenuItemProps) => {
  return (
    <Link href={props.data.route}>
      <div
        className={`relative h-12 hover:bg-blue-600 flex flex-col justify-center px-8 cursor-pointer ${
          props.isActive ? 'bg-blue-600' : 'bg-transparent'
        }`}
      >
        <p className="text-white font-body text-sm font-light">{props.data.name}</p>
        {props.isActive && <div className="absolute left-0 top-0 w-2 h-12 bg-blue-800" />}
      </div>
    </Link>
  );
};

export default BaseLayout;
