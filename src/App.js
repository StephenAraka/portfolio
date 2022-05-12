import React from 'react';
import Main from './components/main';
import Header from './components/Header';
import './assets/css/App.css';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollUp';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
