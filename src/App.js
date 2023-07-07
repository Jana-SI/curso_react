import React from 'react';
import './App.css';
import Aula02 from './components/aula02'
import Aula03 from './components/aula03'
import Aula04 from './components/aula04/aula04'
import Aula05 from './components/aula05/aula05'
import Aula06 from './components/aula06/aula06'

function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <td><Aula02 /></td>
            <td><Aula03 /></td>
          </tr>
          <tr>
            <td><Aula04 /></td>
            <td><Aula05 /></td>
          </tr>
          <tr>
            <td><Aula06 /></td>
          </tr>
        </tbody>
      </table>      
    </div>
  );
}

export default App;