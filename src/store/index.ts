import { createStore, combineReducers, compose } from 'redux';
import User from './reducers/User';

const reducers = combineReducers({
	user: User,
});

export const store = createStore(
	reducers,
);