import { Container } from './styles';

interface CardProps {
  color: string;
}

const Card: React.FC<CardProps> = ({ children, color, ...rest }) => {
  return (
    <Container color={color} {...rest}>
      {children}
    </Container>
  );
};

export default Card;
