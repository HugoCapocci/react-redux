import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';

const defaultState = {
  lines: []
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_LINE':
      return {
        ...state,
        lines: [
          ...state.lines,
          action.payload
        ]
      };
    case 'CLEAR_LINES':
      return {
        ...state,
        lines: []
      };
    case 'USER':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}

const loadStore = () => {
  const stateAsJSON = localStorage.getItem('state');
  return stateAsJSON ? JSON.parse(stateAsJSON) : defaultState;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  loadStore(),
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

const saveStore = (state) => {
  const stateAsJSON = JSON.stringify(state);
  localStorage.setItem('state', stateAsJSON);
};

store.subscribe(() => {
  saveStore(store.getState());
});

export default store;
