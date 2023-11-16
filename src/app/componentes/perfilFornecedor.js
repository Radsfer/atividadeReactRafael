import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

function PerfilFornecedor({ idFornecedor, onClose }) {
  const [fornecedor, setFornecedor] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3013/fornecedores_byid/${idFornecedor}`)
      .then(response => {
        setFornecedor(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter o perfil do fornecedor:', error);
      });
  }, [idFornecedor]);

  if (!fornecedor) {
    return <p>Carregando perfil...</p>;
  }

  return (
    <Row className="align-items-center">
    <Col xs={4} className="text-center">
    <img
              src={`http://localhost:3013/uploads/fornecedores/${fornecedor.id_fornecedor}.png`}
              alt="Fornecedor"
              className="img-fluid rounded-circle"
              style={{ width: '180px', height: '150px' }}
            />
    </Col>
    <Col xs={8}>
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>{fornecedor.razao}</Card.Title>
          <Card.Text>
            ID do Fornecedor: {fornecedor.id_fornecedor}<br />
            Logradouro: {fornecedor.logradouro}<br />
            Contato: {fornecedor.contato}<br />
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

export default PerfilFornecedor;
