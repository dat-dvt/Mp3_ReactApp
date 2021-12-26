import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { currentListSongSelector } from 'selectors/ListSongSelector';
import SliderList from './components/SlideList';
import './SongSlide.scss';

function SongSlide() {
	const listSong = useSelector(currentListSongSelector);

	const listSongSlide = useMemo(() => {
		if (!listSong) {
			return;
		}
		return listSong.map((song, index) => ({
			id: index,
			imageUrl: song.image,
		}));
	}, [listSong]);

	return (
		<div className="container__slide hide-on-mobile">
			<SliderList listSlide={listSongSlide} />
		</div>
	);
}

export default SongSlide;
