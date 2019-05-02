import { ADD_LINE, CLEAR_LINES, LogsActionTypes } from './../types/logs'

export const addLineAction = (content: string): LogsActionTypes => ({
  type: ADD_LINE,
  payload: content
});

export const clearLinesAction = (): LogsActionTypes => ({
  type: CLEAR_LINES
});
