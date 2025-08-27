import { useState } from "react";

// Custom hook for managing mood state and related operations
export const useMoodState = (initialMood = { mood: "Neutral", emoji: "😐" }) => {
  const [mood, setMood] = useState(initialMood);
  const [history, setHistory] = useState([]);
  const [moodCounts, setMoodCounts] = useState({
    Happy: 0,
    Sad: 0,
    Angry: 0,
  });

  // Handle mood selection and update all related state
  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
    setHistory((prev) => [...prev, selectedMood]);
    setMoodCounts((prev) => ({
      ...prev,
      [selectedMood.mood]: prev[selectedMood.mood] + 1,
    }));
  };

  // Reset all mood-related state to initial values
  const handleReset = () => {
    setMood(initialMood);
    setHistory([]);
    setMoodCounts({
      Happy: 0,
      Sad: 0,
      Angry: 0,
    });
  };

  // Select a random mood from available moods
  const handleRandomMood = (availableMoods) => {
    const randomIdx = Math.floor(Math.random() * availableMoods.length);
    const randomMood = availableMoods[randomIdx];
    handleMoodSelect(randomMood);
  };

  return {
    mood,
    history,
    moodCounts,
    handleMoodSelect,
    handleReset,
    handleRandomMood,
  };
};
