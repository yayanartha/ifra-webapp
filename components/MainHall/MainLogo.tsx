import Clickable from '@components/common/Clickable';

type Props = {
  onClick(): void;
};

const MainLogo = (props: Props) => {
  return (
    <Clickable onClick={props.onClick} rounded={true}>
      <div className="rounded-full opacity-50" style={{ width: '13.5vw', height: '13.5vw' }}>
        {/*  */}
      </div>
    </Clickable>
  );
};

export default MainLogo;
