import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.panthers.map((panther) => (
        <Card key={panther.id} panther={panther} />
      ))}
    </div>
  );
};
