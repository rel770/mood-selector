import Button from "../button/button";

export default ({ mood, emoji, onClick }) => {
  const handleClick = () => onClick({ mood, emoji });

  return (
    <Button variant={mood.toLowerCase()} onClick={handleClick}>
      {emoji} {mood}
    </Button>
  );
};
