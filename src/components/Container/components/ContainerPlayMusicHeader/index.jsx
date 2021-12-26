import React from 'react';
import './ContainerPlayMusicHeader.scss';

function ContainerPlayMusicHeader() {
	return (
		<div className="container__header">
			<a href="/" className="container__header-title">
				<h3>Bài Hát&nbsp;</h3>
				<i className="bi bi-chevron-right container__header-icon"></i>
			</a>
			<h3 className="container__header-subtitle">Bài Hát</h3>
			<div className="container__header-actions">
				<div className="button is-small container__header-btn hide-on-mobile">
					<input
						type="file"
						name="upload song"
						id="home__upload-input"
						className="container__header-input"
					/>
					<label htmlFor="home__upload-input">
						<i className="bi bi-upload container__header-icon"></i>
						&nbsp;Tải lên
					</label>
				</div>
				<button className="button is-small button-primary container__header-btn btn--play-all">
					<i className="bi bi-play-fill container__header-icon"></i>
					<span>Phát tất cả</span>
				</button>
			</div>
		</div>
	);
}

export default ContainerPlayMusicHeader;
