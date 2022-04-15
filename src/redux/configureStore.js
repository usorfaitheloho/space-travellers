import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import missionReducer, { fetchMissionSuccess } from './missions/mission';

import profileReducer from './profiles/profile';
import rocketReducer from './rockets/rockets';

const rootReducer = combineReducers({
  missionReducer,
  profileReducer,
  rockets: rocketReducer,
});

// store.dispatch(fetchMissionSuccess());
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger, thunk),
  ),

);
store.dispatch(rocketReducer);
export default store;
