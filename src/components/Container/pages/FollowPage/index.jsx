import { toggleThickenHeader } from 'configSlice';
import Post from 'features/Post';
import SingerSlide from 'features/SingerSlide';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './FollowPage.scss';

function FollowPage() {
	const { singerSlideList } = useSelector(state => state.containerData);
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
		<div className="app__container tab--following" ref={containerRef}>
			<div className="app__container-content">
				<div className="following__container">
					<div className="grid">
						{/* <!-- Following Navbar --> */}
						<div className="following__navbar">
							<div className="following__navbar-container">
								<ul className="following__navbar-menu">
									<li className="following__navbar-item active hide-on-tablet">
										<span>Việt Nam</span>
									</li>
									<li className="following__navbar-item">
										<span>US-UK</span>
									</li>
									<li className="following__navbar-item">
										<span>K-Pop</span>
									</li>
									<li className="following__navbar-item">
										<span>Hoa Ngữ</span>
									</li>
								</ul>
							</div>
						</div>

						{/* <!-- Singer slide --> */}
						<SingerSlide singerSlideList={singerSlideList} noWrap optionalClass="mb-50" />

						{/* <!-- Story posts --> */}
						<Post />
					</div>
				</div>
			</div>
		</div>
	);
}

export default FollowPage;
