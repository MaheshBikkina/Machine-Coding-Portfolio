const ChallengeCard = ({ challenge, handleOpenModal }) => {
  return (
    <article className="challenge-card">
      <img
        src={challenge.thumbnail}
        alt={`${challenge.title} preview`}
        loading="lazy"
      />

      <h3>{challenge.title}</h3>

      <p>{challenge.topics}</p>

      <span>{challenge.difficulty}</span>

      <a
        className="challenge-card__preview"
        href="#liveDemo"
        onClick={(e) => {
          e.preventDefault();
          handleOpenModal(true, challenge);
        }}
      >
        Live preview ↗
      </a>
    </article>
  );
};

export default ChallengeCard;
