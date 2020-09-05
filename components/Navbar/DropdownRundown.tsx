import { useMemo } from 'react';
import DropdownContainer from '@components/common/DropdownContainer';

type Props = {
  visible: boolean;
  handleDismiss(): void;
};

const DropdownRundown = (props: Props) => {
  if (!props.visible) return null;

  const menu = useMemo(
    () => [
      {
        name: '00:12:34 to Business Presentation by Exhibitor 1',
        route: '',
      },
      {
        name: '00:32:34 to Business Presentation by Exhibitor 2',
        route: '',
      },
      {
        name: '01:02:34 to Business Presentation by Exhibitor 3',
        route: '',
      },
    ],
    []
  );

  return (
    <DropdownContainer onDismiss={props.handleDismiss}>
      <div
        className="fixed z-20 shadow-2xl bg-white border-b-4 border-primary pt-4"
        style={{ width: '500px', left: 'calc(50vw - 250px)', top: 'calc(3rem - 2px)' }}
      >
        {menu.map((m, i) => (
          <button
            key={i}
            className="px-8 py-3 w-full flex items-start hover:bg-gray-100 focus:outline-none"
          >
            <p className="main-rundown-item">{m.name}</p>
          </button>
        ))}

        <div className="h-4" />

        {/* <button className="w-full py-4 px-8 border-t border-gray-300">
          <p>View all</p>
        </button> */}
      </div>
    </DropdownContainer>
  );
};

export default DropdownRundown;
