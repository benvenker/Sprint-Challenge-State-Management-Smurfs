import axios from "axios";

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_SMURFS_START" });
    axios
      .get(`https://localhost:3333/smurfs`)
      .then((res) => {
        // console.log("FETCH_SMURFS_RES: ", res.data);
        dispatch({
          type: "FETCH_SMURFS_SUCCESS",
          payload: res,
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

export const createSmurf = (formData) => {
  return (dispatch) => {
    dispatch({ type: "CREATE_SMURF_START" });
    axios
      .post(`https://localhost:3000/smurfs`, formData)
      .then((res) => {
        console.log(res);
        dispatch({
          type: "CREATE_SMURF_SUCCESS",
          payload: res,
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
