import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { showSlide } from 'utils';
import RadioItem from '../RadioItem';

function RadioList({ listRadio = [], slideIndex = 0, step = 0, noWrap = false }) {
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
			className={clsx('row', 'radio--container', {
				'no-wrap': noWrap,
			})}
			ref={containerRef}
		>
			{listRadio.map((radio, index) => (
				<div key={index} className="col l-1-7 m-2-4 c-3">
					<RadioItem radio={radio} ref={itemRef} />
				</div>
			))}
		</div>
	);
}

export default RadioList;
