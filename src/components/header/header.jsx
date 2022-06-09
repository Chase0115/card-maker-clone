import React from 'react';
import styles from './header.module.css'

const Header = (props) => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src="./images/logo.png" alt="Logo image" />
      <p className={styles.title}>Business Card Maker</p>
    </div>
  )
}

export default Header;