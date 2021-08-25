import { Container } from './styles';

interface CardProps {
  title: string;
  tag: string;
}

const Task: React.FC<CardProps> = ({ title, tag }) => {
  return (
    <Container data-testid="task">
      <h3>{title}</h3>
      <p>{tag}</p>
    </Container>
  );
};

export default Task;
