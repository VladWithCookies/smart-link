import React from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';

export default React.forwardRef(function Input({ className, ...props }, ref) {
  return (
    <input
      {...props}
      ref={ref}
      className={clsx(styles.input, className)}
    />
  );
});
