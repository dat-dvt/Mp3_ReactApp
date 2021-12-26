import clsx from 'clsx';
import React, { useMemo } from 'react';
import './SlideItem.scss';

function SliderItem(props) {
	const { imageUrl, order, slideIndex, slideLength, onClick } = props;
	const secondSlideIndex = useMemo(() => {
		return slideIndex + 1 >= slideLength ? slideIndex + 1 - slideLength : slideIndex + 1;
	}, [slideIndex, slideLength]);

	const thirdSlideIndex = useMemo(() => {
		return slideIndex + 2 >= slideLength ? slideIndex + 2 - slideLength : slideIndex + 2;
	}, [slideIndex, slideLength]);

	const handleClickSlide = () => {
		if (onClick) onClick(order);
	};

	return (
		<div
			className={clsx('container__slide-item', {
				first: order === slideIndex,
				second: order === secondSlideIndex,
				third: order === thirdSlideIndex,
				fourth: order !== slideIndex && order !== secondSlideIndex && order !== thirdSlideIndex,
			})}
			onClick={handleClickSlide}
		>
			<div
				style={{
					background: `url("${imageUrl}") no-repeat center center / cover`,
				}}
				className="container__slide-img"
			/>
		</div>
	);
}

export default SliderItem;
