import Clickable from '@components/common/Clickable';

type Props = {
  onClick(): void;
};

const Agenda = (props: Props) => {
  return (
    <Clickable onClick={props.onClick}>
      <div
        className="bg-red-300 opacity-50 transform -skew-y-12"
        style={{ width: '16vw', height: '9vw' }}
      >
        {/*  */}
      </div>
    </Clickable>
  );
};

export default Agenda;
