import React from 'react';
import './AppHeader.scss';

function AppHeader(props) {
	return (
		<div className="app__header">
			<div
				className="app__header-bg"
				style={{
					background: "url('/assets/img/avatars/avatar.jpg') no-repeat center center / cover",
				}}
			></div>
			<div className="app__header-overlay"></div>
			<div className="app__header-container">
				<div className="app__header-user">
					<div className="app__user-avatar">
						<img src="/assets/img/avatars/avatar.jpg" alt="" className="app__user-img" />
					</div>
					<span className="app__user-name">Trần Huyền My</span>
				</div>
				<div className="app__header-actions">
					<a href="/" className="vip-btn is-small button button-gold hide-on-mobile">
						Mua vip ngay
					</a>
					<a href="/" className="vip-code-btn is-small button hide-on-tablet-mobile">
						Nhập code vip
					</a>
					<a href="/" className="app__header-options options--log-out hide-on-mobile">
						<i className="bi bi-three-dots"></i>
						<div className="option__log-out">
							<i className="bi bi-box-arrow-right log-out__icon"></i>
							<span>Đăng xuất</span>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}

export default AppHeader;
