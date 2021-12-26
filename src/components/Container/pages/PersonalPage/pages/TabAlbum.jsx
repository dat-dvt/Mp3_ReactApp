import AlbumList from 'features/Album/components/AlbumList';
import React from 'react';
import { useSelector } from 'react-redux';

function TabAlbum(props) {
	const albumList = useSelector(state => state.personalAlbum.list);
	return (
		<div className="grid container__tab tab-album">
			<div className="container__section row">
				<div className="col l-12 m-12 c-12 mb-16">
					<div className="container__header">
						<div className="container__header-title">
							<h3>Album&nbsp;</h3>
						</div>
					</div>
				</div>
				<div className="col l-12 m-12 c-12">
					<AlbumList albumList={albumList} optionalClass="mb-30" />
				</div>
			</div>
		</div>
	);
}

export default TabAlbum;
