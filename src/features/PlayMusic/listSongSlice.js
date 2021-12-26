import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import songApi from 'api/SongApi';
import { DURATION_STORAGE_KEY, MUSIC_STORAGE_KEY, PLAYER_STORAGE_KEY } from 'constants/index';

const fetchSongs = createAsyncThunk('listSong/fetchSongs', async () => {
	const listSongs = await songApi.getAll();
	return { listSongs };
});

const listSongSlice = createSlice({
	name: 'listSong',
	initialState: {
		songIndex: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY))?.songIndex ?? 0,
		playlistIndex: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY))?.playlistIndex ?? 0,
		list: JSON.parse(localStorage.getItem(MUSIC_STORAGE_KEY)),
		listDuration: JSON.parse(localStorage.getItem(DURATION_STORAGE_KEY)) || [],
	},
	reducers: {
		nextSong(state, action) {
			const newSongIndex = action.payload;
			state.songIndex = newSongIndex;
			// localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify  )
		},
		changePlaylist(state, action) {
			state.songIndex = 0;
			state.playlistIndex = action.payload;
		},
	},
	extraReducers: {
		[fetchSongs.fulfilled]: (state, action) => {
			state.list = action.payload.listSongs;
		},
	},
});

const {
	actions: { nextSong, changePlaylist },
	reducer,
} = listSongSlice;

export { fetchSongs, nextSong, changePlaylist };

export default reducer;
