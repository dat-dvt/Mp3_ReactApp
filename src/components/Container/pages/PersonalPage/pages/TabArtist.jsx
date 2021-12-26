import ArtistList from 'features/Artist/components/ArtistList';
import React from 'react';
import { useSelector } from 'react-redux';

function TabArtist() {
	const artistList = useSelector(state => state.personalArtist.list);

	return (
		<div className="grid container__tab tab-artist">
			<div className="container__section row">
				<div className="col l-12 m-12 c-12 mb-10">
					<div className="container__header">
						<div className="container__header-title">
							<h3>Nghệ Sĩ&nbsp;</h3>
						</div>
					</div>
				</div>
				<div className="col l-12 m-12 c-12">
					<ArtistList artistList={artistList} optionalClass="mb-30" />
				</div>
			</div>
		</div>
	);
}

export default TabArtist;
