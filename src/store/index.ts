import { createStore, combineReducers } from 'redux';
import User from './reducers/User';
import Settings from './reducers/Settings';

const reducers = combineReducers({
	user: User,
	settings: Settings
});

export const store = createStore(
	reducers,
);