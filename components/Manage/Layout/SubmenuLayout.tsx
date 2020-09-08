import { ReactNode } from 'react';

export interface SubmenuItem {
  id: number;
  name: string;
  badgeCount?: number;
}

type Props = {
  data: SubmenuItem[];
  selectedSubmenu: SubmenuItem;
  setSelectedSubmenu(subMenu: SubmenuItem): void;
  children: ReactNode;
};

const SubmenuLayout = (props: Props) => {
  return (
    <div className="flex">
      <div className="bg-blue-800 w-64 overflow-y-auto" style={{ height: 'calc(100vh - 4rem)' }}>
        <div className="h-4" />
        {props.data.map((d, i) => (
          <Submenu
            data={d}
            isActive={props.selectedSubmenu.id === d.id}
            onClick={props.setSelectedSubmenu}
          />
        ))}
        <div className="h-4" />
      </div>
      <div style={{ width: 'calc(100vw - 16rem - 16rem)' }}>{props.children}</div>
    </div>
  );
};

interface SubmenuProps {
  data: SubmenuItem;
  isActive: boolean;
  onClick(subMenu: SubmenuItem): void;
}

const Submenu = (props: SubmenuProps) => {
  return (
    <button
      onClick={() => props.onClick(props.data)}
      className={`w-full relative h-12 hover:bg-blue-900 flex flex-col justify-center px-8 cursor-pointer focus:outline-none ${
        props.isActive ? 'bg-blue-900' : 'bg-transparent'
      }`}
    >
      <p className="text-white font-body text-sm font-light">{props.data.name}</p>
      {props.isActive && <div className="absolute left-0 top-0 w-2 h-12 bg-blue-700" />}

      {props.data.badgeCount > 0 && (
        <div
          className="absolute w-6 h-5 rounded-md bg-red-500 flex items-center justify-center"
          style={{ right: '16px', top: '15px' }}
        >
          <p className="text-white text-xs font-body font-light">{props.data.badgeCount}</p>
        </div>
      )}
    </button>
  );
};

export default SubmenuLayout;
