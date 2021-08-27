import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import Column from 'components/Column';
import TextAddItem from 'components/TextAddItem';
import Board from 'atoms/Board';
import Card from 'components/Task';
import ModalAddList from 'components/ModalAddList';
import ModalAddTask from 'components/ModalAddTask';

import { boardReducer } from 'store/ducks/board';
import { AppState } from 'store/rootReducer';

import { Title } from './styles';

const Home: React.FC = () => {
  const [onAddList, setOnAddList] = useState(false);
  const [onAddTask, setOnAddTask] = useState({ show: false, idColumn: '' });

  const board = useSelector<AppState>((store) => store?.board) as boardReducer;
  const { columns } = board;

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
            {columns.length
              ? columns.map(({ title, color, id, cards }) => (
                  <Column
                    title={title}
                    color={color}
                    key={id}
                    addItem={
                      <TextAddItem
                        onClick={() =>
                          setOnAddTask({ show: !onAddTask.show, idColumn: id })
                        }
                        title="Adicionar outro cartão"
                        textColor="#fff"
                      />
                    }
                  >
                    {cards.length
                      ? cards.map((card) => (
                          <Card
                            idColumn={id}
                            idTask={card.id}
                            title={card.title}
                            tag={card.tag}
                            color={color}
                            key={card.id}
                          />
                        ))
                      : null}
                  </Column>
                ))
              : null}
            <Column
              title=""
              color="rgba(0, 0, 0, 0.1)"
              addItem={
                <TextAddItem
                  onClick={() => setOnAddList(!onAddList)}
                  title="Adicionar outra lista"
                  textColor="#212529"
                />
              }
            />
          </Board>
        </Col>
      </Row>
      <ModalAddList show={onAddList} setShow={() => setOnAddList(!onAddList)} />
      <ModalAddTask
        show={onAddTask}
        setShow={() => setOnAddTask({ show: !onAddTask.show, idColumn: '' })}
      />
    </>
  );
};

export default Home;
