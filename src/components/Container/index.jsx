import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Container.scss';
import ChartPage from './pages/ChartPage';
import ExplorePage from './pages/ExplorePage';
import FollowPage from './pages/FollowPage';
import PersonalPage from './pages/PersonalPage';
import TabAlbum from './pages/PersonalPage/pages/TabAlbum';
import TabArtist from './pages/PersonalPage/pages/TabArtist';
import TabHome from './pages/PersonalPage/pages/TabHome';
import TabMv from './pages/PersonalPage/pages/TabMv';
import TabPlaylist from './pages/PersonalPage/pages/TabPlaylist';
import TabSong from './pages/PersonalPage/pages/TabSong';
import TabUpload from './pages/PersonalPage/pages/TabUpload';
import RadioPage from './pages/RadioPage';

function Container() {
	return (
		<Routes>
			<Route path="personal/*" element={<PersonalPage />}>
				<Route path="" element={<TabHome />} />
				<Route path="songs" element={<TabSong />} />
				<Route path="playlists" element={<TabPlaylist />} />
				<Route path="albums" element={<TabAlbum />} />
				<Route path="mvs" element={<TabMv />} />
				<Route path="artists" element={<TabArtist />} />
				<Route path="upload" element={<TabUpload />} />
			</Route>
			<Route path="/" element={<ExplorePage />} />
			<Route path="zingChart" element={<ChartPage />} />
			<Route path="radio" element={<RadioPage />} />
			<Route path="follow" element={<FollowPage />} />
		</Routes>
	);
}

export default Container;
