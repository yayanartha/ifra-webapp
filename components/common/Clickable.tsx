import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  rounded?: boolean;
  onClick(): void;
};

const Clickable = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className="focus:outline-none"
      style={{ backgroundColor: '#ee000066', borderRadius: props.rounded ? '50%' : 0 }}
    >
      {props.children}
    </button>
  );
};

export default Clickable;
