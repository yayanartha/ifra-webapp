import Clickable from '@components/common/Clickable';

type Props = {
  onClick(): void;
};

const Poster = (props: Props) => {
  return (
    <Clickable onClick={props.onClick}>
      <div className="opacity-50 transform skew-y-6" style={{ width: '7.2vw', height: '18vw' }}>
        {/*  */}
      </div>
    </Clickable>
  );
};

export default Poster;
