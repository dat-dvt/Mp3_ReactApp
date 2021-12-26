import { editConfig } from 'configSlice';
import { toggleLoadingSlideAndSong, toggleLoadingSong, togglePlaySong } from 'features/PlayerMusic/musicSlice';
import { getNewIndex, getRandomIndex } from 'features/PlayerMusic/utils';
import { nextSong } from 'features/PlayMusic/listSongSlice';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentListSongSelector, currentSongSelector } from 'selectors/ListSongSelector';
import PlayerContext from './PlayerContext';

function PlayerProvider({ children }) {
	const dispatch = useDispatch();

	const { isPlaying, isRandom, isRepeat, isLoading, volume: volumePercent } = useSelector(state => state.music);
	const { firstLoading } = useSelector(state => state.config);
	const { songIndex, playlistIndex } = useSelector(state => state.listSong);
	const listSong = useSelector(currentListSongSelector);
	const currentSong = useSelector(currentSongSelector);
	const { config } = useSelector(state => state.config);
	const [currentTime, setCurrentTime] = useState(0);

	const randomIndexArray = useRef([]);

	const audioRef = useRef();
	const handlePlayMusic = () => {
		if (!isPlaying) {
			audioRef.current?.play();
		} else {
			audioRef.current?.pause();
		}
		dispatch(togglePlaySong(!isPlaying));
	};

	const handleChangeSong = direction => {
		if (isPlaying) {
			dispatch(toggleLoadingSong(true));
		}

		let newSongIndex;
		if (isRandom) {
			newSongIndex = getRandomIndex(listSong, songIndex, randomIndexArray);
		} else {
			newSongIndex = getNewIndex(listSong, songIndex, direction);
		}
		dispatch(nextSong(newSongIndex));
		dispatch(togglePlaySong(true));
	};

	const handleEndSong = () => {
		isRepeat ? audioRef.current.play() : handleChangeSong('next');
	};

	const handleHideLoading = () => {
		if (audioRef.current.duration) {
			dispatch(toggleLoadingSlideAndSong(false));
		}
		setCurrentTime(audioRef.current.currentTime);
	};

	const handleChangeTime = currentTime => {
		audioRef.current.currentTime = currentTime;
	};

	useEffect(() => {
		//Prevent auto play in the first loading
		if (firstLoading) return;

		// Play song when dependencies change
		if (isPlaying) {
			dispatch(togglePlaySong(true));
			audioRef.current.play();
		}

		// eslint-disable-next-line
	}, [songIndex, isLoading, playlistIndex]);

	useEffect(() => {
		const volumeValue = volumePercent / 100;
		audioRef.current.volume = volumeValue;
	}, [volumePercent]);

	// Save config
	useEffect(() => {
		const newConfig = { ...config };
		newConfig['songIndex'] = songIndex;
		newConfig['playlistIndex'] = playlistIndex;
		newConfig['isRandom'] = isRandom;
		newConfig['isRepeat'] = isRepeat;
		newConfig['volume'] = volumePercent;

		dispatch(editConfig(newConfig));
		// eslint-disable-next-line
	}, [songIndex, playlistIndex, isRandom, isRepeat, volumePercent]);

	const providerValue = {
		handleChangeSong,
		handlePlayMusic,
		currentTime,
		audioRef,
		handleChangeTime,
	};
	return (
		<PlayerContext.Provider value={providerValue}>
			{children}
			<audio
				ref={audioRef}
				id="audio"
				src={currentSong.path}
				onTimeUpdate={handleHideLoading}
				onEnded={handleEndSong}
			></audio>
		</PlayerContext.Provider>
	);
}

export default PlayerProvider;
