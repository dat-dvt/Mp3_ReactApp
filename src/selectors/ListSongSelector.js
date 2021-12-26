import { createSelector } from '@reduxjs/toolkit';

const selectListSong = state => state.listSong.list;
const selectListDuration = state => state.listSong.listDuration;
const selectPlaylistIndex = state => state.listSong.playlistIndex;
const selectSongIndex = state => state.listSong.songIndex;

export const currentListSongSelector = createSelector(
	selectListSong,
	selectPlaylistIndex,
	(listSongs, playlistIndex) => listSongs[playlistIndex]
);

export const currentSongSelector = createSelector(
	selectListSong,
	selectPlaylistIndex,
	selectSongIndex,
	(listSongs, playlistIndex, songIndex) => listSongs[playlistIndex][songIndex]
);

export const currentListDuration = createSelector(
	selectListDuration,
	selectPlaylistIndex,
	(listDurations, playlistIndex) => listDurations[playlistIndex]
);

export const currentSongDuration = createSelector(
	selectListDuration,
	selectPlaylistIndex,
	selectSongIndex,
	(listDurations, playlistIndex, songIndex) =>
		listDurations[playlistIndex][songIndex]
);
