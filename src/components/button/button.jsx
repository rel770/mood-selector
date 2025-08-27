import "./button.css";

export default ({ variant = "default", onClick, className = "", children, ...props }) => {
  const cls = `btn btn--${variant} ${className}`.trim();

  return (
    <button className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
