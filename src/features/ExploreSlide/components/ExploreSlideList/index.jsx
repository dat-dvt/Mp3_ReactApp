import React from 'react';
import ExploreSlideItem from '../ExploreSlideItem';

function ExploreSlideList({ listSlide = [], firstImage = 0, isReverse = false }) {
	return (
		<>
			{listSlide.map((slide, index) => (
				<ExploreSlideItem
					key={index}
					slide={slide}
					order={index}
					slideIndex={firstImage}
					listSlideLength={listSlide.length}
					isReverse={isReverse}
				/>
			))}
		</>
	);
}

export default ExploreSlideList;
