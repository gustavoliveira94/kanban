/* eslint-disable react/no-unescaped-entities */
import { Modal } from 'react-bootstrap';

interface ModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

const ModalAddItem: React.FC<ModalProps> = ({ children, show, setShow }) => {
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        {children}
      </Modal>
    </>
  );
};

export default ModalAddItem;
