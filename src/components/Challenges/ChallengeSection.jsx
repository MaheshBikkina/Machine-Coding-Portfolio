import { useState } from "react";
import { challenges } from "../../data/chanllenges";
import ChallengeCard from "./ChallengeCard";
import "./ChallengeSection.css";
const Challenges = ({handleOpenModal}) => {
  const [input, setInput] = useState('');
  const [difficulty, setDifficulty] = useState('All levels')

  const handleSearchInput = (value) => {
    setInput(value)
  };

    const filteredChallenges = challenges.filter((challenge)=>{
    const matchesSearch = challenge.title.toLowerCase().includes(input.toLowerCase());
    const matchesDifficulty = difficulty === 'All levels'|| challenge.difficulty === difficulty;
    return matchesSearch && matchesDifficulty;
  })

  return (
    <div className="challenges-layout">
      {/* left Section : Explore Challenges */}
      <section id="challenges" className="challenge-section">
        <div className="explore-card">
          <h2>Explore Challenges</h2>
          <div className="challenge-toolbar">
            <input
              type="search"
              placeholder="Search solved questions"
              aria-label="Search Challenge"
              value={input}
              onChange={(e)=>handleSearchInput(e.target.value)}
            ></input>
            <select
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option>All levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div className="challenge-grid">
            {filteredChallenges.map((challenge) => (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                handleOpenModal={handleOpenModal}
              ></ChallengeCard>
            ))}
            {filteredChallenges.length == 0 && <p>No Challenges found</p>}
          </div>
        </div>
      </section>
      {/* right section: recently solved */}
      {/* <section>
        <h2>Recently Solved</h2>
        <p>Revisit your latest machine coding challenges.</p>
      </section> */}
    </div>
  );
};

export default Challenges;
