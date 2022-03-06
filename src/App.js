import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

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
    error: undefined,
  };

  //async -- promised based response
  getWeather = async (e) => {
    e.preventDefault();
    //to prevent browser's default behavior

    const longitude = e.target.elements.longitude.value;
    const lattitude = e.target.lattitude.value;

    //fetching data from the server using API call, await used to wait until data fetched from the server
    const api_call = await fetch(
      `https://fcc-weather-api.glitch.me/api/current?lon=${longitude}&lat=${lattitude}`,
      { method: "GET" }
    );
    const data = await api_call.json();

    if (longitude && lattitude) {
      this.setState({
        longitude: data.coord.lon,
        lattitude: data.coord.lat,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        wind: data.wind.speed,
        error: "",
      });
    } else {
      this.setState({
        longitude: undefined,
        lattitude: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        error: "Please Enter both values",
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container shadow ">
              <div className="row">
                <div className="col-sm-5 title-container">
                  <Titles />
                </div>
                <div className="col-sm-7 form-container">
                  <Form getWeather={this.getWeather} />
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
