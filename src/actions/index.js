export const addLine = (content) => ({
  type: 'ADD_LINE',
  payload: { content }
})

export const clearLines = () => ({
  type: 'CLEAR_LINES'
});

export const addUser = () => {
  return {
    type: 'USER',
    payload: {name: 'Bob' }
  }
}

export const fetchUser = () => {
  return (dispatch) => {
    return fetch('./user-data.json')
    .then((response) => response.json())
    .then(user => {
      dispatch(addUser(user));
    });
  }
}
