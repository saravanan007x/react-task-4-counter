import { useState } from "react";
import Counter from "./components/Counter.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import "./App.css";

function App() {
  // Theme state: "light" is the default, "dark" is the alternative.
  const [theme, setTheme] = useState("light");

  // Switch to the opposite theme without reloading the page.
  const handleThemeToggle = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const isDark = theme === "dark";

  return (
    <div className="app" data-theme={theme}>
      <main className="dashboard">
        <header className="dashboard__header">
          <div className="dashboard__intro">
            <span className="dashboard__badge">Task 4 &middot; useState</span>
            <h1 className="dashboard__title">React Counter App</h1>
            <p className="dashboard__subtitle">
              Manage your counter with React useState
            </p>
          </div>

          <ThemeToggle isDark={isDark} onToggle={handleThemeToggle} />
        </header>

        <Counter />

        <footer className="dashboard__footer">
          <span>Built with React &middot; useState Hook</span>
          <span className="dashboard__hint">Counter can go below zero</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
