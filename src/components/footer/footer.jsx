import React from 'react';
import styles from './footer.module.css'

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <p className={styles.author}>Made by DevChase</p>
    </div>
  )
};

export default Footer;