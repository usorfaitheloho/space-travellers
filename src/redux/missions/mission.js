import axios from 'axios';

const FETCH_MISSION_SUCCESS = 'space-travel/missions/mission';
const FETCH_MISSION_FAILURE = 'space-travel/missions/fetchFailure';

const initMissionState = {
  missions: [],
  loading: false,
  error: '',
};
const fetchMission = (res) => ({
  type: FETCH_MISSION_SUCCESS,
  payload: res,
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

export function fetchMissionSuccess() {
  return (dispatch) => {
    console.log('miss succ called');
    axios.get('https://api.spacexdata.com/v3/missions').then(
      (res) => dispatch(fetchMission(res.data)),
    ).catch(
      (err) => console.log(err),
    );
  };
}
