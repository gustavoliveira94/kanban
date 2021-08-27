import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';

import { reducer } from 'store';

import { GlobalStyles } from 'styles/globals';

const renderWithRedux = (
  component: JSX.Element,
  { initialState, store = createStore(reducer, initialState) }: any = {},
) => {
  jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn(),
  }));

  return {
    ...render(
      <>
        <Provider store={store}>{component}</Provider>
        <GlobalStyles />
      </>,
    ),
  };
};

export default renderWithRedux;
