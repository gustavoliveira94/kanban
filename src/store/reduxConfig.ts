import { applyMiddleware, createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const combinedReducer = rootReducer;

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combinedReducer(state, action);
};

const store = () => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper(store);
