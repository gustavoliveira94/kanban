import renderWithRedux from 'tests/helper';

import Background from '../Background';

describe('Testing Component <Background />', () => {
  it('Render addItem custom', () => {
    const { getByText } = renderWithRedux(
      <Background>
        <p>Kanban</p>
      </Background>,
    );

    expect(getByText('Kanban')).toBeInTheDocument();
  });
});
