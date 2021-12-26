import React, { forwardRef, useImperativeHandle, useRef } from 'react';

function ArtistItem({ artist }, ref) {
	const { followers, image, name } = artist;
	const itemRef = useRef();

	useImperativeHandle(ref, () => ({
		getWidth() {
			return itemRef.current?.getBoundingClientRect().width;
		},
	}));

	return (
		<div className="row__item item--artist" ref={itemRef}>
			<div className="row__item-container flex--top-left">
				<div className="row__item-display is-rounded">
					<div
						className="row__item-img img--square is-rounded"
						style={{
							background: `url('${image}') no-repeat center center / contain`,
						}}
					></div>
					<div className="row__item-actions">
						<div className="btn--play-playlist">
							<div className="control-btn btn-toggle-play">
								<i className="bi bi-play-fill icon-play"></i>
							</div>
						</div>
					</div>
					<div className="overlay"></div>
				</div>
				<div className="row__item-info media artist--info">
					<div className="media__left">
						<div
							href="#"
							className="row__info-name is-ghost mt-15 lh-19 text-center"
						>
							{name}&nbsp;
							<i className="bi bi-star-fill row__info-icon">
								<div className="icon-overlay"></div>
							</i>
						</div>
						<h3 className="row__info-creator text-center">
							{followers} quan tâm
						</h3>
					</div>
				</div>
				<div className="row__item-btn">
					<button className="button is-small button-primary">
						<i className="bi bi-check2"></i>
						<span>&nbsp;Đã quan tâm</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default forwardRef(ArtistItem);
