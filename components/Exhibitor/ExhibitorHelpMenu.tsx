import ReactIcons from '@components/common/ReactIcons';
import { IconType } from 'react-icons';

type Props = {
  onClick(): void;
  icon: IconType | null;
  label: string;
};

const ExhibitorHelpMenu = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className="rounded-lg flex flex-col items-center justify-start focus:outline-none"
      style={{ width: '3.5vw', height: '6vw', marginBottom: '0.5vw' }}
    >
      <div
        className="bg-primary rounded-lg flex items-center justify-center hover:bg-blue_button focus:outline-none"
        style={{ width: '3.5vw', height: '3.5vw', marginBottom: '4px' }}
      >
        {props.icon === null ? (
          <img
            src="/icon-live-stream.png"
            alt="icon-live"
            style={{ width: '2vw', height: '2vw' }}
          />
        ) : (
          <ReactIcons
            Icon={props.icon}
            className="text-white"
            style={{ width: '2vw', height: '2vw' }}
          />
        )}
      </div>
      <p className="booth-help-menu" style={{ fontSize: '0.5rem' }}>
        {props.label}
      </p>
    </button>
  );
};

export default ExhibitorHelpMenu;
