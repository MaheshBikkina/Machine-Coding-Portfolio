// import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import ChallengeSection from './components/Challenges/ChallengeSection'
import PreviewModal from './components/PreviewModal/PreviewModal';
import { useState } from 'react';

function App() {
  const [preShow, setPreShow] = useState(false);

  return (
    <>
    <Navbar></Navbar>
    <main className='app-main'>
      {preShow && <PreviewModal setPreShow = {setPreShow}></PreviewModal>}
      <Hero></Hero>
      <Stats></Stats>
      <ChallengeSection setPreShow={setPreShow}></ChallengeSection>
    </main>
    </>
  )
}

export default App
