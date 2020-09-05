import Clickable from '@components/common/Clickable';

type Props = {
  onClick(): void;
};

const Press = (props: Props) => {
  return (
    <Clickable onClick={props.onClick}>
      <div
        className="opacity-50"
        style={{ width: '13.6vw', height: '9.5vw', transform: 'skewY(-2deg)' }}
      >
        {/*  */}
      </div>
    </Clickable>
  );
};

export default Press;
