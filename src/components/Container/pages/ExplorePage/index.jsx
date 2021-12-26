import { toggleThickenHeader } from 'configSlice';
import Brand from 'features/Brand';
import Event from 'features/EventFeature';
import ExploreSlide from 'features/ExploreSlide';
import FavoriteArtist from 'features/FavoriteArtist';
import Label from 'features/Label';
import NewReleasePlaylist from 'features/NewReleasePlaylist';
import NormalPlaylist from 'features/NormalPlaylist';
import Radio from 'features/Radio';
import SingerSlide from 'features/SingerSlide';
import SpecialPlaylist from 'features/SpecialPlaylist';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ExplorePage.scss';

function ExplorePage() {
	const {
		normalPlaylist,
		specialPlaylist,
		labelList,
		singerSlideList,
		eventList,
		newReleaseList,
		favoriteArtistList,
		brandList,
	} = useSelector(state => state.containerData);

	const dispatch = useDispatch();
	const containerRef = useRef();

	useEffect(() => {
		const containerElement = containerRef.current;
		const handleScrollContainer = e => {
			const scrollTop = e.target.scrollTop;

			dispatch(toggleThickenHeader(scrollTop > 10));
		};

		containerElement.addEventListener('scroll', handleScrollContainer);

		return () => containerElement.removeEventListener('scroll', handleScrollContainer);
		// eslint-disable-next-line
	}, []);

	return (
		<div className="app__container tab--explore" ref={containerRef}>
			<div className="app__container-content">
				<div className="explore__container">
					<div className="grid">
						{/* <!-- Slide --> */}
						<div className="row container__section">
							<div className="col l-12 m-12 c-12">
								<ExploreSlide />
							</div>
						</div>

						{/* <!-- Playlists --> */}
						{normalPlaylist
							.filter((item, index) => index < 3)
							.map(playlist => (
								<NormalPlaylist
									key={playlist.header}
									sectionName={playlist.header}
									playlistList={playlist.playlists}
									optionalClass="mt-30"
									noWrap
								/>
							))}
						<SpecialPlaylist playlistList={specialPlaylist[0]} optionalClass="mt-30" />

						{/* <!-- Radio --> */}
						<Radio sectionName="Radio nổi bật" navigable optionalClass="mt-30" noWrap />

						{/* <!-- Playlist --> */}
						{normalPlaylist
							.filter((item, index) => index >= 3 && index < 5)
							.map((playlist, index) => (
								<NormalPlaylist
									key={playlist.header}
									sectionName={playlist.header}
									playlistList={playlist.playlists}
									optionalClass="mt-30"
									noWrap
								/>
							))}

						{/* <!-- Label --> */}
						<Label labelList={labelList} optionalClass="mt-30" noWrap />

						{/* <!-- Singer slide --> */}
						<SingerSlide singerSlideList={singerSlideList} noWrap />

						{/* <!-- Playlist --> */}
						{normalPlaylist
							.filter((item, index) => index === 5)
							.map(playlist => (
								<NormalPlaylist
									key={playlist.header}
									sectionName={playlist.header}
									playlistList={playlist.playlists}
									optionalClass="mt-30"
									noWrap
								/>
							))}

						{/* <!-- Event --> */}
						<Event eventList={eventList} sectionName="Sự kiện" optionalClass="mt-30" noWrap />

						{/* <!-- Playlist --> */}
						<SpecialPlaylist playlistList={specialPlaylist[1]} optionalClass="mt-30" />

						{/* <!-- New Playlist --> */}
						<NewReleasePlaylist
							optionalClass="mt-30"
							newReleaseList={newReleaseList}
							noWrap
							sectionName="Mới phát hành"
						/>
						{normalPlaylist
							.filter((item, index) => index === 6)
							.map(playlist => (
								<NormalPlaylist
									key={playlist.header}
									playlistList={playlist.playlists}
									optionalClass="mt-30"
									hasAutomaticSlide
									noWrap
								/>
							))}

						{/* <!-- Favorite artist --> */}
						<FavoriteArtist
							optionalClass="mt-30"
							artistList={favoriteArtistList}
							noWrap
							sectionName="Nghệ Sĩ Yêu Thích"
						/>

						{/* <!-- Brand --> */}

						<footer className="container__footer row mt-40">
							<div className="col l-12 m-12 c-12 container__footer-header">
								<span>Đối Tác Âm Nhạc</span>
							</div>
							<div className="col l-12 m-12 c-12 container__footer-brand">
								<Brand brandList={brandList} />
							</div>
						</footer>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExplorePage;
