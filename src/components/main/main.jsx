import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css'
import { useNavigate } from 'react-router-dom';

const Main = ({ authService }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if(!user) {
        navigate('/');
      }
    })
  })

  return (
    <section className={styles.main}>
      <Header onLogout={onLogout}/>
      <Footer />
    </section>
  )
}
export default Main;