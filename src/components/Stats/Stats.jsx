import "./Stats.css"
const Stats = () => {
    const stats = [
        {value:"20+", label:"Challenges"},
        {value:"12", label:"Concepts"},
        {value:"React", label:"Tech stack"},
    ]
  return (
    <section className="stats" aria-label="Portfolio statistics">
        {stats.map((stat)=>(
            <div key={stat.label} className="stats-container">
                <h3>{stat.label}</h3>
                <p>{stat.value}</p>
            </div>
        ))}
    </section>
  )
}

export default Stats
