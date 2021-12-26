import clsx from 'clsx';
import ContainerHeaderSpecial from 'components/Container/components/ContainerHeaderSpecial';
import PlaylistList from 'features/Playlist/components/PlaylistList';
import React from 'react';

function SpecialPlaylist({ optionalClass = '', playlistList = [], sectionName = '' }) {
	const { header, playlists } = playlistList;
	return (
		<div
			className={clsx('container__section', 'row', {
				[optionalClass]: !!optionalClass,
			})}
		>
			<div className="col l-12 m-12 c-12 mb-16">
				<ContainerHeaderSpecial header={header} />
			</div>
			<div className="col l-12 m-12 c-12">
				<PlaylistList playlistList={playlists} noWrap />
			</div>
		</div>
	);
}

export default SpecialPlaylist;
