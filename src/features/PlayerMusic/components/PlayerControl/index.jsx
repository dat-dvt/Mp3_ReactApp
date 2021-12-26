import clsx from 'clsx';
import { usePlayerStore } from 'components/Player/hooks';
import { toggleRandomSong, toggleRepeatSong } from 'features/PlayerMusic/musicSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '../LoadingSpinner';
import ProgressControl from '../ProgressControl';
import './PlayerControl.scss';

function PlayerControl({ isPopupSection }) {
	const dispatch = useDispatch();
	const { isRandom, isRepeat, isLoading } = useSelector(state => state.music);
	const { handleChangeSong, handlePlayMusic, currentTime, audioRef, handleChangeTime } = usePlayerStore();

	const handleToggleRandom = () => {
		dispatch(toggleRandomSong());
	};

	const handleToggleRepeat = () => {
		dispatch(toggleRepeatSong());
	};

	return (
		<div className="player__control">
			<div className="player__control-btn">
				<div
					className={clsx('control-btn', 'btn-random', 'is-small', {
						active: isRandom,
					})}
					onClick={handleToggleRandom}
				>
					<i className="bi bi-shuffle"></i>
				</div>
				<div className="control-btn btn-prev" onClick={() => handleChangeSong('prev')}>
					<i className="bi bi-skip-start-fill"></i>
				</div>
				<div className="control-btn btn-toggle-play btn--play-song is-medium" onClick={handlePlayMusic}>
					{isLoading ? (
						<LoadingSpinner />
					) : (
						<>
							<i className="bi bi-pause icon-pause"></i>
							<i className="bi bi-play-fill icon-play"></i>
						</>
					)}
				</div>
				<div className="control-btn btn-next" onClick={() => handleChangeSong('next')}>
					<i className="bi bi-skip-end-fill"></i>
				</div>
				<div
					className={clsx('control-btn', 'btn-repeat', 'is-small', 'is-medium', {
						active: isRepeat,
					})}
					onClick={handleToggleRepeat}
				>
					<i className="bi bi-arrow-repeat"></i>
				</div>
			</div>
			<ProgressControl
				isPopupSection={isPopupSection}
				currentTime={currentTime}
				songDuration={audioRef.current?.duration}
				onChangeTime={handleChangeTime}
			/>
		</div>
	);
}

export default PlayerControl;
