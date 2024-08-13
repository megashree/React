import React from 'react';
import Movie from './Components/Movie/Movie.js';
import Navbar1 from './Components/Navbar/Navbar'
export function App(props) {
  return (
    <div className='App'>
      <Navbar1/>
      <Movie/>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

// Log to console
console.log('Hello console');
