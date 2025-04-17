import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Event from './Components/Event';
import DateBox from './Components/DateBox';
import Help from './Components/Help';
import Payment from './Components/Payment';
import Notes from './Components/Notes';
import Login from './Components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <Navbar />
          <Main />
          <Event />
          <DateBox />
          <Notes />
          <Payment />
          <Help />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
