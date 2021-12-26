import clsx from 'clsx';
import React from 'react';
import SettingNavigation from '../SettingNavigation';
import SettingSubNavigation from '../SettingSubNavigation';
import './SettingMenu.scss';

function SettingMenu({ open }) {
	const handleClickMenu = e => {
		e.stopPropagation();
	};
	return (
		<div
			className={clsx('setting__menu', {
				open: open,
			})}
			onClick={handleClickMenu}
		>
			<SettingNavigation />
			<SettingSubNavigation />
		</div>
	);
}

export default SettingMenu;
