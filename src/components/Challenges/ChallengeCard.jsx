
const ChallengeCard = ({challenge}) => {
  return (
      <article className="challenge-card">
          <h3>{challenge.title}</h3>
          <p>{challenge.topics}</p>
          <span>
            {challenge.difficulty}
          </span>
          <a href="#liveDemo">
            {challenge.demoUrl}
          </a>
        </article>
  )
}

export default ChallengeCard
