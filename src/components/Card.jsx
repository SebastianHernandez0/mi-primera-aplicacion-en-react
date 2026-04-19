import "./Card.css";

/**
 * Componente Card
 * Muestra una tarjeta con imagen, título y descripción
 *
 * Props:
 * - title: string - título de la tarjeta
 * - description: string - texto descriptivo
 * - image: string - URL de la imagen
 */
function Card({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;