import { Container, Title } from './styles';

interface ColumnProps {
  color: string;
  title: string;
  children: JSX.Element;
}

const Column: React.FC<ColumnProps> = ({ children, color, title }) => {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default Column;
