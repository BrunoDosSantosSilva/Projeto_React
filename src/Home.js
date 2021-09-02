import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


export default class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        jogos: [
          {
            id: 1,
            nome: 'Valorant',
            img: 'https://bit.ly/3wZk9tE'
          },
          {
            id: 2,
            nome: 'GTA V',
            img: 'https://bit.ly/3x1vpFI'
          },
          {
            id: 3,
            nome: 'The Witcher 3: Wild Hunt',
            img: 'https://bit.ly/3zuHAwD'
          },
          {
            id: 4,
            nome: 'FIFA 21',
            img: 'https://bit.ly/3y0vFWP'
          },
          {
            id: 5,
            nome: 'Days Gone',
            img: 'https://bit.ly/3kLSgmu'
          },
          {
            id: 6,
            nome: 'Call of Duty: Warzone',
            img: 'https://bit.ly/3rsQGqF'
          },
        ]
      }
    }
    render() {
      const { jogos } = this.state
  
      return (

          <div className="container">
            <main className="main">
              <h1 className="titulo">Jogos</h1>
              <h3 className="subtitulo">Alguns dos jogos mais divertido de se jogar</h3>
              <div className="bloco-card">
                {jogos.map(jogo => (
                  <div className="card" Key={jogo.id}>
                      <h3 className="card-titulo">{jogo.nome}</h3>
                      <img  src={jogo.img} alt={jogo.nome}></img>
                      <button className="visualizar">
                      <Link to="/visualizar">Visualizar</Link>
                      </button>
                      
                  </div>  
                ))}
              </div>
            </main> 
          </div>
      )
    }
}

