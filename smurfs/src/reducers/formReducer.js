export const initialState = {
  name: "",
  age: 0,
  height: "",
  id: Date.now(),
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_SMURF_START":
      return {
        ...state,
        isFetching: true,
      };
    case "CREATE_SMURF_SUCCESS":
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isFetching: false,
      };
    case "CREATE_SMURF_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
