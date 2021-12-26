import React, { forwardRef, useImperativeHandle, useRef } from 'react';

function RadioItem({ radio = {} }, ref) {
	const { image, logo, name, viewers } = radio;
	const itemRef = useRef();

	useImperativeHandle(ref, () => ({
		getWidth() {
			return itemRef.current?.getBoundingClientRect().width;
		},
	}));

	return (
		<div className="row__item item--radio" ref={itemRef}>
			<div className="row__item-container flex--top-left">
				<div className="item--has-attach">
					<svg className="svg row__item-frame" fill="transparent" width="100%" height="100%" viewBox="0 0 100 100">
						<circle
							className="svg-circle-bg"
							stroke="rgba(255, 255, 255, 0.2)"
							cx="50"
							cy="50"
							r="48.75"
							strokeWidth="2.5"
						></circle>
						<circle
							className="svg-circle"
							stroke="#ff4b4a"
							cx="50"
							cy="50"
							r="48.75"
							strokeWidth="2.5"
							strokeDasharray="306.3052837250048"
							strokeDashoffset={Math.random() * 306}
							style={{ transition: 'stroke-dashoffset 850ms ease-in-out 0s' }}
						></circle>
					</svg>
					<div className="row__item-display is-rounded">
						<div
							className="row__item-img img--square is-rounded"
							style={{
								background: `url('${image}') no-repeat center center / contain`,
							}}
						></div>
						<div className="row__item-actions hide-on-mobile">
							<div className="btn--play-playlist">
								<div className="control-btn btn-toggle-play">
									<i className="bi bi-play-fill icon-play"></i>
								</div>
							</div>
						</div>
						<div className="overlay"></div>
					</div>
					<div className="radio__label">LIVE</div>
					<div className="radio__logo is-rounded">
						<div
							className="radio__logo-img"
							style={{
								background: `url('${logo}') no-repeat center center / cover`,
							}}
						></div>
					</div>
				</div>
				<div className="row__item-info media radio--info">
					<div className="media__left">
						<div className="media__info text-center">
							<span className="info__title is-active is-oneline">{name}</span>
							<h3 className="row__info-creator text-center">{viewers} đang nghe</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default forwardRef(RadioItem);
