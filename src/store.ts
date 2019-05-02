    
import { createStore } from 'redux';

const defaultState = {
  lines: []
};

function reducer(state = defaultState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(
    reducer,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
