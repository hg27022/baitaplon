const SET_TOKEN = "SET_TOKEN";
const SET_MODE = "SET_MODE";

function reducers(state, action) {
  switch (action.type) {
    case SET_MODE:
      return {
        ...state,
        mode: 'light' ? 'dark' : 'light',
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}

export default reducers;