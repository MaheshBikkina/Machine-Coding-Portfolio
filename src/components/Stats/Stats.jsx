
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./Stats.css";

const stats = [
  {
    value: "20+",
    label: "Machine Coding Challenges",
    description: "Practical frontend problems solved",
  },
  {
    value: "12",
    label: "Frontend Concepts",
    description: "Explored through hands-on implementations",
  },
  {
    value: "05",
    label: "Projects Built",
    description: "Applications designed and developed",
  },
  {
    value: "React",
    label: "Primary Technology",
    description: "Building component-driven applications",
  },
];

const Stats = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % stats.length);
  };

  const previousSlide = () => {
    setActiveIndex((prev) => (prev - 1 + stats.length) % stats.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);

    return () => clearInterval(interval);
  }, []);

  const activeStat = stats[activeIndex];

  return (
    <section className="stats-banner" aria-label="CodeForge statistics">
      <div className="stats-banner__top">
        <span>CODEFORGE / AT A GLANCE</span>
        <span>
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(stats.length).padStart(2, "0")}
        </span>
      </div>

      <div className="stats-banner__content" aria-live="polite">
        <h2 key={activeIndex} className="stats-banner__value">
          {activeStat.value}
        </h2>

        <div className="stats-banner__details" key={`detail-${activeIndex}`}>
          <h3>{activeStat.label}</h3>
          <p>{activeStat.description}</p>
        </div>

        <div className="stats-banner__controls">
          <button onClick={previousSlide} aria-label="Previous statistic">
            <ArrowLeft size={17} />
          </button>

          <button onClick={nextSlide} aria-label="Next statistic">
            <ArrowRight size={17} />
          </button>
        </div>
      </div>

      <div className="stats-banner__bottom">
        <div className="stats-banner__indicators">
          {stats.map((stat, index) => (
            <button
              key={stat.label}
              className={index === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show statistic ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
