import { useDispatch, useSelector } from 'react-redux';

import {
  boardReducer,
  removeTask,
  moveTask as moveCard,
} from 'store/ducks/board';
import { AppState } from 'store/rootReducer';

import { Container, Edit, Remove } from './styles';

interface CardProps {
  title: string;
  tag: string;
  color: string;
  idTask: string;
  idColumn: string;
}

const Task: React.FC<CardProps> = ({ idColumn, idTask, title, tag, color }) => {
  const board = useSelector<AppState>((store) => store?.board) as boardReducer;
  const dispatch = useDispatch();

  const { columns } = board;

  const moveTask = (id: string) => {
    const defaultValue = 'Mover';

    if (id === idColumn || id === defaultValue) {
      return;
    }

    dispatch(moveCard({ idColumn: id, idTask }));
    dispatch(removeTask({ idTask, idColumn }));
  };

  return (
    <Container data-testid="task" color={color}>
      <Edit onChange={(e) => moveTask(e.target.value)}>
        <option>Mover</option>
        {columns.map((column) => (
          <option key={column.id} value={column.id}>
            {column.title}
          </option>
        ))}
      </Edit>
      <Remove onClick={() => dispatch(removeTask({ idTask, idColumn }))}>
        Remover
      </Remove>
      <h3>{title}</h3>
      <p>{tag}</p>
    </Container>
  );
};

export default Task;
