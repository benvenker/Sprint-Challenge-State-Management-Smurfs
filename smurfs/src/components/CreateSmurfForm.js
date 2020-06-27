import React, { useState } from "react";
import { createSmurf } from "../actions/smurfActions";
import { connect } from "react-redux";

const CreateSmurfForm = (props) => {
  // const [formState, setFormState] = useState({
  //   name: "",
  //   age: 0,
  //   height: "",
  //   id: Date.now(),
  // });

  const handleChange = (e) => {
    // setFormState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // console.log({ formState });
  };

  return (
    <>
      <form>
        <label htmlFor="name">
          Name:
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={props.name}
          />
        </label>
        Age:
        <label htmlFor="age">
          <input
            onChange={handleChange}
            type="text"
            name="age"
            value={props.age}
          />
        </label>
        <label htmlFor="height">
          Height:
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={props.height}
          />
        </label>
        <button onClick={handleSubmit}>CREATE SMURF!</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    name: "",
    age: 0,
    height: "",
    id: Date.now(),
  };
};

export default connect(mapStateToProps, {
  createSmurf,
})(CreateSmurfForm);
