import clsx from 'clsx';
import React from 'react';
import './ContainerHeader.scss';

function ContainerHeader({
	onChangeIndex,
	listLength = 0,
	slideIndex = 0,
	step = 0,
	sectionName = '',
	navigable = false,
	noWrap = false,
}) {
	const handleNextSlide = () => {
		if (onChangeIndex) onChangeIndex(1);
	};

	const handlePrevSlide = () => {
		if (onChangeIndex) onChangeIndex(-1);
	};

	return (
		<div className="container__header">
			{navigable ? (
				<>
					<a href="/" className="container__header-title">
						<h3>{sectionName}&nbsp;</h3>
						<i className="bi bi-chevron-right container__header-icon"></i>
					</a>
				</>
			) : (
				<div className="container__header-title">
					<h3>{sectionName}&nbsp;</h3>
				</div>
			)}

			<h3 className="container__header-subtitle">{sectionName}</h3>
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

export default ContainerHeader;
