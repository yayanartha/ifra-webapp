import { ReactNode } from 'react';
import Modal from 'react-modal';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose(): void;
  backgroundColor?: string;
};

const ModalCenter = (props: Props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onClose}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: props.backgroundColor || 'rgba(0,0,0,0.75)',
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          borderWidth: 0,
          padding: 0,
          borderRadius: 0,
          backgroundColor: 'transparent',
        },
      }}
    >
      {props.children}
    </Modal>
  );
};

export default ModalCenter;
