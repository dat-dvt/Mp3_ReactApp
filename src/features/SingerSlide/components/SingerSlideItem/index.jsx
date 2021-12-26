import React, { forwardRef, useImperativeHandle, useRef } from 'react';

function SingerSlideItem({ singerSlide = {} }, ref) {
	const { image } = singerSlide;
	const itemRef = useRef();

	useImperativeHandle(ref, () => ({
		getWidth() {
			return itemRef.current?.getBoundingClientRect().width;
		},
	}));

	return (
		<div className="col l-2-4 m-3 c-4 row-item singer__slide-item" ref={itemRef}>
			<div className="row__item-display">
				<div
					className="singer__slide-img img--singer-slide"
					style={{
						background: `url('${image}') no-repeat center center / cover`,
					}}
				></div>
			</div>
		</div>
	);
}

export default forwardRef(SingerSlideItem);
