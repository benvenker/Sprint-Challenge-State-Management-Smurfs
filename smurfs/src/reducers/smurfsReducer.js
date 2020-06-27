export const initialState = {
  smurfs: [
    {
      name: "Ben",
      age: 200,
      height: "5cm",
      id: 0,
    },
  ],
  isFetching: false,
  error: "",
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SMURFS_START":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_SMURFS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload,
        error: "",
      };
    case "FETCH_SMURFS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case "CREATE_SMURF_START":
      return {
        ...state,
        isFetching: true,
      };
    case "CREATE_SMURF_SUCCESS":
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
      };
    case "CREATE_SMURF_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case "DELETE_SMURF_START":
      return {
        ...state,
        isFetching: true,
      };
    case "DELETE_SMURF_SUCCESS":
      return {
        smurfs: action.payload,
        isFetching: false,
      };
    case "DELETE_SMURF_START":
      return {
        ...state,
        isFetching: true,
      };
    case "DELETE_SMURF_FAILURE":
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};
