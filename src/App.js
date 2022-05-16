import React, { useState, useEffect } from 'react';
import Main from './components/main';
import Header from './components/Header';
import './assets/css/App.css';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollUp';

const themeColors = ['#57e085', '#576ee0', '#6e57e0', '#e05785'];

function App() {
  const [y, setY] = useState(window.scrollY);
  const [themeColor, setThemeColor] = useState('#57e085');
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", (e) => setY(window.scrollY));

    return () => { // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => setY(window.scrollY));
    };
  }, [y]);

  const hexToNameCol = (hexCol) => {
    let nameCol;

    switch (hexCol) {
      case '#576ee0':
        nameCol = 'blue';
        break;

      case '#6e57e0':
        nameCol = 'purple';
        break;

      case '#e05785':
        nameCol = 'pink';
        break;

      default:
        nameCol = 'green'
        break;
    }

    return nameCol;
  }

  const changeColor = (color) => {
    setThemeColor(color);
  }

  return (
    <div className={`wrapper${isDarkTheme ? ' dark-theme' : ''} ${hexToNameCol(themeColor)}`}>
      <Header
        activeColor={themeColor}
        themeColors={themeColors}
        changeColor={changeColor}
        isDark={isDarkTheme}
        changeTheme={() => setIsDarkTheme(!isDarkTheme)}
      />
      <Main />
      <Footer />
      {y >= 560 && <ScrollToTop />}
    </div>
  );
}

export default App;
