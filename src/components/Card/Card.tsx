import { Container } from './styles';

interface CardProps {
  title: string;
  tag: string;
}

const Card: React.FC<CardProps> = ({ title, tag }) => {
  return (
    <Container data-testid="card">
      <h3>{title}</h3>
      <p>{tag}</p>
    </Container>
  );
};

export default Card;
