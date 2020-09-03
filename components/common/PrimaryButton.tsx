import React from 'react';
import Clickable from './Clickable';

interface PrimaryButtonProps {
  onClick(): void;
  label: string;
  roundedLight?: boolean;
  width?: string;
}

export default (props: PrimaryButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`shadow-xs ${
        props.roundedLight ? 'rounded-md' : 'rounded-lg'
      } bg-blue_button h-12`}
      style={{
        width: props.width || '100%',
      }}
    >
      <p className="btn-label">{props.label}</p>
    </button>
  );
};
