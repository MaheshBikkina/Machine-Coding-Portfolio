import { challenges } from "../../data/chanllenges";
import ChallengeCard from "./ChallengeCard";
import "./ChallengeSection.css";
const Challenges = () => {
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
            ></input>
            <select>
              <option>All levels</option>
              <option>Beginners</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div className="challenge-grid">
            {challenges.map((challenge) => (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
              ></ChallengeCard>
            ))}
          </div>
        </div>
      </section>
      {/* right section: recently solved */}
      <section>
        <h2>Recently Solved</h2>
        <p>Revisit your latest machine coding challenges.</p>
      </section>
    </div>
  );
};

export default Challenges;
