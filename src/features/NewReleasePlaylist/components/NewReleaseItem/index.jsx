import React, { forwardRef, useImperativeHandle, useRef } from 'react';

function NewReleaseItem({ newReleasePlaylist = {} }, ref) {
	const { image, name, order, singers, time } = newReleasePlaylist;
	const itemRef = useRef();

	useImperativeHandle(ref, () => ({
		getWidth() {
			return itemRef.current?.getBoundingClientRect().width;
		},
	}));

	return (
		<div className="row__item item--new-playlist" ref={itemRef}>
			<div className="row__item-container flex--top-left">
				<div className="row__item-display br-5">
					<div
						className="row__item-img img--square"
						style={{
							background: `url('${image}') no-repeat center center / cover`,
						}}
					></div>
					<div className="row__item-actions">
						<div className="btn--play-new-playlist">
							<div className="control-btn btn-toggle-play">
								<i className="bi bi-play-fill"></i>
							</div>
						</div>
					</div>
					<div className="overlay"></div>
				</div>
				<div className="row__item-info new-playlist--info">
					<span className="row__info-name is-twoline">{name}</span>
					<h3 className="row__info-creator">
						{singers.map((singer, index) => (
							<React.Fragment key={index}>
								<a href="/" className="is-ghost">
									{singer}
								</a>
								{index < singers.length - 1}
							</React.Fragment>
						))}
					</h3>
					<div className="row__item-detail">
						<div className="info__detail-order">#{order}</div>
						<div className="info__detail-time">{time}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default forwardRef(NewReleaseItem);
