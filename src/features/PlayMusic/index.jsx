import ContainerPlayMusicHeader from 'components/Container/components/ContainerPlayMusicHeader';
import SongSlide from 'features/SongSlide';
import React from 'react';
import { useSelector } from 'react-redux';
import { currentListSongSelector } from 'selectors/ListSongSelector';
import SongList from './components/SongList';
import './PlayMusic.scss';

function PlayMusic() {
	const listSong = useSelector(currentListSongSelector);

	return (
		<div className="container__control row">
			<div className="col l-12 m-12 c-12 mb-10">
				<ContainerPlayMusicHeader />
			</div>
			<div className="col l-12 m-12 c-12">
				<div className="container__playmusic">
					<SongSlide />
					<div className="container__playlist">
						<SongList listSong={listSong} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default PlayMusic;
