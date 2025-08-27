import "./App.css";
import { useState } from "react";
import { moods } from "./data/moods";
import Mood from "./components/mood/mood";
import Button from "./components/button/button";

function App() {
  const [mood, setMood] = useState({
    mood: "Neutral",
    emoji: "😐",
  });

  return (
    <div className="App">
      <Mood {...mood} />
      <div className="mood-buttons">
        {moods.map((m) => (
          <Button
            key={m.mood}
            mood={m.mood}
            emoji={m.emoji}
            onClick={(selectedMood) => setMood(selectedMood)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
