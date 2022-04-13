import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionReducer, { fetchMissionSuccess } from './missions/mission';

import profileReducer from './profiles/profile';
import rocketReducer from './rockets/rockets';

const rootReducer = combineReducers({
  missionReducer,
  profileReducer,
  rockets: rocketReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.dispatch(fetchMissionSuccess());
export default store;
