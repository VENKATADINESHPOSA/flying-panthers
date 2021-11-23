import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="panther"
        src={`https://robohash.org/${props.panther.id}?set=set2&size=180x180`}
      />
      <h2>{props.panther.name}</h2>
      <p>{props.panther.email}</p>
    </div>
  );
};
