import { within } from '@testing-library/react';

import renderWithRedux from 'tests/helper';

import Task from 'components/Task';
import AddItem from 'components/TextAddItem';
import Column from '../Column';

describe('Testing Component <Column />', () => {
  it('Check render props', () => {
    const { getByText, getByTestId } = renderWithRedux(
      <Column
        title="Done"
        color="#000"
        addItem={
          <AddItem
            onClick={jest.fn()}
            title="Adicionar outro cartão"
            textColor="#212529"
          />
        }
      >
        <>
          <Task
            title="Criar Board"
            tag="tag1"
            color="#000"
            idColumn="1"
            idTask="1"
          />
          <Task
            title="Criar Card"
            tag="tag2"
            color="#000"
            idColumn="1"
            idTask="1"
          />
        </>
      </Column>,
    );

    const column = getByTestId('column');
    const card = within(column).getAllByTestId('task').length;

    expect(getByText('Done')).toBeInTheDocument();
    expect(getByText('Criar Board')).toBeInTheDocument();
    expect(getByText('Criar Board')).toBeInTheDocument();
    expect(getByText('Adicionar outro cartão')).toBeInTheDocument();
    expect(card).toBe(2);
    expect(getByTestId('column')).toHaveAttribute('color', '#000');
    expect(getByTestId('column')).toHaveStyle('background-color: #000');
  });

  it('Render addItem custom', () => {
    const { getByText } = renderWithRedux(
      <Column
        title="Done"
        color="#000"
        addItem={
          <AddItem
            onClick={jest.fn()}
            title="Adicionar outra lista"
            textColor="#212529"
          />
        }
      />,
    );

    expect(getByText('Adicionar outra lista')).toBeInTheDocument();
  });
});
