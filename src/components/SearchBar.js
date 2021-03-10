import React, { Component } from 'react'
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './radioStyle.css';

class SearchBar extends Component {
    handleSubmit = (e,props) => {
        e.preventDefault();
        this.props.getWeatherProp();
    }
    render(props) {
        return (
            <div>
                <form className="container-sm" onSubmit={this.handleSubmit}>
                    <div className="row m-md-5 m-1">
                        <div className="col-6 col-sm-9 row">
                            <input type="text" className="form-control align-items-center col-11 mr-1" name="Searcher" onChange= {this.props.typeCityProp} placeholder="Search"/>
                        </div>
                        <div className="col-6 col-sm-3">

                            <button type="submit" className="btn btn-danger float-right float-sm-left">
                                Get Weather
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;
