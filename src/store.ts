 import { createStore } from 'redux';

import { LogsActionTypes, ADD_LINE, CLEAR_LINES } from './types/logs';

export interface StateProps {
  lines: Array<string>
}

const defaultState: StateProps = {
  lines: []
};

function reducer(state = defaultState, action: LogsActionTypes): StateProps {
  switch (action.type) {
    case ADD_LINE:
      return {
        lines: [
          ...state.lines,
          action.payload
        ]
      };
    case CLEAR_LINES:
      return {
        lines: []
      };
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
