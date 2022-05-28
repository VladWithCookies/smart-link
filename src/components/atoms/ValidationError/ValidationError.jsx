import React from 'react';

import styles from './ValidationError.module.scss';

export default function ValidationError({ children, ariaDescribedBy }) {
  return (
    <p
      className={styles.error}
      aria-describedby={ariaDescribedBy}
    >
      {children}
    </p>
  );
}
