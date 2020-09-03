import Clickable from '@components/common/Clickable';

type Props = {
  onClick(): void;
};

const Exhibition = (props: Props) => {
  return (
    <Clickable onClick={props.onClick}>
      <div className="bg-red-300 opacity-50" style={{ width: '20vw', height: '9vw' }}>
        {/*  */}
      </div>
    </Clickable>
  );
};

export default Exhibition;
