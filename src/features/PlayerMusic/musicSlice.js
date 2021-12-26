import { createSlice } from '@reduxjs/toolkit';
import { PLAYER_STORAGE_KEY } from 'constants/index';

const musicSlice = createSlice({
	name: 'music',
	initialState: {
		isPlaying: false,
		isRandom: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY))?.isRandom || false,
		isRepeat: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY))?.isRepeat || false,
		isLoading: false,
		isLoadingSlide: false,
		volume: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY))?.volume ?? 100,
	},
	reducers: {
		toggleLoadingSong(state, action) {
			const isLoading = action.payload;
			if (isLoading) {
				state.isPlaying = true;
			}
			state.isLoading = isLoading;
		},
		toggleLoadingSlideAndSong(state, action) {
			const isLoading = action.payload;
			if (isLoading) {
				state.isPlaying = true;
			}
			state.isLoading = isLoading;
			state.isLoadingSlide = isLoading;
		},
		togglePlaySong(state, action) {
			state.isPlaying = action.payload;
		},
		toggleRandomSong(state) {
			state.isRandom = !state.isRandom;
		},
		toggleRepeatSong(state) {
			state.isRepeat = !state.isRepeat;
		},
		changeVolume(state, action) {
			state.volume = action.payload;
		},
	},
});

const {
	actions: {
		togglePlaySong,
		toggleRandomSong,
		toggleRepeatSong,
		toggleLoadingSong,
		toggleLoadingSlideAndSong,
		changeVolume,
	},
	reducer,
} = musicSlice;

export {
	togglePlaySong,
	toggleRandomSong,
	toggleRepeatSong,
	toggleLoadingSong,
	toggleLoadingSlideAndSong,
	changeVolume,
};
export default reducer;
