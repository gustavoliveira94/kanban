import { fireEvent } from '@testing-library/dom';

import renderWithRedux from 'tests/helper';

import ModalAddList from '../ModalAddList';

describe('Testing Component <ModalAddList />', () => {
  it('Component not render', () => {
    const { queryByTestId } = renderWithRedux(
      <ModalAddList show setShow={jest.fn()} />,
    );

    expect(queryByTestId('modal-add-list')).not.toBeInTheDocument();
  });

  it('Click buttons', () => {
    const { getByRole } = renderWithRedux(
      <ModalAddList show setShow={jest.fn()} />,
    );

    const saveOnClick = jest.fn();

    const buttonSave = getByRole('button', {
      name: /criar/i,
    });
    buttonSave.onclick = saveOnClick;

    const closeOnClick = jest.fn();

    const buttonClose = getByRole('button', {
      name: /fechar/i,
    });
    buttonClose.onclick = closeOnClick;

    fireEvent.click(buttonSave);
    fireEvent.click(buttonClose);

    expect(saveOnClick).toHaveBeenCalledTimes(1);
    expect(closeOnClick).toHaveBeenCalledTimes(1);
  });

  it('Typing input', () => {
    const { getByRole } = renderWithRedux(
      <ModalAddList show setShow={jest.fn()} />,
    );

    const input = getByRole('textbox');
    fireEvent.change(input, {
      target: { value: 'Adicionar Coluna' },
    });

    expect(input?.value).toBe('Adicionar Coluna');
  });
});
