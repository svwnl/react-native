import {combineReducers} from 'redux'

import {UPDATE_SETTINGS, UPDATE_ELEPHANT} from './actions'

const merge = (prev, next) => Object.assign({}, prev, next);

const elephantReducer = (state = [], action) => {
  if (action.type === UPDATE_ELEPHANT) return [...state, action.payload];
  return state
};

const settingsReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return merge(state, action.payload);
    case UPDATE_ELEPHANT:
      return merge(state, {prevContact: action.payload});
    default:
      return state
  }
};

const reducer = combineReducers({
  settings: settingsReducer,
  elephants: elephantReducer,
});

export default reducer
