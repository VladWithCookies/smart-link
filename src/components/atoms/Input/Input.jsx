import React from 'react';

export default React.forwardRef(function Input(props, ref) {
  return (
    <input ref={ref} {...props} />
  );
});
