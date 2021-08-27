import renderWithRedux from 'tests/helper';

import Home from '../Home';

describe('Testing Component <Home />', () => {
  it('Check render props', () => {
    const { getAllByTestId } = renderWithRedux(<Home />, {
      columns: [{ id: '1', color: '#000', title: 'Teste' }],
    });

    const column = getAllByTestId('column');

    expect(column.length).toBe(4);
  });
});
