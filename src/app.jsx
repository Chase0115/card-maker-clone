import React from 'react';
import Login from './components/login/login';
import styles from './app.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main/main';

function App({ FileInput,authService, cardRepository }) {
  return (
  <div className={styles.app}>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login authService={authService} />}/>
      <Route path="/main" element={<Main FileInput={FileInput} authService={authService} cardRepository={cardRepository} />}/>
    </Routes>
    </BrowserRouter>
  </div>
  );
};

export default App;
