// AddQuote.tsx
import React, { useState } from 'react';
import styles from './AddQuote.module.css';

type Quote = {
  quote: string;
  author: string;
};

const AddQuote: React.FC = () => {
  const [quote, setQuote] = useState<Quote>({ quote: '', author: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const quotes = JSON.parse(localStorage.getItem('quotes') || '[]');
    quotes.push(quote);
    localStorage.setItem('quotes', JSON.stringify(quotes));
    setQuote({ quote: '', author: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Quote:
        <textarea
          className={styles.input}
          value={quote.quote}
          onChange={(e) => setQuote({ ...quote, quote: e.target.value })}
          required
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          className={styles.input}
          value={quote.author}
          onChange={(e) => setQuote({ ...quote, author: e.target.value })}
          required
        />
      </label>
      <button type="submit" className={styles.button}>Add Quote</button>
    </form>
  );
};

export default AddQuote;
