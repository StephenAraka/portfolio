import React, { useState, useEffect } from 'react';
import Main from './components/main';
import Header from './components/Header';
import './assets/css/App.css';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollUp';

function App() {
  const [y, setY] = useState(window.scrollY);
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", (e) => setY(window.scrollY));

    return () => { // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => setY(window.scrollY));
    };
  }, [y]);

  return (
    <div className={`wrapper ${isDarkTheme && 'dark-theme'}`}>
      <Header isDark={isDarkTheme} changeTheme={() => setIsDarkTheme(!isDarkTheme)} />
      <Main />
      <Footer />
      {y >= 560 && <ScrollToTop />}
    </div>
  );
}

export default App;
