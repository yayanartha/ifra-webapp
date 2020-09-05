import Clickable from '@components/common/Clickable';

type Props = {
  onClick(): void;
};

const Exhibition = (props: Props) => {
  return (
    <Clickable onClick={props.onClick}>
      <div className="opacity-50" style={{ width: '18.7vw', height: '8.5vw' }}>
        {/*  */}
      </div>
    </Clickable>
  );
};

export default Exhibition;
