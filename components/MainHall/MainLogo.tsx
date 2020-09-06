type Props = {
  onClick(): void;
};

const MainLogo = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className="absolute rounded-full flex items-center justify-center cursor-pointer bg-white opacity-0 hover:opacity-25"
      style={{
        left: 'calc(50vw - 7vw)',
        top: '11.5%',
        width: '13vw',
        height: '13vw',
      }}
    />
  );
};

export default MainLogo;
