// import sampleImage from '../../../../public/images/coder.png'
const ChallengeCard = ({challenge, setPreShow}) => {
  return (
      <article className="challenge-card">
          <img src='images/Pagination.avif' alt='smapleImage'/>
          <h3>{challenge.title}</h3>
          <p>{challenge.topics}</p>
          <span>
            {challenge.difficulty}
          </span>
          <a href="#liveDemo" onClick={()=>setPreShow(true)}>
            {challenge.demoUrl}
          </a>
        </article>
  )
}

export default ChallengeCard
