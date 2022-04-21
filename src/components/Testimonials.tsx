import React, { useState } from "react";
import Card from "./Card";
import { Text, Title } from "./emotion";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const data = [
  [
    {
      text: "dolorem deleniti qui temporibus enim, molestias et corrupti eius hic? Consequuntur eaque quod ducimus est nesciunt odit earum cum?",
      name: "Linda",
      job: "CEO of google",
    },
    {
      text: "dolorem deleniti qui temporibus enim, molestias et corrupti eius hic? Consequuntur eaque quod ducimus est nesciunt odit earum cum?",
      name: "Linda",
      job: "CEO of google",
    },
    {
      text: "dolorem deleniti qui temporibus enim, molestias et corrupti eius hic? Consequuntur eaque quod ducimus est nesciunt odit earum cum?",
      name: "Linda",
      job: "CEO of google",
    },
    {
      text: "dolorem deleniti qui temporibus enim, molestias et corrupti eius hic? Consequuntur eaque quod ducimus est nesciunt odit earum cum?",
      name: "Linda",
      job: "CEO of google",
    },
  ],
  [
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem id nesciunt,",
      name: "August",
      job: "Youtuber",
    },
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem id nesciunt,",
      name: "August",
      job: "Youtuber",
    },
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem id nesciunt,",
      name: "August",
      job: "Youtuber",
    },
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem id nesciunt,",
      name: "August",
      job: "Youtuber",
    },
  ],
];

const Testimonials = () => {
  const [count, setCount] = useState<number>(0);
  // const [activePage, setActivePage] = useState(data[count]);

  const handlePrev = () => {
    if (count === 0) {
      setCount(data.length - 1);
    } else {
      setCount(count - 1);
    }
  };

  const handleNext = () => {
    if (count === data.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    // console.log(count);
  };

  return (
    <div id="testimonials" className="testi-container">
      <Title size="64px">Testimonials</Title>
      <div style={{ width: 1000, textAlign: "center" }}>
        <Text></Text>
      </div>
      {/* Cards */}
      <div className="cards">
        {data[count].map((card, i) => (
          <Card text={card.text} name={card.name} job={card.job} />
        ))}
      </div>

      <div className="arrow-container">
        <FaArrowAltCircleLeft onClick={handlePrev} className="arrow" />
        <FaArrowAltCircleRight onClick={handleNext} className="arrow" />
      </div>
    </div>
  );
};

export default Testimonials;
