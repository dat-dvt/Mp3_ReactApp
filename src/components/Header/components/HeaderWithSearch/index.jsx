import SearchHistory from 'features/SearchHistory';
import React from 'react';
import HeaderButton from '../HeaderButton';
import './HeaderWithSeach.scss';

function HeaderWithSeach(props) {
  return (
    <div className="header__with-search">
      <HeaderButton icon="bi bi-arrow-left" />
      <HeaderButton icon="bi bi-arrow-right" disabled />

      <SearchHistory />
    </div>
  );
}

export default HeaderWithSeach;
