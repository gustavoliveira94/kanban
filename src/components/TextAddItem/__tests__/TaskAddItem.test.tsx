import { render } from '@testing-library/react';

import TextAddItem from '../TextAddItem';

describe('Testing Component <TextAddItem />', () => {
  it('Check render props', () => {
    const { getByText } = render(
      <TextAddItem
        title="Criar task"
        textColor="#5CC4FF"
        onClick={jest.fn()}
      />,
    );

    expect(getByText('Criar task')).toBeInTheDocument();
    expect(getByText('Criar task')).toHaveStyle('color: #5CC4FF');
  });
});
