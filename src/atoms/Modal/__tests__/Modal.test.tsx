import renderWithRedux from 'tests/helper';

import Modal from '../Modal';

describe('Testing Component <Modal />', () => {
  it('Component render', () => {
    const { getByTestId } = renderWithRedux(<Modal show setShow={jest.fn()} />);

    expect(getByTestId('modal')).toBeInTheDocument();
  });

  it('Component not render', () => {
    const { queryByTestId } = renderWithRedux(
      <Modal show={false} setShow={jest.fn()} />,
    );

    expect(queryByTestId('modal')).not.toBeInTheDocument();
  });
});
