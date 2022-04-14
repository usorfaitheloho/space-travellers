import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionReducer, { fetchMissionSuccess } from './missions/mission';

import profileReducer from './profiles/profile';
import rocketReducer from './rockets/rockets';
import dragonsReducer from './Dragons/dragons';

const rootReducer = combineReducers({
  missionReducer,
  profileReducer,
  rockets: rocketReducer,
  dragons:dragonsReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.dispatch(fetchMissionSuccess());
store.dispatch(rocketReducer);
export default store;
