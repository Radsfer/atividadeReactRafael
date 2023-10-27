import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import { useState, useEffect } from 'react';

export default function ListaClientes() {

    const [lista, setLista] = useState(undefined)

    function fetchListaClientes(){
        axios("http://localhost:3013/clientes_all")
            .then(resposta => {
                var listaGroup = resposta.data.map( e => 
                    <ListGroup.Item key={e.id_cliente}>
                        {e.nome + " " + e.sobrenome} 
                        <Button variant="primary">Editar</Button>{' '}
                        <Button variant="dark">Ver Perfil</Button>{' '}
                    </ListGroup.Item>
                )
                setLista(listaGroup)
            })
    }

    useEffect(() => {
        fetchListaClientes();
    })

    return (
        <ListGroup>
            {lista}
        </ListGroup>
    )
  }