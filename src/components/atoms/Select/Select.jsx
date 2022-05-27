import React from 'react';
import { map } from 'ramda';

export default React.forwardRef(function Select({ options = [], ...props }, ref) {
  return (
    <select
      ref={ref}
      {...props}
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
