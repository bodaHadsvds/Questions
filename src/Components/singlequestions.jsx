import React, { useState } from "react";
import Questions from "./Questions";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Singlequestions = ({ id, info, title, activeId, toggleQuestion }) => {
  const [showInfo, setShowInfo] = useState(false);
  const isActive = id === activeId;
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default Singlequestions;
