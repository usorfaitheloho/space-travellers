import axios from 'axios';

const FETCH_MISSION_SUCCESS = 'space-travel/missions/FETCH_SUCCESS';
const FETCH_MISSION_FAILURE = 'space-travel/missions/FETCH_FAILURE';
const FETCH_MISSION_REQUEST = 'space-travel/missions/START_FETCH';
const UPDATE_MEMEBERSHIP = 'space-travel/missions/UPDATE_MEMEBERSHIP';

const initMissionState = {
  missions: [],
  loading: false,
  error: '',
};
const loadMissionSuccess = (res) => ({
  type: FETCH_MISSION_SUCCESS,
  payload: res,
});

const loadMissionRequest = () => ({
  type: FETCH_MISSION_REQUEST,
});

const loadMissionFailure = (err) => ({
  type: FETCH_MISSION_FAILURE,
  payload: err,
});

export function updateMembership(missionId) {
  return {
    type: UPDATE_MEMEBERSHIP,
    payload: missionId,
  };
}

export default function reducer(state = initMissionState, action) {
  switch (action.type) {
    case FETCH_MISSION_SUCCESS:
      return {
        missions: action.payload,
        loading: false,
      };
    case FETCH_MISSION_FAILURE:
      return {
        error: action.payload,
      };
    case FETCH_MISSION_REQUEST:
      return {
        loading: true,
        error: '',
      };
    case UPDATE_MEMEBERSHIP:
    {
      const newState = state.missions.map((item) => {
        if (item.mission_id !== action.payload) { return item; }
        const val = typeof item.reserved === 'boolean' ? !item.reserved : true;
        return { ...item, reserved: val };
      });
      return {
        missions: newState,
      };
    }
    default:
      return {
        loading: false,
        missions: state.missions,
      };
  }
}

export function fetchMissionSuccess() {
  return (dispatch) => {
    dispatch(loadMissionRequest());
    axios.get('https://api.spacexdata.com/v3/missions').then(
      (res) => dispatch(loadMissionSuccess(res.data)),
    ).catch(
      (err) => dispatch(loadMissionFailure(err)),
    );
  };
}
