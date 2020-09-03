import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick(): void;
};

const Clickable = (props: Props) => {
  return (
    <button onClick={props.onClick} className="focus:outline-none rounded-full">
      {props.children}
    </button>
  );
};

export default Clickable;
