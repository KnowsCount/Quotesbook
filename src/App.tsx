import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import AddQuote from './AddQuote';
import DisplayQuotes from './DisplayQuotes';
import styles from './App.module.css';

const App: React.FC = () => {
  const [page, setPage] = useState<string>('add');

  return (
    <div className={styles.container}>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"><h1>Quotesbook</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => setPage('add')}><p>Add Quote</p></Nav.Link>
            <Nav.Link onClick={() => setPage('display')}><p id='choices'>Display Quotes</p></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className={styles.content}>
        {page === 'add' ? <AddQuote /> : <DisplayQuotes />}
      </div>
    </div>
  );
};

export default App;
