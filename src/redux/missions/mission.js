const FETCH_MISSION_SUCCESS = 'space-travel/missions/mission';
const FETCH_MISSION_FAILURE = 'space-travel/missions/fetchFailure';

const initMissionState = {
  missions: [],
  loading: false,
  error: '',
};

export const fetchMission = () => ({
  type: FETCH_MISSION_SUCCESS,
  payload: {},
});

export default function reducer(state = initMissionState, action) {
  switch (action.type) {
    case FETCH_MISSION_SUCCESS:
      return {
        missions: action.payload,
        loading: false,
      };
    case FETCH_MISSION_FAILURE:
      return {
        error: 'Unable to load',
      };
    default:
      return {
        loading: false,
        missions: state.missions,
      };
  }
}
