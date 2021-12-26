import { createSelector } from '@reduxjs/toolkit';

const selectListTheme = state => state.theme.listTheme;
const selectListThemeIndex = state => state.theme.listThemeIndex;
const selectThemeIndex = state => state.theme.themeIndex;

export const currentThemeSelector = createSelector(
	selectListTheme,
	selectListThemeIndex,
	selectThemeIndex,
	(listTheme, listThemeIndex, themeIndex) => listTheme[listThemeIndex][themeIndex]
);
