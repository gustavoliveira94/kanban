import Plus from 'icons/plus';

import { Container } from './styles';

interface AddItemProps {
  title: string;
  textColor: string;
}

const AddItem: React.FC<AddItemProps> = ({ title, textColor }) => {
  return (
    <Container textColor={textColor}>
      <span>
        <Plus color={textColor} /> {title}
      </span>
    </Container>
  );
};

export default AddItem;
