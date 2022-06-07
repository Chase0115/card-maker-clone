import React from 'react';
import './app.css';
import Login from './components/login/login';
import Main from './components/main/main';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/main">Main</Link>
      <Outlet />
    </div>
  )
};

export default App;
