import clsx from 'clsx';
import React from 'react';
import './ContainerHeaderSpecial.scss';

function ContainerHeaderSpecial({
	onChangeIndex = null,
	listLength = 0,
	slideIndex = 0,
	step = 0,
	noWrap = false,
	header = {},
}) {
	const { explication, image, topicName } = header;
	const handleNextSlide = () => {
		if (onChangeIndex) onChangeIndex(1);
	};

	const handlePrevSlide = () => {
		if (onChangeIndex) onChangeIndex(-1);
	};

	return (
		<div className="container__header special-playlist--header">
			<div className="row__item-info media">
				<div className="media__left">
					<div className="row__item-display br-5">
						<div
							className="row__item-img img--square"
							style={{
								background: `url('${image}') no-repeat center center / cover`,
							}}
						></div>
					</div>
					<div className="media__info special-playlist--info">
						<span className="info__explication">{explication}</span>
						<h3 className="info__topic-name is-active">{topicName}</h3>
					</div>
				</div>
			</div>

			{!!step && noWrap && (
				<div className="container__header-actions hide-on-tablet-mobile">
					<div
						className={clsx('container__move-btn', 'move-btn--playlist', {
							'button--disabled': slideIndex === 0,
						})}
						onClick={handlePrevSlide}
					>
						<i className="bi bi-chevron-left container__move-btn-icon"></i>
					</div>
					<div
						className={clsx('container__move-btn', 'move-btn--playlist', {
							'button--disabled': slideIndex + step >= listLength,
						})}
						onClick={handleNextSlide}
					>
						<i className="bi bi-chevron-right container__move-btn-icon"></i>
					</div>
				</div>
			)}
		</div>
	);
}

export default ContainerHeaderSpecial;
