import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { showSlide } from 'utils';
import AlbumItem from '../AlbumItem';

function AlbumList({ albumList = [], slideIndex = 0, step = 0, noWrap = false, optionalClass = '' }) {
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
			className={clsx('row', 'album--container', {
				'no-wrap': noWrap,
			})}
			ref={containerRef}
		>
			{albumList.map(album => (
				<div
					key={album.name}
					className={clsx('col', 'l-2-4', 'm-3', 'c-4', {
						[optionalClass]: !!optionalClass,
					})}
				>
					<AlbumItem album={album} ref={itemRef} />
				</div>
			))}
		</div>
	);
}

export default AlbumList;
