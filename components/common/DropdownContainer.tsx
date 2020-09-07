import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onDismiss(): void;
};

const DropdownContainer = (props: Props) => {
  return (
    <>
      <div onClick={props.onDismiss} className="absolute z-20 top-0 right-0 bottom-0 left-0" />

      {props.children}
    </>
  );
};

export default DropdownContainer;
