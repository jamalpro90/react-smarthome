import React from "react";
import { Text } from "./emotion";
import { FaHeart } from "react-icons/fa";

type Data = {
  title: string;
  textGroup: string[];
};

const data: Data[] = [
  {
    title: "About Us",
    textGroup: ["Contact", "Contact", "Contact", "Contact"],
  },
  {
    title: "About Us",
    textGroup: ["Contact", "Contact", "Contact", "Contact"],
  },
  {
    title: "About Us",
    textGroup: ["Contact", "Contact", "Contact", "Contact"],
  },
  {
    title: "About Us",
    textGroup: ["Contact", "Contact", "Contact", "Contact"],
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="top">
        {data.map((item, i) => (
          <div className="sub-footer">
            <h4>{item.title}</h4>
            {item.textGroup.map((text, i) => (
              <Text key={i}>{text}</Text>
            ))}
          </div>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="bottom">
        <p>Make With Love</p>
        <FaHeart className="heart" />
        <p>By Jamal</p>
      </div>
    </footer>
  );
};

export default Footer;
