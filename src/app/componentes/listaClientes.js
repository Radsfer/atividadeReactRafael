import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import { useState, useEffect } from 'react';
import PerfilCliente from './perfilCliente';

export default function ListaClientes() {

    const [lista, setLista] = useState(undefined)
    const [perfilClienteId, setPerfilClienteId] = useState(null);


    function fetchListaClientes() {
        axios("http://localhost:3013/clientes_all")
            .then(resposta => {
                var listaGroup = resposta.data.map(e => (
                    <ListGroup.Item key={e.id_cliente} as="li" className="d-flex justify-content-between align-items-start" variant="info">
                        <div className="ms-2 me-auto" style={{ textAlign: 'left', verticalAlign: 'top' }}>
                            <div className="fw-bold">{e.nome + ' ' + e.sobrenome}</div>
                            <div style={{ fontWeight: 'bold', paddingRight: '10px' }}>Contato: {e.email}</div>
                        </div>
                        <div className="ms-2">
                            <Button variant="primary" size="sm" onClick={() => handlePerfilClick(e.id_cliente)}>Perfil</Button>{' '}
                        </div>
                        <div className="ms-2">
                            <Button variant="danger" size="sm">Apagar</Button>{' '}
                        </div>
                        <div className="ms-2">
                            <Button variant="warning" size="sm">Atualizar</Button>{' '}
                        </div>
                    </ListGroup.Item>
                ));
                setLista(listaGroup);

            })
    }

    useEffect(() => {
        fetchListaClientes();
    })

    function handlePerfilClick(idCliente) {
        setPerfilClienteId(idCliente);
      }
    
      function handleClosePerfil() {
        setPerfilClienteId(null);
      }

    return (
        <>
        <ListGroup>
          {lista}
        </ListGroup>
        {perfilClienteId && (
        <div className="d-flex justify-content-center align-items-center">
          <PerfilCliente idCliente={perfilClienteId} onClose={handleClosePerfil} />
        </div>
      )}
      </>
    )
}