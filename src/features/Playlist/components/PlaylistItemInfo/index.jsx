import clsx from 'clsx';
import React from 'react';

function PlaylistItemInfo({ playlist }) {
	const { name = '', creator = '', artists = [], description = '', type = '' } = playlist;
	return (
		<div
			className={clsx('row__item-info', {
				'explore-playlist--info': artists.length > 0 || description.length > 0,
			})}
		>
			{!!name && (
				<span
					className={clsx('row__info-name', {
						'is-oneline': artists.length > 0 || description.length > 0,
						'is-twoline': creator.length > 0 || type === 'BXH' || type === 'podcast',
					})}
				>
					{name}
				</span>
			)}
			{creator.length > 0 && <h3 className="row__info-creator">{creator}</h3>}
			{artists.length > 0 && (
				<p className="info__artist">
					{artists.map((artist, index) => (
						<React.Fragment key={index}>
							<a href="/" className="is-ghost">
								{artist}
							</a>
							{index < artists.length - 1 && ', '}
						</React.Fragment>
					))}
				</p>
			)}

			{description.length > 0 && (
				<p className="info__artist">
					<a href="/" className="is-description">
						{description}
					</a>
				</p>
			)}
		</div>
	);
}

export default PlaylistItemInfo;
