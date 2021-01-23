import { AUTH_EVENT, ADD_TO_LIBRARY, REMOVE_FROM_LIBRARY, ADD_TO_BOOKMARKS, REMOVE_FROM_BOOKMARKS } from '../types';
import { update } from '../../lib/network/user';

export const setUser = (data : any) => {
	return { type: AUTH_EVENT, payload: data };
};

const addToLibrary = (data : any) => {
	return { type: ADD_TO_LIBRARY, payload: data };
};

const removeFromLibrary = (data : any) => {
	return { type: REMOVE_FROM_LIBRARY, payload: data };
};

const addToBookmarks = (data : any) => {
	return { type: ADD_TO_BOOKMARKS, payload: data };
};

const removeFromBookmarks = (data : any) => {
	return { type: REMOVE_FROM_BOOKMARKS, payload: data };
};

export const addToLibraryAsync = (data : any) => {
  return (dispatch: any, getState: any) => {
		const { user: { library, bookmarks }} = getState();
		const merged = library.concat(data.library);

		update({ favourites: merged, bookmarks: bookmarks });

		dispatch(addToLibrary({ library: merged }));
  };
};

export const removeFromLibraryAsync = (data : any) => {
  return (dispatch: any, getState: any) => {
		const { user: { library, bookmarks }} = getState();
		const removed = library.filter((item: any) => item !== data.library[0]);

		update({ favourites: removed, bookmarks: bookmarks });

    dispatch(removeFromLibrary({ library: removed }));
  };
};

export const addToBookmarksAsync = (data : any) => {
  return (dispatch: any, getState: any) => {
		const { user: { bookmarks, library }} = getState();
		const merged = bookmarks.concat(data.bookmarks);

		update({ bookmarks: merged, favourites: library });

		dispatch(addToBookmarks({ bookmarks: merged }));
  };
};

export const removeFromBookmarksAsync = (data : any) => {
  return (dispatch: any, getState: any) => {
		const { user: { bookmarks, library }} = getState();
		const removed = bookmarks.filter((item: any) => item !== data.bookmarks[0]);

		update({ bookmarks: removed, favourites: library });

    dispatch(removeFromBookmarks({ bookmarks: removed }));
  };
};