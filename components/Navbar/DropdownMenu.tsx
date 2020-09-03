import { useMemo } from 'react';
import DropdownContainer from '@components/common/DropdownContainer';

type Props = {
  visible: boolean;
  handleDismiss(): void;
};

const DropdownMenu = (props: Props) => {
  if (!props.visible) return null;

  const menu = useMemo(
    () => [
      {
        name: 'Exhibition Hall',
        route: '',
      },
      {
        name: 'Main Stage',
        route: '',
      },
      {
        name: 'Classroom',
        route: '',
      },
      {
        name: 'Meet The Expert',
        route: '',
      },
      {
        name: 'Favorite',
        route: '',
      },
      {
        name: 'Shop',
        route: '',
      },
    ],
    []
  );

  return (
    <DropdownContainer onDismiss={props.handleDismiss}>
      <div
        className="fixed z-20 shadow-2xl bg-white w-56 border-b-4 border-primary py-4"
        style={{ left: '8rem', top: 'calc(3rem - 2px)' }}
      >
        {menu.map((m, i) => (
          <button key={i} className="px-8 py-3 w-full flex items-start">
            <p>{m.name}</p>
          </button>
        ))}
      </div>
    </DropdownContainer>
  );
};

export default DropdownMenu;
