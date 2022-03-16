import React from "react";
import "./Item.scss";

const Item = (props) => {
  return (
    <div className="userContainer">
      <figure>
        <img className="img" src={props.image} alt="userImage" />
      </figure>

      <section className="infoContainer">
        <h1>{props.name}</h1>
        <p>{props.country}</p>
      </section>
    </div>
  );
};

export default Item;
