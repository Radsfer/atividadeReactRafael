"use client"
import Image from 'next/image'
import styles from './globals.css'
import { useState } from 'react'
import ListaClientes from './componentes/listaClientes'
import ListaFornecedores from './componentes/listaFornecedores'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

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
  return (
    <main style={{display:"grid",placeItems:"center", height: '100vh' }}>
      <div style={{ width: '50%' }}>
      <Card className="text-center" style={{ backgroundColor: 'lightblue', borderColor: 'blue', color: 'white' }}>
        <Card.Header style={{ backgroundColor: 'blue', color: 'white' }}>
          <Card.Title style={{ fontSize: '80px' }}>Fornecedores</Card.Title>
          </Card.Header>
        <Card.Body>
          <div>
            <ListaFornecedores />
          </div>
        </Card.Body>
        <Card.Footer className="text-muted" style={{ backgroundColor: 'blue', color: 'white' }}></Card.Footer>
      </Card>
      </div>

    </main>
  )

}