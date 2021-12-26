import clsx from 'clsx';
import { toggleShowThemeModal } from 'configSlice';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThemeList from './components/ThemeList';
import './ThemeModal.scss';
import { changeTheme } from './themeSlice';

function ThemeModal() {
	const dispatch = useDispatch();
	const { modalListTheme, themeIndex, listThemeIndex } = useSelector(state => state.theme);
	const { isShowThemeModal } = useSelector(state => state.config);
	const prevTheme = useRef({
		themeIndex,
		listThemeIndex,
	});

	const handleCloseThemeModal = () => {
		dispatch(toggleShowThemeModal(false));
		dispatch(changeTheme(prevTheme.current));
	};

	const handleChangeTheme = (themeIndex, listThemeIndex) => {
		const themeInfo = {
			themeIndex,
			listThemeIndex,
		};
		prevTheme.current = themeInfo;
		dispatch(changeTheme(themeInfo));
		dispatch(toggleShowThemeModal(false));
	};

	return (
		<div
			className={clsx('modal-theme', 'grid', {
				open: isShowThemeModal,
			})}
		>
			<div className="modal-container">
				<div className="modal__close-btn" onClick={handleCloseThemeModal}>
					<i className="bi bi-x-lg close close__btn-icon"></i>
				</div>
				<div className="theme__header">
					<h3 className="theme__header-title">Giao Diện</h3>
				</div>
				<div className="theme__content">
					<div className="grid theme__container">
						{modalListTheme.map((listTheme, index) => (
							<ThemeList key={index} listTheme={listTheme} listThemeIndex={index} onChangeTheme={handleChangeTheme} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ThemeModal;
