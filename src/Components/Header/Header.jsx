// Header.jsx

import React from 'react';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <h1>
          ToDo
        </h1>
      </div>
    </header>
  );
};

export default Header;
