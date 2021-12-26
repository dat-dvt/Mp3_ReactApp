import { createSlice } from '@reduxjs/toolkit';
import { RADIO_STORAGE_KEY } from 'constants/index';

const radioSlice = createSlice({
	name: 'radio',
	initialState: {
		listRadio: JSON.parse(localStorage.getItem(RADIO_STORAGE_KEY)) || [],
	},
	reducers: {},
});

const { reducer } = radioSlice;

export default reducer;
