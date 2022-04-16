import React from "react";

const CardClient = ({ imgSrc }: { imgSrc: string }) => {
  const imgStyle =
    imgSrc === "/img/client/nasa.png" ? { width: 140 } : { width: 182 };

  return (
    <div className="card">
      <img src={imgSrc} alt="logo" style={imgStyle} />
    </div>
  );
};

export default CardClient;
