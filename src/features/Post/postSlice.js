import { createSlice } from '@reduxjs/toolkit';
import { POST_STORAGE_KEY } from 'constants/index';

const postSlice = createSlice({
	name: 'post',
	initialState: {
		listPosts: JSON.parse(localStorage.getItem(POST_STORAGE_KEY)) || [],
	},
});

const { reducer } = postSlice;

export default reducer;
