import Clickable from '@components/common/Clickable';

type Props = {
  onClick(): void;
};

const Videotron = (props: Props) => {
  return (
    <Clickable onClick={props.onClick}>
      <div
        className="bg-red-300 opacity-50 transform -skew-y-6"
        style={{ width: '17vw', height: '12vw' }}
      >
        {/*  */}
      </div>
    </Clickable>
  );
};

export default Videotron;
