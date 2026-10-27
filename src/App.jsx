// import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';

function App() {

  return (
    <>
    <Navbar></Navbar>
    <main>
      <Hero></Hero>
      <Stats></Stats>
    </main>
    </>
  )
}

export default App
