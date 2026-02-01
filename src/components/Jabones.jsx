import Card from "react-bootstrap/Card";
import jabones from "../data/jabones.json";

function Jabones() {
  return (
    <div className="carta-container">
      {jabones.map((jabon) => (
        <Card style={{ width: "13rem" }} key={jabon.id} className="carta">
          <Card.Img variant="top" src={jabon.imagen} />
          <Card.Body>
            <Card.Title>{jabon.nombre}</Card.Title>
            <Card.Text>{jabon.descripcion}</Card.Text>
            <Card.Text className="precio">Precio: ${jabon.valor}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Jabones;
