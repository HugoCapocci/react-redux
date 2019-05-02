import { ADD_LINE, CLEAR_LINES, LogsActionTypes } from './../types/logs';

export const addLine = (content: string): LogsActionTypes => ({
  type: ADD_LINE,
  payload: content
});

export const clearLines = (): LogsActionTypes => ({
  type: CLEAR_LINES
});
