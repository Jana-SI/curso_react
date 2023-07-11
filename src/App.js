import React from 'react';
import './App.css';
import Aula02 from './components/aula02'
import Aula03 from './components/aula03'
import Aula04 from './components/aula04/aula04'
import Aula05 from './components/aula05/aula05'
import Aula06 from './components/aula06/aula06'
import Aula07 from './components/aula07/aula07'
import Aula08 from './components/aula08/aula08'
import Aula09 from './components/aula09/aula09'
import Aula10 from './components/aula10/aula10'
import Aula11 from './components/aula11/aula11'
import Aula12 from './components/aula12/aula12'
import Aula13 from './components/aula13/aula13'

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th colSpan="3">Curso de React - Matheus Battisti - Hora de Codar
            </th>
          </tr>
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
            <td><Aula08 /></td>
            <td><Aula09 /></td>
            <td><Aula10 /></td>
          </tr>
          <tr>
            <td><Aula11 /></td>
            <td><Aula12 /></td>
            <td><Aula13 /></td>
          </tr>
        </tbody>
      </table>      
    </div>
  );
}

export default App;