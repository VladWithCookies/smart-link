import clsx from 'clsx';
import React from 'react';

import styles from './Button.module.scss';

export default function Button({
  type = 'button',
  kind,
  onClick,
  children,
  className
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        styles.button,
        kind === 'primary' && styles.button_primary,
        kind === 'danger' && styles.button_danger,
        className
      )}
    >
      {children}
    </button>
  );
}
