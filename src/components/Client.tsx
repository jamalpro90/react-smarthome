import React from "react";
import CardClient from "./CardClient";
import { Text, Title } from "./emotion";

const Client = () => {
  return (
    <div className="client-container">
      <Title size="64px">Our Client</Title>
      <div
        className="text-box"
        style={{ maxWidth: 1000, textAlign: "center", padding: 16 }}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          ipsa. Hic sit expedita nemo deleniti corporis fuga eius officiis
          quisquam tenetur dolorem atque aliquid, explicabo aperiam? Ea
          perspiciatis, doloribus impedit id architecto nesciunt maxime quae quo
          commodi quibusdam laborum qui.
        </Text>
      </div>

      {/* Cards */}
      <div className="cards">
        <CardClient imgSrc="/img/client/facebook.png" />
        <CardClient imgSrc="/img/client/tinder.png" />
        <CardClient imgSrc="/img/client/samsung.png" />
        <CardClient imgSrc="/img/client/vine.png" />
        <CardClient imgSrc="/img/client/skype.png" />
        <CardClient imgSrc="/img/client/nasa.png" />
        <CardClient imgSrc="/img/client/instaply.png" />
        <CardClient imgSrc="/img/client/indeed.png" />
      </div>
    </div>
  );
};

export default Client;
