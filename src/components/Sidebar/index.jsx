import clsx from 'clsx';
import React, { useState } from 'react';
import { useEffect } from 'react';
import SidebarSubNavigation from './components/SidbarSubNavigation';
import SidebarNavigation from './components/SidebarNavigation';
import './Sidebar.scss';

Sidebar.propTypes = {};

function Sidebar() {
	const [expandSidebar, setExpandSidebar] = useState(false);

	const handleExpandSidebar = () => {
		setExpandSidebar(true);
	};

	const handleShrinkSidebar = e => {
		const appSidebar = e.target.closest('.app__sidebar');
		if (appSidebar) return;
		setExpandSidebar(false);
	};

	useEffect(() => {
		document.addEventListener('click', handleShrinkSidebar);
		return () => document.removeEventListener('click', handleShrinkSidebar);
	}, []);
	return (
		<div
			className={clsx('app__sidebar', {
				expand: expandSidebar,
			})}
		>
			<div className="sidebar__logo hide-on-mobile">
				<a href="/" className="sidebar__logo-link">
					<img src="/assets/img/logos/main-logo.svg" alt="Logo" className="sidebar__logo-img" />
					<img src="/assets/img/logos/small-logo.svg" alt="Logo" className="sidebar__small-logo" />
				</a>
			</div>

			<SidebarNavigation />
			<SidebarSubNavigation />

			<div className="sidebar__create-playlist">
				<div className="sidebar__create-container hide-on-tablet-mobile">
					<i className="bi bi-plus-lg"></i>
					<h2 className="sidebar__create-title">Tạo playlist mới</h2>
				</div>
				<div className="sidebar__expand">
					<div className="sidebar__expand-btn btn--expand" onClick={handleExpandSidebar}>
						<i className="bi bi-chevron-right"></i>
					</div>
					<div className="sidebar__expand-btn btn--shrink" onClick={() => setExpandSidebar(false)}>
						<i className="bi bi-chevron-left"></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
