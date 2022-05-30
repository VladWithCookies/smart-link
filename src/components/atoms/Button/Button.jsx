import clsx from 'clsx';
import React from 'react';

import styles from './Button.module.scss';

export default function Button({
  type = 'button',
  kind,
  children,
  className,
  dataTestId,
  as: Component = 'button',
  ...props
}) {
  return (
    <Component
      {...props}
      type={type}
      data-testid={dataTestId}
      className={clsx(
        styles.button,
        kind === 'primary' && styles.button_primary,
        kind === 'danger' && styles.button_danger,
        className
      )}
    >
      {children}
    </Component>
  );
}
