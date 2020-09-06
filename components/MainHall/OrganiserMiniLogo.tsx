type Props = {
  left: string;
  top: string;
  onClick(): void;
};

const OrganiserMiniLogo = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className="absolute rounded-full flex items-center justify-center cursor-pointer bg-white opacity-0 hover:opacity-25"
      style={{ left: props.left, top: props.top, width: '8.3vw', height: '8.3vw' }}
    />
  );
};

export default OrganiserMiniLogo;
