"use client"
import Image from 'next/image'
import styles from './globals.css'
import { useState } from 'react'
import ListaClientes from './componentes/listaClientes'
import ListaFornecedores from './componentes/listaFornecedores'
import FormClientes from './componentes/formClientes'
import FormFornecedores from './componentes/formFornecedores'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


// const usuario = {
//   nome: "Fulana de Tal",
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90
//}

// const produtos = [
//   { titulo: "Maçã", id: 1, fruta: true },
//   { titulo: "Couve", id: 2, fruta: false },
//   { titulo: "Mamão", id: 3, fruta: true },
//   { titulo: "Alface", id: 4, fruta: false },
// ]

// const listaProdutos = produtos.map(
//   e =>
//     <li style={{
//       color: e.fruta ? "red" : "blue"
//     }} key={e.id}>
//       {e.titulo}
//     </li>
// )

// function MeuBotao() {
//   return (
//     <button>Meu Botão Como Componente</button>
//   )
// }


// function Perfil() {
//   return (
//     <>
//       <h1>{usuario.nome}</h1>
//       <img
//         className='avatar'
//         src={usuario.imageUrl}
//         alt="Imagem do fulano de tal"
//         width={usuario.imageSize}
//       />


//     </>
//   )
// }




export default function Home() {
  // var logado = false
  // var conteudo
  // if (logado) {
  //   conteudo = <Perfil />
  // } else {
  //   conteudo = <h1>Realize o Login</h1>
  // }
  // return (
  //   <main>
  //     {logado ? <Perfil /> : <h1>Realize o Login</h1>}
  //     <div>
  //       <ListaClientes />
  //     </div>
  //   </main>
  // )
  // )

  const [secaoAtiva, setSecaoAtiva] = useState('Fornecedores');

  const renderizarSecao = () => {
    switch (secaoAtiva) {
      case 'Fornecedores':
        return <ListaFornecedores />;
      case 'Clientes':
        return <ListaClientes />;
      case 'Cadastrar Cliente':
        return <FormClientes />;
      case 'Cadastrar Fornecedor':
        return <FormFornecedores />;
      default:
        return null;
    }
  };
  return (
    <main style={{ display: 'grid', height: '100vh', justifyContent: 'center' }}>
      {/* Conteúdo principal */}
      <div style={{ width: '100%', margin: '20px' }}>
        <Card className="text-center gap-2" style={{ backgroundColor: 'lightblue', borderColor: 'blue', color: 'white' }}>
          <Card.Header style={{ backgroundColor: 'blue', color: 'white' }}>
            <Card.Title style={{ fontSize: '80px' }}>{secaoAtiva}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Button variant="primary" onClick={() => setSecaoAtiva('Fornecedores')}>Listar Fornecedores</Button>{' '}
            <Button variant="primary" onClick={() => setSecaoAtiva('Clientes')}>Listar Clientes</Button>{' '}
            <Button variant="primary" onClick={() => setSecaoAtiva('Cadastrar Cliente')}>Cadastrar Cliente</Button>{' '}
            <Button variant="primary" onClick={() => setSecaoAtiva('Cadastrar Fornecedor')}>Cadastrar Fornecedor</Button>{' '}

            {renderizarSecao()}
          </Card.Body>
          <Card.Footer className="text-muted" style={{ backgroundColor: 'blue', color: 'white' }}></Card.Footer>
        </Card>
      </div>
    </main>
  );
}