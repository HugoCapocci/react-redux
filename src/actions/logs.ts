import { ADD_LINE, CLEAR_LINES, LogsActionTypes } from '../types/logs';

export const addLine = (content: string): LogsActionTypes => {
  return {
    type: ADD_LINE,
    payload: content
  };
}

export const clearLines = (): LogsActionTypes => {
  return {
    type: CLEAR_LINES
  };
}
