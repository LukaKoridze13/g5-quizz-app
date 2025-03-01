import React, { useState, useEffect } from "react";
import "./App.css";
import Options from "./components/Options";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div>
      <div className="toggle-container">
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
      <p>aigdufu</p>
    </div>
  );
};

function App() {
  return (
    <>
      <ThemeToggle />
      <Options />
      <div className="maincontainer">
        <div style={{ width: "400px" }}>
          <h1 style={{ fontSize: "50px" }}>
            Welcome to the{" "}
            <span style={{ fontWeight: "bold" }}>Frontend Quiz!</span>
          </h1>
          <p>Pick a subject to get started.</p>
        </div>
      </div>
    </>
  );
}

export default App;
