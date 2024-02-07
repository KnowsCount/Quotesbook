import React, { useState, useEffect } from 'react';
import styles from './DisplayQuotes.module.css';

type Quote = {
  quote: string;
  author: string;
};

const DisplayQuotes: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const savedQuotes = JSON.parse(localStorage.getItem('quotes') || '[]');
    setQuotes(savedQuotes);
  }, []);

  const handleDelete = (index: number) => {
    const newQuotes = [...quotes];
    newQuotes.splice(index, 1);
    localStorage.setItem('quotes', JSON.stringify(newQuotes));
    setQuotes(newQuotes);
  };

  return (
    <div className={styles.container}>
      {quotes
        .sort((a, b) => a.author.localeCompare(b.author))
        .map((quote, index) => (
          <div key={index} className={styles.quote}>
            <p>
              "{quote.quote}" - <b>{quote.author}</b>
            </p>
            <button onClick={() => handleDelete(index)} className={styles.button}>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default DisplayQuotes;
