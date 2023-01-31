import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsPage from './components/pages/ProductsPage';
import DetailPage from './components/pages/DetailPage';
import LoginPage from './components/pages/LoginPage';
import AboutUsPage from './components/pages/AboutUsPage';
import UpdateMovie from './components/pages/UpdateMovie';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage />} />
           
        <Route path="/movies" element={<ProductsPage />} />
        <Route path="/movies/:id" element={<DetailPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/movies/update/:id" element={<UpdateMovie/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
