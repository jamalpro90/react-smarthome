import React from "react";
import { Text } from "./emotion";

type CardProps = {
  text: string;
  name: string;
  job: string;
};

const Card = ({ text, name, job }: CardProps) => {
  return (
    <div className="card">
      <Text>{text}</Text>
      <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
        <img src="/logo192.png" alt="avatar" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>{name}</span>
          <span>{job}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
