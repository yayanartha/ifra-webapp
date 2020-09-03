import React from 'react';
import Clickable from './Clickable';

interface PrimaryButtonProps {
  onClick(): void;
  label: string;
  roundedLight?: boolean;
}

export default (props: PrimaryButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`shadow-xs ${
        props.roundedLight ? 'rounded-md' : 'rounded-lg'
      } bg-blue_button w-full h-12`}
    >
      <p className="btn-label">{props.label}</p>
    </button>
  );
};
