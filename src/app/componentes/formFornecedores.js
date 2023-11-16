import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useState } from 'react';

export default function FormFornecedores() {

    const [formData, setFormData] = useState({
        razao: '',
        cpf_cnpj: '',
        contato: '',
        logradouro:'',
        cidade: '',
        uf: '',
    })

    function alteraCampos(e) {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [key]: value })
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({ ...prevData, avatar: file }));
      };

    function submitFormulario(e) {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        axios.post("http://localhost:3013/fornecedores",
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(resposta => {
                console.log(resposta);
            })
    }

    return (
        <Form onSubmit={submitFormulario} encType="multipart/form-data">
        <Form.Group controlId="formBasicRazao">
          <Form.Label>Razão</Form.Label>
          <Form.Control type="text" placeholder="Razão" name="razao" onChange={alteraCampos} autoComplete="razao-social" />
        </Form.Group>
  
        <Form.Group controlId="formBasicCPF_CNPJ">
          <Form.Label>CPF/CNPJ</Form.Label>
          <Form.Control type="text" placeholder="CPF/CNPJ" name="cpf_cnpj" onChange={alteraCampos} autoComplete="cpf_cnpj" />
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
  
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Selecione um arquivo</Form.Label>
          <Form.Control type="file" name="avatar" onChange={handleFileChange} />
        </Form.Group>
  
        <Button variant="primary" type="submit">
          Realizar Cadastro
        </Button>
      </Form>
    )
}
