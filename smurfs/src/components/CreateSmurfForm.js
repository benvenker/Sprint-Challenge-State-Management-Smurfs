import React, { useState } from "react";
import axios from "axios";
import { createSmurf } from "../actions/smurfActions";

const CreateSmurfForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    age: 0,
    height: "",
    id: Date.now(),
  });

  const handleChange = (e) => {
    console.log(formState);
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e, formState) => {
    console.log("formState from component: ", formState);
    e.preventDefault();
    createSmurf({
      name: "Ben",
      age: 23,
      height: "6'2",
      id: Date.now(),
    });
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
