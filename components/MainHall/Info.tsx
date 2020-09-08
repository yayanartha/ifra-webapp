type Props = {
  onClick(): void;
};

const Info = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className="absolute"
      style={{
        left: 'calc(50vw - 45vw)',
        top: '78%',
        perspective: '1000px',
      }}
    >
      <div
        className="hover:bg-white opacity-25 flex items-center justify-center cursor-pointer"
        style={{
          width: '28.5vw',
          height: '6vw',
          transform: 'rotateY(40deg) skewY(-1deg) skewX(2deg)',
        }}
      />
    </div>
  );
};

export default Info;
