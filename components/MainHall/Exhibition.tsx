type Props = {
  onClick(): void;
};

const Exhibition = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className="absolute cursor-pointer hover:bg-white opacity-25"
      style={{ left: 'calc(50vw - 6.2vw)', top: '65.5%', width: '11.3vw', height: '5.7vw' }}
    />
  );
};

export default Exhibition;
