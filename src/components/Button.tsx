const Button = (props: { color: string; text: string; onClick: any }) => {
  const { color, text, onClick } = props;

  return (
    <button
      className="btn"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

export default Button;
