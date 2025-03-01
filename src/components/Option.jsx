import React from 'react';

function Option({ icon, text, darkMode }) {
  const backgroundColor = darkMode ? '#3B4D66' : 'white';
  const textColor = darkMode ? '#FFFFFF' : '#313E51';

  return (
    <div 
      className="w-[564px] h-[96px] rounded-[24px] p-[20px] flex items-center gap-[32px] shadow-md" 
      style={{ backgroundColor }}
    >
      {icon}
      <span 
        className="font-medium text-[28px] leading-[28px] w-[77px] h-[28px]" 
        style={{ fontFamily: 'Rubik', color: textColor }}
      >
        {text}
      </span>
    </div>
  );
}

export default Option;