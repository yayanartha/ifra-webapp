type Props = {
  onClick(dayNo: number): void;
};

const Agenda = (props: Props) => {
  return (
    <div
      className="absolute"
      style={{
        left: 'calc(50vw + 24.5vw)',
        top: '21.5%',
        perspective: '1000px',
      }}
    >
      <div
        className="flex items-center justify-around"
        style={{
          width: '15vw',
          height: '7.2vw',
          transform: 'rotateY(-40deg) rotateX(-2deg) skewY(-10deg)',
          paddingTop: '10%',
          paddingLeft: '0.2vw',
        }}
      >
        <div
          onClick={() => props.onClick(1)}
          className="cursor-pointer hover:bg-gray-200 opacity-25"
          style={{ width: '4vw', height: '4.5vw' }}
        />

        <div
          onClick={() => props.onClick(2)}
          className="cursor-pointer hover:bg-gray-200 opacity-25"
          style={{ width: '4vw', height: '4.5vw' }}
        />

        <div
          onClick={() => props.onClick(3)}
          className="cursor-pointer hover:bg-gray-200 opacity-25"
          style={{ width: '4vw', height: '4.5vw' }}
        />
      </div>
    </div>
  );
};

export default Agenda;
