import React from 'react';

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
      className={`shadow-lg hover:bg-primary focus:outline-none ${
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
