import React, { useState } from "react";
import data from "../src/data";
import FAQ from "../../my-app/src/components/FAQ.jsx";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div>
      {questions.map((question) => {
        return <FAQ key={question.id} {...question} />;
      })}
    </div>
  );
}

export default App;
