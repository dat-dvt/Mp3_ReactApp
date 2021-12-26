import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { showSlide } from 'utils';
import ArtistItem from '../ArtistItem';

function ArtistList({ artistList = [], slideIndex = 0, step = 0, noWrap = false, optionalClass = '' }) {
	const itemRef = useRef();
	const containerRef = useRef();

	useEffect(() => {
		const itemContentWidth = itemRef.current?.getWidth();
		const totalWidth = containerRef.current.offsetWidth;

		const paddingWidth = Math.round((totalWidth - itemContentWidth * step) / step / 2);

		const totalItemWidth = itemContentWidth + paddingWidth * 2;

		showSlide(slideIndex, containerRef.current, totalItemWidth);
	}, [slideIndex, step]);

	return (
		<div
			className={clsx('row', 'artist--container', {
				'no-wrap': noWrap,
			})}
			ref={containerRef}
		>
			{artistList.map(artist => (
				<div
					key={artist.name}
					className={clsx('col', 'l-2-4', 'm-3', 'c-6', {
						[optionalClass]: !!optionalClass,
					})}
				>
					<ArtistItem artist={artist} ref={itemRef} />
				</div>
			))}
		</div>
	);
}

export default ArtistList;
