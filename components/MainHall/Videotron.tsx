type Props = {
  onClick(): void;
};

const Videotron = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className="absolute"
      style={{
        left: 'calc(50vw + 24.6vw)',
        top: '37.9%',
        perspective: '1000px',
      }}
    >
      <div
        className="bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200"
        style={{
          width: '15.5vw',
          height: '9.5vw',
          transform: 'rotateY(-30deg) rotateX(-3deg) skewY(-6.3deg)',
        }}
      >
        <p>VIDEOTRON</p>
      </div>
    </div>
  );
};

export default Videotron;
