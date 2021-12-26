import { createSlice } from '@reduxjs/toolkit';
import { PLAYER_STORAGE_KEY, THEME_LIST_STORAGE_KEY, THEME_STORAGE_KEY } from 'constants/index';

const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		themeIndex: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY))?.themeIndex ?? 0,
		listThemeIndex: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY))?.listThemeIndex ?? 0,
		listTheme: JSON.parse(localStorage.getItem(THEME_STORAGE_KEY)),
		modalListTheme: JSON.parse(localStorage.getItem(THEME_LIST_STORAGE_KEY)),
	},
	reducers: {
		changeTheme(state, action) {
			const { themeIndex, listThemeIndex } = action.payload;
			state.themeIndex = themeIndex;
			state.listThemeIndex = listThemeIndex;
		},
	},
});

const {
	actions: { changeTheme },
	reducer,
} = themeSlice;

export { changeTheme };
export default reducer;
