import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useState } from 'react';

function AtualizarFornecedores({ idFornecedor, onClose, onAtualizacaoBemSucedida }) {

  const [formData, setFormData] = useState({
    razao: '',
    cpf_cnpj: '',
    contato: '',
    logradouro: '',
    cidade: '',
    uf: '',
  })
  const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);

  function alteraCampos(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value })

    setShowEmptyFieldsAlert(false);
  }

  function submitFormulario(e) {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    // Lista dos campos que podem ser editados
    const editableFields = ['razao', 'contato', 'logradouro', 'cidade', 'uf'];

    // Verifica se algum campo editável está vazio
    const hasEmptyFields = editableFields.some((field) => formData[field].trim() === '');

    if (hasEmptyFields) {
      setShowEmptyFieldsAlert(true);
      return;
    }

    axios.patch(`http://localhost:3013/fornecedores_byid/${idFornecedor}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(resposta => {
        console.log(resposta);
        onAtualizacaoBemSucedida();
        onClose();
      })
      .catch((error) => {
        console.error('Erro ao enviar o formulário:', error);
      });

  }
  const handleCancel = () => {
    setShowEmptyFieldsAlert(false);
    onClose();
  };

  return (
    <Form onSubmit={submitFormulario} encType="multipart/form-data">
      {showEmptyFieldsAlert && (
        <div className="alert alert-danger" role="alert">
          Preencha todos os campos!
        </div>
      )}
      <Form.Group controlId="formBasicRazao">
        <Form.Label>Razão</Form.Label>
        <Form.Control type="text" placeholder="Razão" name="razao" onChange={alteraCampos} autoComplete="razao-social" />
      </Form.Group>

      <Form.Group controlId="formBasicContato">
        <Form.Label>Contato</Form.Label>
        <Form.Control type="text" placeholder="Contato" name="contato" onChange={alteraCampos} autoComplete="contato" />
      </Form.Group>

      <Form.Group controlId="formBasicLogradouro">
        <Form.Label>Logradouro</Form.Label>
        <Form.Control type="text" placeholder="Logradouro" name="logradouro" onChange={alteraCampos} autoComplete="logradouro" />
      </Form.Group>

      <Form.Group controlId="formBasicCidade">
        <Form.Label>cidade</Form.Label>
        <Form.Control type="text" placeholder="Cidade" name="cidade" onChange={alteraCampos} autoComplete="cidade" />
      </Form.Group>

      <Form.Group controlId="formBasicUF">
        <Form.Label>UF</Form.Label>
        <Form.Control type="text" placeholder="UF" name="uf" onChange={alteraCampos} autoComplete="uf" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Atualizar Dados
      </Button>
      <Button variant="secondary" onClick={handleCancel}>
        Cancelar
      </Button>

    </Form>
  )
}

export default AtualizarFornecedores;
