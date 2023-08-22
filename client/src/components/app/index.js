import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
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
        <Route exact path="/" element={<Navigate replace to="/books" />} />
        <Route path="/books" element={<Search />} />
        <Route path="/books/:isbn" element={<BookDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;