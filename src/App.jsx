import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import ChallengeSection from "./components/Challenges/ChallengeSection";
import PreviewModal from "./components/PreviewModal/PreviewModal";
import FooterSection from "./components/Footer/FooterSection";
import ContactSection from "./components/Contact/ContactSection";
import About from "./components/About/About";

function App() {
  const [activePage, setActivePage] = useState("home");

  const [preShow, setPreShow] = useState(false);
  const [project, setProject] = useState({
    title: "",
    demoUrl: "",
  });

  const handleOpenModal = (preShow, challenge) => {
    setProject({
      title: challenge.title,
      demoUrl: challenge.demoUrl,
    });
    setPreShow(preShow);
  };

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <About />;

      case "challenges":
        return (
          <>
            <Stats />
            <ChallengeSection handleOpenModal={handleOpenModal} />
          </>
        );

      case "projects":
        return (
          <div className="placeholder-page">Projects page coming soon.</div>
        );

      case "contact":
        return <ContactSection />;

      case "home":
      default:
        return <Hero setActivePage={setActivePage} />;
    }
  };

  return (
    <>
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <>
        <main className="app-main">
          <Navbar activePage={activePage} setActivePage={setActivePage} />

          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              className="page-content"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.45 }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>

          <FooterSection />
        </main>

        {preShow && <PreviewModal setPreShow={setPreShow} project={project} />}
      </>
    </>
  );
}

export default App;
