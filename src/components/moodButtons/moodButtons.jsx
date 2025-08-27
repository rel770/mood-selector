import MoodButton from "../moodButton/moodButton";
import "./moodButtons.css";

export default ({ moods, onMoodSelect }) => (
  <div className="mood-buttons">
    {moods.map((m) => (
      <MoodButton key={m.mood} mood={m.mood} emoji={m.emoji} onClick={onMoodSelect} />
    ))}
  </div>
);
