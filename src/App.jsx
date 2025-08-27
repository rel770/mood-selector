import "./App.css";
import { useState } from "react";
import { moods } from "./data/moods";
import Mood from "./components/mood/mood";
import MoodButtons from "./components/moodButtons/moodButtons";

function App() {
  const [mood, setMood] = useState({
    mood: "Neutral",
    emoji: "😐",
  });
  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
  };

  return (
    <div className="App">
      <Mood {...mood} />
      <MoodButtons moods={moods} onMoodSelect={handleMoodSelect} />
    </div>
  );
}

export default App;
