import "./moodHistory.css";

export default ({ moods = [] }) => (
  <>
    {!!moods.length && <div className="mood-history-title">History:</div>}
    <div className="mood-history">
      {moods.slice(-3).map((m, idx) => (
        <div key={idx} className="mood-history-item">
          {m.mood} {m.emoji}
        </div>
      ))}
    </div>
  </>
);
