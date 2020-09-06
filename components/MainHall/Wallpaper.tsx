type Props = {
  onClick(): void;
};

const Wallpaper = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className="absolute"
      style={{
        left: 'calc(50vw + 12vw)',
        top: '63.1%',
        perspective: '1000px',
      }}
    >
      <div
        className="bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200"
        style={{
          width: '8.6vw',
          height: '6.65vw',
          transform: 'rotateY(-20deg) ',
        }}
      >
        <p>WALLPAPER</p>
      </div>
    </div>
  );
};

export default Wallpaper;
