import React from "react";
import Character from "./Character";
import Error from "./Error";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const CharacterItem = ({ item }) => {
  return (
    <Link to={`/character/${item.char_id}`}>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={item.img} alt="" />
          </div>
          <div className="card-back">
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> {item.portrayed}
              </li>
              <li>
                <strong>Nickname:</strong> {item.nickname}
              </li>
              <li>
                <strong>Birthday:</strong> {item.birthday}
              </li>
              <li>
                <strong>Status:</strong> {item.status}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharacterItem;
