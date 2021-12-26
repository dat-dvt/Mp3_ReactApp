import { createSlice } from '@reduxjs/toolkit';
import { PLAYLIST_STORAGE_KEY } from 'constants/index';

const personalPlaylistSlice = createSlice({
	name: 'personalPlaylist',
	initialState: {
		list: JSON.parse(localStorage.getItem(PLAYLIST_STORAGE_KEY)) || [],
	},
	reducers: {},
});

const { reducer } = personalPlaylistSlice;

export default reducer;
