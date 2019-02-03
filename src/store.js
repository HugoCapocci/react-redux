import { createStore } from 'redux';

const defaultState = {
  lines: []
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
