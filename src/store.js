import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware} from 'react-router-redux';

import appReducer from './reducers/app';

export const history = createHistory()

const middleware = routerMiddleware(history);

const store = createStore(appReducer, {}, applyMiddleware(middleware));

export default store;
