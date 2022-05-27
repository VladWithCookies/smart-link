import React from 'react';
import { map } from 'ramda';

import styles from './Select.module.scss';

export default React.forwardRef(function Select({ options = [], ...props }, ref) {
  return (
    <select
      {...props}
      ref={ref}
      className={styles.select}
    >
      {map(({ value, label }) => (
        <option
          key={value}
          value={value}
        >
          {label}
        </option>
      ), options)}
    </select>
  );
});
