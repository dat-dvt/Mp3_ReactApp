import clsx from 'clsx';
import React from 'react';

function SongRankingItem({ song = {} }) {
	const { image, name, singers, rank, time } = song;
	return (
		<div className="playlist__list-song media">
			<div className="playlist__song-info media__left">
				<div className="playlist__song-rank">
					<div
						className={clsx('playlist__rank-number', {
							'is-outline--blue': Number.parseInt(rank) === 1,
							'is-outline--green': Number.parseInt(rank) === 2,
							'is-outline--red': Number.parseInt(rank) === 3,
							'is-outline--text': Number.parseInt(rank) > 3,
						})}
					>
						{rank}
					</div>
					<div className="playlist__rank-icon">
						<i className="bi bi-dash-lg"></i>
					</div>
				</div>
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
								background: `url('./assets/img/SongActiveAnimation/icon-playing.gif') no-repeat 50% / contain`,
							}}
						></div>
					</div>
					<div className="play-song--actions">
						<div className="control-btn btn-toggle-play">
							<i className="bi bi-play-fill"></i>
						</div>
					</div>
				</div>
				<div className="playlist__song-body media__info">
					<span className="playlist__song-title info__title">{name}</span>
					<p className="playlist__song-author info__author">
						{singers.map((singer, index) => (
							<React.Fragment key={index}>
								<a href="/" className="is-ghost">
									{singer}
								</a>
								{index < singers.length - 1 && ', '}
							</React.Fragment>
						))}
					</p>
				</div>
			</div>
			<span className="playlist__song-time media__content">{time}</span>
			<div className="playlist__song-option song--tab media__right hide-on-mobile">
				<div className="playlist__song-btn btn--mic option-btn">
					<i className="btn--icon song__icon bi bi-mic-fill"></i>
				</div>
				<div className="playlist__song-btn btn--heart option-btn">
					<i className="btn--icon song__icon icon--heart bi bi-heart-fill primary"></i>
				</div>
				<div className="playlist__song-btn option-btn">
					<i className="btn--icon bi bi-three-dots"></i>
				</div>
			</div>
		</div>
	);
}

export default SongRankingItem;
