import { createStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import { DispatchAction } from 'models/Store.interface';

import rootReducer, { AppState } from './rootReducer';

const combinedReducer = rootReducer;

const reducer = (state: AppState, action: DispatchAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combinedReducer(state, action);
};

const store = () => createStore<AppState, DispatchAction, any, any>(reducer);

export const wrapper = createWrapper(store);
