import Clickable from '@components/common/Clickable';

type Props = {
  onClick(): void;
};

const OrganiserLogo = (props: Props) => {
  return (
    <Clickable onClick={props.onClick} rounded={true}>
      <div className="rounded-full opacity-50" style={{ width: '9vw', height: '9vw' }}>
        {/*  */}
      </div>
    </Clickable>
  );
};

export default OrganiserLogo;
