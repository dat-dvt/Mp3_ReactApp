import clsx from 'clsx';
import HeartButton from 'components/IconButton/HeartButton';
import React, { useMemo, useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import './PlayerSongInfo.scss';

function PlayerSongInfo({ currentSong = {}, isPopupSection }) {
	const { name, image, singers } = currentSong;
	const [titleWidth, setTitleWidth] = useState(0);
	const titleAnimateRef = useRef();
	const { isPlaying } = useSelector(state => state.music);

	useEffect(() => {
		const titleRect = titleAnimateRef.current.getBoundingClientRect();
		setTitleWidth(titleRect.width / 2);
	}, [titleAnimateRef.current?.offsetWidth, name]);

	const titleAnimate = useMemo(() => {
		const titleAnimate = titleAnimateRef.current?.animate(
			[{ transform: 'translate(0px)' }, { transform: `translateX(-${titleWidth}px)` }],
			{
				duration: 21 * titleWidth,
				iterations: Infinity,
			}
		);

		titleAnimate?.pause();
		return titleAnimate;
	}, [titleWidth]);
	useEffect(() => {
		if (isPlaying) {
			titleAnimate?.play();
		}
	}, [isPlaying, titleAnimate]);

	return (
		<div
			className={clsx('player__container-song', {
				'hide-on-mobile': isPopupSection,
			})}
		>
			<div
				className={clsx('player__song-info', 'media', {
					playing: isPlaying,
				})}
			>
				<div className="media__left">
					<div className="player__song-thumb media__thumb">
						<div
							className="thumb-img"
							style={{
								background: `url(${image}) no-repeat center center / cover`,
							}}
						></div>
						<svg fill="#fff" viewBox="0 0 512 512" className="thumb-note note-1">
							<path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
						</svg>
						<svg fill="#fff" viewBox="0 0 384 512" className="thumb-note note-2">
							<path d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"></path>
						</svg>
						<svg fill="#fff" viewBox="0 0 512 512" className="thumb-note note-3">
							<path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path>
						</svg>
						<svg fill="#fff" viewBox="0 0 384 512" className="thumb-note note-4">
							<path d="M310.94 1.33l-96.53 28.51A32 32 0 0 0 192 60.34V360a148.76 148.76 0 0 0-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0 0 23-30.71V32a32 32 0 0 0-41.06-30.67z"></path>
						</svg>
					</div>
				</div>
				<div className="media__content">
					<div className="player__song-body media__info">
						<div className="player__song-title info__title" style={{ width: `${titleWidth}px` }}>
							<div className="player__title-animate" ref={titleAnimateRef}>
								<div className="title__item">{name}</div>
								<div className="title__item">{name}</div>
							</div>
						</div>
						<div className="player__song-author info__author">
							{singers?.map((singer, index) => (
								<React.Fragment key={singer}>
									<a href="/" className="is-ghost">
										{singer}
									</a>
									{index < singers.length - 1 && ', '}
								</React.Fragment>
							))}
						</div>
					</div>
				</div>
				<div className="media__right hide-on-tablet-mobile">
					<div className="player__song-options">
						<HeartButton primary optionalClass="option-btn" />
						<div className="player__song-btn option-btn">
							<i className="btn--icon bi bi-three-dots"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PlayerSongInfo;
