import {createStore,combineReducers} from 'redux';
import login from './reducers/Login';
import Cart from './reducers/Cart';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(combineReducers({
    login,
    Cart
}),composeWithDevTools());

export default store;