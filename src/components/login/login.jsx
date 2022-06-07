
import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

const Login = () => {
  return (
    <section>
      <header>
        <img src="/logo.png" alt="Logo" />
        <p>Busines Card Maker</p>
      </header>
      <div>
        <p>Login</p>
        <button>Google</button>
        <button>Github</button>
      </div>
      <footer>
        code by Chase
      </footer>
      <NavLink to={"/login"} />
      <Outlet />
    </section>
  )
};

export default Login;