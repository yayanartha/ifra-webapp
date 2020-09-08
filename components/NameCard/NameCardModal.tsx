import React from 'react';
import Modal from 'react-modal';

export default (props: { isOpen: boolean; onRequestClose(): void }) => {
  return (
    <Modal isOpen={props.isOpen} onRequestClose={props.onRequestClose} style={customStyles}>
      <NameCardContentModal />
    </Modal>
  );
};

export const NameCardContentModal = () => (
  <div className="flex h-full justify-center items-center">
    <div className="flex-1 bg-white p-8">
      <h1 className="text-blue-800 font-bold text-xl">Name Card</h1>
      <div className="grid grid-cols-3 gap-8 mt-8">
        <div>
          <div className="mb-6">
            <p className="text-blue-800 font-semibold text-xs mb-2">Company Name</p>
            <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
          </div>
          <div className="mb-6">
            <p className="text-blue-800 font-semibold text-xs mb-2">Name</p>
            <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
          </div>
          <div className="mb-6">
            <p className="text-blue-800 font-semibold text-xs mb-2">Company Address</p>
            <p className="text-xs font-light">
              {
                'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
              }
            </p>
          </div>
          <div className="mb-6">
            <p className="text-blue-800 font-semibold text-xs mb-2">Position</p>
            <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
          </div>
          <div className="mb-6">
            <p className="text-blue-800 font-semibold text-xs mb-2">Mobile Phone</p>
            <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
          </div>
          <div className="mb-6">
            <p className="text-blue-800 font-semibold text-xs mb-2">Telephone</p>
            <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
          </div>
          <div className="mb-6">
            <p className="text-blue-800 font-semibold text-xs mb-2">Fax</p>
            <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <p className="text-blue-800 font-semibold text-xs mb-2">Email</p>
            <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
          </div>
          <div className="mb-6">
            <p className="text-blue-800 font-semibold text-xs mb-2">Website</p>
            <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
          </div>
          <div className="mb-6">
            <p className="text-blue-800 font-semibold text-xs mb-2">Country</p>
            <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
          </div>
          <div className="mb-6">
            <p className="text-blue-800 font-semibold text-xs mb-2">Postal Code</p>
            <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
          </div>
          <div className="mb-6">
            <p className="text-blue-800 font-semibold text-xs mb-2">Scope of Business</p>
            <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
          </div>
          <div className="mb-6">
            <p className="text-blue-800 font-semibold text-xs mb-2">Purpose to Visit</p>
            <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
          </div>
          <div className="mb-6">
            <p className="text-blue-800 font-semibold text-xs mb-2">Last Expo Visit</p>
            <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
          </div>
          <div className="mb-6">
            <p className="text-blue-800 font-semibold text-xs mb-2">Know IFRA from</p>
            <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <p className="text-blue-800 font-semibold text-xs mb-2">Investment Range</p>
            <p className="text-xs font-light">{'Lorem ipsum dolor sit amet.'}</p>
          </div>

          <img
            src="https://www.fs.usda.gov/research/people/ritsdocs/drlederle.jpg"
            className="w-full"
          />

          <button
            className="focus:outline-none cursor-pointer bg-blue-600 shadow-md h-10 w-56 text-white flex items-center justify-center font-light mx-auto mt-20"
            onClick={() => {}}
          >
            Send to Email
          </button>
        </div>
      </div>
    </div>
  </div>
);

const customStyles: Modal.Styles = {
  content: {
    width: '70%',
    margin: 'auto',
    background: 'transparent',
    borderColor: 'transparent',
    borderWidth: '0',
  },
  overlay: {
    background: '#000000cc',
  },
};
