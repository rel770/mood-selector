import "./button.css";

export default ({ mood = "happy", emoji = "😀", onClick, className = "", ...props }) => {
  const curMood = String(mood).toLowerCase();
  const cls = `btn btn--${curMood} ${className}`.trim();

  const handleClick = () => onClick?.({ mood, emoji });

  return (
    <button className={cls} onClick={handleClick} {...props}>
      {emoji} {mood}
    </button>
  );
};
