import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './radioStyle.css';


 class SelectUnit extends Component {
    render(props) {
        return (
            <div className="container my-5">
                <form className="row"> 
                    <div className="form-check col-4 align-items-center">
                        <label className="form-check-label" htmlFor="fahrenheit">
                            <input className="form-check-input" type="radio" name="Unit" id="fahrenheit" value="fahrenheit" onChange={this.props.selectUnitProp} />
                            <span className="btn btn-outline-dark radio-temp">FAHRENHEIT</span>
                    </label>
                    </div>
                    <div className="form-check col-4 align-items-center">
                        <label className="form-check-label" htmlFor="Kelvin">
                            <input className="form-check-input" type="radio" name="Unit" id="Kelvin" value="kelvin" onChange={this.props.selectUnitProp} />
                            <span className="btn btn-outline-dark radio-temp">KELVIN</span>
                            
                        </label>
                    </div>
                    <div className="form-check col-4 align-items-center">
                        <label className="form-check-label" htmlFor="Celcius">
                            <input className="form-check-input" type="radio" name="Unit" id="Celcius" value="celcius" onChange={this.props.selectUnitProp} />
                            <span className="btn btn-outline-dark radio-temp">CELCIUS</span>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}
export default SelectUnit;
