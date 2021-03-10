import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.css';
import GetWeather from './components/GetWeather'
import './App.css';
import axios from 'axios';
import SelectUnit from './components/SelectUnit';
const API_KEY = "bf5334823fad33d71a7d765371104dcf";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      city: { name: "City", country: "Country" } ,
      temperature: { value: undefined, min: undefined , max: undefined } ,
      humidity: { value: undefined } ,
      wind: { speed: 0 , direction: { name: "North", degree: 250 } } ,
      tempCalc: { value: undefined, min: undefined, max: undefined, unit: "\u2103"},
      icon: "01d",
      weatherId: undefined,
      searchQuery: "",
      bgImage: undefined
      
    };
  }
  // Searching with city name without API call
  onChangeCity = (e) => {
    this.setState({ searchQuery: e.target.value });
  }
  //API CALL
  getWeatherF = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchQuery}&appid=${API_KEY}`);
    this.setState({ 
      city : ({...this.state.city, name: response.data.name, country: response.data.sys.country}),
      temperature : ({...this.state.temperature, value : response.data.main.temp, min: response.data.main.temp_min, max: response.data.main.temp_max}),
      humidity : ({...this.state.humidity, value : response.data.main.humidity}), 
      wind: ({...this.state.wind, speed: response.data.wind.speed, direction : {...this.state.wind.direction, degree: response.data.wind.degree}}),
      icon :  response.data.weather[0].icon,
      tempCalc : ({...this.state.tempCalc, value: response.data.main.temp -273, min: response.data.main.temp_min -273, max: response.data.main.temp_max -273}),
      weatherId: response.data.weather[0].id,
    });
    // define background image but not using.
    return (this.state.weatherId > 199 && this.state.weatherId < 532 ? this.setState({ bgImage: require("./images/storm.jpeg") }) : 
      this.state.weatherId > 599 && this.state.weatherId < 623 ? this.setState({ bgImage: require("./images/snowy.jpeg")}) : 
      this.state.weatherId > 799 && this.state.weatherId < 803 ? this.setState({ bgImage: require("./images/sunny.jpeg")}) :
      this.state.weatherId > 802 ? this.setState({ bgImage: require("./images/cloudy.jpeg")}) : 
      this.state.weatherId > 299 && this.state.weatherId < 532 ? this.setState({ bgImage: require("./images/raining.jpeg")})  
      : this.setState({bgImage : require("./images/sunny.jpeg")}));
      
  }
 
  UnitCalculator = (e) => {
    if(String(e.target.value)  === "celcius") {
      this.setState({ tempCalc : {
        ...this.state.tempCalc,
        unit: "\u2103",
        value: parseInt(this.state.temperature.value - 273),
        min: parseInt(this.state.temperature.min - 273),
        max: parseInt(this.state.temperature.max - 273) 
      }
      });
    }
    else if (String(e.target.value) === "kelvin"){
      this.setState({ tempCalc : {
        ...this.state.tempCalc,
        unit: "\u212A",
        value: parseInt(this.state.temperature.value),
        min: parseInt(this.state.temperature.min),
        max: parseInt(this.state.temperature.max) 
      }
      });
      console.log(this.state.bgImage);
    }
    else if(String(e.target.value) === "fahrenheit") {
      this.setState({ tempCalc : {
        ...this.state.tempCalc,
        unit: "\u2109",
        value: parseInt(this.state.temperature.value * (9 / 5) - 460),
        min: parseInt(this.state.temperature.min * (9 / 5) - 460),
        max: parseInt(this.state.temperature.max * (9 / 5) - 460) 
      }
      });
    }
    else{
      this.setState({ tempCalc: {
        ...this.state.tempCalc,
        value: parseInt(this.state.temperature.value - 273),
        min: parseInt(this.state.temperature.min - 273),
        max: parseInt(this.state.temperature.max - 273) 
      }
      });
    }
  }
  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${this.state.bgImage})` }}>
        <h1>Weather App</h1>
        <SearchBar getWeatherProp = {this.getWeatherF } typeCityProp = {this.onChangeCity} />
        <SelectUnit selectUnitProp = {this.UnitCalculator}/>
        <GetWeather city = {this.state.city} temperature={this.state.tempCalc} wind = {this.state.wind} humidity = {this.state.humidity} iconProp = {this.state.icon} />
      </div>
    );
  }
}
export default App;
