import clsx from 'clsx';
import { useAutomaticSlide } from 'hooks';
import React from 'react';
import SingerSlideList from './components/SingerSlideList';
import './SingerSlide.scss';

function SingerSlide({ optionalClass = '', singerSlideList = [], noWrap }) {
	const { step, slideIndex, handleChangeIndexByClick } = useAutomaticSlide(singerSlideList, 5, 4, 3);
	return (
		<div
			className={clsx('row', 'container__section', {
				[optionalClass]: optionalClass.length > 0,
			})}
		>
			<div className="col l-12 m-12 c-12 singer__slide-row">
				<SingerSlideList singerSlideList={singerSlideList} slideIndex={slideIndex} step={step} noWrap={noWrap} />
				<div className="singer__slide-move hide-on-mobile">
					<div
						className={clsx('slide__move-btn', 'btn--prev', {
							'button--disabled': slideIndex === 0,
						})}
						onClick={() => handleChangeIndexByClick(-1)}
					>
						<i className="bi bi-chevron-left"></i>
					</div>
					<div
						className={clsx('slide__move-btn', 'btn--next', {
							'button--disabled': slideIndex + step >= singerSlideList.length,
						})}
						onClick={() => handleChangeIndexByClick(1)}
					>
						<i className="bi bi-chevron-right"></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SingerSlide;
