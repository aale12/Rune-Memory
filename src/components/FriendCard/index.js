import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div data-id={props.id} onClick={() => props.removeFriend(props.id)} className="remove col-sm-1 m-2 p-3 runeCard">
      <div>
        <img className="img-fluid" alt={props.name} src={props.image} />
      </div>
      <div className="content">
      </div>
    </div>
  );
}

export default FriendCard;
