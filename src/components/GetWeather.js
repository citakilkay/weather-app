import React, { Component } from 'react'
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'weather-icons/css/weather-icons.css';
import './radioStyle.css';

class GetWeather extends Component {
    render(props) {
        var iconImg = "http://openweathermap.org/img/w/" + `${this.props.iconProp}` + ".png";
        return (
            <div>
                <div className="container">
                    <div>
                        <h2>{this.props.city.name},{this.props.city.country}</h2>
                        <h2 className="mb-5">{parseInt(this.props.temperature.value)} {this.props.temperature.unit}</h2>
                        <img className ="img-icon" src = {iconImg}/>
                        <div className="m-3"><h3><i className="wi wi-strong-wind"></i> {parseInt(this.props.wind.speed * 3.6)} km/h</h3></div>
                        <div className="m-3"><h3><i className="wi wi-raindrop display-5"></i> %{this.props.humidity.value}</h3></div>
                        <div className="my-3">
                            <h3 className="text-center">
                                <span className="mx-5">{parseInt(this.props.temperature.min)} {this.props.temperature.unit}</span>
                                <span className="mx-5">{parseInt(this.props.temperature.max)} {this.props.temperature.unit}</span>
                            </h3>
                        </div>
                    </div>        
                </div>
            </div>
        )
    }
}
export default GetWeather;
