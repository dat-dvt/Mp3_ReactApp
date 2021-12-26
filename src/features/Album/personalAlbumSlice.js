import { createSlice } from '@reduxjs/toolkit';
import { ALBUM_STORAGE_KEY } from 'constants/index';

const personalAlbumSlice = createSlice({
	name: 'personalAlbum',
	initialState: {
		list: JSON.parse(localStorage.getItem(ALBUM_STORAGE_KEY)) || [],
	},
	reducers: {},
});

const { reducer } = personalAlbumSlice;

export default reducer;
