import { render, within } from '@testing-library/react';

import Card from 'components/Card';
import Column from '../Column';

describe('Testing Component <Column />', () => {
  it('Check render props', () => {
    const { getByText, getByTestId } = render(
      <Column title="Done" color="#000">
        <>
          <Card title="Criar Board" tag="tag1" />
          <Card title="Criar Card" tag="tag2" />
        </>
      </Column>,
    );

    const column = getByTestId('column');
    const card = within(column).getAllByTestId('card').length;

    expect(getByText('Done')).toBeInTheDocument();
    expect(getByText('Criar Board')).toBeInTheDocument();
    expect(card).toBe(2);
    expect(getByTestId('column')).toHaveAttribute('color', '#000');
    expect(getByTestId('column')).toHaveStyle('background-color: #000');
  });
});
