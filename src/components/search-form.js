import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/app';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { address: 'Toronto, Canada' }
    this.handleSelect = this.handleSelect.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSelect() {
    const { address } = this.state;
    geocodeByAddress(this.state.address)
      .then((results) => getLatLng(results[0]))
      .then(latLng => {
        const {lat, lng } = latLng;
        this.props.loadAtms({ address });
        this.props.setLocation({coords: {latitude: lat, longitude: lng}});
      })
      .catch(error => console.error('Error', error))
  }

  onChange(address) {
    this.setState({ address })
  }

  render() {
    const value = this.state.address;
    const onChange = this.onChange;
    const cssClasses = { input: 'form-control' };

    return (
      <PlacesAutocomplete
        inputProps={{value, onChange}}
        onSelect={this.handleSelect}
        classNames={cssClasses}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchForm);
