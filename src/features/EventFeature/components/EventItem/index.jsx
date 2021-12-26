import React from 'react';

function EventItem({ event = {} }) {
	const { action, fanAmount, fans, name, image, time } = event;

	return (
		<div className="row__item item--event">
			<div className="row__item-container flex--top-left">
				<div className="row__item-display br-5">
					<div
						className="row__item-img img--mv"
						style={{ background: `url('${image}') no-repeat center center / cover` }}
					></div>
					<div className="blur"></div>
					<div className="row__item-display-content">
						<div className="display__content-label">Sự Kiện</div>
						<h3 className="display__content-title">{name}</h3>
						<p className="display__content-time">{time}</p>
					</div>
				</div>
				<div className="row__item-info media">
					<div className="media__left">
						<div className="media__info">
							<span className="info__title event--title is-active">Lượt chúc mừng</span>
							<div className="info__avatar">
								{fans.map((fan, index) => (
									<div key={index} className="info__avatar-item">
										<div
											className="info__avatar-img"
											style={{ background: `url('${fan}') no-repeat center center / cover` }}
										></div>
									</div>
								))}

								<div className="info__avatar-item">
									<p className="info__avatar-text">+{fanAmount}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="media__content">
						<button className="button button-primary event__button">
							<span>{action}</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EventItem;
