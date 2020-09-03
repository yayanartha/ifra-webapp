import Clickable from '@components/common/Clickable';

type Props = {
  onClick(): void;
};

const OrganiserLogo = (props: Props) => {
  return (
    <Clickable onClick={props.onClick}>
      <div className="bg-red-300 rounded-full opacity-50" style={{ width: '10vw', height: '10vw' }}>
        {/*  */}
      </div>
    </Clickable>
  );
};

export default OrganiserLogo;
