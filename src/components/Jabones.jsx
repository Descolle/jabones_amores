import Card from "react-bootstrap/Card";
import jabones from "../data/jabones.json";

function Jabones() {
  return (
    <div className="carta-container">
      {jabones.map((jabon) => (
        <Card key={jabon.id} className="carta">
          <div className="carta-img">
            <Card.Img variant="top" src={jabon.imagen} />
          </div>

          <Card.Body className="carta-body">
            <Card.Title>{jabon.nombre}</Card.Title>
            <Card.Text>{jabon.descripcion}</Card.Text>
            <Card.Text className="precio">💰 ${jabon.valor}</Card.Text>

            <a
              href={`https://wa.me/56988380845?text=Hola,%20quiero%20el%20jabón%20${jabon.nombre}`}
              className="btn-comprar"
            >
              Comprar
            </a>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Jabones;
