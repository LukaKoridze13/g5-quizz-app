import React, { useState, useEffect } from "react";
import "./App.css";
import Options from "./components/Options";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  return <div className="toggle-container">
      <h1 className="icon">☀</h1>
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={() => setDarkMode((prev) => !prev)} />
        <span className="slider"></span>
      </label>
      <h1 className="icon">☽</h1>
    </div>
  );
}


function App() {
  return (

    <>
    <ThemeToggle />
    <Options />
    </>
  );
};



export default App;

