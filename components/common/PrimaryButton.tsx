import React from 'react';
import Clickable from './Clickable';

interface PrimaryButtonProps {
  onClick(): void;
  label: string;
}

export default (props: PrimaryButtonProps) => {
  return (
    <Clickable onClick={props.onClick}>
      <div
        className="shadow-xs rounded-lg bg-blue_button"
        style={{
          paddingTop: '10px',
          paddingBottom: '10px',
          width: '15rem',
        }}
      >
        <p className="text-white">{props.label}</p>
      </div>
    </Clickable>
  );
};
