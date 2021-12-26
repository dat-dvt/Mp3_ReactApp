import React from 'react';
import { NavLink } from 'react-router-dom';
import './ContentNavBar.scss';

function ContentNavBar(props) {
	return (
		<div className="content__navbar">
			<div className="content__navbar-container">
				<ul className="content__navbar-menu">
					<li className="content__navbar-item active">
						<NavLink to="." end>
							Tổng quan
						</NavLink>
					</li>
					<li className="content__navbar-item">
						<NavLink to="songs">Bài hát</NavLink>
					</li>
					<li className="content__navbar-item">
						<NavLink to="playlists">Playlist</NavLink>
					</li>
					<li className="content__navbar-item hide-on-mobile">
						<NavLink to="albums">Album</NavLink>
					</li>
					<li className="content__navbar-item">
						<NavLink to="mvs">MV</NavLink>
					</li>
					<li className="content__navbar-item hide-on-mobile">
						<NavLink to="artists">Nghệ sĩ</NavLink>
					</li>
					<li className="content__navbar-item hide-on-tablet-mobile">
						<NavLink to="upload">Tải lên</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default ContentNavBar;
