import React from 'react';
import CrossIcon from '../assets/cross.svg'; // Import your X icon
import CheckIcon from '../assets/check.svg'; // Import your checkmark icon

function Option({
  text,
  icon,
  isSelected,
  isCorrect,
  isIncorrect,
  onClick,
  isSubmitted,
}) {
  let borderColor = 'transparent';
  let iconBackgroundColor = '#F4F6FA'; // Default background for A, B, C, D icons
  let iconTextColor = '#626C7F'; // Default text color for A, B, C, D icons

  if (isSelected) {
    borderColor = '#A729F5'; // Purple for selected option
    iconBackgroundColor = '#A729F5'; // Purple for selected icon
    iconTextColor = '#FFFFFF'; // White text for selected icon
  }
  if (isCorrect) {
    borderColor = '#26D782'; // Green for correct answer
    iconBackgroundColor = '#26D782'; // Green for correct icon
    iconTextColor = '#FFFFFF'; // White text for correct icon
  }
  if (isIncorrect) {
    borderColor = '#EE5454'; // Red for incorrect answer
    iconBackgroundColor = '#EE5454'; // Red for incorrect icon
    iconTextColor = '#FFFFFF'; // White text for incorrect icon
  }

  return (
    <div
      className="w-full md:w-[564px] h-[96px] rounded-[24px] p-[20px] flex items-center shadow-md cursor-pointer transition-colors pr-7 hover:border-[#A729F5]" // Added hover effect for border
      style={{
        backgroundColor: '#FFFFFF',
        border: `2px solid ${borderColor}`,
      }}
      onClick={onClick}
    >
      {/* Left Icon (A, B, C, D) */}
      <div
        className="w-[56px] h-[56px] rounded-[12px] flex items-center justify-center shrink-0 transition-colors hover:bg-[#A729F5] hover:text-white" // Added hover effect for icon
        style={{ backgroundColor: iconBackgroundColor }}
      >
        <span
          className="font-medium text-[24px] leading-[28px]"
          style={{ color: iconTextColor }}
        >
          {icon}
        </span>
      </div>

      {/* Centered Text */}
      <div className="flex-1 flex justify-center mx-4">
        <span
          className="font-medium text-[24px] leading-[28px] text-center"
          style={{ fontFamily: 'Rubik', color: '#313E51' }}
        >
          {text}
        </span>
      </div>

      {/* Right Icon (Circle with X or Checkmark) - Always reserve space */}
      <div className="w-[56px] h-[56px] flex items-center justify-center shrink-0">
        {isSubmitted && (
          <>
            {isCorrect ? (
              <img src={CheckIcon} alt="Correct" className="w-6 h-6" /> // Checkmark icon
            ) : isIncorrect ? (
              <img src={CrossIcon} alt="Incorrect" className="w-6 h-6" /> // X icon
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}

export default Option;