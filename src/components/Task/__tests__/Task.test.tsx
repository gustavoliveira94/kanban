import { fireEvent } from '@testing-library/react';

import renderWithRedux from 'tests/helper';

import Task from '../Task';

describe('Testing Component <Task />', () => {
  it('Check render props', () => {
    const { getByText, getByRole } = renderWithRedux(
      <Task
        idColumn="1"
        idTask="1"
        title="Criar Board"
        tag="tag1"
        color="#5CC4FF"
      />,
    );

    const buttonRemove = getByRole('button', {
      name: /remover/i,
    });

    const onClick = jest.fn();
    buttonRemove.onclick = onClick;

    expect(getByText('tag1')).toBeInTheDocument();
    expect(getByText('Criar Board')).toBeInTheDocument();
  });

  it('Click button remove', () => {
    const { getByRole } = renderWithRedux(
      <Task
        idColumn="1"
        idTask="1"
        title="Criar Board"
        tag="tag1"
        color="#5CC4FF"
      />,
    );

    const buttonRemove = getByRole('button', {
      name: /remover/i,
    });

    const onClick = jest.fn();
    buttonRemove.onclick = onClick;

    fireEvent.click(buttonRemove);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
