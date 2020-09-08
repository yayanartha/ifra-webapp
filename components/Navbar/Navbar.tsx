import { FaChevronDown, FaComments, FaBell } from 'react-icons/fa';
import ReactIcons from '../common/ReactIcons';
import { useCallback, useState, useEffect } from 'react';
import DropdownMenu from './DropdownMenu';
import DropdownRundown from './DropdownRundown';
import Link from 'next/link';
import NotifIndicator from '@components/common/NotifIndicator';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const [selectedMenu, setSelectedMenu] = useState('Main Hall');
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowRundown, setIsShowRundown] = useState(false);
  const [isShowProfile, setIsShowProfile] = useState(false);

  useEffect(() => {
    let menu = selectedMenu;

    if (router.pathname.includes('/exhibition') || router.pathname.includes('/exhibitor-hall')) {
      menu = 'Exhibition Hall';
    } else if (router.pathname.includes('/stage')) {
      menu = 'Main Stage';
    } else if (router.pathname.includes('/classroom')) {
      menu = 'Classroom';
    } else if (router.pathname.includes('/experts')) {
      menu = 'Meet The Experts';
    } else if (router.pathname.includes('/favorite')) {
      menu = 'Favorite';
    } else if (router.pathname.includes('/shop')) {
      menu = 'Shop';
    }

    setSelectedMenu(menu);
  }, [router]);

  const _toggleDropdownMenu = useCallback(() => {
    setIsShowMenu(!isShowMenu);
  }, [isShowMenu]);

  const _toggleDropdownRundown = useCallback(() => {
    setIsShowRundown(!isShowRundown);
  }, [isShowRundown]);

  const _toggleDropdownProfile = useCallback(() => {
    setIsShowProfile(!isShowProfile);
  }, [isShowProfile]);

  return (
    <div className="relative">
      <nav className="fixed w-full z-10 top-0 bg-white flex flex-col items-center h-12 shadow">
        <button
          onClick={_toggleDropdownRundown}
          className="flex items-center px-4 h-12 hover:bg-gray-100 focus:outline-none"
        >
          <p className="main-rundown">00:02:34 to Opening & Indonesia Anthem on Main Stages</p>
          <ReactIcons Icon={FaChevronDown} className="text-primary ml-2 text-xs" />
        </button>

        <div className="absolute left-0 top-0 h-12 flex items-center">
          <Link href="/main-hall">
            <img
              src="/logo.png"
              alt="Logo IFRA"
              className="w-32 h-8 object-contain cursor-pointer hover:opacity-75"
            />
          </Link>

          <button
            onClick={_toggleDropdownMenu}
            className="border-l border-gray-300 h-12 px-4 flex items-center justify-center hover:bg-gray-100 focus:outline-none"
          >
            <div className="flex items-center">
              <p className="main-menu">{selectedMenu}</p>
              <ReactIcons Icon={FaChevronDown} className="text-primary ml-2 text-xs" />
            </div>
          </button>
        </div>

        <div className="absolute right-0 top-0 h-12 flex items-center">
          <button className="relative w-8 h-8 flex items-center justify-center hover:bg-gray-100 focus:outline-none">
            <ReactIcons Icon={FaComments} className="text-gray-500" />
            <div className="absolute top-0 right-0 w-3 h-3">
              <NotifIndicator />
            </div>
          </button>

          <div className="w-2" />

          <button className="relative w-8 h-8 flex items-center justify-center hover:bg-gray-100 focus:outline-none">
            <ReactIcons Icon={FaBell} className="text-gray-500" />
            <div className="absolute top-0 right-0 w-3 h-3">
              <NotifIndicator />
            </div>
          </button>

          <div className="ml-1 w-1 h-6 border-r border-gray-200" />

          <button
            onClick={_toggleDropdownProfile}
            className="pl-4 pr-3 flex items-center h-12 hover:bg-gray-100 focus:outline-none"
          >
            <p className="nav-profile">John Doe</p>
            <ReactIcons Icon={FaChevronDown} className="text-gray-500 ml-2 text-xs" />
            <div className="w-8 h-8 rounded-full bg-gray-400 ml-2 text-xs">{/*  */}</div>
          </button>
        </div>
      </nav>

      <DropdownMenu visible={isShowMenu} handleDismiss={_toggleDropdownMenu} />

      <DropdownRundown visible={isShowRundown} handleDismiss={_toggleDropdownRundown} />
    </div>
  );
};

export default Navbar;
