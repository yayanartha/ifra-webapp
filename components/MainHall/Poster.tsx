import Clickable from '@components/common/Clickable';

type Props = {
  onClick(): void;
};

const Poster = (props: Props) => {
  return (
    <Clickable onClick={props.onClick}>
      <div
        className="bg-red-300 opacity-50 transform skew-y-6"
        style={{ width: '8vw', height: '18vw' }}
      >
        {/*  */}
      </div>
    </Clickable>
  );
};

export default Poster;
