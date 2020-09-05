import { FaInfo } from 'react-icons/fa';
import ReactIcons from '@components/common/ReactIcons';

type Props = {
  left: string;
  top: string;
  baseColor?: '';
  pingColor?: '';
  hoverColor?: '';
  onClick(): void;
};

const InfoSpot = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className="absolute rounded-full cursor-pointer focus:outline-none"
      style={{ left: props.left, top: props.top }}
    >
      <span className="flex" style={{ width: '2vw', height: '2vw' }}>
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
        <span
          className="relative flex items-center justify-center rounded-full bg-blue-500 border-white border hover:bg-blue-700"
          style={{ width: '2vw', height: '2vw' }}
        >
          <ReactIcons
            Icon={FaInfo}
            className="text-white"
            style={{ width: '0.9vw', height: '0.9vw' }}
          />
        </span>
      </span>
    </div>
  );
};

export default InfoSpot;
