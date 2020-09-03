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
        <h1 className="text-2xl font-semibold text-gray-600">Terms & Condition</h1>
        <p className="mt-6 text-xs text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Eget nunc lobortis mattis aliquam faucibus purus in
          massa. Ornare arcu odio ut sem. Tincidunt lobortis feugiat vivamus at augue. Nam libero
          justo laoreet sit amet cursus sit. Arcu non sodales neque sodales ut. Mauris pharetra et
          ultrices neque ornare aenean euismod. Neque laoreet suspendisse interdum consectetur
          libero. Nunc faucibus a pellentesque sit amet porttitor. Blandit massa enim nec dui nunc
          mattis enim ut. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. At
          urna condimentum mattis pellentesque id nibh tortor. Magna sit amet purus gravida quis
          blandit turpis cursus. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Nunc
          sed blandit libero volutpat. Semper eget duis at tellus at urna condimentum mattis.
          <br />
          <br />
          Pretium vulputate sapien nec sagittis aliquam malesuada. Lectus urna duis convallis
          convallis tellus id interdum velit laoreet. Venenatis urna cursus eget nunc scelerisque
          viverra. Lorem ipsum dolor sit amet. Et netus et malesuada fames ac turpis. Nulla facilisi
          nullam vehicula ipsum a. Neque vitae tempus quam pellentesque nec nam. Ultricies mi quis
          hendrerit dolor magna eget est lorem ipsum. Pellentesque dignissim enim sit amet venenatis
          urna cursus eget. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Ut faucibus
          pulvinar elementum integer. Neque aliquam vestibulum morbi blandit cursus risus at
          ultrices. Sollicitudin nibh sit amet commodo nulla. In mollis nunc sed id semper risus in
          hendrerit gravida. Felis donec et odio pellentesque diam volutpat commodo.
        </p>
      </div>

      <div className="flex justify-center items-center mt-12">
        <PrimaryButton onClick={props.onCloseModal} label="Explore Event" />
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
