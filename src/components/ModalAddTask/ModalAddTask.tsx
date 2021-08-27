import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal as M, Button } from 'react-bootstrap';

import Modal from 'atoms/Modal';
import Input from 'atoms/Input';

import { addTask } from 'store/ducks/board';

import { Body } from './styles';

interface IsetShow {
  show: boolean;
  idColumn: string;
}

interface ModalAddListProps {
  setShow: ({ show, idColumn }: IsetShow) => void;
  show: {
    show: boolean;
    idColumn: string;
  };
}

const ModalAddList: React.FC<ModalAddListProps> = ({ show, setShow }) => {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');

  const dispatch = useDispatch();

  const setTask = () => {
    dispatch(addTask({ title, tag, idColumn: show.idColumn }));
    setShow({ show: false, idColumn: '' });
  };

  return (
    <Modal
      show={show.show}
      setShow={() => setShow({ show: false, idColumn: '' })}
    >
      <M.Header closeButton>
        <M.Title>Adicione um cartão!</M.Title>
      </M.Header>
      <Body>
        <span>Título:</span>
        <Input
          id="title"
          placeholder="Escreva um título"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <span>Tag:</span>
        <Input
          id="tag"
          placeholder="Escreva uma tag"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTag(e.target.value)
          }
        />
      </Body>
      <M.Footer>
        <Button
          variant="secondary"
          onClick={() => setShow({ show: false, idColumn: '' })}
        >
          Fechar
        </Button>
        <Button variant="primary" onClick={() => setTask()}>
          Salvar
        </Button>
      </M.Footer>
    </Modal>
  );
};

export default ModalAddList;
