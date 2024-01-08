import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import Singlequestions from "./singlequestions";

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <div className="container">
      <div>
        <h1>Questions</h1>
        {questions.map((que) => {
          return (
            <Singlequestions
              key={que.id}
              {...que}
              activeId={activeId}
              toggleQuestion={toggleQuestion}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
