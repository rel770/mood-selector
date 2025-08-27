import Button from "../button/button";
import "./moodButtons.css";

export default ({ moods, onMoodSelect }) => (
  <div className="mood-buttons">
    {moods.map((m) => (
      <Button key={m.mood} {...m} onClick={onMoodSelect} />
    ))}
  </div>
);
