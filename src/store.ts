import { createStore } from 'redux';

import { LogsActionTypes, ADD_LINE, CLEAR_LINES } from './types/logs'; 

export interface ReduxState {
  lines: string[];
}

const defaultState: ReduxState = {
  lines: []
}

function reducer(state = defaultState, action: LogsActionTypes) {
  switch(action.type) {
    case ADD_LINE:
      return {
        lines: [
          ...state.lines,
          action.payload
        ]
      }
    case CLEAR_LINES:
      return defaultState;
    default: 
      return state;
  }
}

const saveStore = (state: ReduxState) => {
  const stateAsJSON = JSON.stringify(state);
  localStorage.setItem('state', stateAsJSON);
};

const loadStore = () => {
  const stateFromStorage = localStorage.getItem('state');
  return stateFromStorage ? JSON.parse(stateFromStorage) : null;
};

const store = createStore(
  reducer,
  loadStore(),
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveStore(store.getState());
});

export default store;
