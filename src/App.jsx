// import { useState } from 'react'
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import ChallengeSection from "./components/Challenges/ChallengeSection";
import PreviewModal from "./components/PreviewModal/PreviewModal";
import { useState } from "react";

function App() {
  const [preShow, setPreShow] = useState(false);
  const [project, setProject] = useState({ title: "", demoUrl: "" });

  const handleOpenModal = (preShow, challenge) => {
    setProject((prev) => ({ ...prev, title: challenge.title, demoUrl:challenge.demoUrl }));
    setPreShow(preShow)
  };

  return (
    <>
      <Navbar theme></Navbar>
      <main className="app-main">
        {preShow && (
          <PreviewModal
            setPreShow={setPreShow}
            project={project}
          ></PreviewModal>
        )}
        <Hero></Hero>
        <Stats></Stats>
        <ChallengeSection handleOpenModal={handleOpenModal}></ChallengeSection>
      </main>
    </>
  );
}

export default App;
