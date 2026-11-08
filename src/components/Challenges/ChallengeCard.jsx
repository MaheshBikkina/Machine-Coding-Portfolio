// import sampleImage from '../../../../public/images/coder.png'
const ChallengeCard = ({ challenge, handleOpenModal }) => {
  return (
    <article className="challenge-card">
      <img src={challenge.thumbnail} alt="smapleImage" />
      <h3>{challenge.title}</h3>
      <p>{challenge.topics}</p>
      <span>{challenge.difficulty}</span>
      <a className="challenge-card__preview" href="#liveDemo" onClick={() => handleOpenModal(true, challenge)}>
        Live preview ↗
      </a>
    </article>
  );
};

export default ChallengeCard;
