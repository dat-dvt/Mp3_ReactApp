import React from 'react';
import ThemeItem from '../ThemeItem';
import './ThemeList.scss';

function ThemeList({ listTheme = [], listThemeIndex = 0, onChangeTheme }) {
	const { type, themes } = listTheme;

	const handleChangeTheme = (themeIndex, listThemeIndex) => {
		if (onChangeTheme) onChangeTheme(themeIndex, listThemeIndex);
	};

	return (
		<div className="row sm-gutter theme__list">
			<div className="col l-12 m-12 c-12">
				<div className="theme__container-info">
					<h3 className="theme__info-name">{type}</h3>
				</div>
			</div>

			{themes.map((theme, index) => (
				<div key={index} className="col l-2 m-4 c-6 mb-20">
					<ThemeItem theme={theme} themeIndex={index} listThemeIndex={listThemeIndex} onClick={handleChangeTheme} />
				</div>
			))}
		</div>
	);
}

export default ThemeList;
