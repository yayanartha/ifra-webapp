type Props = {
  left: string;
  top: string;
  onClick(): void;
  label: string;
};

const OrganiserMiniLogo = (props: Props) => {
  return (
    <>
      <div
        onClick={props.onClick}
        className="absolute rounded-full flex items-center justify-center cursor-pointer bg-white opacity-0 hover:opacity-25"
        style={{ left: props.left, top: props.top, width: '8.3vw', height: '8.3vw' }}
      />
      <p
        className="absolute text-text bg-white text-sm font-body font-bold text-center"
        style={{
          left: `calc(${props.left} - 1vw)`,
          top: `calc(${props.top} - 2%)`,
          width: '10vw',
        }}
      >
        {props.label}
      </p>
    </>
  );
};

export default OrganiserMiniLogo;
