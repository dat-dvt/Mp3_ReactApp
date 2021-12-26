import React from 'react';
import './SettingSubNavigation.scss';

function SettingSubNavigation() {
  return (
    <div className="setting__subnav">
      <div className="setting__item">
        <div className="setting__item-content">
          <i className="bi bi-exclamation-circle setting__item-icon"></i>
          <span>Giới thiệu</span>
        </div>
      </div>
      <div className="setting__item">
        <div className="setting__item-content">
          <i className="bi bi-flag setting__item-icon"></i>
          <span>Góp ý</span>
        </div>
      </div>
      <div className="setting__item">
        <div className="setting__item-content">
          <i className="bi bi-telephone setting__item-icon"></i>
          <span>Liên hệ</span>
        </div>
      </div>
      <div className="setting__item">
        <div className="setting__item-content">
          <i className="bi bi-badge-ad setting__item-icon"></i>
          <span>Quảng cáo</span>
        </div>
      </div>
      <div className="setting__item">
        <div className="setting__item-content">
          <i className="bi bi-file-text setting__item-icon"></i>
          <span>Thỏa thuận sử dụng</span>
        </div>
      </div>
    </div>
  );
}

export default SettingSubNavigation;
