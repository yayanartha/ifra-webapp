import PrimaryButton from '@components/common/PrimaryButton';
import React from 'react';
import Modal from 'react-modal';

interface ModalTNCProps {
  isShow: boolean;
  onCloseModal(): void;
}

const ModalTNC = (props: ModalTNCProps) => {
  return (
    <Modal isOpen={props.isShow} onRequestClose={props.onCloseModal} style={customStyles}>
      <div className="bg-white p-8">
        <h1 className="text-2xl font-semibold font-body text-text">Terms & Condition</h1>
        <p className="mt-6 text-xs font-body text-text">
          Dyandra Promosindo will use your personal information provided during the registration
          process to host and manage this digital event and for analyzing visitor traffic with a
          view to improving the event experience for visitors.
        </p>
        <p className="mt-6 text-xs font-body text-text">
          On registration you may have chosen to withhold permission to share your data with third
          parties (i.e. sponsors & exhibitors) upon registration, however when entering a virtual
          exhibition booth your personal information will be shared with the exhibitor to allow them
          to engage with you. If you accept a connection or meeting invite, then your full contact
          details will be shared directly with another attendee, sponsor or exhibitor and they may
          follow-up and use your details for marketing purposes.
        </p>
      </div>

      <div className="flex justify-center items-center mt-12">
        <PrimaryButton onClick={props.onCloseModal} label="Explore Event" width="200px" />
      </div>
    </Modal>
  );
};

const customStyles: Modal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'transparent',
    borderColor: 'transparent',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  overlay: {
    background: '#000000cc',
  },
};

export default ModalTNC;
