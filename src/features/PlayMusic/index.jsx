import ContainerPlayMusicHeader from 'components/Container/components/ContainerPlayMusicHeader';
import SongSlide from 'features/SongSlide';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { currentListSongSelector } from 'selectors/ListSongSelector';
import SongList from './components/SongList';
import './PlayMusic.scss';

function PlayMusic() {
	const listSong = useSelector(currentListSongSelector);
	const [device, setDevice] = useState(() => {
		const windowWidth = window.innerWidth;
		let device;
		if (windowWidth < 740) {
			device = 'mobile';
		}

		return device;
	});

	useEffect(() => {
		const handleDetectDevice = e => {
			const windowWidth = e.target.innerWidth;
			let device;
			if (windowWidth < 740) {
				device = 'mobile';
			} else {
				device = 'notMobile';
			}
			setDevice(device);
		};

		window.addEventListener('resize', handleDetectDevice);

		return () => window.removeEventListener('resize', handleDetectDevice);
	}, []);

	return (
		<div className="container__control row">
			<div className="col l-12 m-12 c-12 mb-10">
				<ContainerPlayMusicHeader />
			</div>
			<div className="col l-12 m-12 c-12">
				<div className="container__playmusic">
					{device !== 'mobile' && <SongSlide />}
					<div className="container__playlist">
						<SongList listSong={listSong} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default PlayMusic;
