import Barranav from "./Navbar";
import Button from "react-bootstrap/Button";

const WeAre = () => {
  return (
    <div>
      <Barranav></Barranav>
      <div className="main">
        <div className="hero-content">
          <p className="hero-text">
            Descubre el placer de lo natural en cada detalle. Nuestros jabones
            artesanales están hechos a mano con ingredientes cuidadosamente
            seleccionados, pensados para cuidar tu piel y despertar tus
            sentidos. Cada aroma cuenta una historia, cada textura invita a un
            momento de calma y bienestar, transformando tu rutina diaria en un
            pequeño ritual de autocuidado lleno de suavidad, frescura y amor por
            lo artesanal. 🌿🧼
          </p>
          <Button variant="success">Conoce nuestros productos</Button>
        </div>
        <div className="hero-img"></div>
      </div>
    </div>
  );
};

export default WeAre;
