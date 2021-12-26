import { createSlice } from '@reduxjs/toolkit';
import { SONG_CHARTS_STORAGE_KEY } from 'constants/index';

const chartDataSlice = createSlice({
	name: 'chartData',
	initialState: {
		listSong: JSON.parse(localStorage.getItem(SONG_CHARTS_STORAGE_KEY)) || [],
	},
	reducers: {},
});

const { reducer } = chartDataSlice;

export default reducer;
