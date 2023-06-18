import React from "react";
import { useLocation } from "react-router-dom";
import style from "./public/CSS/BookDetails.module.css";
import Navbar from "./components/navbar";

const BookDetails = (props) => {
  const location = useLocation();
  const data = location.state?.data;

  return (
    <>
      <Navbar />
      <div className={style.detailsContainer}>
        <div className={style.detailCard}>
          <img src={data.imageLink} alt="book" />
          <div>
            <p>Title: {data.title}</p>
            <p>Author: {data.author}</p>
            <p>Country: {data.country}</p>
            <p>Language: {data.language}</p>
            <p>Pages: {data.pages}</p>
            <p>Year: {data.year}</p>
            <p>Price: {data.price}/-</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
