type Props = {
  onClick(): void;
};

const XBanner = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className="absolute"
      style={{
        left: 'calc(50vw - 31.1vw)',
        top: '64%',
        perspective: '1000px',
      }}
    >
      <div
        className="bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200"
        style={{
          width: '17.7vw',
          height: '5.6vw',
          transform: 'rotateY(20deg) ',
        }}
      >
        <p>X-BANNER</p>
      </div>
    </div>
  );
};

export default XBanner;
