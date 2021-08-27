import { fireEvent } from '@testing-library/dom';

import renderWithRedux from 'tests/helper';

import Input from '../Input';

describe('Testing Component <Input />', () => {
  it('Typing input', () => {
    const { getByRole } = renderWithRedux(
      <Input placeholder="Digite um título!" onChange={jest.fn()} />,
    );

    const input = getByRole('textbox');
    fireEvent.change(input, {
      target: { value: 'Adicionar tarefa' },
    });

    expect(input?.value).toBe('Adicionar tarefa');
  });
});
