import React from 'react';
import styled from "styled-components"
import './App.css';
import LandingPage from './landingPage';

const NavBar = styled.div`
 display: flex;
 justify-content: space-between;
 padding: 0 20px;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar>
        <img src="https://i.imgur.com/3ei96FN.png" alt="logo" className="logo"/>
          <h1 className="header-links">About</h1>
          <h1 className="header-links">Our Mission</h1>
          <h1 className="header-links">Board of Directors</h1>
          <h1 className="header-links">Contact</h1>
        </NavBar>
        <hr></hr>
      </header>
      <LandingPage />
    </div>
  );
}

export default App;
