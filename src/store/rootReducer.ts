import { combineReducers } from 'redux';

import board from './ducks/board';

const rootReducer = combineReducers({
  board,
});

export type AppState = ReturnType<typeof rootReducer> | undefined;

export default rootReducer;
