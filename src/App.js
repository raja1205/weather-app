import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

/* const API_KEY = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139'; */

class App extends Component {
// New state method introduced in React 16
// Good practice: Initial State is undefined because we do not know the API Data type (i.e number, string, boolean,etc) from the server data

state = {
longitude: undefined,
lattitude: undefined,
temperature: undefined,
humidity: undefined,
description: undefined,
wind: undefined,
error: undefined
}

//async -- promised based response
getWeather = async(e) => {
e.preventDefault(); // to prevent browser's default behavior
const longitude = e.target.elements.longitude.value;//can also use without elements i.e: e.target.longitude.value;,  here longitude is HTML form's input field name
const lattitude = e.target.lattitude.value;

//fetching data from the server using API call, await used to wait until data fetched from the server
const api_call = await fetch(`https://fcc-weather-api.glitch.me/api/current?lon=${longitude}&lat=${lattitude}`, {method: 'GET'});
const data = await api_call.json();

/*//API Response sample:
{ "coord":{ "lon":159, "lat":35 }, "weather":[ { "id":500, "main":"Rain", "description":"light rain", "icon":"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399" } ], "base":"stations", "main":{ "temp":22.59, "pressure":1027.45, "humidity":100, "temp_min":22.59, "temp_max":22.59, "sea_level":1027.47, "grnd_level":1027.45 }, "wind":{ "speed":8.12, "deg":246.503 }, "rain":{ "3h":0.45 }, "clouds":{ "all":92 }, "dt":1499521932, "sys":{ "message":0.0034, "sunrise":1499451436, "sunset":1499503246 }, "id":0, "name":"", "cod":200 }
*/

if (longitude && lattitude)
	{
	this.setState({
		longitude: data.coord.lon,
		lattitude: data.coord.lat,
		temperature: data.main.temp,
		humidity: data.main.humidity,
		description: data.weather[0].description,
		wind: data.wind.speed,
		error: ""
				});
	}
else {
	this.setState({
		longitude: undefined,
		lattitude: undefined,
		temperature: undefined,
		humidity: undefined,
		description: undefined,
		wind: undefined,
		error: "Please Enter both values"
				});
	}

}

render(){
return(
	        <div>
				    <div className="wrapper">
				        <div className="main">
				             <div className="container shadow ">
						          <div className="row">
						          	    <div className="col-sm-5 title-container">
										<Titles/>
									    </div>
									    <div className="col-sm-7 form-container">
										<Form getWeather={this.getWeather}/>
										<Weather 
											longitude={this.state.longitude}
											lattitude={this.state.lattitude}
											temperature={this.state.temperature}
											humidity={this.state.humidity}
											description={this.state.description}
											wind={this.state.wind}
											error={this.state.error}
											/>
										</div>
								   </div>
							 </div>
						</div>
					</div>
		   </div>
);

}
}

export default App;