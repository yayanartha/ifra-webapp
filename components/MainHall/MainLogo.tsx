type Props = {
  onClick(): void;
};

const MainLogo = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className="absolute rounded-full flex items-center justify-center cursor-pointer bg-white opacity-0 hover:opacity-25"
      style={{
        left: 'calc(50vw - 6.1vw)',
        top: '8.1%',
        width: '11vw',
        height: '11vw',
      }}
    />
  );
};

export default MainLogo;
