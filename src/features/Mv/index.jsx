import clsx from 'clsx';
import ContainerHeader from 'components/Container/components/ContainerHeader';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getSlideIndex } from 'utils';
import MvList from './components/MvList';

function Mv({ optionalClass = '', sectionName = '', noWrap = false, navigable = false }) {
	const mvList = useSelector(state => state.personalMv.list);
	const [slideIndex, setSlideIndex] = useState(0);
	const [step] = useState(3);

	const handleChangeIndex = direction => {
		const stepDirection = direction * step;
		const nextSlideIndex = getSlideIndex(slideIndex, stepDirection, mvList);

		setSlideIndex(nextSlideIndex);
	};

	return (
		<div
			className={clsx('container__section', 'row', {
				[optionalClass]: !!optionalClass,
			})}
		>
			<div className="col l-12 m-12 c-12 mb-16">
				<ContainerHeader
					onChangeIndex={handleChangeIndex}
					listLength={mvList.length}
					slideIndex={slideIndex}
					sectionName={sectionName}
					step={step}
					noWrap={noWrap}
					navigable={navigable}
				/>
			</div>
			<div className="col l-12 m-12 c-12">
				<MvList mvList={mvList} slideIndex={slideIndex} step={step} noWrap />
			</div>
		</div>
	);
}

export default Mv;
