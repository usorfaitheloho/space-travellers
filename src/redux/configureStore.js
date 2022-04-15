import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import missionReducer from './missions/mission';

import profileReducer from './profiles/profile';
import rocketReducer from './rockets/rockets';
import dragonsReducer, { getDragons } from './Dragons/dragons';

const rootReducer = combineReducers({
  missionReducer,
  profileReducer,
  rockets: rocketReducer,
  dragons: dragonsReducer,
});

// store.dispatch(fetchMissionSuccess());
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger, thunk),
  ),

);
store.dispatch(rocketReducer);
store.dispatch(getDragons());
export default store;
