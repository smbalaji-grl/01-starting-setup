import "./Card.css";

export default function Card(props) {
  const classescssadded = "card " + props.className;
  return <div className={classescssadded}>{props.children}</div>;
}
