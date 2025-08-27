import "./mood.css";
function Mood({ mood = "😐 Neutral" }) {
  return <h1 id="mood">{mood}</h1>;
}

export default Mood;
