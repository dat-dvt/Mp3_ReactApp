import ContentNavBar from 'components/Container/components/ContentNavBar';
import { toggleThickenHeader } from 'configSlice';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AppHeader from '../../components/AppHeader';

function PersonalPage() {
	const dispatch = useDispatch();
	const containerRef = useRef();

	useEffect(() => {
		const containerElement = containerRef.current;
		const handleScrollContainer = e => {
			const scrollTop = e.target.scrollTop;

			dispatch(toggleThickenHeader(scrollTop > 10));
		};

		containerElement.addEventListener('scroll', handleScrollContainer);

		return () => containerElement.removeEventListener('scroll', handleScrollContainer);
		// eslint-disable-next-line
	}, []);

	return (
		<div className="app__container tab--personal" ref={containerRef}>
			<AppHeader />

			<div className="content">
				<ContentNavBar />
				<div className="content__container">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default PersonalPage;
