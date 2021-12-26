import clsx from 'clsx';
import ContainerHeader from 'components/Container/components/ContainerHeader';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSlideIndex } from 'utils';
import RadioList from './components/RadioList';
import './Radio.scss';

function Radio({ optionalClass = '', noWrap, sectionName = '', navigable = false }) {
	const { listRadio } = useSelector(state => state.radio);
	const [slideIndex, setSlideIndex] = useState(0);
	const [step, setStep] = useState(7);

	const handleChangeIndex = direction => {
		const stepDirection = direction * step;

		const nextSlideIndex = getSlideIndex(slideIndex, stepDirection, listRadio);

		setSlideIndex(nextSlideIndex);
	};

	useEffect(() => {
		const handleSetStep = e => {
			const windowWidth = e.target.innerWidth;
			if (windowWidth >= 1024) {
				setStep(7);
			} else {
				setStep(5);
			}
		};

		window.addEventListener('resize', handleSetStep);

		return () => window.removeEventListener('resize', handleSetStep);
	}, []);
	return (
		<div
			className={clsx('row', 'container__section', {
				[optionalClass]: optionalClass.length > 0,
			})}
		>
			<div className="col l-12 m-12 c-12 mb-16">
				<ContainerHeader
					onChangeIndex={handleChangeIndex}
					listLength={listRadio.length}
					slideIndex={slideIndex}
					noWrap={noWrap}
					sectionName={sectionName}
					step={step}
					navigable={navigable}
				/>
			</div>
			<div className="col l-12 m-12 c-12">
				<RadioList listRadio={listRadio} slideIndex={slideIndex} step={step} noWrap={noWrap} />
			</div>
		</div>
	);
}

export default Radio;
