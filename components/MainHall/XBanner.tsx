import Clickable from '@components/common/Clickable';

type Props = {
  onClick(): void;
};

const XBanner = (props: Props) => {
  return (
    <Clickable onClick={props.onClick}>
      <div className="bg-red-300 opacity-50" style={{ width: '20vw', height: '7vw' }}>
        {/*  */}
      </div>
    </Clickable>
  );
};

export default XBanner;
