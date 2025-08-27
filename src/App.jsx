import "./App.css";
import { moods } from "./data/moods";
import { useMoodState } from "./hooks/useMoodState";
import Mood from "./components/mood/mood";
import MoodHistory from "./components/moodHistory/moodHistory";
import MoodButtons from "./components/moodButtons/moodButtons";
import MoodCounter from "./components/moodCounter/moodCounter";
import Button from "./components/button/button";

function App() {
  const {
    mood,
    history,
    moodCounts,
    handleMoodSelect,
    handleReset,
    handleRandomMood,
  } = useMoodState();

  return (
    <div className="App">
      <Mood {...mood} />
      <MoodHistory moods={history} />
      <MoodCounter moods={moods} moodCounts={moodCounts} />
      <MoodButtons moods={moods} onMoodSelect={handleMoodSelect} />
      <div className="action-buttons">
        <Button variant="random" onClick={() => handleRandomMood(moods)}>
          Random
        </Button>
        <Button variant="reset" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default App;
