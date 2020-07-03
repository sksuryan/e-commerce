import {createStore,combineReducers} from 'redux';
import login from './reducers/Login';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(combineReducers({
    login
}),composeWithDevTools());

export default store;