import PlayerControl from 'features/PlayerMusic/components/PlayerControl';
import PlayerSongInfo from 'features/PlayerMusic/components/PlayerSongInfo';
import PlayerOption from 'features/PlayerMusic/components/PlayerOption';
import React from 'react';
import { useSelector } from 'react-redux';
import { currentSongSelector } from 'selectors/ListSongSelector';
import { currentThemeSelector } from 'selectors/themeSelector';
import './PopupFooter.scss';

function PopupFooter() {
	const currentTheme = useSelector(currentThemeSelector);
	const currentSong = useSelector(currentSongSelector);

	return (
		<div
			className="player__popup-footer"
			style={{
				backgroundImage: currentTheme.playerImage ? `url(${currentTheme.playerImage})` : 'none',
			}}
		>
			<PlayerSongInfo isPopupSection currentSong={currentSong} />
			<PlayerControl isPopupSection />
			<PlayerOption />
		</div>
	);
}

export default PopupFooter;
