import { useState } from "react";
import questions from "./data";
import Questions from "./Components/Questions";

const App = () => {
  const [question, setQuestions] = useState(questions);
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
