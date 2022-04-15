import React from "react";
import Card from "./Card";
import { Text, Title } from "./emotion";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="testi-container">
      <Title size="64px">Testimonials</Title>
      <div style={{ width: 1000, textAlign: "center" }}>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          id nesciunt, dolorem deleniti qui temporibus enim, molestias et
          corrupti eius hic? Consequuntur eaque quod ducimus est nesciunt odit
          earum cum?
        </Text>
      </div>

      {/* Cards */}
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className="arrow-container">
        <FaArrowAltCircleLeft className="arrow" />
        <FaArrowAltCircleRight className="arrow" />
      </div>
    </div>
  );
};

export default Testimonials;
