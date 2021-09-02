import React from 'react';
import { Link } from 'react-router-dom';
import './Home.js'
import './App.css'

const visualizar = () =>{
  return (
    <div className='container2'>
      <h1>Página em craição</h1>
      <nav>
        <ul>
          <li className='voltar'>
            <Link to="/">voltar</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default visualizar;