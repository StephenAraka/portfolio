import React from 'react';
import Main from './components/main';
import Header from './components/common/Header';
import './assets/css/App.css';

function App() {
  return (
    <div className='container-fluid container-all'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
