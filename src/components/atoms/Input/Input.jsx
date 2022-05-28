import React, { forwardRef } from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';

export default forwardRef(function Input({ kind, className, ...props }, ref) {
  return (
    <input
      {...props}
      ref={ref}
      className={clsx(styles.input, kind === 'error' && styles.input_error, className)}
    />
  );
});
