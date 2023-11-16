import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import { useState, useEffect } from 'react';
import PerfilFornecedor from './perfilFornecedor';
import AtualizarFornecedores from './atualizarFornecedores';

export default function ListaFornecedores() {
  const [lista, setLista] = useState([]);
  const [perfilFornecedorId, setPerfilFornecedorId] = useState(null);
  const [alterarDadosFornecedor, setAlterarDadosFornecedor] = useState(null);
  const [atualizarFlag, setAtualizarFlag] = useState(false);

  function fetchListaFornecedores() {
    axios("http://localhost:3013/fornecedores_all")
      .then(resposta => {
        setLista(resposta.data);
      })
      .catch(error => {
        console.error('Erro ao obter lista de fornecedores:', error);
      });
  }

  useEffect(() => {
    fetchListaFornecedores();
  }, [atualizarFlag]);

  function handlePerfilClick(idFornecedor) {
    setPerfilFornecedorId(idFornecedor);
    setAlterarDadosFornecedor(null);
  }

  function handleClosePerfil() {
    setPerfilFornecedorId(null);
  }

  function handleAtualizarClick(idFornecedor) {
    setPerfilFornecedorId(idFornecedor);
    setAlterarDadosFornecedor(idFornecedor);
  }

  function handleAtualizacaoBemSucedida() {
    setAtualizarFlag(flag => !flag);
    setPerfilFornecedorId(null);
  }

  function handleApagarClick(idFornecedor) {
    // Chame o endpoint do servidor para deletar o fornecedor
    axios.post(`http://localhost:3013/fornecedores_del/${idFornecedor}`)
      .then(resposta => {
        console.log(resposta);
  
        // Atualize a lista de fornecedores após a exclusão
        setAtualizarFlag(flag => !flag);
  
        
      })
      .catch(error => {
        console.error('Erro ao apagar fornecedor:', error);
      });
  }
  


  return (
    <>
      <ListGroup>
        {lista.map(e => (
          <ListGroup.Item key={e.id_fornecedor} as="li" className="d-flex justify-content-between align-items-start" variant="info">
            <div className="ms-2 me-auto" style={{ textAlign: 'left', verticalAlign: 'top' }}>
              <div className="fw-bold">{e.razao}</div>
              <div style={{ fontWeight: 'bold', paddingRight: '10px' }}>Contato: {e.contato}</div>
            </div>
            <div className="ms-2">
              <Button variant="primary" size="sm" onClick={() => handlePerfilClick(e.id_fornecedor)}>Perfil</Button>{' '}
            </div>
            <div className="ms-2">
              <Button variant="danger" size="sm" onClick={() => handleApagarClick(e.id_fornecedor)}>Apagar</Button>{' '}
            </div>
            <div className="ms-2">
            <Button variant="warning" size="sm" onClick={() => handleAtualizarClick(e.id_fornecedor)}>Atualizar</Button>{' '}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {perfilFornecedorId && (
        <div className="d-flex justify-content-center align-items-center">
          <PerfilFornecedor idFornecedor={perfilFornecedorId} onClose={handleClosePerfil} />
        </div>
      )}

      {alterarDadosFornecedor && (
        <div className="d-flex justify-content-center align-items-center">
          <AtualizarFornecedores idFornecedor={alterarDadosFornecedor} onClose={() => setAlterarDadosFornecedor(null)} onAtualizacaoBemSucedida={handleAtualizacaoBemSucedida} />
        </div>
      )}
    </>
  );
}
