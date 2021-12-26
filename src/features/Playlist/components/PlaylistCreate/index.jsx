import React from 'react';
import './PlaylistCreate.scss';

function PlaylistCreate(props) {
	return (
		<div className="row__item  playlist--create item--playlist">
			<div className="row__item-container flex--center item-create--properties">
				<i className="bi bi-plus-lg playlist__create-icon"></i>
				<span className="playlist__create-annotate text-center">
					Tạo playlist mới
				</span>
			</div>
		</div>
	);
}

export default PlaylistCreate;
