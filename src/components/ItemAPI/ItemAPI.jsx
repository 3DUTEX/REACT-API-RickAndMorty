import "./ItemAPI.css";

export default function ItemAPI(props) {
  function checkStatus() {
    if (props.status === "Alive") {
      return <p className="alive">{props.status}</p>;
    } else if (props.status === "unknown") {
      return <p className="unknown">{props.status}</p>;
    } else {
      return <p className="dead">{props.status}</p>;
    }
  }

  return (
    <div className="character-container">
      <img src={props.image} />
      <div className="desc">
        <h1>{props.name}</h1>
        <p>{props.species}</p>
        {checkStatus()}
        <h2>Local: {props.local}</h2>
      </div>
    </div>
  );
}
