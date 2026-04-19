import { useState, useEffect } from "react";
import Card from "./components/Card";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

/**
 * Componente principal App
 * Maneja el estado del tema y renderiza los componentes hijos
 */
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = (darkMode) => {
    setIsDarkMode(darkMode);
  };

  // Aplicar tema al documento HTML
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  // Datos de ejemplo para la tarjeta
  const cardData = {
    title: "Mi Primera App en React",
    description:
      "Esta es una aplicación simple desarrollada con React y Vite. Usa useState para manejar el estado del tema claro/oscuro. El propósito fue aprender la base de React: componentes, estado e interacción.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <header className="app-header">
        <h1 className="app-title">Bienvenido a Mi Primera App</h1>
        <ThemeToggle onThemeChange={handleThemeChange} />
      </header>

      <main className="app-main">
        <Card
          title={cardData.title}
          description={cardData.description}
          image={cardData.image}
        />
      </main>

      <footer className="app-footer">
        <p>© 2026 Sebastián Hernández. Casi todos los derechos reservados</p>
        <a
          href="https://www.linkedin.com/in/sebasti%C3%A1nhern%C3%A1ndezs/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          Contacto
        </a>
      </footer>
    </div>
  );
}

export default App;