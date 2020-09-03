import { useMemo, useCallback } from 'react';
import DropdownContainer from '@components/common/DropdownContainer';
import { useRouter } from 'next/router';

type Props = {
  visible: boolean;
  handleDismiss(): void;
};

const DropdownMenu = (props: Props) => {
  if (!props.visible) return null;

  const router = useRouter();

  const menu = useMemo(
    () => [
      {
        name: 'Exhibition Hall',
        route: '/exhibition',
      },
      {
        name: 'Main Stage',
        route: '/stage',
      },
      {
        name: 'Classroom',
        route: '/classroom',
      },
      {
        name: 'Meet The Expert',
        route: '/experts',
      },
      {
        name: 'Favorite',
        route: '/favorite',
      },
      {
        name: 'Shop',
        route: '/shop',
      },
    ],
    []
  );

  const _onClickItem = useCallback(
    (routeName: string) => {
      router.push(routeName);
      props.handleDismiss();
    },
    [router]
  );

  return (
    <DropdownContainer onDismiss={props.handleDismiss}>
      <div
        className="fixed z-20 shadow-2xl bg-white w-56 border-b-4 border-primary py-4"
        style={{ left: '8rem', top: 'calc(3rem - 2px)' }}
      >
        {menu.map((m, i) => (
          <button
            key={i}
            onClick={() => _onClickItem(m.route)}
            className="px-8 py-3 w-full flex items-start"
          >
            <p>{m.name}</p>
          </button>
        ))}
      </div>
    </DropdownContainer>
  );
};

export default DropdownMenu;
