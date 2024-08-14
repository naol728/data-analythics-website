import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Analythics from './components/Analythics'
import Newsletter from './components/Newsletter'
import Card from './components/Card';
import Footer from './components/Footer'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Analythics />
    <Newsletter />
    <Card />
    <Footer />
  </React.StrictMode>
)

