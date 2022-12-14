import React, { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css'
import { useNavigate } from "react-router-dom";

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const goToMain = (userId) => {
    navigate('/main', {state:{id:userId}})
    };
  

  const onLogin = (event) => {
    authService
    .login(event.currentTarget.textContent)
    .then(data => goToMain(data.user.uid));
  }

  useEffect(() => {
    authService
    .onAuthChange(user => {
      user && goToMain(user.uid);
    });
  })

  return (
    <section className={styles.login}>
      <Header/>
        <section>
          <h1>Login</h1>
          <ul className={styles.list}>
            <li className={styles.list}>
              <button className={styles.button} onClick={onLogin}>Google</button>
            </li>            
            <li className={styles.list}>
              <button className={styles.button} onClick={onLogin}>Github</button>
            </li>
          </ul>
        </section>
      <Footer/>
    </section>
  );
}

export default Login;