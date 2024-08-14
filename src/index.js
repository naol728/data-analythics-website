import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Analythics from './components/Analythics'
import Newsletter from './components/Newsletter'
import Card from './components/Card';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Analythics />
    <Newsletter />
    <Card />
  </React.StrictMode>
)

