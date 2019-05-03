export const ADD_LINE ='ADD_LINE';
export const CLEAR_LINES = 'CLEAR_LINES';

interface AddLineAction {
  type: typeof ADD_LINE;
  payload: string; 
}

interface ClearLinesAction {
  type: typeof CLEAR_LINES;
}

export type LogsActionTypes = 
  AddLineAction |
  ClearLinesAction;
