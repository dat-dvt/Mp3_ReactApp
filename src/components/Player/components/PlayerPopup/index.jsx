import React from 'react';
import { useSelector } from 'react-redux';
import { currentThemeSelector } from 'selectors/themeSelector';
import PopupContent from '../PopupContent';
import PopupFooter from '../PopupFooter';
import './PlayerPopup.scss';

function PlayerPopup({ onClosePopup }) {
	const currentTheme = useSelector(currentThemeSelector);

	const handleClosePopup = () => {
		if (onClosePopup) onClosePopup();
	};

	return (
		<div
			className="player__popup"
			style={{
				backgroundImage: currentTheme.image ? `url("${currentTheme.image}")` : 'none',
			}}
		>
			<div className="player__popup-header">
				<div className="player__popup-logo">
					<img src="/assets/img/logos/small-logo.svg" alt="Logo" className="player__logo-img" />
				</div>
				<div className="player__popup-container">
					<ul className="player__popup-menu">
						<li className="player__popup-item active">
							<a href="/">Danh Sách Phát</a>
						</li>
						<li className="player__popup-item">
							<a href="/">Karaoke</a>
						</li>
						<li className="player__popup-item hide-on-mobile">
							<a href="/">Lời Bài Hát</a>
						</li>
					</ul>
				</div>
				<div className="player__popup-action">
					<ul className="popup__action-menu">
						<li className="popup__action-btn hide-on-tablet-mobile">
							<i className="bi bi-arrows-angle-expand popup__action-btn-icon"></i>
						</li>
						<li className="popup__action-btn hide-on-tablet-mobile">
							<i className="bi bi-gear popup__action-btn-icon"></i>
						</li>
						<li className="popup__action-btn btn--pop-down" onClick={handleClosePopup}>
							<i className="bi bi-chevron-down popup__action-btn-icon"></i>
						</li>
					</ul>
				</div>
			</div>
			<PopupContent />
			<PopupFooter />
		</div>
	);
}

export default PlayerPopup;
