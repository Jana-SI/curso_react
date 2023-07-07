import SayMyName from './SayMyName'
import Pessoa from './Pessoa'

function aula05(props){

const nome = "Karen"

    return(
        <div>
            <h1>Aula #05 - Trabalhando com props</h1>
            <SayMyName nome="Janaina"/>
            <SayMyName nome="Carlos"/>
            <SayMyName nome={nome}/>
            <Pessoa nome="Janaina" idade="30" profissao="dev" foto="https://via.placeholder.com/150"/>
        </div>
    )
}

export default aula05