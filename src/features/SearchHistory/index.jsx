import React, { useEffect, useState } from 'react';
import SearchHistoryList from './components/SearchHistoryList';
import './SearchHistory.scss';

function SearchHistory() {
  const [searchList, setSearchList] = useState([]);
  useEffect(() => {
    //Call API to get SearchList
    const searchList = [
      {
        id: 1,
        title: 'Tình bạn diệu kì',
      },
      {
        id: 2,
        title: 'Gác lại âu lo',
      },
      {
        id: 3,
        title: 'Hongkong1',
      },
      {
        id: 4,
        title: '#zingchart',
      },
      {
        id: 5,
        title: 'Cheating on You',
      },
      {
        id: 6,
        title: 'BlackJack',
      },
    ];

    setSearchList(searchList);
  }, []);
  return (
    <div className="header__search">
      <input
        type="text"
        placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
        className="header__search-input"
      />
      <div className="header__search-btn">
        <i className="bi bi-search header__search-icon"></i>
      </div>
      <SearchHistoryList searchList={searchList} />
    </div>
  );
}

export default SearchHistory;
