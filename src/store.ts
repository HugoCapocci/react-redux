import { combineReducers, createStore } from 'redux';

import { logsReducers } from './reducers/logs-reducers';

const rootReducer = combineReducers({
  logs: logsReducers
});

export type ReduxState = ReturnType<typeof rootReducer>;

const saveStore = (state: ReduxState) => {
  const stateAsJSON = JSON.stringify(state);
  localStorage.setItem('state', stateAsJSON);
};

const loadStore = () => {
  const stateFromStorage = localStorage.getItem('state');
  return stateFromStorage ? JSON.parse(stateFromStorage) : {};
};

const store = createStore(
  rootReducer,
  loadStore(),
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveStore(store.getState());
});

export default store;
