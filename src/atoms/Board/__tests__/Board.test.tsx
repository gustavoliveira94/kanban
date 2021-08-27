import renderWithRedux from 'tests/helper';

import Board from '../Board';

describe('Testing Component <Board />', () => {
  it('Component render', () => {
    const { getByText } = renderWithRedux(
      <Board>
        <p>Children</p>
      </Board>,
    );

    expect(getByText('Children')).toBeInTheDocument();
  });
});
