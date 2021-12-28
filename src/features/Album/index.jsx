import clsx from 'clsx';
import ContainerHeader from 'components/Container/components/ContainerHeader';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getSlideIndex } from 'utils';
import AlbumList from './components/AlbumList';

function Album({ optionalClass, sectionName = '', noWrap = false, navigable = false }) {
	const albumList = useSelector(state => state.personalAlbum.list);
	const [slideIndex, setSlideIndex] = useState(0);
	const [step] = useState(5);

	const handleChangeIndex = direction => {
		const stepDirection = direction * step;
		const nextSlideIndex = getSlideIndex(slideIndex, stepDirection, albumList);

		setSlideIndex(nextSlideIndex);
	};

	return (
		<div
			className={clsx('container__section', 'row', {
				[optionalClass]: !!optionalClass,
			})}
		>
			<div className="col l-12 m-12 c-12 mb-16">
				<ContainerHeader
					onChangeIndex={handleChangeIndex}
					listLength={albumList.length}
					slideIndex={slideIndex}
					sectionName={sectionName}
					step={step}
					noWrap={noWrap}
					navigable={navigable}
				/>
			</div>
			<div className="col l-12 m-12 c-12">
				<AlbumList albumList={albumList} slideIndex={slideIndex} step={step} noWrap />
			</div>
		</div>
	);
}

export default Album;
