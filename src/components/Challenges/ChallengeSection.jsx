
import { useMemo, useState } from "react";
import { challenges } from "../../data/chanllenges";
import ChallengeCard from "./ChallengeCard";
import "./ChallengeSection.css";

const Challenges = ({ handleOpenModal }) => {
  const [input, setInput] = useState("");
  const [difficulty, setDifficulty] = useState("All levels");

  // Filter challenges based on search and difficulty
  const filteredChallenges = useMemo(() => {
    return challenges.filter((challenge) => {
      const searchText = input.toLowerCase().trim();

      const matchesSearch =
        challenge.title.toLowerCase().includes(searchText) ||
        (challenge.topics ?? "").toLowerCase().includes(searchText);

      const matchesDifficulty =
        difficulty === "All levels" ||
        challenge.difficulty === difficulty;

      return matchesSearch && matchesDifficulty;
    });
  }, [input, difficulty]);

  // Reset all filters
  const handleClearFilters = () => {
    setInput("");
    setDifficulty("All levels");
  };

  return (
    <div className="challenges-layout">
      <section id="challenges" className="challenge-section">
        <div className="explore-card">

          <h2>Explore Challenges</h2>

          <div className="challenge-toolbar">
            <input
              type="search"
              placeholder="Search solved questions"
              aria-label="Search challenges"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <select
              aria-label="Filter by difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="All levels">All levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div className="challenge-results">
            Showing {filteredChallenges.length} of {challenges.length} challenges
          </div>

          <div
            className="challenge-grid"
            style={{
              "--challenge-bg": `url("${import.meta.env.BASE_URL}images/ElegantGreenBotanicalCornerSketch.png")`,
            }}
          >
            {filteredChallenges.length > 0 ? (
              filteredChallenges.map((challenge) => (
                <ChallengeCard
                  key={challenge.id}
                  challenge={challenge}
                  handleOpenModal={handleOpenModal}
                />
              ))
            ) : (
              <p className="no-challenges">
                No challenges found. Try changing your search or filters.
              </p>
            )}
          </div>

          {(input || difficulty !== "All levels") && (
            <button
              className="clear-filters"
              onClick={handleClearFilters}
              type="button"
            >
              Clear filters
            </button>
          )}

        </div>
      </section>
    </div>
  );
};

export default Challenges;
