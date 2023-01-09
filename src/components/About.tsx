import React from "react";
import { ButtonBlue, Text, Title } from "./emotion";

const About = () => {
  const handleClick = () => {
    alert("Not Available");
  };

  return (
    <div id="about" className="about-container">
      <Title size="64px">About Us</Title>

      {/* About */}
      <div className="about">
        <img src="/img/hp.png" alt="smartphone" className="phone-image" />

        {/* Title & text */}
        <div className="about-right">
          <Title className="sub-title" margin="1rem 0 0 0">
            Smart Home Smart Services
          </Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            debitis, impedit laborum iusto quod aliquid dolor eveniet incidunt
            consectetur ut fugiat quia nostrum suscipit eum minus! Architecto,
            doloremque sed, voluptas, possimus dolores similique accusamus unde
            harum sequi ut excepturi minima id laboriosam officia. Nam veniam
            consequatur tempora eaque quisquam neque?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            consequatur deleniti ipsum corrupti voluptatem et dolorem incidunt
            laboriosam facere nemo animi molestiae eveniet, officia omnis modi,
            corporis iure accusantium eligendi?
          </Text>
          <ButtonBlue onClick={handleClick}>See More</ButtonBlue>
        </div>
      </div>
    </div>
  );
};

export default About;
