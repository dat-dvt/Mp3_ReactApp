import clsx from 'clsx';
import ContainerHeader from 'components/Container/components/ContainerHeader';
import PlaylistList from 'features/Playlist/components/PlaylistList';
import { useAutomaticSlide } from 'hooks';
import React from 'react';

function PlaylistAutoSlide({ optionalClass = '', playlistList = [], noWrap, sectionName = '', navigable = false }) {
	const { step, slideIndex, handleChangeIndexByClick } = useAutomaticSlide(playlistList, 5, 4, 3);
	return (
		<div
			className={clsx('container__section', 'row', {
				[optionalClass]: !!optionalClass,
			})}
		>
			{sectionName.length > 0 && (
				<div className="col l-12 m-12 c-12 mb-16">
					<ContainerHeader
						onChangeIndex={handleChangeIndexByClick}
						listLength={playlistList.length}
						slideIndex={slideIndex}
						noWrap={noWrap}
						sectionName={sectionName}
						step={step}
						navigable={navigable}
					/>
				</div>
			)}
			<div className="col l-12 m-12 c-12">
				<PlaylistList playlistList={playlistList} slideIndex={slideIndex} step={step} noWrap={noWrap} />
			</div>
		</div>
	);
}

export default PlaylistAutoSlide;
