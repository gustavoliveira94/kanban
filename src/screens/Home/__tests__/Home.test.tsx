import renderWithRedux from 'tests/helper';

import Home from '../Home';

describe('Testing Component <Home />', () => {
  it('Check render props', () => {
    const { getAllByTestId } = renderWithRedux(<Home />);

    const column = getAllByTestId('column');

    expect(column.length).toBe(4);
  });
});
