import Image from 'next/image';

import { Container, Title, NewCard } from './styles';

interface ColumnProps {
  color: string;
  title: string;
  children: JSX.Element;
}

const Column: React.FC<ColumnProps> = ({ children, color, title }) => {
  return (
    <Container color={color} data-testid="column">
      <Title>{title}</Title>
      {children}
      <NewCard>
        <span>
          <Image
            src="/icons/plus.svg"
            alt="adicionar cartão"
            width="14"
            height="14"
          />{' '}
          Adicionar outro cartão
        </span>
      </NewCard>
    </Container>
  );
};

export default Column;
