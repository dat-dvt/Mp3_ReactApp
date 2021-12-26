import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { showSlide } from 'utils';
import NewReleaseItem from '../NewReleaseItem';

function NewReleaseList({ newReleaseList = [], slideIndex = 0, step = 0, noWrap = false }) {
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
			className={clsx('row', 'new-playlist--container', {
				'no-wrap': noWrap,
			})}
			ref={containerRef}
		>
			{newReleaseList.map((newReleasePlaylist, index) => (
				<div key={index} className="col l-4 m-6 c-12">
					{index < newReleaseList.length - 1 ? (
						<NewReleaseItem key={index} newReleasePlaylist={newReleasePlaylist} ref={itemRef} />
					) : (
						<div key={index} className="row__item item--new-playlist">
							<div className="row__item-container new-song--empty flex--top-left">
								<span>Xem tất cả</span>
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
}

export default NewReleaseList;
