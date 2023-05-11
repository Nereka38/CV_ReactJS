import React  from 'react';
import './App.css';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import NavBar from './NavBar';
import ScrollUp from './ScrollUp';

function App() {

  return (
   <div id="home">
      <ScrollUp />
      <Header />
      <NavBar />
      <Body />
      <Footer />
   </div>
  );
}

export default App;
