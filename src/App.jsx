import "./App.css";
import { useState } from "react";
import { moods } from "./data/moods";
import Mood from "./components/mood/mood";
import MoodHistory from "./components/moodHistory/moodHistory";
import MoodButtons from "./components/moodButtons/moodButtons";
import MoodCounter from "./components/moodCounter/moodCounter";
import Button from "./components/button/button";

function App() {
  const [mood, setMood] = useState({
    mood: "Neutral",
    emoji: "😐",
  });
  const [history, setHistory] = useState([]);
  const [moodCounts, setMoodCounts] = useState({
    Happy: 0,
    Sad: 0,
    Angry: 0,
  });

  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
    setHistory([...history, selectedMood]);
    setMoodCounts(prev => ({
      ...prev,
      [selectedMood.mood]: prev[selectedMood.mood] + 1
    }));
  };

  const handleReset = () => {
    setMood({
      mood: "Neutral",
      emoji: "😐",
    });
    setHistory([]);
    setMoodCounts({
      Happy: 0,
      Sad: 0,
      Angry: 0,
    });
  };

  const handleRandomMood = () => {
    const randomIdx = Math.floor(Math.random() * moods.length);
    const randomMood = moods[randomIdx];
    handleMoodSelect(randomMood);
  };

  return (
    <div className="App">
      <Mood {...mood} />
      <MoodHistory moods={history} />
      <MoodCounter moods={moods} moodCounts={moodCounts} />
      <MoodButtons moods={moods} onMoodSelect={handleMoodSelect} />
      <Button variant="random" onClick={handleRandomMood}>
        Random 
      </Button>
      <Button variant="reset" onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
}

export default App;
