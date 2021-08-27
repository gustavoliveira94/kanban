import renderWithRedux from 'tests/helper';

import Task from '../Task';

describe('Testing Component <Task />', () => {
  it('Check render props', () => {
    jest.mock('react-redux', () => ({
      useDispatch: () => jest.fn(),
    }));

    const { getByText } = renderWithRedux(
      <Task
        idColumn="1"
        idTask="1"
        title="Criar Board"
        tag="tag1"
        color="#5CC4FF"
      />,
    );

    expect(getByText('tag1')).toBeInTheDocument();
    expect(getByText('Criar Board')).toBeInTheDocument();
  });
});
