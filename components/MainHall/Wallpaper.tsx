import Clickable from '@components/common/Clickable';

type Props = {
  onClick(): void;
};

const Wallpaper = (props: Props) => {
  return (
    <Clickable onClick={props.onClick}>
      <div className="opacity-50" style={{ width: '9.3vw', height: '7.5vw' }}>
        {/*  */}
      </div>
    </Clickable>
  );
};

export default Wallpaper;
