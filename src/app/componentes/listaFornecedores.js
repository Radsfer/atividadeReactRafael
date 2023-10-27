import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';

export default function listaFornecedores() {
    const [lista, setLista] = useState(undefined)

    function fetchListaFornecedores() {
        axios("http://localhost:3013/fornecedores_all")
            .then(resposta => {
                var listaGroup = resposta.data.map(e =>
                    <ListGroup.Item key={e.id_fornecedor}
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        variant="info"
                    >
                        <div className="ms-2 me-auto" style={{ textAlign: 'left', verticalAlign: 'top' }}>
                            <div className="fw-bold">{e.razao}</div>
                            <table>
                                <tr>
                                    <td style={{ fontWeight: 'bold', paddingRight: '10px' }}>Contato:</td>
                                    <td>{e.contato}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="ms-2">
                            <Button variant="danger" size="sm">Apagar</Button>{' '}
                        </div>
                        <div className="ms-2">
                            <Button variant="warning" size="sm">Atualizar</Button>{' '}
                        </div>
                        </ListGroup.Item>
                        )
                        setLista(listaGroup)
            })
    }

    useEffect(() => {
                            fetchListaFornecedores();
    })

                        return (
                        <ListGroup  >
                            {lista}
                        </ListGroup>
                        )
}