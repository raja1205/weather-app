import React from "react";

const Form = (props) => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="longitude" placeholder="Longitude, Ex: 12" />
    <input type="text" name="lattitude" placeholder="Lattitude, Ex: 77" />
    <button>Get Weather</button>
  </form>
);

export default Form;

/* Actual code below, however, we can ignore {} after probs => and return keyword, see above
const Form = props => {
return (
<form onSubmit={props.getWeather}>
	<input type="text" name="longitude" placeholder="Longitude, Ex: 12"/>
	<input type="text" name="lattitude"  placeholder="Lattitude, Ex: 77"/>
	<button>Get Weather</button>
</form>
);
}
*/
