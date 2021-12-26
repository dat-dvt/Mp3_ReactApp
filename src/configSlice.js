import { createSlice } from '@reduxjs/toolkit';
import { PLAYER_STORAGE_KEY } from 'constants/index';

const configSlice = createSlice({
	name: 'config',
	initialState: {
		config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
		firstLoading: true,
		isThickenHeader: false,
		isShowThemeModal: false,
	},
	reducers: {
		confirmFirstLoading(state) {
			state.firstLoading = false;
		},
		toggleThickenHeader(state, action) {
			state.isThickenHeader = action.payload;
		},
		editConfig(state, action) {
			const newConfig = action.payload;
			state.config = newConfig;
			localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(newConfig));
		},
		toggleShowThemeModal(state, action) {
			state.isShowThemeModal = action.payload;
		},
	},
});

const {
	actions: { confirmFirstLoading, toggleThickenHeader, editConfig, toggleShowThemeModal },
	reducer,
} = configSlice;

export { confirmFirstLoading, toggleThickenHeader, editConfig, toggleShowThemeModal };
export default reducer;
