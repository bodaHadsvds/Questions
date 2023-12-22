import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import Singlequestions from "./singlequestions";

const Questions = ({ questions }) => {
  return (
    <div className="container">
      <div>
        <h1>Questions</h1>
        {questions.map((que) => {
          return <Singlequestions key={que.id} {...que} />;
        })}
      </div>
    </div>
  );
};

export default Questions;
