import { Container } from './styles';

interface InputProps {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  id?: string;
}

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <Container {...rest} />;
};

export default Input;
