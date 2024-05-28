import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<App/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);
