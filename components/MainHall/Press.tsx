type Props = {
  onClick(): void;
};

const Press = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className="absolute"
      style={{
        left: 'calc(50vw + 28.8vw)',
        top: '64.7%',
        perspective: '1000px',
      }}
    >
      <div
        className="hover:bg-white opacity-25 flex items-center justify-center cursor-pointer"
        style={{
          width: '9.8vw',
          height: '6.8vw',
          transform: 'rotateY(-40deg) skewY(1deg) skewX(2deg)',
        }}
      />
    </div>
  );
};

export default Press;
