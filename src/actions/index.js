export const addLine = (content) => ({
  type: 'ADD_LINE',
  payload: { content }
})

export const clearLines = () => ({
  type: 'CLEAR_LINES'
});
