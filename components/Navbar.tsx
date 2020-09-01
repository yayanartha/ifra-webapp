import { FaBeer } from 'react-icons/fa';
import ReactIcons from './ReactIcons';

const Navbar = () => {
  return (
    <header className="flex items-center h-12">
      <div>
        <img src="/logo.png" alt="Logo IFRA" className="w-32 h-8 object-contain" />
      </div>

      <div className="border-l border-gray-300 flex flex-1 h-12 justify-center">
        <div className="flex items-center px-4 bg-red-200">
          <p>00:02:34 to Opening & Indonesia Anthem on Main Stages</p>
          <ReactIcons Icon={FaBeer} className="text-gray-500 mr-2 text-lg" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
