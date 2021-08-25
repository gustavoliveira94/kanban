import { render, within } from '@testing-library/react';

import Task from 'components/Task';
import AddItem from 'components/AddItem';
import Column from '../Column';

describe('Testing Component <Column />', () => {
  it('Check render props', () => {
    const { getByText, getByTestId } = render(
      <Column title="Done" color="#000">
        <>
          <Task title="Criar Board" tag="tag1" />
          <Task title="Criar Card" tag="tag2" />
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
    const { getByText } = render(
      <Column
        title="Done"
        color="#000"
        addItem={<AddItem title="Adicionar outra lista" textColor="#212529" />}
      />,
    );

    expect(getByText('Adicionar outra lista')).toBeInTheDocument();
  });
});
