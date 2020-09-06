type Props = {
  onClick(): void;
};

const SponsorFooter = (props: Props) => {
  return (
    <div
      className="absolute left-0 bottom-0 bg-white h-32 w-screen flex px-2 py-4 flex-wrap"
      style={{ maxHeight: '130px' }}
    >
      {Array.from({ length: 40 }, (s, i) => (
        <button
          onClick={props.onClick}
          key={i}
          className="bg-gray-200 flex items-center justify-center mx-2 mb-2 hover:bg-gray-300 focus:outline-none"
          style={{ width: '50px', height: '30px' }}
        >
          <p className="text-xs text-gray-500">LOGO</p>
        </button>
      ))}
    </div>
  );
};

export default SponsorFooter;
