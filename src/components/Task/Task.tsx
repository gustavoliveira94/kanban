import { useDispatch } from 'react-redux';

import { removeTask } from 'store/ducks/board';

import { Container, Edit, Remove } from './styles';

interface CardProps {
  title: string;
  tag: string;
  color: string;
  idTask: string;
  idColumn: string;
}

const Task: React.FC<CardProps> = ({ idColumn, idTask, title, tag, color }) => {
  const dispatch = useDispatch();

  return (
    <Container data-testid="task" color={color}>
      <Edit>Mover</Edit>
      <Remove onClick={() => dispatch(removeTask({ idTask, idColumn }))}>
        Remover
      </Remove>
      <h3>{title}</h3>
      <p>{tag}</p>
    </Container>
  );
};

export default Task;
