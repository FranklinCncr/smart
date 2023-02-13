import "./styleButton.css";
function Button(props) {
  return (
    <button className="styleButton">{props.name}</button>
  );
}
export default Button;
