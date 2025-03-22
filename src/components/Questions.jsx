import React from "react";

export default function Questions({
  data,
  selectedTopic1,
  currentQuestionIndex1,
  option1,
}) {
  return (
    <div className="w-full md:w-1/2">
      {option1 === 1 && (
        <div className="maincontainer">
          <div className="w-96">
            <h1 className="text-5xl">
              Welcome to the{" "}
              <span style={{ fontWeight: "bold" }}>Frontend Quiz!</span>
            </h1>
            <p>Pick a subject to get started.</p>
          </div>
        </div>
      )}
      {option1 === 0 && (
        <div className="w-96">
          <p>{currentQuestionIndex1} out of 10</p>
          {data.quizzes
            .filter((el) => el.title === selectedTopic1)
            .map((el, index) => (
              <div key={index}>
                <h1 className="text-3xl">
                  {el.questions[currentQuestionIndex1]?.question}
                </h1>
              </div>
            ))}
        </div>

      )}
      {option1 === "quiz completed" && (
        <div className="w-96">
            <h1 className="text-6xl">Quiz completed <h1 className="font-bold">You scored...</h1></h1>
            
        </div>
      )}
    </div>
  );
}
