import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import HeaderNavigation from './components/HeaderNavigation';
import HeaderWithSeach from './components/HeaderWithSearch';
import './Header.scss';

function Header() {
	const { isThickenHeader } = useSelector(state => state.config);
	return (
		<header
			className={clsx('header', 'grid', {
				'is-thicken': isThickenHeader,
			})}
		>
			<HeaderWithSeach />
			<HeaderNavigation />
		</header>
	);
}

export default Header;
