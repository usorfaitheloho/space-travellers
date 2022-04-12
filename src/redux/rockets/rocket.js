const ROCKET_FETCH_SUCCESS = 'ROCKET_FETCH_SUCCESS';
const ROCKET_FETCH_FAILURE = 'ROCKET_FETCH_FAILURE';

const initState = {
  rockets: [],
  error: '',
  loading: false,
};

export function getRockets() {
  return {
    type: ROCKET_FETCH_SUCCESS,
  };
}

export default function reducer(state = initState, action) {
  switch (action.payload) {
    case ROCKET_FETCH_SUCCESS:
      return {
        rockets: action.payload,
      };
    case ROCKET_FETCH_FAILURE:
      return {
        error: 'Unable to fetch',
      };
    default:
      return {
        rockets: state,
      };
  }
}
