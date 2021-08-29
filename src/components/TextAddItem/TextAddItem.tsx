import Plus from 'assets/icons/plus';

import { Container } from './styles';

interface AddItemProps {
  title: string;
  textColor: string;
  onClick: () => void;
}

const TextAddItem: React.FC<AddItemProps> = ({ title, textColor, onClick }) => {
  return (
    <Container data-testid="add-item" textColor={textColor} onClick={onClick}>
      <span>
        <Plus color={textColor} /> {title}
      </span>
    </Container>
  );
};

export default TextAddItem;
