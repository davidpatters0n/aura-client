import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import appReducer from './reducers/app';

export const history = createHistory()

const middleware = routerMiddleware(history);

const store = createStore(appReducer, applyMiddleware(middleware, thunk));

export default store;
