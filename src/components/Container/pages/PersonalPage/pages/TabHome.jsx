import Album from 'features/Album';
import Artist from 'features/Artist';
import Mv from 'features/Mv';
import Playlist from 'features/Playlist';
import PlayMusic from 'features/PlayMusic';
import React from 'react';
import { useSelector } from 'react-redux';

function TabHome() {
	const playlistList = useSelector(state => state.personalPlaylist.list);

	return (
		<div className="grid container__tab tab-home">
			<PlayMusic />

			<Playlist playlistList={playlistList} hasCreateItem noWrap sectionName="Playlist" navigable />

			<Album optionalClass={'mt-50'} noWrap sectionName="Album" navigable />

			<Mv optionalClass={'mt-50'} noWrap sectionName="MV" navigable />

			<Artist optionalClass={'mt-30'} noWrap sectionName="Artist" navigable />
		</div>
	);
}

export default TabHome;
