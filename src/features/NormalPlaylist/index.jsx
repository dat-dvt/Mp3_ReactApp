import clsx from 'clsx';
import ContainerHeader from 'components/Container/components/ContainerHeader';
import PlaylistList from 'features/Playlist/components/PlaylistList';
import React from 'react';

function NormalPlaylist({ optionalClass = '', playlistList = [], sectionName = '', noWrap = false }) {
	return (
		<div
			className={clsx('container__section', 'row', {
				[optionalClass]: !!optionalClass,
			})}
		>
			{sectionName.length > 0 && (
				<div className="col l-12 m-12 c-12 mb-16">
					<ContainerHeader sectionName={sectionName} />
				</div>
			)}
			<div className="col l-12 m-12 c-12">
				<PlaylistList playlistList={playlistList} noWrap={noWrap} />
			</div>
		</div>
	);
}

export default NormalPlaylist;
