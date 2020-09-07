type Props = {
  onClick(): void;
};

const SponsorFooter = (props: Props) => {
  return (
    <div className="fixed left-0 bottom-0 w-screen flex" style={{ padding: '0px 25px 0px 10px' }}>
      <div className="flex flex-1 bg-white px-2 py-4 flex-wrap" style={{ height: '93px' }}>
        {Array.from({ length: 15 }, (s, i) => (
          <button
            onClick={props.onClick}
            key={i}
            className="bg-gray-200 flex items-center justify-center mx-2 mb-2 hover:bg-gray-300 focus:outline-none"
            style={{ width: '70px', height: '30px' }}
          >
            <p className="text-xs text-gray-500">LOGO</p>
          </button>
        ))}
      </div>

      <div style={{ width: '10px' }} />

      <div className="flex flex-1 bg-white px-2 py-4 flex-wrap" style={{ height: '93px' }}>
        {Array.from({ length: 15 }, (s, i) => (
          <button
            onClick={props.onClick}
            key={i}
            className="bg-gray-200 flex items-center justify-center mx-2 mb-2 hover:bg-gray-300 focus:outline-none"
            style={{ width: '70px', height: '30px' }}
          >
            <p className="text-xs text-gray-500">LOGO</p>
          </button>
        ))}
      </div>

      <div style={{ width: '10px' }} />

      <div className="flex flex-1 bg-white px-2 py-4 flex-wrap" style={{ height: '93px' }}>
        {Array.from({ length: 15 }, (s, i) => (
          <button
            onClick={props.onClick}
            key={i}
            className="bg-gray-200 flex items-center justify-center mx-2 mb-2 hover:bg-gray-300 focus:outline-none"
            style={{ width: '70px', height: '30px' }}
          >
            <p className="text-xs text-gray-500">LOGO</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SponsorFooter;
