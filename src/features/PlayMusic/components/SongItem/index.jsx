import clsx from 'clsx';
import HeartButton from 'components/IconButton/HeartButton';
import MicroButton from 'components/IconButton/MicroButton';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { scrollToActiveSong } from 'utils';
import './SongItem.scss';

function SongItem({ song = [], index = 0, duration, onClick, prevPlaylist, isSongTab }) {
	const isPlaying = useSelector(state => state.music.isPlaying);
	const { name, singers, image } = song;
	const [checked, setChecked] = useState(false);
	const { songIndex: currentIndex, playlistIndex } = useSelector(state => state.listSong);
	const { firstLoading } = useSelector(state => state.config);
	const songRef = useRef();

	const handleClickSong = e => {
		const checkNode = e.target.closest('.playlist__song-check');
		const optionNode = e.target.closest('.playlist__song-option');

		if (index === currentIndex || optionNode || checkNode) return;
		if (onClick) onClick(index);
	};

	useEffect(() => {
		if (prevPlaylist.current !== playlistIndex || firstLoading) {
			const isActiveSong = currentIndex === index;
			isActiveSong && scrollToActiveSong(songRef.current);
		}
		prevPlaylist.current = playlistIndex;
		// eslint-disable-next-line
	}, [playlistIndex]);

	return (
		<div
			className={clsx('playlist__list-song media', {
				active: currentIndex === index || checked,
				playing: isPlaying && currentIndex === index,
			})}
			data-index="0"
			ref={songRef}
			onClick={handleClickSong}
		>
			<div className="playlist__song-info media__left">
				{isSongTab && (
					<>
						<div className="playlist__song-check">
							<input
								value={checked}
								type="checkbox"
								name=""
								onChange={e => setChecked(e.target.checked)}
								id={`playlist__check-${index}`}
								className="mr-10"
								style={{ display: 'none' }}
							/>
							<label htmlFor={`playlist__check-${index}`}></label>
						</div>
						<i className="bi bi-music-note-beamed mr-10"></i>
					</>
				)}
				<div
					className="playlist__song-thumb media__thumb mr-10"
					style={{
						background: `url('${image}') no-repeat center center / cover`,
					}}
				>
					<div className="thumb--animate">
						<div
							className="thumb--animate-img"
							style={{
								background: `url('/assets/img/SongActiveAnimation/icon-playing.gif') no-repeat 50% / contain`,
							}}
						></div>
					</div>
					<div className="play-song--actions">
						<div className="control-btn btn-toggle-play btn--play-song">
							<i className="bi bi-play-fill"></i>
						</div>
					</div>
				</div>
				<div className="playlist__song-body media__info">
					<span className="playlist__song-title info__title">{name}</span>
					<p className="playlist__song-author info__author">
						{singers?.map((singer, index) => (
							<React.Fragment key={singer}>
								<a href="/" className="is-ghost">
									{singer}
								</a>
								{index < singers.length - 1 && ', '}
							</React.Fragment>
						))}
					</p>
				</div>
			</div>
			<span className="playlist__song-time media__content">{duration}</span>
			<div
				className={clsx('playlist__song-option', 'media__right', {
					'song--tab': isSongTab,
				})}
			>
				<MicroButton />
				<HeartButton primary hideOnMobile optionalClass="option-btn" />
				<div
					className={clsx('option-btn', {
						'hide-on-tablet': !isSongTab,
					})}
				>
					<i className="btn--icon bi bi-three-dots"></i>
				</div>
			</div>
		</div>
	);
}

export default SongItem;
