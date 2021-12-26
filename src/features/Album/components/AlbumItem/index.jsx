import HeartButton from 'components/IconButton/HeartButton';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';

function AlbumItem({ album }, ref) {
	const { name, image } = album;
	const itemRef = useRef();

	useImperativeHandle(ref, () => ({
		getWidth() {
			return itemRef.current?.getBoundingClientRect().width;
		},
	}));

	return (
		<div className="row__item item--album" ref={itemRef}>
			<div className="row__item-container flex--top-left">
				<div className="row__item-display br-5">
					<div
						className="row__item-img img--square"
						style={{
							background: `url('${image}') no-repeat center center / cover`,
						}}
					></div>
					<div className="row__item-actions">
						<HeartButton primary optionalClass="action-btn" />
						<div className="btn--play-playlist">
							<div className="control-btn btn-toggle-play">
								<i className="bi bi-play-fill"></i>
							</div>
						</div>
						<div className="action-btn">
							<i className="btn--icon bi bi-three-dots"></i>
						</div>
					</div>
					<div className="overlay"></div>
				</div>
				<div className="row__item-info">
					<a href="/" className="row__info-name is-twoline">
						{name}
					</a>
				</div>
			</div>
		</div>
	);
}

export default forwardRef(AlbumItem);
