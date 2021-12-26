import { toggleThickenHeader } from 'configSlice';
import NormalPlaylist from 'features/NormalPlaylist';
import Radio from 'features/Radio';
import SpecialPlaylist from 'features/SpecialPlaylist';
import React, { useEffect, useRef } from 'react';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RadioPage() {
	const { normalPlaylist, specialPlaylist } = useSelector(state => state.containerData);

	const radioNormalPlaylist = useMemo(() => normalPlaylist.filter((x, index) => index === 7), [normalPlaylist]);
	const radioSpecialPlaylist = useMemo(
		() => specialPlaylist.filter((x, index) => index > 1 && index < 5),
		[specialPlaylist]
	);

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
		<div className="app__container tab--radio" ref={containerRef}>
			<div className="app__container-content">
				<div className="radio__container">
					<div className="grid">
						{/* <!-- Radio list --> */}
						<Radio sectionName="Radio nổi bật" optionalClass="mt-30" noWrap />

						{/* <!-- Playlist --> */}
						{radioSpecialPlaylist.map((playlistList, index) => (
							<SpecialPlaylist key={index} playlistList={playlistList} optionalClass="mt-30" />
						))}

						{radioNormalPlaylist.map((playlist, index) => (
							<NormalPlaylist
								key={playlist.header}
								sectionName={playlist.header}
								playlistList={playlist.playlists}
								optionalClass="mt-30"
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default RadioPage;
