import React from 'react';

import styles from './Fieldset.module.scss';

export default function Fieldset({ children }) {
  return (
    <fieldset className={styles.fieldset}>
      {children}
    </fieldset>
  );
}
