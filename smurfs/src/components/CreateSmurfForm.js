import React, { useState } from "react";
import axios from "axios";
import { createSmurf } from "../actions/smurfActions";

const CreateSmurfForm = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    age: 0,
    height: "",
    id: Date.now(),
  });

  const handleChange = (e) => {
    setFormState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e, formState) => {
    e.preventDefault();
    createSmurf(formState);
    console.log("Clicked");
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
            value={formState.name}
          />
        </label>
        Age:
        <label htmlFor="age">
          <input
            onChange={handleChange}
            type="text"
            name="age"
            value={formState.age}
          />
        </label>
        <label htmlFor="height">
          Height:
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={formState.height}
          />
        </label>
        <button onClick={handleSubmit}>CREATE SMURF!</button>
      </form>
    </>
  );
};

export default CreateSmurfForm;
