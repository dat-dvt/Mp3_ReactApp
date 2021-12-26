import Playlist from 'features/Playlist';
import React from 'react';
import { useSelector } from 'react-redux';

function TabPlaylist() {
	const playlistList = useSelector(state => state.personalPlaylist.list);
	return (
		<>
			<Playlist playlistList={playlistList} hasCreateItem sectionName="Playlist" />
		</>
	);
}

export default TabPlaylist;
