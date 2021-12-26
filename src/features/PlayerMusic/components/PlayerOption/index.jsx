import clsx from 'clsx';
import { changeVolume } from 'features/PlayerMusic/musicSlice';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PlayerOption.scss';

function PlayerControl() {
	const dispatch = useDispatch();
	const { volume } = useSelector(state => state.music);
	const prevVolume = useRef(volume || 100);

	const handleChangeVolume = e => {
		const volumeValue = Number.parseInt(e.target.value);
		dispatch(changeVolume(volumeValue));
	};

	const handleClickVolumeButton = () => {
		const volumeValue = volume > 0 ? 0 : prevVolume.current;
		if (volume > 0) {
			prevVolume.current = volume;
		}
		dispatch(changeVolume(volumeValue));
	};

	return (
		<div className="player__options hide-on-mobile">
			<div className="player__options-container">
				<div className="player__options-btn option-btn hide-on-tablet-mobile">
					<i className="bi bi-camera-video btn--icon"></i>
				</div>
				<div className="player__options-btn option-btn hide-on-tablet-mobile">
					<i className="bi bi-mic btn--icon"></i>
				</div>
				<div className="player__options-btn volume option-btn" onClick={handleClickVolumeButton}>
					<i
						className={clsx('bi', 'btn--icon', {
							'bi-volume-up': volume > 0,
							'bi-volume-mute': volume === 0,
						})}
					></i>
				</div>
				<div className="player__volume-progress">
					<input
						type="range"
						className="volume__range"
						step="1"
						min="0"
						max="100"
						value={volume}
						onChange={handleChangeVolume}
					/>
					<div className="progress__track volume--track">
						<div className="progress__track-update" style={{ width: `${volume}%` }}></div>
					</div>
				</div>
				<div className="player__list-icon">
					<i className="bi bi-music-note-list"></i>
				</div>
			</div>
		</div>
	);
}

export default PlayerControl;
