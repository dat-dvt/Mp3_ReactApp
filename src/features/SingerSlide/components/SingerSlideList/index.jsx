import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { showSlide } from 'utils';
import SingerSlideItem from '../SingerSlideItem';

function SingerSlideList({ singerSlideList = [], slideIndex = 0, step = 0, noWrap = false }) {
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
			className={clsx('row', 'singer-slide--container', {
				'no-wrap': noWrap,
			})}
			ref={containerRef}
		>
			{singerSlideList.map((singerSlide, index) => (
				<SingerSlideItem key={index} singerSlide={singerSlide} ref={itemRef} />
			))}
		</div>
	);
}

export default SingerSlideList;
