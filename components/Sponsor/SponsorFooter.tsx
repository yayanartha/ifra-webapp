const SponsorFooter = () => {
  return (
    <div
      className="absolute left-0 bottom-0 bg-white h-32 w-screen flex px-2 py-4 flex-wrap"
      style={{ maxHeight: '130px' }}
    >
      {[...Array(40).keys()].map((s, i) => (
        <button
          key={i}
          className="bg-gray-400 flex items-center justify-center mx-2 mb-2"
          style={{ width: '50px', height: '30px' }}
        >
          <p className="text-xs text-gray-600">LOGO</p>
        </button>
      ))}
    </div>
  );
};

export default SponsorFooter;
