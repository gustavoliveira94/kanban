/* eslint-disable react/no-unescaped-entities */
import { Modal } from 'react-bootstrap';

interface ModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

const ModalAddItem: React.FC<ModalProps> = ({ children, show, setShow }) => {
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} data-testid="modal">
        {children}
      </Modal>
    </>
  );
};

export default ModalAddItem;
