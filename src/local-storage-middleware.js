export const saveStore = (state) => {
  const stateAsJSON = JSON.stringify();
  localStorage.setItem('state', stateAsJSON);
}

export const loadStore = () => {
  const stateAsJSON = localStorage.getItem('state');
  return stateAsJSON ? JSON.parse(stateAsJSON) : null;
}
