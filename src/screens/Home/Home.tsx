import { Row, Col } from 'react-bootstrap';

import Column from 'components/Column';
import Kanbans from 'components/Kanbans';

import { Title } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Row>
        <Col>
          <Title>Kanban</Title>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Kanbans>
            <Column title="To Do" color="#5CC4FF">
              <p>Teste</p>
            </Column>
            <Column title="In Progress" color="#945AD1">
              <p>Teste</p>
            </Column>
            <Column title="Done" color="#59D090">
              <p>Teste</p>
            </Column>
          </Kanbans>
        </Col>
      </Row>
    </>
  );
};

export default Home;
