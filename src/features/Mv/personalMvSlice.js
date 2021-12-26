import { createSlice } from '@reduxjs/toolkit';
import { MV_STORAGE_KEY } from 'constants/index';

const personalMvSlice = createSlice({
	name: 'personalMv',
	initialState: {
		list: JSON.parse(localStorage.getItem(MV_STORAGE_KEY)) || [],
	},
	reducers: {},
});

const { reducer } = personalMvSlice;

export default reducer;
