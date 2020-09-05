import Clickable from '@components/common/Clickable';

type Props = {
  onClick(): void;
};

const XBanner = (props: Props) => {
  return (
    <Clickable onClick={props.onClick}>
      <div className="opacity-50" style={{ width: '18.6vw', height: '6.5vw' }}>
        {/*  */}
      </div>
    </Clickable>
  );
};

export default XBanner;
