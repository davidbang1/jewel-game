import * as Actions from "./actionTypes.jsx";

const defaultState = {
  test: [],
};

export default function reducer(state = defaultState, action) {
  switch (action?.type) {
    case Actions.SET_STARTING_PAGE:
      return {
        ...state,
        startingPage: action.payload,
      };
    default:
      return state;
  }
}
