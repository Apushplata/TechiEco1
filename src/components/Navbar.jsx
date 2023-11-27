import React from 'react';
import Modal from './Modal';
import logo from "../Assets/TE.png"
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav>
      <div className="logo_sec">
        <img src={logo} alt="" />
      </div>
      <main className="navbar">
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About us</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/contact"}>Contact</Link>
      </main>
      <div>
        <button className="btn_signup">SignUp</button>
        <Modal/>
      </div>
    </nav>
  )
}

export default Navbar