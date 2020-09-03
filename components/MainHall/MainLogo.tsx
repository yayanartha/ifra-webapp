import Clickable from '@components/common/Clickable';

type Props = {
  onClick(): void;
};

const MainLogo = (props: Props) => {
  return (
    <Clickable onClick={props.onClick}>
      <div className="bg-red-300 rounded-full opacity-50" style={{ width: '16vw', height: '16vw' }}>
        {/*  */}
      </div>
    </Clickable>
  );
};

export default MainLogo;
