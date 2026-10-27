import { challenges } from "../../data/chanllenges";
import ChallengeCard from "./ChallengeCard";
import "./ChallengeSection.css"
const Challenges = () => {
  return (
    <section id="challenges" className="challenge-section">
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
        {challenges.map((challenge)=>(
          <ChallengeCard key={challenge.id} challenge={challenge}></ChallengeCard>
        ))}
      </div>
    </section>
  );
};

export default Challenges;
