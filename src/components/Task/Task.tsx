import { Container } from './styles';

interface CardProps {
  title: string;
  tag: string;
  color: string;
}

const Task: React.FC<CardProps> = ({ title, tag, color }) => {
  return (
    <Container data-testid="task" color={color}>
      <h3>{title}</h3>
      <p>{tag}</p>
    </Container>
  );
};

export default Task;
