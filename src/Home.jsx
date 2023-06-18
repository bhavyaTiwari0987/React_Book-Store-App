import React from "react";
import Navbar from "./components/navbar";
import { Link } from "react-router-dom";
import style from "./public/CSS/Home.module.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className={style.homeContainer}>
        <div className={style.headingBox}>
          <h1>New and Trending</h1>
          <h3>Welcome to Book Store</h3>
          <p>Explore new worlds from authors</p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1539877254216-818ed7c76096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="book"
        />
      </div>
    </div>
  );
};

export default Home;
