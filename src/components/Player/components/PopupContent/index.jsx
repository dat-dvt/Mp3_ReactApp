import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { currentSongSelector } from 'selectors/ListSongSelector';

function PopupContent() {
	const { isPlaying } = useSelector(state => state.music);
	const { image, name, singers } = useSelector(currentSongSelector);
	const cdThumbRef = useRef();
	const cdAnimateRef = useRef();

	useEffect(() => {
		cdAnimateRef.current = cdThumbRef.current.animate([{ transform: 'rotate(360deg)' }], {
			duration: 15000, // 10000 seconds
			iterations: Infinity,
		});
	}, []);

	useEffect(() => {
		if (isPlaying) {
			cdAnimateRef.current.play();
		} else {
			cdAnimateRef.current.pause();
		}
	}, [isPlaying]);

	return (
		<>
			<div className="player__popup-cd-display">
				<div
					className="player__popup-cd-img"
					style={{
						background: `url('${image}') no-repeat center center / cover`,
					}}
					ref={cdThumbRef}
				></div>
			</div>
			<div className="player__popup-cd-info">
				<h4>Now playing</h4>
				<h2 className="is-twoline">{name}</h2>
				<h3>
					{singers.map((singer, index) => (
						<React.Fragment key={index}>
							<a href="/" className="is-ghost">
								{singer}
							</a>
							{index < singers.length - 1 && ', '}
						</React.Fragment>
					))}
				</h3>
			</div>
		</>
	);
}

export default PopupContent;
