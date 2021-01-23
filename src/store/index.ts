import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import User from './reducers/User';
import Settings from './reducers/Settings';

const reducers = combineReducers({
	user: User,
	settings: Settings
});

export const store = createStore(
	reducers,
	applyMiddleware(thunk)
);