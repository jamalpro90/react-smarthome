import React from "react";
import CardFaq from "./CardFaq";
import { Title } from "./emotion";

type Data = {
  title: string;
  text: string;
};

const data: Data[] = [
  {
    title: "Faqila Awesome",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi velit animi qui quia modi nesciunt corporis facere, autem similique assumenda? Quasi rerum optio aperiam esse quae dolore llum eius repellendus iusto est voluptate veniam aspernatur non, at hic nam nemo ab tempore nisi soluta accusamus? Nobis, repellat? Praesentium, a laborum?",
  },
  {
    title: "Babayaga",
    text: "Nemo ab tempore nisi soluta accusamus? Nobis, repellat? Praesentium, a laborum?",
  },
  {
    title: "Aladin",
    text: "Autem similique assumenda? Quasi rerum optio aperiam esse quae dolore llum eius repellendus iusto est voluptate veniam aspernatur non, at hic nam nemo ab tempore nisi soluta accusamus? Nobis, repellat? Praesentium, a laborum?",
  },
  {
    title: "Malfinsent",
    text: "Quasi rerum optio aperiam esse quae dolore llum eius repellendus iusto est voluptate veniam aspernatur non, at hic nam nemo ab tempore nisi soluta accusamus? Nobis, repellat? Praesentium, a laborum? aspernatur non, at hic nam nemo ab tempore nisi soluta accusamus? Nobis, repellat? Praesentium, a laborum?",
  },
];

const Faq = () => {
  return (
    <div className="faq-container">
      <Title size="64px">FAQ'S</Title>

      {/* Content */}
      <div>
        {data.map((faq: Data, i: number) => (
          <CardFaq key={i} title={faq.title} text={faq.text} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
