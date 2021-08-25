import { Row, Col } from 'react-bootstrap';

import Column from 'components/Column';
import Board from 'components/Board';
import Card from 'components/Card';

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
          <Board>
            <Column title="📝 To Do" color="#5CC4FF">
              <Card title="Criar Board" tag="tag1" />
            </Column>
            <Column title="💻 In Progress" color="#945AD1">
              <Card title="Criar Board" tag="tag1" />
            </Column>
            <Column title="🚀 Done" color="#59D090">
              <>
                <Card title="Criar Board" tag="tag1" />
                <Card title="Criar Board" tag="tag1" />
              </>
            </Column>
          </Board>
        </Col>
      </Row>
    </>
  );
};

export default Home;
