import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { showSlide } from 'utils';
import MvItem from '../MvItem';

function MvList({ mvList = [], slideIndex = 0, step = 0, noWrap = false, optionalClass = '' }) {
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
			className={clsx('row', 'mv--container', {
				'no-wrap': noWrap,
			})}
			ref={containerRef}
		>
			{mvList.map(mv => (
				<div
					key={mv.name}
					className={clsx('col', 'l-4', 'm-6', 'c-12', {
						[optionalClass]: !!optionalClass,
					})}
				>
					<MvItem mv={mv} ref={itemRef} />
				</div>
			))}
		</div>
	);
}

export default MvList;
