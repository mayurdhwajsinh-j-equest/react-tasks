import React from 'react';
import "./Card.css";
import img1 from "../assets/img1.webp";

function Card(props) {
    return (
      <>
      <div className='main-div'>

      <div className='div1'>
        <img src={img1} alt='img' className='img1' />
        <h2 className='h1-cls'>{props.h1Text}</h2>
        <p className='p-cls'>{props.pText}</p>
        <button className='btn-cls' disabled = {props.disabled ? true : false}>{props.btnText}</button>
      </div>

      </div>
      </>  
    );
}

export default Card;