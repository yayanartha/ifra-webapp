import { FaChevronDown, FaComments, FaBell } from 'react-icons/fa';
import ReactIcons from './common/ReactIcons';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 top-0 bg-white flex flex-col items-center h-12 shadow">
      <div className="flex items-center px-4 h-12">
        <p className="text-primary">00:02:34 to Opening & Indonesia Anthem on Main Stages</p>
        <ReactIcons Icon={FaChevronDown} className="text-gray-500 ml-2" />
      </div>

      <div className="absolute left-0 top-0 h-12 flex items-center">
        <img src="/logo.png" alt="Logo IFRA" className="w-32 h-8 object-contain" />

        <div className="border-l border-gray-300 h-12 px-4 flex items-center justify-center">
          <div className="flex items-center">
            <p>Main Hall</p>
            <ReactIcons Icon={FaChevronDown} className="text-gray-500 ml-2" />
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 h-12 flex items-center">
        <div className="w-8 h-8 flex items-center justify-center">
          <ReactIcons Icon={FaComments} className="text-gray-500" />
        </div>

        <div className="w-1" />

        <div className="w-8 h-8 flex items-center justify-center">
          <ReactIcons Icon={FaBell} className="text-gray-500" />
        </div>

        <div className="ml-1 w-1 h-6 border-r border-gray-200" />

        <div className="pl-4 pr-2 flex items-center h-12">
          <p>John Doe</p>
          <ReactIcons Icon={FaChevronDown} className="text-gray-500 ml-2" />
          <div className="w-8 h-8 rounded-full bg-gray-400 ml-2">{/*  */}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
