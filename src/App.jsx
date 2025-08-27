import "./App.css";
import { useState } from "react";
import { moods } from "./data/moods";
import Mood from "./components/mood/mood";
import MoodHistory from "./components/moodHistory/moodHistory";
import MoodButtons from "./components/moodButtons/moodButtons";

function App() {
  const [mood, setMood] = useState({
    mood: "Neutral",
    emoji: "😐",
  });
  const [history, setHistory] = useState([]);

  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
    setHistory([...history, selectedMood]);
  };

  return (
    <div className="App">
      <Mood {...mood} />
      <MoodHistory moods={history} />
      <MoodButtons moods={moods} onMoodSelect={handleMoodSelect} />
    </div>
  );
}

export default App;
