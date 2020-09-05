import Clickable from '@components/common/Clickable';

type Props = {
  onClick(): void;
};

const Agenda = (props: Props) => {
  return (
    <Clickable onClick={props.onClick}>
      <div className="opacity-50 transform -skew-y-12" style={{ width: '13vw', height: '9vw' }}>
        {/*  */}
      </div>
    </Clickable>
  );
};

export default Agenda;
