import { Container as Content } from 'react-bootstrap';

import { Container } from './styles';

const Background: React.FC = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Background;
