import React from "react";
import { ButtonBlue, Text, Title } from "./emotion";

const Download = () => {
  return (
    <div className="down-container">
      <Title size="64px">Download</Title>

      {/* Download */}
      <div className="download">
        {/* Left */}
        <div className="download-left">
          <Title margin="1rem 0 0 0">Download For Mobile App</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            debitis, impedit laborum iusto quod aliquid dolor eveniet incidunt
            consectetur ut fugiat quia nostrum suscipit eum minus! Architecto,
            doloremque sed, voluptas, possimus dolores similique accusamus unde
            harum sequi ut excepturi minima id laboriosam officia. Nam veniam
            consequatur tempora eaque quisquam neque?
          </Text>
          <div className="store-container">
            <img
              src="/img/app-store.png"
              alt="app store"
              className="app-store"
            />
            <img
              src="/img/play-store.png"
              alt="play store"
              className="play-store"
            />
          </div>
        </div>

        {/* Right */}
        <img src="/img/hp.png" alt="smartphone" className="phone-image" />
      </div>
    </div>
  );
};

export default Download;
