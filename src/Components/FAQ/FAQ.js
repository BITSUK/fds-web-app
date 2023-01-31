import React, { useState } from "react";
import './FAQ.css';
import {Link, useNavigate } from "react-router-dom";

export default function FAQ() {
    const [questions, setQuestions] = useState([
      {question: "How to Order food delivery in train", answer: "Enter PNR, Pick Restaurant, Create Order, Pay, Get Delivered"},
      {question: "How will customer know that his order is booked", answer: "Will recieve an Message confirmation "},
      {question: "Who delivers the food to the customer on train", answer: "The Delivery Agent"}
    ]);
  
  return (
    <div className="faq-container">
      <Link to="/" className="btn btn-info" role="button">Back</Link>
      <h1 className="faq-title">FAQS on FOOD ORDERS IN TRAINS</h1>
      <ul className="faq-list">
        {questions.map((item, index) => (
          <li className="faq-item" key={index}>
            <h3 className="faq-question">{item.question}</h3>
            <p className="faq-answer">{item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
