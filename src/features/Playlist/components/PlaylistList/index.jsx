import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { showSlide } from 'utils';
import PlaylistCreate from '../PlaylistCreate';
import PlaylistItem from '../PlaylistItem';

function PlaylistList({
	playlistList = [],
	slideIndex = 0,
	step = 0,
	noWrap = false,
	hasCreateItem = false,
	onChangePlaylist = null,
}) {
	const itemRef = useRef();
	const containerRef = useRef();

	const handleChangePlaylist = index => {
		if (onChangePlaylist) onChangePlaylist(index);
	};

	useEffect(() => {
		const itemContentWidth = itemRef.current?.getWidth();
		const totalWidth = containerRef.current.offsetWidth;

		const paddingWidth = Math.round((totalWidth - itemContentWidth * step) / step / 2);

		const totalItemWidth = itemContentWidth + paddingWidth * 2;

		showSlide(slideIndex, containerRef.current, totalItemWidth);
	}, [slideIndex, step]);

	return (
		<div
			className={clsx('row', {
				'no-wrap': noWrap,
			})}
			ref={containerRef}
		>
			{playlistList.map((playlist, index) => (
				<div
					key={index}
					className={clsx('col', 'l-2-4', 'm-3', 'c-4 ', {
						'mb-30': !noWrap,
					})}
				>
					{hasCreateItem && index === 0 ? (
						<PlaylistCreate />
					) : (
						<PlaylistItem
							playlistIndex={index}
							playlist={playlist}
							ref={itemRef}
							onChangePlaylist={handleChangePlaylist}
						/>
					)}
				</div>
			))}
		</div>
	);
}

export default PlaylistList;
