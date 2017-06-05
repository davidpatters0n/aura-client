import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const app = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ATMS_SUCCESS':
      return {
        atms: action.atms
      }
    default:
      return state;
  }
}

const isLoading = (state = true, action) => {
  switch (action.type) {
    case 'COMPLETED':
      return false
    default:
      return state;
  }
}

const location = (state = {}, action) => {
  switch (action.type) {
    case 'GET_LOCATION_SUCCESS':
      return {
        latitude: action.coords.latitude,
        longitude: action.coords.longitude
      }
    case 'GET_LOCATION_FAILURE':
      return {error: true}
    default:
      return state;
  }
}

const appReducer = combineReducers({
  app,
  isLoading,
  location,
  router: routerReducer
});

export default appReducer;
