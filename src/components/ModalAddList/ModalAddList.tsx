import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal as M, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import { addColumn } from 'store/ducks/board';

import Modal from 'atoms/Modal';
import Input from 'atoms/Input';

interface ModalAddListProps {
  setShow: (show: boolean) => void;
  show: boolean;
}

const ModalAddList: React.FC<ModalAddListProps> = ({ show, setShow }) => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const setColumn = () => {
    if (!title) {
      return toast.warning('Por favor, digite um título!');
    }

    dispatch(addColumn({ title }));
    return setShow(false);
  };

  return (
    <Modal setShow={setShow} show={show} data-testid="modal-add-list">
      <M.Header closeButton>
        <M.Title>Adicione uma lista!</M.Title>
      </M.Header>
      <M.Body>
        <span>Título:</span>
        <Input
          placeholder="Escreva um título"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
      </M.Body>
      <M.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Fechar
        </Button>
        <Button variant="primary" onClick={() => setColumn()}>
          Criar
        </Button>
      </M.Footer>
    </Modal>
  );
};

export default ModalAddList;
