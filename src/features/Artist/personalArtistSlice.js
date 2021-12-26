import { createSlice } from '@reduxjs/toolkit';
import { ARTIST_STORAGE_KEY } from 'constants/index';

const personalArtistSlice = createSlice({
	name: 'personalArtist',
	initialState: {
		list: JSON.parse(localStorage.getItem(ARTIST_STORAGE_KEY)) || [],
	},
	reducers: {},
});

const { reducer } = personalArtistSlice;

export default reducer;
