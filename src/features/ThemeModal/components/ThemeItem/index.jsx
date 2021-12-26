import { changeTheme } from 'features/ThemeModal/themeSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import './ThemeItem.scss';

function ThemeItem({ theme = {}, themeIndex = 0, listThemeIndex = 0, onClick }) {
	const dispatch = useDispatch();
	const { name, image } = theme;

	const handleApplyTheme = () => {
		if (onClick) onClick(themeIndex, listThemeIndex);
	};

	const handlePreviewTheme = () => {
		dispatch(changeTheme({ themeIndex, listThemeIndex }));
	};
	return (
		<div className="theme__container-item" data-index="0">
			<div className="theme__item-display row__item-display br-5">
				<div
					className="theme__item-img row__item-img"
					style={{
						background: `url('${image}') no-repeat center center / cover`,
					}}
				></div>
				<div className="overlay"></div>
				<div className="theme__item-actions row__item-actions">
					<button className="button theme__actions-btn btn--apply-theme button-primary" onClick={handleApplyTheme}>
						<span className="theme__btn-title">Áp dụng</span>
					</button>
					<button className="button theme__actions-btn btn--preview hide-on-mobile" onClick={handlePreviewTheme}>
						<span className="theme__btn-title">Xem trước</span>
					</button>
				</div>
			</div>
			<div className="theme__item-info">
				<div className="theme__item-name">{name}</div>
			</div>
		</div>
	);
}

export default ThemeItem;
