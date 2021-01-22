import { AUTH_EVENT, ADD_TO_LIBRARY, REMOVE_FROM_LIBRARY } from '../types';

interface State {
	auth: {} | null;
	library: [];
};

const INITIAL_STATE: State = {
	auth: null,
	library: []
};

const UserReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case AUTH_EVENT:
			return { ...state, ...action.payload };
		case ADD_TO_LIBRARY:
			return { ...state, library: state.library.concat(action.payload.library) };
		case REMOVE_FROM_LIBRARY:
			return { ...state, library: state.library.filter((item: any) => item !== action.payload.library[0]) };
		default:
			return state;
	}
};

export default UserReducer;