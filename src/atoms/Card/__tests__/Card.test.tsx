import renderWithRedux from 'tests/helper';

import Card from '../Card';

describe('Testing Component <Card />', () => {
  it('Component render', () => {
    const { getByText, getByTestId } = renderWithRedux(
      <Card color="#000" data-testid="card">
        <p>Children</p>
      </Card>,
    );

    expect(getByText('Children')).toBeInTheDocument();
    expect(getByTestId('card')).toHaveStyle('background-color: #000');
  });
});
