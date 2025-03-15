import React, { useState, useEffect } from "react";
import "../App.css";
import data from "../data.json";

export default function ThemeToggle({ option1, icon, alt1, selectedTopic1 }) {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="toggle-container">
      <div style={{marginLeft: "40px"}} className="divcontainer">
        {(option1 === 0 || option1 === "quiz completed") && (
          <div>
            {selectedTopic1 && (
              <img
                key={selectedTopic1}
                src={icon || ""}
                alt={`${selectedTopic1} icon`}
              />
            )}
          </div>
        )}
      </div>
      <div className="divcontainer">
        <h1 className="icon">☀</h1>
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode((prev) => !prev)}
          />
          <span className="slider"></span>
        </label>
        <h1 className="icon">☽</h1>
      </div>
    </div>
  );
}
