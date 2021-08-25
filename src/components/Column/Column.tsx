import Card from 'components/Card';
import AddItem from 'components/AddItem';

import { Title } from './styles';

interface ColumnProps {
  color: string;
  title: string;
  addItem?: JSX.Element;
}

const Column: React.FC<ColumnProps> = ({
  children,
  color,
  title,
  addItem = <AddItem title="Adicionar outro cartão" textColor="#fff" />,
}) => {
  return (
    <Card color={color} data-testid="column">
      {title && <Title>{title}</Title>}
      {children}
      {addItem}
    </Card>
  );
};

export default Column;
