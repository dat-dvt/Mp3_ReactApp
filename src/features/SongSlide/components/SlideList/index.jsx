import { toggleLoadingSlideAndSong } from 'features/PlayerMusic/musicSlice';
import { nextSong } from 'features/PlayMusic/listSongSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SliderItem from '../SlideItem';
import SlideLoadingSpinner from '../SlideLoadingSpinner';
import './SlideList.scss';

function SliderList({ listSlide = [] }) {
	const dispatch = useDispatch();
	const [firstImage, setFirstImage] = useState(0);
	const { isLoadingSlide } = useSelector(state => state.music);

	const handleClickSlide = index => {
		dispatch(toggleLoadingSlideAndSong(true));
		dispatch(nextSong(index));
	};

	useEffect(() => {
		const timerId = setInterval(() => {
			setFirstImage(prev => (prev + 1 >= listSlide.length ? 0 : prev + 1));
		}, 2000);

		return () => clearInterval(timerId);
	}, [listSlide.length]);
	return (
		<div className="container__slide-show">
			{isLoadingSlide && <SlideLoadingSpinner />}
			{listSlide.map(slide => (
				<SliderItem
					key={slide.id}
					imageUrl={slide.imageUrl}
					order={slide.id}
					slideIndex={firstImage}
					slideLength={listSlide.length}
					onClick={handleClickSlide}
				/>
			))}
		</div>
	);
}

export default SliderList;
