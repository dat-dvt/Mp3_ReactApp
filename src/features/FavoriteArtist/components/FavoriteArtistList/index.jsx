import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { showSlide } from 'utils';
import FavoriteArtistItem from '../FavoriteArtistItem';

function FavoriteArtistList({ artistList = [], slideIndex = 0, step = 0, noWrap = false }) {
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
			className={clsx('row', 'fav-artist--container', {
				'no-wrap': noWrap,
			})}
			ref={containerRef}
		>
			{artistList.map((artist, index) => (
				<div key={index} className="col l-4 m-6 c-12">
					<FavoriteArtistItem key={index} artist={artist} ref={itemRef} />
				</div>
			))}
		</div>
	);
}

export default FavoriteArtistList;
