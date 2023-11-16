import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useState } from 'react';

export default function FormClientes() {

    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        salario: 0,
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
        axios.post("http://localhost:3013/clientes",
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
        <Form.Group controlId="formBasicNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Nome" name="nome" onChange={alteraCampos} autoComplete="given-name" />
        </Form.Group>
  
        <Form.Group controlId="formBasicSobrenome">
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control type="text" placeholder="Sobrenome" name="sobrenome" onChange={alteraCampos} autoComplete="family-name" />
        </Form.Group>
  
        <Form.Group controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="text" placeholder="E-mail" name="email" onChange={alteraCampos} autoComplete="email" />
        </Form.Group>
  
        <Form.Group controlId="formBasicSalario">
          <Form.Label>Salário</Form.Label>
          <Form.Control type="number" placeholder="Salário" name="salario" onChange={alteraCampos} autoComplete="off" />
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
