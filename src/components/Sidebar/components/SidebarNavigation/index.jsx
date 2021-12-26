import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarNavigation.scss';

function SidebarNavigation() {
	return (
		<div className="sidebar__nav">
			<ul className="sidebar__nav-list sidebar__nav-list--separate ">
				<li className="sidebar__nav-item active">
					<NavLink to="personal" className="sidebar__item-link">
						<i className="bi bi-music-player"></i>
						<span>Cá Nhân</span>
					</NavLink>
				</li>
				<li className="sidebar__nav-item">
					<NavLink to="." className="sidebar__item-link">
						<i className="bi bi-vinyl"></i>
						<span>Khám Phá</span>
					</NavLink>
				</li>
				<li className="sidebar__nav-item">
					<NavLink to="zingChart" className="sidebar__item-link">
						<i className="bi bi-music-note-list"></i>
						<span>#zingchart</span>
					</NavLink>
				</li>
				<li className="sidebar__nav-item">
					<NavLink to="radio" className="sidebar__item-link">
						<i className="bi bi-soundwave"></i>
						<span>Radio</span>
						<div className="sidebar__nav-label">LIVE</div>
					</NavLink>
				</li>
				<li className="sidebar__nav-item">
					<NavLink to="follow" className="sidebar__item-link">
						<i className="bi bi-file-earmark-slides"></i>
						<span>Theo Dõi</span>
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default SidebarNavigation;
