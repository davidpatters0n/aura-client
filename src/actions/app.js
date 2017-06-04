import axios from 'axios';
import _ from 'underscore';

const INCOMPLETE = 'INCOMPLETE';
const COMPLETED = 'COMPLETED'
const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
const GET_LOCATION_FAILURE = 'GET_LOCATION_FAILURE';
const GET_ATMS_SUCCESS = 'GET_ATMS_SUCCESS';
const GET_ATMS_FAILURE = 'GET_ATMS_FAILURE';

const fetchAtms = () => {
  return axios.get('http://localhost:4567');
}

const atmsByBusId = (atms) => {
  return _.uniq(atms.map(atm => { return atm['location']}), 'ownerBusId');
}

const getLocationSuccess = (position) => {
  return {
    type: GET_LOCATION_SUCCESS,
    coords: position.coords
  }
}

const getLocationFailure = (error) => {
  return {
    type: GET_LOCATION_FAILURE
  }
}

const setLocation = () => {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition(
      (position) => dispatch(getLocationSuccess(position))
    , (error) => getLocationFailure());
  }
}

const getAtmsSuccess = (atms) => {
  return {
    type: GET_ATMS_SUCCESS,
    atms
  }
}

const getAtmsFailure = (error) => {
  return {
    type: GET_ATMS_FAILURE,
    error
  }
}

const recievedAtms = () => {
  return {
    type: COMPLETED,
  }
}

export const loadAtms = () => {
  return (dispatch) => {
    dispatch(setLocation());
    return fetchAtms().then(
      (response) => {
        let atms = atmsByBusId(response.data);
        dispatch(getAtmsSuccess(atms));
        dispatch(recievedAtms());
      },
      (error) => dispatch(getAtmsFailure())
    )
  }
}
