type Props = {
  onClick(): void;
};

const Poster = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className="absolute"
      style={{
        left: 'calc(50vw - 37.3vw)',
        top: '29.8%',
        perspective: '1000px',
      }}
    >
      <div
        className="bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200"
        style={{
          width: '6.8vw',
          height: '16vw',
          transform: 'rotateY(25deg) rotateX(-4deg) skewY(6deg)',
        }}
      >
        <p>POSTER</p>
      </div>
    </div>
  );
};

export default Poster;
