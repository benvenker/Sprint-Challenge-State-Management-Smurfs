import axios from "axios";

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_SMURFS_START" });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then((res) => {
        // console.log("FETCH_SMURFS_RES: ", res.data);
        dispatch({
          type: "FETCH_SMURFS_SUCCESS",
          payload: res.data,
        });
      })
      .catch((res) => {
        dispatch({
          type: "FETCH_SMURFS_FAILURE",
          payload: `Error`,
        });
      });
  };
};

export const createSmurf = (formState) => {
  console.log("createSmurf!");
  console.log({ formState });
  return (dispatch) => {
    dispatch({ type: "CREATE_SMURF_START" });
    axios
      .post(`http://localhost:3333/smurfs`, formState)
      .then((res) => {
        console.log(res.data);
        console.log("Successfully created");
        dispatch({
          type: "CREATE_SMURF_SUCCESS",
          payload: res.data,
        });
      })
      .catch((res) => {
        dispatch({
          type: "CREATE_SMURF_FAILURE",
          payload: "Error creating smurf",
        });
      });
  };
};
