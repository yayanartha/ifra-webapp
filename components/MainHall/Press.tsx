import Clickable from '@components/common/Clickable';

type Props = {
  onClick(): void;
};

const Press = (props: Props) => {
  return (
    <Clickable onClick={props.onClick}>
      <div className="bg-red-300 opacity-50" style={{ width: '15vw', height: '10vw' }}>
        {/*  */}
      </div>
    </Clickable>
  );
};

export default Press;
