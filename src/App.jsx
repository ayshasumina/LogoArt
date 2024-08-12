import React from 'react';

import Header from './Components/Header';
import Features from './Components/Features';
import Footer from './Components/Footer';
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      
      <Header />
      <Features />
      <About/>
      <Footer />
    </div>
  );
}

export default App;
