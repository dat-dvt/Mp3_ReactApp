import React from 'react';
import './SearchHistoryList.scss';

function SearchHistoryList({ searchList = [] }) {
	const handleClickSearchHistory = e => {
		e.preventDefault();
	};
	return (
		<div className="header__search-history" onMouseDown={handleClickSearchHistory}>
			<ul className="header__search-list">
				{searchList.map(searchItem => (
					<li className="header__search-item" key={searchItem.id}>
						<i className="bi bi-search header__item-icon"></i>
						<a href="/" className="header__item-link">
							{searchItem.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SearchHistoryList;
