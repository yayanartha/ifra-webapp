import Clickable from '@components/common/Clickable';

type Props = {
  onClick(): void;
};

const Videotron = (props: Props) => {
  return (
    <Clickable onClick={props.onClick}>
      <div
        className="opacity-50 transform"
        style={{ width: '15.5vw', height: '11vw', transform: 'skewY(-8deg)' }}
      >
        {/*  */}
      </div>
    </Clickable>
  );
};

export default Videotron;
