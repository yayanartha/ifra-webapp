import Clickable from '@components/common/Clickable';

type Props = {
  onClick(): void;
};

const Wallpaper = (props: Props) => {
  return (
    <Clickable onClick={props.onClick}>
      <div className="bg-red-300 opacity-50" style={{ width: '10vw', height: '8vw' }}>
        {/*  */}
      </div>
    </Clickable>
  );
};

export default Wallpaper;
