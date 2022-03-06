import React from "react";

const Form = (props) => (
  <div>
    <form onSubmit={props.getWeather}>
      <input
        type="number"
        step="any"
        name="longitude"
        placeholder="Longitude"
      />
      <input
        type="number"
        step="any"
        name="lattitude"
        placeholder="Lattitude"
      />
      <button>Get Weather</button>
    </form>
  </div>
);

export default Form;
