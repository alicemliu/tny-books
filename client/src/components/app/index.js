import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookDetail from './book-detail';
import Header from './header';
import PageNotFound from './page-not-found'
import React from 'react'
import Search from './search';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route path="/book/:isbn" element={<BookDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;