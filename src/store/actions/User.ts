import { AUTH_EVENT, ADD_TO_LIBRARY, REMOVE_FROM_LIBRARY } from '../types';

export const setUser = (data : any) => {
	return { type: AUTH_EVENT, payload: data };
};

export const addToLibrary = (data : any) => {
	return { type: ADD_TO_LIBRARY, payload: data };
};

export const removeFromLibrary = (data : any) => {
	return { type: REMOVE_FROM_LIBRARY, payload: data };
};