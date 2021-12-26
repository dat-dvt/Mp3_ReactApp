import React from 'react';
import PlayerControl from './components/PlayerControl';
import PlayerSongInfo from './components/PlayerSongInfo';
import PlayerOption from './components/PlayerOption';
import './PlayerMusic.scss';
import { useSelector } from 'react-redux';
import { currentSongSelector } from 'selectors/ListSongSelector';

function PlayerMusic() {
	const currentSong = useSelector(currentSongSelector);

	return (
		<div className="player__container">
			<PlayerSongInfo currentSong={currentSong} />
			<PlayerControl />
			<PlayerOption />
		</div>
	);
}

export default PlayerMusic;
