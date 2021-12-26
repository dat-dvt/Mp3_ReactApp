import clsx from 'clsx';
import ContainerHeader from 'components/Container/components/ContainerHeader';
import { toggleLoadingSlideAndSong } from 'features/PlayerMusic/musicSlice';
import { changePlaylist } from 'features/PlayMusic/listSongSlice';
import { addToast } from 'features/Toast/toastSlice';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSlideIndex } from 'utils';
import PlaylistList from './components/PlaylistList';

function Playlist({ optionalClass = '', noWrap, sectionName = '', navigable = false }) {
	const dispatch = useDispatch();
	const playlistList = useSelector(state => state.personalPlaylist.list);
	const allPlaylistList = useSelector(state => state.listSong.list);
	const [slideIndex, setSlideIndex] = useState(0);
	const [step, setStep] = useState(5);

	const handleChangePlaylist = index => {
		// Because not enough Playlist so I prevent change to playlist that does not exist, and remove create playlist item
		if (index > allPlaylistList.length) {
			// Except first item - create item
			if (index === 0) return;
			dispatch(
				addToast({
					type: 'info',
					message: 'Please choose 4 updated playlists',
					duration: 3000,
				})
			);
			return;
		}
		dispatch(changePlaylist(index - 1));
		dispatch(toggleLoadingSlideAndSong(true));
	};

	const handleChangeIndex = direction => {
		const stepDirection = direction * step;

		const nextSlideIndex = getSlideIndex(slideIndex, stepDirection, playlistList);

		setSlideIndex(nextSlideIndex);
	};

	useEffect(() => {
		const handleSetStep = e => {
			const windowWidth = e.target.innerWidth;
			if (windowWidth >= 1024) {
				setStep(5);
			} else {
				setStep(4);
			}
		};

		window.addEventListener('resize', handleSetStep);

		return () => window.removeEventListener('resize', handleSetStep);
	}, []);

	return (
		<div
			className={clsx('container__section', 'row', {
				[optionalClass]: !!optionalClass,
			})}
		>
			<div className="col l-12 m-12 c-12 mb-16">
				<ContainerHeader
					onChangeIndex={handleChangeIndex}
					listLength={playlistList.length}
					slideIndex={slideIndex}
					noWrap={noWrap}
					sectionName={sectionName}
					step={step}
					navigable={navigable}
				/>
			</div>
			<div className="col l-12 m-12 c-12">
				<PlaylistList
					playlistList={playlistList}
					slideIndex={slideIndex}
					step={step}
					noWrap={noWrap}
					hasCreateItem
					onChangePlaylist={handleChangePlaylist}
				/>
			</div>
		</div>
	);
}

export default Playlist;
