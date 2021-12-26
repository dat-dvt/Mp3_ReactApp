import clsx from 'clsx';
import DOMPurify from 'dompurify';
import React, { useMemo, useState } from 'react';

function PostItem({ post = {}, index = 0, postIndex = 0 }) {
	const { authorAvatar, content, image, name, time } = post;
	const [heartPrimary, setHeartPrimary] = useState(false);
	const [likeQuantity, setLikeQuantity] = useState(() => Math.floor(Math.random() * 1000));

	const handleTogglePrimary = () => {
		if (heartPrimary) {
			setHeartPrimary(false);
			setLikeQuantity(prev => prev - 1);
		} else {
			setHeartPrimary(true);
			setLikeQuantity(prev => prev + 1);
		}
	};

	const safeContent = DOMPurify.sanitize(content);

	const commentQuantity = useMemo(() => Math.floor(Math.random() * 500), []);
	return (
		<div className="story__item mb-30">
			<div className="story__item-container">
				<div className="story__item-header">
					<div className="row__item-info media story__header-info">
						<div className="media__left">
							<div
								className="media__thumb is-rounded mr-10"
								style={{
									background: `url('${authorAvatar}') no-repeat center center / cover`,
								}}
							></div>
							<div className="media__info">
								<div className="media__info-header">
									<div className="info__title is-active is-oneline">{name}</div>
									<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
									<span className="follow-btn">Quan tâm</span>
								</div>
								<p className="info__time">
									<a href="/" className="is-active">
										{time}
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className="story__header-content">
						<span
							dangerouslySetInnerHTML={{
								__html: safeContent,
							}}
						></span>
					</div>
				</div>
				<div className="row__item-display br-5 story__item-display">
					<div
						className={clsx('story__item-img ', {
							'img--rec': (postIndex === 0 && (index < 2 || index === 4)) || (postIndex === 1 && index === 4),
							'img--rec-vertical': postIndex === 0 && index === 2,
							'img--square': (postIndex === 0 && index === 3) || (postIndex === 1 && index < 4),
						})}
						style={{
							background: `url('${image}') no-repeat center center / cover`,
						}}
					></div>
				</div>
				<div className="story__item-action">
					<div className="action-btn story-btn--heart" onClick={handleTogglePrimary}>
						<i
							className={clsx('btn--icon', 'icon--heart', 'bi', {
								'bi-heart': !heartPrimary,
								'bi-heart-fill': heartPrimary,
								primary: heartPrimary,
							})}
						></i>
						<span className="action__number">{likeQuantity}</span>
					</div>
					<div className="action-btn story-btn--comment">
						<i className="btn--icon icon--comment bi bi-chat-dots"></i>
						<span className="action__number">{commentQuantity}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PostItem;
