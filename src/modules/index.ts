import { combineReducers } from 'redux';
import calc from './calc';
import picking from './picking';

const rootReducer = combineReducers({ calc, picking });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
