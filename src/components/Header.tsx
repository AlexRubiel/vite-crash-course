import Button from "./Button";

const Header = (props: { title: string | undefined }) => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button color="green" text="Add" onClick={handleClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
