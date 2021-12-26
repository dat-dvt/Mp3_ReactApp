import clsx from 'clsx';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { currentSongDuration } from 'selectors/ListSongSelector';
import { formatAudioTime } from 'utils';
import './ProgressControl.scss';

function ProgressControl(props) {
	const { currentTime, songDuration, onChangeTime, isPopupSection } = props;
	const [isSeeking, setIsSeeking] = useState(false);
	const prevSeeking = useRef(false);
	const currentDuration = useSelector(currentSongDuration);
	const [progressValue, setProgressValue] = useState(0);

	const handleChangeProgress = e => {
		if (songDuration) setProgressValue(e.target.value);
	};

	const handleChangeTime = e => {
		setIsSeeking(false);
		const currentTime = (e.target.value * songDuration) / 100;
		if (onChangeTime && songDuration) onChangeTime(currentTime);
	};

	const progressWidth = useMemo(() => {
		const width =
			isSeeking || prevSeeking.current ? progressValue : Math.round((currentTime / songDuration) * 100) || 0;

		return width;
	}, [isSeeking, currentTime, songDuration, progressValue]);

	const formatTime = useMemo(() => {
		const songTime = isSeeking || prevSeeking.current ? (progressValue * songDuration) / 100 || 0 : currentTime;

		return formatAudioTime(songTime);
	}, [isSeeking, currentTime, songDuration, progressValue]);

	useEffect(() => {
		prevSeeking.current = isSeeking;
	}, [isSeeking]);

	return (
		<div
			className={clsx('progress-block', {
				'hide-on-mobile': !isPopupSection,
			})}
		>
			<span className="tracktime">{formatTime}</span>
			<input
				value={progressValue}
				id={isPopupSection ? 'progress--pop-up' : 'progress--main'}
				className="progress"
				type="range"
				step="1"
				min="0"
				max="100"
				onChange={handleChangeProgress}
				onMouseDown={() => setIsSeeking(true)}
				onTouchStart={() => setIsSeeking(true)}
				onMouseUp={handleChangeTime}
				onTouchEnd={handleChangeTime}
			/>
			<div className="progress__track song--track">
				<div className="progress__track-update" style={{ width: `${progressWidth}%` }}></div>
			</div>
			<span className="durationtime">{currentDuration}</span>
		</div>
	);
}

export default ProgressControl;
