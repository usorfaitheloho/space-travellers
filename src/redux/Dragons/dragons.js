import FetchDragonsData from '../API/DragonAPI';

const GET_DRAGONS_REQUEST = 'space-travellers/dragons/GET_REQUEST';
const GET_DRAGONS_SUCCESS = 'space-travellers/dragons/GET_SUCESS';
const GET_DRAGONS_FAIL = 'space-travellers/dragons/GET_FAIL';
const RESERVE_DRAGON = 'space-travellers/dragons/RESERVE_DRAGON';

const initialState = {
  DragonsData: [],
  error: '',
  load: false,
};

const getDragonRequest = () => ({
  type: GET_DRAGONS_REQUEST,
});

const getDragonSuccess = (DragonsData) => ({
  type: GET_DRAGONS_SUCCESS,
  payload: DragonsData,
});

const getDragonsFail = (error) => ({
  type: GET_DRAGONS_FAIL,
  payload: error,
});

export function getDragons() {
  return (dispatch) => {
    dispatch(getDragonRequest());
    FetchDragonsData()
      .then((data) => {
        const dragoninfo = data.map((uniData) => {
          const {
            id,
            name,
            description: desc,
            flickr_images: image,
          } = uniData;

          return {
            id,
            name,
            desc,
            image,
            reserved: false,
          };
        });
        dispatch(getDragonSuccess(dragoninfo));
      })
      .catch((error) => {
        dispatch(getDragonsFail(error.message));
      });
  };
}

const reserveDragon = (id) => ({
  type: RESERVE_DRAGON,
  payload: id,
});

export default function dragonsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DRAGONS_REQUEST:
      return { ...state, load: true };
    case GET_DRAGONS_SUCCESS:
      return {
        ...state,
        DragonsData: action.payload,
        error: '',
      };
    case GET_DRAGONS_FAIL:
      return {
        ...state,
        load: false,
        error: action.payload,
      };
    case RESERVE_DRAGON:
      return {
        ...state,
        DragonsData: state.DragonsData.map((dragon) => {
          if (dragon.id === action.payload) {
            return { ...dragon, reserved: !dragon.reserved };
          }
          return dragon;
        }),
      };
    default:
      return state;
  }
}

export {
  getDragonsFail, getDragonSuccess, getDragonRequest, reserveDragon,
};
