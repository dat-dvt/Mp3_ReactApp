export function getSlideIndex(currentIndex, step, list) {
	const maxIndex = list.length - 1;
	let nextIndex = currentIndex + step;

	const remainingItems = maxIndex - nextIndex + 1;
	if (step > 0 && remainingItems < step) {
		nextIndex = maxIndex - step + 1;
	} else if (step < 0 && nextIndex < 0) {
		nextIndex = 0;
	}

	return nextIndex;
}

export function showSlide(currentIndex, container, itemWidth) {
	if (container) container.scrollLeft = itemWidth * currentIndex;
}
