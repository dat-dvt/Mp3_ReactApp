import React from 'react';
import SongRankingItem from '../SongRankingItem';

function SongRankingList({ listSong = [] }) {
	return (
		<div className="container__playlist">
			<div className="playlist__list-charts overflow-visible">
				{listSong.map(song => (
					<SongRankingItem key={song.name} song={song} />
				))}
			</div>
		</div>
	);
}

export default SongRankingList;
