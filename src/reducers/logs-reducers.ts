import { LogsActionTypes, ADD_LINE, CLEAR_LINES } from '../types/logs'; 

export interface ReduxLogState {
  lines: string[];
}

const defaultState: ReduxLogState = {
  lines: []
}

export const logsReducers = (state = defaultState, action: LogsActionTypes) => {
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
};
