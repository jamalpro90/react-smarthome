import React from "react";
import { FaqBox, FaqTextBox, Text, Title } from "./emotion";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faq = () => {
  return (
    <div className="faq-container">
      <Title size="64px">FAQ'S</Title>

      {/* Content */}
      <div>
        <FaqBox>
          <FaMinus className="icon" />
          <p className="title-faq">Faqila Awesome</p>
        </FaqBox>

        <FaqTextBox>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            velit animi qui quia modi nesciunt corporis facere, autem similique
            assumenda? Quasi rerum optio aperiam esse quae dolore illum eius
            repellendus iusto est voluptate veniam aspernatur non, at hic nam
            nemo ab tempore nisi soluta accusamus? Nobis, repellat? Praesentium,
            a laborum?
          </Text>
        </FaqTextBox>

        <FaqBox>
          <FaPlus className="icon" />
          <p className="title-faq">Babayaga</p>
        </FaqBox>
        <FaqBox>
          <FaPlus className="icon" />
          <p className="title-faq">Aldin Prescoth</p>
        </FaqBox>
        <FaqBox>
          <FaPlus className="icon" />
          <p className="title-faq">Maldini Syafidah</p>
        </FaqBox>
      </div>
    </div>
  );
};

export default Faq;
