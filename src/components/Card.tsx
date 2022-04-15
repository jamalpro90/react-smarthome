import React from "react";
import { Text } from "./emotion";

const Card = () => {
  return (
    <div className="card">
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos deserunt
        recusandae magni, tempora accusantium necessitatibus, cum, ad adipisci
        odit nisi placeat nihil non voluptas? Labore reprehenderit corrupti
        temporibus accusamus at!
      </Text>
      <div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
        <img src="/logo192.png" alt="avatar" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>Linda</span>
          <span>CEO of google</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
