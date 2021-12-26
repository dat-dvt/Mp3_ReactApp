import clsx from 'clsx';
import ContainerHeader from 'components/Container/components/ContainerHeader';
import { useAutomaticSlide } from 'hooks';
import React from 'react';
import FavoriteArtistList from './components/FavoriteArtistList';
import './FavoriteArtist.scss';

function FavoriteArtist({ optionalClass = '', artistList = [], noWrap, sectionName = '', navigable = false }) {
	const { step, slideIndex, handleChangeIndexByClick } = useAutomaticSlide(artistList, 3, 2, 1);
	return (
		<div
			className={clsx('row', 'container__section', {
				[optionalClass]: optionalClass.length > 0,
			})}
		>
			<div className="col l-12 m-12 c-12 mb-16">
				<ContainerHeader
					onChangeIndex={handleChangeIndexByClick}
					listLength={artistList.length}
					slideIndex={slideIndex}
					noWrap={noWrap}
					sectionName={sectionName}
					step={step}
					navigable={navigable}
				/>
			</div>
			<div className="col l-12 m-12 c-12">
				<FavoriteArtistList artistList={artistList} slideIndex={slideIndex} step={step} noWrap={noWrap} />
			</div>
		</div>
	);
}

export default FavoriteArtist;
