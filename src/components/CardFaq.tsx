import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaqBox, FaqTextBox, Text } from "./emotion";
import useCollapse from "react-collapsed";

type Data = {
  title: string;
  text: string;
};

const CardFaq = ({ title, text }: Data) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div>
      <FaqBox
        {...getToggleProps({
          onClick: () => setExpanded(prevExpanded => !prevExpanded),
        })}
      >
        {isExpanded ? (
          <FaMinus className={`icon`} />
        ) : (
          <FaPlus className={`icon`} />
        )}

        <p className="title-faq">{title}</p>
      </FaqBox>

      <FaqTextBox {...getCollapseProps()}>
        <Text>{text}</Text>
      </FaqTextBox>
    </div>
  );
};

export default CardFaq;
