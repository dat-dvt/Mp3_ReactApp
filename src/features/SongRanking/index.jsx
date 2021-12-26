import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SongRankingList from './components/SongRankingList';
import './SongRanking.scss';

function SongRanking() {
	const [showFull, setShowFull] = useState(false);
	const { listSong } = useSelector(state => state.songRanking);
	const [renderList, setRenderList] = useState(() => listSong.filter((x, index) => index < 10));

	const handleShowFull = () => {
		setShowFull(true);
	};

	useEffect(() => {
		if (showFull) setRenderList(listSong);
	}, [showFull, listSong]);
	return (
		<>
			<div className="row no-gutters chart--container mt-10 mb-20">
				<div className=" col l-12 m-12 c-12">
					<SongRankingList listSong={renderList} />
				</div>
			</div>
			{!showFull && (
				<div className="charts__expand">
					<button className="button charts__expand-btn" onClick={handleShowFull}>
						Xem top 100
					</button>
				</div>
			)}
		</>
	);
}

export default SongRanking;
