import React, { forwardRef } from 'react';
import { map } from 'ramda';

import styles from './Select.module.scss';

export default forwardRef(function Select({ options = [], ...props }, ref) {
  return (
    <select
      {...props}
      ref={ref}
      className={styles.select}
    >
      {map((option) => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ), options)}
    </select>
  );
});
