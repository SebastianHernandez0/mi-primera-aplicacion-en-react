import { useState } from "react";
import "./ThemeToggle.css";

/**
 * Componente ThemeToggle
 * Botón para cambiar entre modo claro y oscuro
 *
 * Props:
 * - onThemeChange: function - callback que se ejecuta al cambiar el tema
 */
function ThemeToggle({ onThemeChange }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    onThemeChange(newTheme);
  };

  return (
    <button
      className={`theme-toggle ${isDark ? "dark" : "light"}`}
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      <span className="toggle-icon">{isDark ? "🌙" : "☀️"}</span>
      <span className="toggle-text">
        {isDark ? "Modo Oscuro" : "Modo Claro"}
      </span>
    </button>
  );
}

export default ThemeToggle;