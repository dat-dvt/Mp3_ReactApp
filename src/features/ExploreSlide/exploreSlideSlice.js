import { createSlice } from '@reduxjs/toolkit';
import { EXPLORE_SLIDE_STORAGE_KEY } from 'constants/index';

const exploreSlideSlice = createSlice({
	name: 'exploreSlide',
	initialState: {
		listSlide: JSON.parse(localStorage.getItem(EXPLORE_SLIDE_STORAGE_KEY)) || [],
	},
	reducers: {},
});

const { reducer } = exploreSlideSlice;

export default reducer;
