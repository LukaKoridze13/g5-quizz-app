import React, { useState } from 'react';
import Option from '../components/Option';
import data from '../data.json';
import CrossIcon from '../assets/cross.svg'; // Import your X icon
import HtmlIcon from '../assets/images/html.svg'; // Import HTML icon
import CssIcon from '../assets/images/css.svg'; // Import CSS icon
import JsIcon from '../assets/images/js.svg'; // Import JavaScript icon
import AccessibilityIcon from '../assets/images/accessibility.svg'; // Import Accessibility icon

// Mapping object for category icons
const categoryIcons = {
  HTML: HtmlIcon,
  CSS: CssIcon,
  JavaScript: JsIcon,
  Accessibility: AccessibilityIcon,
};

function Options({ darkMode }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleTopicClick = (topic) => {
    const selectedQuiz = data.quizzes.find((quiz) => quiz.title === topic);
    setSelectedTopic(topic);
    setQuestions(selectedQuiz.questions);
    setCurrentQuestionIndex(0); // Reset to the first question
    setSelectedOption(null); // Reset selected option
    setIsSubmitted(false); // Reset submission state
    setShowValidationMessage(false); // Reset validation message
    setScore(0); // Reset score
    setShowResults(false); // Reset results state
  };

  const handleOptionClick = (option) => {
    if (!isSubmitted) {
      setSelectedOption(option);
      setShowValidationMessage(false); // Hide validation message when an option is selected
    }
  };

  const handleSubmit = () => {
    if (!selectedOption) {
      setShowValidationMessage(true); // Show validation message if no option is selected
      return;
    }
    setIsSubmitted(true);

    // Update score if the selected option is correct
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
      setShowValidationMessage(false); // Reset validation message
    } else {
      // Quiz is finished
      setIsSubmitted(true); // Show "See Results" button
    }
  };

  const handleSeeResults = () => {
    setShowResults(true); // Show results container
  };

  const currentQuestion = questions[currentQuestionIndex];

  // Get the selected quiz data for the category and icon
  const selectedQuiz = data.quizzes.find((quiz) => quiz.title === selectedTopic);

  // Get the correct icon for the selected category
  const CategoryIcon = selectedTopic ? categoryIcons[selectedTopic] : null;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-6 w-full max-w-[90vw] mx-auto min-h-screen">
      {/* Left Half (Empty or for future use) */}
      <div className="w-full md:w-1/2"></div>

      {/* Right Half (Content) */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center pl-8">
        {!selectedTopic ? (
          <>
            <div className="w-full max-w-2xl space-y-6">
              {data.quizzes.map((quiz) => (
                <Option
                  key={quiz.title}
                  text={quiz.title}
                  icon={<img src={categoryIcons[quiz.title]} alt={`${quiz.title} icon`} className="w-12 md:w-14 lg:w-16 xl:w-20" />}
                  darkMode={darkMode}
                  isSelected={selectedTopic === quiz.title}
                  onClick={() => handleTopicClick(quiz.title)}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            {!showResults ? (
              <>
                {currentQuestionIndex < questions.length ? (
                  <>
                    {!isSubmitted ? (
                      <>
                        <div className="w-full max-w-2xl space-y-3">
                          {currentQuestion.options.map((option, i) => (
                            <Option
                              key={i}
                              text={option}
                              icon={String.fromCharCode(65 + i)} // A, B, C, D
                              isSelected={selectedOption === option}
                              isCorrect={false}
                              isIncorrect={false}
                              onClick={() => handleOptionClick(option)}
                              isSubmitted={false}
                              iconBackground="#F4F6FA" // Background color for A, B, C, D icons
                              iconColor="#626C7F" // Text color for A, B, C, D icons
                              hoverColor="#A729F5" // Hover color for A, B, C, D icons
                            />
                          ))}
                        </div>
                        <button
                          className="w-[564px] h-[96px] rounded-[24px] p-[20px] flex items-center justify-center gap-[32px] shadow-md bg-purple-600 text-white text-[24px] font-medium hover:bg-purple-500 transition-colors whitespace-nowrap mt-6"
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                        {showValidationMessage && (
                          <div className="flex items-center justify-start gap-2 mt-4">
                            <img src={CrossIcon} alt="Error" className="w-6 h-6" />
                            <span className="text-red-500 text-lg">Please select an answer.</span>
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="w-full max-w-2xl space-y-3">
                          {currentQuestion.options.map((option, i) => (
                            <Option
                              key={i}
                              text={option}
                              icon={String.fromCharCode(65 + i)} // A, B, C, D
                              isSelected={selectedOption === option}
                              isCorrect={option === currentQuestion.answer}
                              isIncorrect={option !== currentQuestion.answer} // Mark all incorrect options
                              onClick={() => {}}
                              isSubmitted={true}
                              iconBackground="#F4F6FA" // Background color for A, B, C, D icons
                              iconColor="#626C7F" // Text color for A, B, C, D icons
                              hoverColor="#A729F5" // Hover color for A, B, C, D icons
                            />
                          ))}
                        </div>
                        {currentQuestionIndex < questions.length - 1 ? (
                          <button
                            className="w-[564px] h-[96px] rounded-[24px] p-[20px] flex items-center justify-center gap-[32px] shadow-md bg-purple-600 text-white text-[24px] font-medium hover:bg-purple-500 transition-colors whitespace-nowrap mt-6"
                            onClick={handleNextQuestion}
                          >
                            Next Question
                          </button>
                        ) : (
                          <button
                            className="w-[564px] h-[96px] rounded-[24px] p-[20px] flex items-center justify-center gap-[32px] shadow-md bg-purple-600 text-white text-[24px] font-medium hover:bg-purple-500 transition-colors whitespace-nowrap mt-6"
                            onClick={handleSeeResults}
                          >
                            See Results
                          </button>
                        )}
                      </>
                    )}
                  </>
                ) : null}
              </>
            ) : (
              <>
                {/* Results Container (4x the height of one option) */}
                <div
                  className="w-[564px] rounded-[24px] p-[20px] flex flex-col items-center justify-center shadow-md bg-white"
                  style={{ height: `${96 * 4}px` }} // 4x the height of one option
                >
                  {/* Category and Icon */}
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={CategoryIcon}
                      alt={`${selectedTopic} icon`}
                      className="w-8 md:w-10 lg:w-12 xl:w-14" // Smaller icon size
                    />
                    <p
                      className="text-[28px] font-medium text-gray-700"
                      style={{
                        fontFamily: 'Rubik',
                        fontWeight: 500,
                        lineHeight: '100%',
                        letterSpacing: '0%',
                      }}
                    >
                      {selectedTopic}
                    </p>
                  </div>

                  {/* Score */}
                  <h2
                    className="text-[144px] font-medium text-[#313E51] mt-6" // Dark Navy color
                    style={{
                      fontFamily: 'Rubik',
                      fontWeight: 500,
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      width: '95px',
                      height: '144px',
                    }}
                  >
                    {score}
                  </h2>

                  {/* Out of X */}
                  <p
                    className="text-[24px] text-gray-500 mt-4"
                    style={{
                      fontFamily: 'Rubik',
                      fontWeight: 400,
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      width: '98px',
                      height: '36px',
                    }}
                  >
                    out of {questions.length}
                  </p>
                </div>

                {/* Play Again Button (same styling as Submit button) */}
                <button
                  className="w-[564px] h-[96px] rounded-[24px] p-[20px] flex items-center justify-center gap-[32px] shadow-md bg-purple-600 text-white text-[24px] font-medium hover:bg-purple-500 transition-colors whitespace-nowrap mt-6"
                  onClick={() => setSelectedTopic(null)}
                >
                  Play Again
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Options;