import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

function PerfilCliente({ idCliente, onClose }) {
  const [cliente, setCliente] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3013/clientes_byid/${idCliente}`)
      .then(response => {
        setCliente(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter o perfil do cliente:', error);
      });
  }, [idCliente]);

  if (!cliente) {
    return <p>Carregando perfil...</p>;
  }

  return (
    <Row className="align-items-center">
    <Col xs={4} className="text-center">
    <img
              src={`http://localhost:3013/uploads/clientes/${cliente.id_cliente}.png`}
              alt="Cliente"
              className="img-fluid rounded-circle"
              style={{ width: '180px', height: '150px' }}
            />
    </Col>
    <Col xs={8}>
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>{cliente.nome}</Card.Title>
          <Card.Text>
            ID do Cliente: {cliente.id_cliente}<br />
            Sobrenome: {cliente.sobrenome}<br />
            Email: {cliente.email}<br />
            {/* Adicione mais detalhes conforme necessário */}
          </Card.Text>
          <Button variant="primary" onClick={onClose}>
            Fechar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  </Row>
  );
}

export default PerfilCliente;
