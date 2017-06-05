/* eslint-disable no-undef */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/app';

// Components
import GoogleMap from './google-map';
import SearchForm from './search-form';
import Spinner from './spinner';

// Styles
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.setLocation();
    this.props.loadAtms();
    this.handleSearchUpdate = this.handleSearchUpdate.bind(this)
  }

  handleSearchUpdate(term) {
    console.log('Todo');
  }

  render() {
    let content = <Spinner />
    const { isLoading, atms, longitude, latitude } = this.props;

    if (!isLoading && longitude && latitude) {
      content = [
        <div className='col-md-6 google-map-container-map' key="google-map">
          <GoogleMap latitude={latitude} longitude={longitude} atms={atms}/>
        </div>,
        <div className="col-md-6" key="search-form">
          <SearchForm />
        </div>
      ]
    }

    return (
      <div className='google-map-container'>
        <div className='google-map-container__row row'>
          {content}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    atms: state.app.atms,
    isLoading: state.isLoading,
    latitude: state.location.latitude,
    longitude: state.location.longitude
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
