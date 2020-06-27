import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchSmurfs } from "../actions/smurfActions";

const Smurfs = (props) => {
  console.log("smurf props: ", props);
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      {props.isFetching && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      <button onClick={props.fetchSmurfs}>Get Smurfs</button>
      <ul>
        {props.smurfs.map((smurf) => (
          <li>{smurf.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs.smurfs,
    isFetching: state.smurfs.isFetching,
  };
};

export default connect(mapStateToProps, {
  fetchSmurfs,
})(Smurfs);
