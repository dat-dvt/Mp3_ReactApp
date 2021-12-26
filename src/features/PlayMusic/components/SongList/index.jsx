import { toggleLoadingSong } from 'features/PlayerMusic/musicSlice';
import { nextSong } from 'features/PlayMusic/listSongSlice';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentListDuration } from 'selectors/ListSongSelector';
import SongItem from '../SongItem';
import './SongList.scss';

function SongList({ listSong = [], isSongTab = false }) {
	const dispatch = useDispatch();
	const listDuration = useSelector(currentListDuration);
	const prevPlaylist = useRef();

	const handleClickSong = index => {
		dispatch(toggleLoadingSong(true));
		dispatch(nextSong(index));
	};
	return (
		<div className="playlist__list">
			{listSong.map((song, index) => (
				<SongItem
					key={song.name}
					index={index}
					song={song}
					duration={listDuration[index]}
					onClick={handleClickSong}
					prevPlaylist={prevPlaylist}
					isSongTab={isSongTab}
				/>
			))}
		</div>
	);
}

export default SongList;
