import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Explore from './components/Explore';
import Create from './components/Create';
import Share from './components/Share';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <RegistrationForm />
      <Home />
      <Explore />
      <Create />
      <Share />
     
      <Footer />
    </>
  );
}

export default App;
