import React from 'react';

import styles from './MainLayout.module.scss';

export default function MainLayout({ children }) {
  return (
    <main className={styles.wrapper}>
      {children}
    </main>
  );
}
