import React from "react";
import Ticketcard from "../Ticketcard/Ticketcard";
import "./Main.scss";
import team from "../../assets/data/data";
const Main = () => {
  const ticketCardJSX = team.map((member) => {
    return (
      <div className="member__card" key={member.id}>
        <Ticketcard name={member.name} role={member.role} />
      </div>
    );
  });

  return <div className="member__cards">{ticketCardJSX}</div>;
};

export default Main;
