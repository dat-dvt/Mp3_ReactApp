import clsx from 'clsx';
import React from 'react';
import './HeaderButton.scss';

function HeaderButton({ icon, disabled }) {
  return (
    <button
      className={clsx('header__button', {
        'button--disabled': disabled,
      })}
    >
      <i className={clsx(icon, 'header__button-icon')}></i>
    </button>
  );
}

export default HeaderButton;
