import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionReducer from './missions/mission';
import profileReducer from './profiles/profile';
import rocketReducer from './rockets/rocket';

const rootReducer = combineReducers({
  missionReducer,
  profileReducer,
  rocketReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
