import clsx from 'clsx';
import PlayerMusic from 'features/PlayerMusic';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { currentThemeSelector } from 'selectors/themeSelector';
import PlayerPopup from './components/PlayerPopup';
import './Player.scss';
import { PlayerProvider } from './PlayerStore';

Player.propTypes = {};

function Player() {
	const [openPopup, setOpenPopup] = useState(false);
	const { isPlaying } = useSelector(state => state.music);
	const currentTheme = useSelector(currentThemeSelector);

	const handleOpenPopup = e => {
		const authorNode = e.target.closest(
			'.player__container .player__song-info.media .player__song-author.info__author'
		);
		const actionNode = e.target.closest('.player__container .player__song-info.media .media__right');
		const controlNode = e.target.closest('.player__container .player__control-btn');
		const progressNode = e.target.closest('.player__container .progress-block');
		const optionNode = e.target.closest('.player__container .player__options-container');
		const popUpNode = e.target.closest('.player .player__popup');
		if (!actionNode && !authorNode && !controlNode && !progressNode && !optionNode && !popUpNode) {
			setOpenPopup(true);
		}
	};

	const handleClosePopup = () => {
		setOpenPopup(false);
	};

	return (
		<div
			className={clsx('player', 'grid', {
				playing: isPlaying,
				'open-popup': openPopup,
			})}
			style={{
				backgroundImage: currentTheme.playerImage ? `url(${currentTheme.playerImage})` : 'none',
			}}
			onClick={handleOpenPopup}
		>
			<PlayerProvider>
				<PlayerMusic />
				<PlayerPopup onClosePopup={handleClosePopup} />
			</PlayerProvider>
		</div>
	);
}

export default Player;
