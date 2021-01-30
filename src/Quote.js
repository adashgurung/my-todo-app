import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Quote.css";

function Quote() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const getQuote = async () =>
      await fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((data) => {
          setQuote(data[Math.floor(Math.random() * (data.length + 1))]);
        });
    setInterval(() => {
      getQuote();
    }, 5000);

    getQuote();
  }, []);

  return (
    <div className="quote">
      <p className="quote__text">{quote.text}</p>
      <small>
        <i className="quote__author"> {quote.author}</i>
      </small>
    </div>
  );
}

export default Quote;
