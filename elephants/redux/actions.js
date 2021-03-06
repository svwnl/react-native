// action types
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS'
export const UPDATE_ELEPHANT = 'UPDATE_ELEPHANT'

// action creators
export const updateSettings = update => ({
  type: UPDATE_SETTINGS,
  payload: update,
});

export const addElephant = newElephant => ({
  type: UPDATE_ELEPHANT,
  payload: newElephant,
});
