import { AUTH_EVENT, ADD_TO_LIBRARY, REMOVE_FROM_LIBRARY, ADD_TO_BOOKMARKS, REMOVE_FROM_BOOKMARKS } from '../types';

interface State {
	auth: {} | null;
	library: [];
	bookmarks: [];
};

const INITIAL_STATE: State = {
	auth: null,
	library: [],
	bookmarks: []
};

const UserReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case AUTH_EVENT:
			return { ...state, ...action.payload };
		case ADD_TO_LIBRARY:
			return { ...state, ...action.payload };
		case REMOVE_FROM_LIBRARY:
			return { ...state, ...action.payload };
		case ADD_TO_BOOKMARKS:
			return { ...state, ...action.payload };
		case REMOVE_FROM_BOOKMARKS:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default UserReducer;