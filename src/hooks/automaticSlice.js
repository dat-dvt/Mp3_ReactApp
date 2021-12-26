import { useEffect, useRef, useState } from 'react';
import { getSlideIndex } from 'utils';

export const useAutomaticSlide = (list, laptopQuantity, tabletQuantity, mobileQuantity) => {
	const [slideIndex, setSlideIndex] = useState(0);
	const timerId = useRef();
	const [isReverse, setIsReverse] = useState(false);

	const [step, setStep] = useState(() => {
		const windowWidth = window.innerWidth;
		let initStep;
		if (windowWidth >= 1024) {
			initStep = laptopQuantity;
		} else if (windowWidth < 1024 && windowWidth >= 740) {
			initStep = tabletQuantity;
		} else {
			initStep = mobileQuantity;
		}
		return initStep;
	});

	const handleChangeIndex = direction => {
		const stepDirection = direction * step;
		setSlideIndex(prev => {
			const nextSlideIndex = getSlideIndex(prev, stepDirection, list);
			if (nextSlideIndex + stepDirection >= list.length) {
				setIsReverse(true);
			} else if (nextSlideIndex === 0) {
				setIsReverse(false);
			}

			return nextSlideIndex;
		});
	};

	const resetSlideLoop = () => {
		clearInterval(timerId.current);
		timerId.current = setInterval(handleAutomaticSlide, 4000);
	};

	const handleChangeIndexByClick = direction => {
		handleChangeIndex(direction);
		resetSlideLoop();
	};

	const handleAutomaticSlide = () => {
		if (isReverse) {
			handleChangeIndex(-1);
		} else {
			handleChangeIndex(1);
		}
	};

	useEffect(() => {
		timerId.current = setInterval(handleAutomaticSlide, 4000);

		return () => clearInterval(timerId.current);
		// eslint-disable-next-line
	}, [step, isReverse]);

	useEffect(() => {
		const handleSetStep = e => {
			const windowWidth = e.target.innerWidth;
			if (windowWidth >= 1024) {
				setStep(laptopQuantity);
			} else if (windowWidth < 1024 && windowWidth >= 740) {
				setStep(tabletQuantity);
			} else {
				setStep(mobileQuantity);
			}
		};
		window.addEventListener('resize', handleSetStep);

		return () => window.removeEventListener('resize', handleSetStep);
		// eslint-disable-next-line
	}, []);

	return { step, slideIndex, handleChangeIndexByClick };
};
