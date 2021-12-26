import SongList from 'features/PlayMusic/components/SongList';
import React from 'react';
import { useSelector } from 'react-redux';
import { currentListSongSelector } from 'selectors/ListSongSelector';

function TabSong() {
	const listSong = useSelector(currentListSongSelector);

	return (
		<div className="grid container__tab tab-song mb-30">
			<div className="row no-gutters">
				<div className="col l-12 m-12 c-12">
					<div className="container__header mb-10">
						<div className="container__header-title">
							<h3>Bài Hát&nbsp;</h3>
						</div>
						<h3 className="container__header-subtitle">Bài Hát</h3>
						<div className="container__header-actions">
							<div className="button is-small container__header-btn hide-on-mobile">
								<input type="file" name="upload song" id="song__upload-input" className="container__header-input" />
								<label htmlFor="song__upload-input">
									<i className="bi bi-upload container__header-icon"></i>
									Tải lên
								</label>
							</div>
							<button className="button is-small button-primary container__header-btn btn--play-all">
								<i className="bi bi-play-fill container__header-icon"></i>
								<span>Phát tất cả</span>
							</button>
						</div>
					</div>
				</div>
				<div className=" col l-12 m-12 c-12">
					<div className="container__playlist">
						<div className="playlist__header mt-5">
							<span className="playlist__header-title">Bài hát</span>
							<span className="playlist__header-time">Thời gian</span>
						</div>
						<SongList listSong={listSong} isSongTab />
					</div>
				</div>
			</div>
		</div>
	);
}

export default TabSong;
