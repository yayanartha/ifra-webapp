import PrimaryButton from './PrimaryButton';

const ImageViewer = () => {
  return (
    <div className="bg-white p-5" style={{ width: '1080px', height: '615px' }}>
      <div className="flex">
        <div className="flex flex-col w-8/12">
          <div style={{ height: '450px' }}>
            <img src="/brochure-1.png" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col flex-1 pt-4">
            <div className="flex items-end">
              <img src="/brochure-1.png" className="w-40 h-full object-cover opacity-50" />
              <div className="w-4" />
              <img src="/brochure-1.png" className="w-40 h-full object-cover opacity-50" />
              <div className="w-4" />
              <img src="/brochure-1.png" className="w-40 h-full object-cover opacity-50" />
              <div className="w-4" />
              <img src="/brochure-1.png" className="w-40 h-full object-cover opacity-50" />
            </div>
          </div>
        </div>

        <div className="w-4/12 pl-8">
          <p className="brochure-title mb-5">Album Jakarta</p>

          <p className="brochure-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="absolute flex items-center" style={{ right: '50px', bottom: '24px' }}>
            <PrimaryButton onClick={() => {}} label="Simpan" width="250px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
