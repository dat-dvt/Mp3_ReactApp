import React, { forwardRef, useImperativeHandle, useRef } from 'react';

function MvItem({ mv }, ref) {
	const { author, authorAvatar, image, name, time } = mv;
	const itemRef = useRef();

	useImperativeHandle(ref, () => ({
		getWidth() {
			return itemRef.current?.getBoundingClientRect().width;
		},
	}));

	return (
		<div className="row__item item--mv" ref={itemRef}>
			<div className="row__item-container flex--top-left">
				<div className="row__item-display br-5">
					<div
						className="row__item-img img--mv"
						style={{
							background: `url('${image}') no-repeat center center / cover`,
						}}
					></div>
					<div className="row__item-actions">
						<div className="action-btn mv-btn--close">
							<i className="bi bi-x-lg btn--icon"></i>
						</div>
						<div className="btn--play-playlist">
							<div className="control-btn btn-toggle-play">
								<i className="bi bi-play-fill icon-play"></i>
							</div>
						</div>
					</div>
					<div className="overlay"></div>
					<div className="mv__time">{time}</div>
				</div>
				<div className="row__item-info media">
					<div className="media__left">
						<div
							className="media__thumb is-rounded mr-10"
							style={{
								background: `url('${authorAvatar}') no-repeat center center / cover`,
							}}
						></div>
						<div className="media__info">
							<span className="info__title is-active is-twoline">{name}</span>
							<p className="info__author">
								{author.map((item, index) => (
									<React.Fragment key={index}>
										<a href="/" className="is-ghost">
											{item}
										</a>
										{index < author.length - 1 && ', '}
									</React.Fragment>
								))}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default forwardRef(MvItem);
