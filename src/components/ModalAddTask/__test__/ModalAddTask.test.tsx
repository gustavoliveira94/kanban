import { fireEvent } from '@testing-library/dom';

import renderWithRedux from 'tests/helper';

import ModalAddTask from '../ModalAddTask';

describe('Testing Component <ModalAddTask />', () => {
  it('Component not render', () => {
    const { queryByTestId } = renderWithRedux(
      <ModalAddTask show={{ show: false, idColumn: '' }} setShow={jest.fn()} />,
    );

    expect(queryByTestId('modal-add-task')).not.toBeInTheDocument();
  });

  it('Click buttons', () => {
    const { getByRole } = renderWithRedux(
      <ModalAddTask show={{ show: true, idColumn: '1' }} setShow={jest.fn()} />,
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
    const { getAllByRole } = renderWithRedux(
      <ModalAddTask show={{ show: true, idColumn: '1' }} setShow={jest.fn()} />,
    );

    const inputTitle = getAllByRole('textbox')[0];
    fireEvent.change(inputTitle, {
      target: { value: 'Adicionar tarefa' },
    });

    const inputTag = getAllByRole('textbox')[1];
    fireEvent.change(inputTag, {
      target: { value: 'Tag1' },
    });

    expect(inputTitle?.value).toBe('Adicionar tarefa');
    expect(inputTag?.value).toBe('Tag1');
  });
});
