import React from 'react';
import './SettingNavigation.scss';

function SettingNavigation() {
  return (
    <div className="setting__nav">
      <div className="setting__item">
        <div className="setting__item-content">
          <i className="bi bi-shield-lock setting__item-icon"></i>
          <span>Danh sách chặn</span>
        </div>
      </div>
      <div className="setting__item">
        <div className="setting__item-content">
          <i className="bi bi-badge-hd setting__item-icon"></i>
          <span>Chất lượng nhạc</span>
        </div>
        <i className="bi bi-chevron-right setting__item-icon"></i>
      </div>
      <div className="setting__item">
        <div className="setting__item-content">
          <i className="bi bi-play-circle setting__item-icon"></i>
          <span>Trình phát nhạc</span>
        </div>
        <i className="bi bi-chevron-right setting__item-icon"></i>
      </div>
    </div>
  );
}

export default SettingNavigation;
