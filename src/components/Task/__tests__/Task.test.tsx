import { render } from '@testing-library/react';

import Task from '../Task';

describe('Testing Component <Card />', () => {
  it('Check render props', () => {
    const { getByText } = render(
      <Task title="Criar Board" tag="tag1" color="#5CC4FF" />,
    );

    expect(getByText('tag1')).toBeInTheDocument();
    expect(getByText('Criar Board')).toBeInTheDocument();
  });
});
