import "./moodCounter.css";

export default ({ moods, moodCounts }) => {
  return (
    <div className="mood-counter">
      <div className="mood-counter-title">Mood Counter:</div>
      <div className="mood-counter-items">
        {moods.map((mood, index) => (
          <span key={mood.mood} className="mood-counter-item">
            {mood.emoji} {mood.mood}: {moodCounts[mood.mood] || 0}
            {index < moods.length - 1 && " | "}
          </span>
        ))}
      </div>
    </div>
  );
};
