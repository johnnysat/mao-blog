import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Feed from './components/Feed/Feed';
import Footer from './components/Footer/Footer'


function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Feed />
      <Footer />
    </div>
  )
}

export default App
