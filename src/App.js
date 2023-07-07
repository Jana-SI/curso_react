import React from 'react';
import './App.css';
import Aula02 from './components/aula02'
import Aula03 from './components/aula03'
import Aula04 from './components/aula04/aula04'
import Aula05 from './components/aula05/aula05'
import Aula06 from './components/aula06/aula06'
import Aula07 from './components/aula07/aula07'

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <th><td>Curso de React - Matheus Battisti - Hora de Codar
          </td></th>
        </thead>
        <tbody>
          <tr>
            <td><Aula02 /></td>
            <td><Aula03 /></td>
            <td><Aula04 /></td>
          </tr>
          <tr>            
            <td><Aula05 /></td>
            <td><Aula06 /></td>
            <td><Aula07 /></td>
          </tr>
          <tr>            
          </tr>
        </tbody>
      </table>      
    </div>
  );
}

export default App;