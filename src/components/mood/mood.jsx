import "./mood.css";

export default ({ mood = "Neutral", emoji = "😐" }) => (
  <h1 id="mood">
    {emoji} {mood}
  </h1>
);
